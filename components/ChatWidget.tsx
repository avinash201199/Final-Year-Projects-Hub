"use client";

import React, { useState, useRef, useEffect } from 'react';

const ChatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>);
const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatBoxRef = useRef<HTMLDivElement>(null);
    const API_BASE_URL = 'http://localhost:5001';

    useEffect(() => {
        setMessages([
            { sender: 'bot', text: "Hi! I'm the AI assistant. How can I help you today?" }
        ]);
    }, []);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const newUserMessage = { sender: 'user' as 'user', text: inputValue };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: inputValue })
            });
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            setMessages(prev => [...prev, { sender: 'bot', text: data.answer }]);
        } catch (err) {
            setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I\'m having trouble connecting. Please try again later.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 z-50"
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>
            {isOpen && (
                <div className="fixed bottom-20 right-5 w-full max-w-sm h-full max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50">
                    <div className="bg-blue-600 text-white p-4 rounded-t-lg"><h3 className="text-lg font-semibold">Projects Hub Assistant</h3></div>
                    <div ref={chatBoxRef} className="flex-grow p-4 overflow-y-auto bg-gray-50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                                <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start mb-3"><div className="px-4 py-2 rounded-2xl bg-gray-200"><div className="flex items-center space-x-2"><div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div><div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.2s]"></div><div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.4s]"></div></div></div></div>
                        )}
                    </div>
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <div className="flex items-center">
                            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()} placeholder="Ask about a project..." className="flex-grow p-2 border border-gray-300 rounded-l-md outline-none" disabled={isLoading}/>
                            <button onClick={handleSendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 disabled:bg-blue-300" disabled={isLoading}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}