import { useState, useEffect } from "react";
import "./HeroSlider.css";
import { Link } from "react-router-dom";

const slidesData = [
  {
    image: "/images/capa-um.png",
    title: "Segurança Corporativa",
    description: "Protegendo seus ativos essenciais de forma inteligente. Descubra como proteger os ativos essenciais da sua empresa com estratégias inteligentes de segurança corporativa. Abordando soluções modernas que integram tecnologia, prevenção e resposta a riscos, garantindo resiliência, conformidade e continuidade dos negócios em um cenário de ameaças cada vez mais sofisticadas.",
    link: "/articles/seguranca-corporativa",
  },
  {
    image: "/images/capa-dois.png",
    title: "Proteção Empresarial",
    description:
      "A Inteligência é uma arte milenar, um pilar que atravessou séculos e se mantém fundamental. Aqueles que baseiam suas ações nos conhecimentos que ela produz prosperam.",
    link: "/articles/protecao-empresarial",
  },
  {
    image: "/images/capa-tres.png",
    title: "Compliance e Investigações",
    description:
      "Em um cenário corporativo cada vez mais complexo, o Compliance não é apenas uma formalidade, mas um escudo essencial para a saúde e a sustentabilidade de qualquer organização.",
    link: "/articles/compliance-investigacoes",
  },
  {
    image: "/images/capa-quatro.png",
    title: "Capacitação e Treinamentos",
    description:
      "A Bradock Intelligence Academy oferece capacitação e treinamentos de ponta em Inteligência, Segurança Corporativa, Segurança Particular, Gerenciamento de Riscos e Gerenciamento de Crises. Desenvolva suas habilidades de proteção e estratégia conosco.",
    link: "/articles/capacitacao-treinamentos",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 8000); // troca a cada 8s
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const { image, title, description, link } = slidesData[currentIndex];

  return (
    <section className="hero-slider">
      <Link
        to={link}
        className="slide-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="overlay"></div>

        <div className="slide-content">
          <div className="slide-number">
            {String(currentIndex + 1).padStart(2, "0")}
          </div>
          <div
            className={`slide-divider ${currentIndex !== null ? "active" : ""}`}
          ></div>
          <h1 className="slide-title">{title}</h1>
          <h2 className="slide-description">{description}</h2>
          <span className="read-more">
            <span className="plus-icon">+</span> Saiba mais...
          </span>
        </div>
      </Link>

      {/* Controles */}
      <div className="slider-controls">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
}
