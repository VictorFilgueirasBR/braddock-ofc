import { useState, useEffect } from "react";
import "./ArticlesHeader.css";
import { FaShareAlt } from "react-icons/fa";

export default function ArticlesHeader() {
  const [showPopup, setShowPopup] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [slideIn, setSlideIn] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const message = "Compartilhe nas redes sociais!";

  useEffect(() => {
    // Inicia a animação após 1s
    const timer = setTimeout(() => {
      setSlideIn(true);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(message.slice(0, index));
        index++;
        if (index > message.length) clearInterval(interval);
      }, 40);

      // Oculta o balão após 5s
      const hideTimer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    });
  };

  return (
    <div className="articles-header-container">
      <header className="articles-header">
        <div className="image-container">
          <img src="/images/articles-header-photo.jpeg" alt="Articles Header" />
        </div>

        {showMessage && (
          <div className={`message-bubble ${slideIn ? "slide-in" : ""}`}>
            <span className="share-text">{displayedText}</span>
          </div>
        )}

        <button className="share-button" onClick={handleShareClick}>
          <FaShareAlt size={22} />
        </button>

        {showPopup && (
          <div className="popup-message">Link copiado com sucesso!</div>
        )}
      </header>
    </div>
  );
}
