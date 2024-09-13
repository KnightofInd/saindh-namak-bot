import React, { useState } from 'react';
import './Chatbot.css';

// Custom options with localhost links to another React app
const initialOptions = [
  { label: 'Map Data', link: 'http://localhost:3001/map-data' },
  { label: 'Sentiment Data', link: 'http://localhost:3001/sentiment-data' },
  { label: 'Engagement Data', link: 'http://localhost:3001/engagement-data' },
  { label: 'Severity Data', link: 'http://localhost:3001/severity-data' },
  { label: 'Dashboard', link: 'http://localhost:3001/dashboard' },
];

function Chatbot({ toggleChatbot }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentOptions, setCurrentOptions] = useState(initialOptions);

  // Function to handle option click and share the respective link
  const handleOptionClick = (option) => {
    setChatHistory((prev) => [...prev, { type: 'user', text: option.label }]);
    setChatHistory((prev) => [...prev, { type: 'bot', text: `Here is the link for ${option.label}: ${option.link}` }]);
    
    // Optionally, you could use window.open to open the link in a new tab
    window.open(option.link, '_blank'); // Opens the link in a new browser tab
  };

  return (
    <div className="chatbot-side-panel">
      <div className="chatbot">
        {/* Chatbot Header with Close Button */}
        <div className="chat-header">
          TechBot
          <button className="close-chatbot-button" onClick={toggleChatbot}>
            X
          </button>
        </div>
        <div className="chat-history">
          {chatHistory.length === 0 && (
            <div className="chatbot-welcome-message">
              Welcome to the ChatBot, How can I help you?
            </div>
          )}
          {chatHistory.map((message, index) => (
            <div key={index} className={`chat-message ${message.type}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="options">
          <div className="options-grid">
            {currentOptions.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
