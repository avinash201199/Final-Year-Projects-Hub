from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from bot_logic import initialize_chatbot, get_chatbot_response

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

with app.app_context():
    initialize_chatbot()

@app.route('/api/chat', methods=['POST'])
def api_chat():
    """Handles chat requests from the frontend."""
    question = request.json.get('question')
    if not question:
        return jsonify({'error': 'Question is required.'}), 400
    
    answer = get_chatbot_response(question)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    print("API server is running.")
    app.run(host='0.0.0.0', port=5001)