import { GoogleGenerativeAI } from '@google/generative-ai';

class GeminiService {
    constructor() {
        this.apiKey = process.env.REACT_APP_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE';
        this.genAI = new GoogleGenerativeAI(this.apiKey);
        this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    }

    async generateResponse(userMessage, context = {}) {
        try {
            console.log('Gemini API Key:', this.apiKey ? 'Present' : 'Missing');
            console.log('User message:', userMessage);
            
            if (!this.apiKey || this.apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
                console.warn('Gemini API key not configured, using fallback response');
                return this.getFallbackResponse(userMessage);
            }

            const portfolioContext = `
                You are an AI assistant for a software developer's portfolio website. 
                The developer's name is Manish and this is their personal portfolio.
                
                Portfolio Information:
                - Developer: Manish (Software Engineer)
                - Skills: JavaScript, React, Node.js, Python, Java, C++
                - Experience: Full-stack development, various technologies
                - Projects: Multiple projects in React, Node.js, and other technologies
                - Education: Computer Science background
                - Location: Available for opportunities
                
                Context: ${JSON.stringify(context)}
                
                Please provide a helpful, friendly, and professional response about the portfolio, 
                projects, experience, or general questions. Keep responses concise (1-2 sentences) 
                and encouraging. If asked about specific technical details, provide helpful information.
                
                User message: ${userMessage}
            `;

            console.log('Sending request to Gemini API...');
            const result = await this.model.generateContent(portfolioContext);
            const response = await result.response;
            const text = response.text();
            console.log('Gemini API Response:', text);
            return text;
        } catch (error) {
            console.error('Gemini API Error:', error);
            console.log('Using fallback response');
            return this.getFallbackResponse(userMessage);
        }
    }

    getFallbackResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! 👋 I'm here to help you explore this portfolio. What would you like to know about Manish's work?";
        }
        
        if (lowerMessage.includes('help')) {
            return "I can help you learn about the projects, experience, skills, or contact information. Just ask me anything!";
        }
        
        if (lowerMessage.includes('project')) {
            return "Check out the Projects section to see some amazing work! There are React apps, full-stack projects, and more.";
        }
        
        if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
            return "Manish has experience in full-stack development with various technologies. Check the Experience section for details!";
        }
        
        if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
            return "Skills include JavaScript, React, Node.js, Python, Java, and C++. Pretty impressive tech stack!";
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
            return "You can find contact information in the Contact section. Feel free to reach out!";
        }
        
        if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
            return "You can download the resume from the Resume section. It has all the professional details!";
        }
        
        return "That's interesting! I'm here to help you explore this portfolio. What would you like to know?";
    }

    async generateSuggestions(userInput) {
        try {
            if (!this.apiKey || this.apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
                console.warn('Gemini API key not configured for suggestions, using fallback');
                return [
                    "Tell me about the projects",
                    "What technologies are used?",
                    "How can I contact you?"
                ];
            }

            const prompt = `
                Based on this user input: "${userInput}"
                Generate 3 helpful suggestions for what they might want to ask about this portfolio.
                Return only the suggestions, one per line, without numbering or bullets.
                Keep them short and relevant to a software developer's portfolio.
            `;

            console.log('Generating suggestions with Gemini...');
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const suggestions = response.text().split('\n').filter(s => s.trim()).slice(0, 3);
            console.log('Generated suggestions:', suggestions);
            return suggestions;
        } catch (error) {
            console.error('Gemini suggestions error:', error);
            return [
                "Tell me about the projects",
                "What technologies are used?",
                "How can I contact you?"
            ];
        }
    }
}

const geminiService = new GeminiService();
export default geminiService;
