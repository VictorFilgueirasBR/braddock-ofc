import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Substitua pelo número correto

  return (
    <div className="whatsapp-container">
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
      <span className="tooltip">Fale Conosco</span>
    </div>
  );
}
