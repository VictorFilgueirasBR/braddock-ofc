import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaAsterisk, FaPaperPlane, FaUserShield, FaHandshake, FaMoneyBill, FaHeadset } from "react-icons/fa";
import "./ChatBot.css";

const predefinedQuestions = [
  { icon: <FaUserShield color="#6c63ff" size={20} />, title: "Serviços", desc: "Consultoria estratégica em segurança e compliance.", text: "Quais serviços sua consultoria oferece?" },
  { icon: <FaHandshake color="#ff9800" size={20} />, title: "Contratar", desc: "Processo rápido e personalizado para sua empresa.", text: "Como funciona o processo de contratação?" },
  { icon: <FaMoneyBill color="#4caf50" size={20} />, title: "Valores", desc: "Planos acessíveis a partir de R$ 2.500.", text: "Qual é o valor médio da consultoria?" },
  { icon: <FaHeadset color="#e91e63" size={20} />, title: "Suporte", desc: "Acompanhamento contínuo e suporte 24/7.", text: "Vocês oferecem suporte contínuo?" },
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Olá 👋 Sou seu assistente virtual. Como posso ajudar?" },
  ]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [particles, setParticles] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const cardsRef = useRef([]);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const userScrolled = useRef(false);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }).map(() => ({
      id: Math.random(),
      size: Math.random() * 4 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = messagesContainerRef.current;
    const handleScroll = () => {
      if (!container) return;
      const nearBottom =
        container.scrollHeight - container.scrollTop <= container.clientHeight + 50;
      userScrolled.current = !nearBottom;
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!userScrolled.current && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [messages, loading]);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setLoading(true);
    setInputValue("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/chat`,
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
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Desculpe, ocorreu um erro. Tente novamente." },
        ]);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="chatbot-page">
      {particles.map((p) => (
        <div
          key={p.id}
          className="dust-particle"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      <header className="chatbot-header">
        <div className="avatar">
          <FaAsterisk size={28} />
        </div>
        <h1>Assistente Virtual</h1>
      </header>

      <div className="chatbot-main">
        <div className="chatbot-left">
          <div className="chatbot-messages" ref={messagesContainerRef}>
            {messages.map((msg, index) =>
              msg.isButton ? (
                <button
                  key={index}
                  className="whatsapp-btn"
                  onClick={() => window.open(msg.link, "_blank")}
                >
                  {msg.text}
                </button>
              ) : (
                <div
                  key={index}
                  className={`message ${msg.sender}`}
                  {...(msg.sender === "bot"
                    ? { dangerouslySetInnerHTML: { __html: msg.text } }
                    : { children: msg.text })}
                />
              )
            )}
            {loading && <div className="typing">Digitando...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              placeholder="Conerse com Bradock IA..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(inputValue)}
            />
            <button className="send-btn" onClick={() => sendMessage(inputValue)}>
              <FaPaperPlane />
            </button>
          </div>
        </div>

        <div className="chatbot-right">
          {predefinedQuestions.map((q, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`explore-card ${visibleCards.includes(index) ? "visible" : ""}`}
              onAnimationEnd={(e) => e.currentTarget.classList.add("animated")}
              onClick={() => sendMessage(q.text)}
            >
              <div className="icon">{q.icon}</div>
              <div className="text">
                <span className="title">{q.title}</span>
                <span className="desc">{q.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
