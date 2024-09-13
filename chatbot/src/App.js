import React, { useState } from 'react';
import './App.css';
import Chatbot from './components/Chatbot';
import reactLogo from './components/common/chatbot.png'; // React logo imported as an SVG

function App() {
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className="App">
      {/* Floating React Icon for Chatbot */}
      <img 
        src={reactLogo} 
        alt="React Logo" 
        className="chatbot-icon" 
        onClick={toggleChatbot} 
      />

      {/* Show Chatbot when visible */}
      {isChatbotVisible && <Chatbot toggleChatbot={toggleChatbot} />}
    </div>
  );
}

export default App;
