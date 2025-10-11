AI Chatbot Assistant
This directory contains the Python Flask backend for the AI-powered chatbot assistant for the Final Year Projects Hub website.

The chatbot uses LangChain and free, open-source models from Hugging Face to answer user questions based on the website's content.

Features
Context-Aware: The bot learns the content of the website to provide relevant answers.

Cost-Free: Utilizes the free Hugging Face Inference API and local embedding models, incurring no running costs.

Efficient: Caches the website's knowledge locally (faiss_index) to ensure fast startup times and minimal API usage.

Modular: The backend is fully self-contained in this directory.

Setup & Running
Navigate to this directory:

cd ai-assistant-backend

Create and activate a Python virtual environment:

# For Windows
python -m venv venv
venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Create an environment file:
Create a file named .env in this directory.

Add Your Hugging Face Token:
Get a free "read" access token from huggingface.co/settings/tokens and add it to the .env file:

HUGGINGFACEHUB_API_TOKEN="hf_YourTokenHere"

Run the server:

python main.py

The server will start on http://127.0.0.1:5001. The first time it runs, it will download the necessary models and create the faiss_index knowledge base.