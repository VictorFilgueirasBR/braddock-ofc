import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "../styles/Chatbot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Olá 👋 Sou seu assistente virtual. Como posso ajudar?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    setSessionId(uuidv4());
  }, []);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setLoading(true);
    setInputValue("");

    try {
      // Correção: Usando a URL fixa do backend para evitar o erro de localhost
      const response = await axios.post(
        "http://184.72.200.29:5000/api/chat", // URL corrigida
        { question: message, sessionId }
      );

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: response.data.answer },
          ...(response.data.showCTAButton
            ? [{
                sender: "bot",
                isButton: true,
                text: "WhatsApp",
                link: "https://wa.me/5521965486862"
              }]
            : [])
        ]);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Desculpe, ocorreu um erro. Tente novamente." },
        ]);
        setLoading(false);
      }, 2000);
    }
  };

  const handleSend = () => {
    sendMessage(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="messages-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.isButton ? (
              <a href={msg.link} target="_blank" rel="noopener noreferrer" className="cta-button">
                {msg.text}
              </a>
            ) : (
              <p>{msg.text}</p>
            )}
          </div>
        ))}
        {loading && <div className="message bot loading-dots"><div></div><div></div><div></div></div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Converse com Braddock IA..."
        />
        <button onClick={handleSend} disabled={loading}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
