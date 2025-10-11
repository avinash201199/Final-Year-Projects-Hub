import os
import shutil
from langchain_huggingface import HuggingFaceEmbeddings, ChatHuggingFace, HuggingFaceEndpoint
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

WEBSITE_URL = "https://final-year-projects-hub.vercel.app/"
FAISS_INDEX_PATH = "faiss_index"

retrieval_chain = None

def initialize_chatbot():
    """Initializes the chatbot using free Hugging Face models."""
    global retrieval_chain

    api_key = os.getenv("HUGGINGFACEHUB_API_TOKEN")
    if not api_key:
        print("FATAL ERROR: HUGGINGFACEHUB_API_TOKEN environment variable not set.")
        return

    try:
        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

        if os.path.exists(FAISS_INDEX_PATH):
            print(f"Found local knowledge base. Loading from '{FAISS_INDEX_PATH}'...")
            vector_store = FAISS.load_local(FAISS_INDEX_PATH, embeddings, allow_dangerous_deserialization=True)
        else:
            print(f"No local knowledge base found. Creating a new one from {WEBSITE_URL}...")
            loader = WebBaseLoader(WEBSITE_URL)
            documents = loader.load()
            text_splitter = RecursiveCharacterTextSplitter()
            split_documents = text_splitter.split_documents(documents)
            vector_store = FAISS.from_documents(split_documents, embeddings)
            vector_store.save_local(FAISS_INDEX_PATH)
            print(f"New knowledge base created and saved to '{FAISS_INDEX_PATH}'.")

        endpoint = HuggingFaceEndpoint(
            repo_id="mistralai/Mistral-7B-Instruct-v0.2",
            huggingfacehub_api_token=api_key,
            max_new_tokens=512,
            temperature=0.3
        )

        llm = ChatHuggingFace(llm=endpoint)

        prompt_text = """You are a helpful AI Assistant for the 'Final Year Projects Hub'.
Use the following context to answer the user's question concisely.
If the information is not in the context, politely say you don't have information on that topic.

Context:
{context}

Question: {input}

Answer:"""
       
        prompt = ChatPromptTemplate.from_template(prompt_text)

        document_chain = create_stuff_documents_chain(llm, prompt)
        retriever = vector_store.as_retriever()
        retrieval_chain = create_retrieval_chain(retriever, document_chain)

        print("Assistant is fully initialized with Hugging Face models and ready.")

    except Exception as e:
        print(f"FATAL ERROR during initialization: {e}")

def get_chatbot_response(question: str) -> str:
    """Gets a response from the initialized chatbot."""
    if not retrieval_chain:
        return "Sorry, the AI assistant is not available at the moment."
    try:
        response = retrieval_chain.invoke({"input": question})
        return response.get("answer", "I'm not sure how to answer that.")
    except Exception as e:
        print(f"Error during chat invocation: {e}")
        return "An error occurred while processing your question."

