import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      
      <div className="contact-icons">
        <a href="https://wa.me/5521965486862" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://www.instagram.com/bradockintelligence.academy/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="mailto:contato@bradockintelligence.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </section>
  );
}
