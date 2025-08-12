import { useState, useEffect } from "react";
import "./MiniHeroSlider.css";
import { Link } from "react-router-dom";

const slidesData = [
  {
    image: "/images/capa-mini-um.png",
    title: "Assessoramento de alto nível",
    description:
      "— Assessoramento de alto nível refere-se à prestação de serviços de consultoria e suporte especializado a cargos de liderança, com foco em estratégias, tomada de decisão e gestão de alto impacto. Esses serviços são tipicamente oferecidos a executivos, gestores de alto escalão e outras figuras de autoridade, visando otimizar o desempenho e alcançar resultados significativos",
    link: "/articles/acessoramento-de-alto-nível",
  },
  {
    image: "/images/capa-mini-dois.png",
    title: "Zero - Trust ",
    description:
      "— O modelo de Zero Trust — ou (Nunca confie, sempre verifique) — se consolidou em 2025 como padrão essencial para proteger organizações contra ameaças internas e externas...",
    link: "/articles/zero-trust",
  },
  {
    image: "/images/capa-mini-tres.png",
    title: "Proteção e Segurança Corporativa",
    description:
      "— Governança, Autoproteção, Privacidade e Compliance. Da Autoproteção à Segurança Corporativa — O Poder da Inteligência...",
    link: "/articles/autoprotecao-empresarial",
  },
];

export default function MiniHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 8000);
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
    <section className="mini-hero-slider">
      {/* Overlay de gradiente */}
      <div className="top-overlay"></div>

      <Link
        to={link}
        className="slide-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="overlay"></div>

        <div className="slide-content">
          <h1 className="slide-title">{title}</h1>
          <h2 className="slide-description">{description}</h2>
          <div
            className={`slide-divider ${currentIndex !== null ? "active" : ""}`}
          ></div>
        </div>
      </Link>

      <div className="slider-controls">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
}
