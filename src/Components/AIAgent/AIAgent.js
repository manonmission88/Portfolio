import React, { useState, useEffect, useRef } from 'react';
import { Icon } from "@iconify/react";
import geminiService from '../../services/geminiService';
import './AIAgent.css';

const AIAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    // const [isTyping, setIsTyping] = useState(false); // Removed unused variable
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            text: "Hello! I'm your AI assistant. Ask me about the portfolio, projects, or anything else!",
            timestamp: new Date()
        }
    ]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [apiStatus, setApiStatus] = useState('checking');
    const inputRef = useRef(null);
    const messagesEndRef = useRef(null);

    const quickSuggestions = [
        "Tell me about the projects",
        "What technologies are used?",
        "How can I contact you?",
        "Tell me about your experience",
        "What skills do you have?",
        "Show me your resume"
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [suggestions]);

    useEffect(() => {
        // Check API status on component mount
        const checkApiStatus = async () => {
            try {
                const testResponse = await geminiService.generateResponse("test", {});
                if (testResponse.includes("I'm having trouble connecting")) {
                    setApiStatus('error');
                } else {
                    setApiStatus('connected');
                }
            } catch (error) {
                setApiStatus('error');
            }
        };
        checkApiStatus();
    }, []);

    useEffect(() => {
        if (apiStatus === 'error') {
            const setupMessage = {
                id: Date.now(),
                type: 'ai',
                text: "⚠️ Gemini API not configured. To enable AI responses, please set up your API key. Check the console for setup instructions!",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, setupMessage]);
        }
    }, [apiStatus]);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setInput(value);
        
        if (value.length > 2) {
            try {
                const aiSuggestions = await geminiService.generateSuggestions(value);
                setSuggestions(aiSuggestions.map(suggestion => ({
                    text: suggestion,
                    isAI: true
                })));
            } catch (error) {
                // Fallback to quick suggestions
                const filtered = quickSuggestions.filter(s => 
                    s.toLowerCase().includes(value.toLowerCase())
                ).slice(0, 3);
                setSuggestions(filtered.map(suggestion => ({
                    text: suggestion,
                    isAI: false
                })));
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = async (suggestion) => {
        setInput(suggestion.text);
        setSuggestions([]);
        await sendMessage(suggestion.text);
    };

    const sendMessage = async (messageText) => {
        if (!messageText.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            type: 'user',
            text: messageText,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setSuggestions([]);
        setIsGenerating(true);

        try {
            // Get AI response from Gemini
            const aiResponse = await geminiService.generateResponse(messageText, {
                currentPage: window.location.pathname,
                timeOfDay: new Date().getHours()
            });

            // Add AI response
            const aiMessage = {
                id: Date.now() + 1,
                type: 'ai',
                text: aiResponse,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error getting AI response:', error);
            const errorMessage = {
                id: Date.now() + 1,
                type: 'ai',
                text: "I'm having trouble connecting right now. Please try again in a moment!",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (suggestions.length > 0) {
                handleSuggestionClick(suggestions[0]);
            } else if (input.trim()) {
                sendMessage(input);
            }
        }
    };

    const toggleAgent = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    };

    return (
        <>
            {/* AI Agent Toggle Button */}
            <button 
                className={`ai-agent-toggle ${isOpen ? 'active' : ''}`}
                onClick={toggleAgent}
                aria-label="Open AI Assistant"
            >
                <Icon icon="mdi:robot" className="ai-icon" />
                {isOpen && <span className="pulse-dot"></span>}
            </button>

            {/* AI Agent Panel */}
            <div className={`ai-agent-panel ${isOpen ? 'open' : ''}`}>
                <div className="ai-agent-header">
                    <div className="ai-agent-title">
                        <Icon icon="mdi:robot" className="ai-header-icon" />
                        <span>AI Assistant</span>
                        <div className={`api-status ${apiStatus}`}>
                            {apiStatus === 'connected' && <Icon icon="mdi:check-circle" />}
                            {apiStatus === 'error' && <Icon icon="mdi:alert-circle" />}
                            {apiStatus === 'checking' && <Icon icon="mdi:loading" className="spinning" />}
                        </div>
                    </div>
                    <button 
                        className="ai-agent-close"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close AI Assistant"
                    >
                        <Icon icon="mdi:close" />
                    </button>
                </div>

                <div className="ai-agent-content">
                    <div className="ai-agent-messages">
                        {messages.map((message) => (
                            <div key={message.id} className={`message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}>
                                {message.type === 'ai' && <Icon icon="mdi:robot" className="ai-avatar" />}
                                {message.type === 'user' && <Icon icon="mdi:account" className="user-avatar" />}
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <span className="message-time">
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        
                        {isGenerating && (
                            <div className="typing-indicator">
                                <Icon icon="mdi:robot" className="ai-avatar" />
                                <div className="typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="ai-agent-input-container">
                        <div className="suggestions-dropdown">
                            {suggestions.length > 0 && (
                                <div className="suggestions-list">
                                    {suggestions.slice(0, 3).map((suggestion, index) => (
                                        <button
                                            key={index}
                                            className="suggestion-item"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            <Icon icon={suggestion.isAI ? "mdi:sparkles" : "mdi:lightbulb-outline"} />
                                            <span>{suggestion.text}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        <div className="input-wrapper">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything..."
                                className="ai-agent-input"
                                disabled={isGenerating}
                            />
                            <button 
                                className="ai-agent-send"
                                onClick={() => sendMessage(input)}
                                disabled={!input.trim() || isGenerating}
                            >
                                <Icon icon="mdi:send" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIAgent;
