import { useState, useEffect } from "react";
import "./ArticleSlider.css";

const slides = [
  {
    title: "Inteligência Artificial na Cibersegurança",
    resumo:
      "A inteligência artificial (IA), especialmente a generativa (GenAI), está transformando tanto os atacantes quanto os defensores corporativos. Ela possibilita ataques automatizados e altamente personalizados...",
    date: "31/07/2025 | 357/25",
    link: "#artigo1",
  },
  {
    title: "Zero Trust, O Novo Paradigma Corporativo",
    resumo:
      "O modelo de Zero Trust — ou Nunca confie, sempre verifique — se consolidou em 2025 como padrão essencial para proteger organizações contra ameaças internas e externas...",
    date: "25/07/2025 | 322/25",
    link: "#artigo2",
  },
  {
    title: "Gestão Integrada de Riscos",
    resumo:
      "A segurança empresarial está cada vez mais alinhada à governança corporativa, conformidade regulatória e proteção de dados sensíveis, com foco estratégico para manter confiança e evitar penalidades...",
    date: "20/07/2025 | 289/25",
    link: "#artigo3",
  },
];

export default function ArticleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // autoplay correto

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, resumo, date, link } = slides[currentIndex];

  return (
    <section className="article-slider">
      <span className="article-label">ALL NEWS</span>
      <h2 className="article-title">{title}</h2>
      <p className="article-resumo">{resumo}</p>
      <span className="article-date">{date}</span>


      <div className="article-controls">
        <button onClick={prevSlide}>←</button>
        <text className="article-next">NEXT</text>
        <button onClick={nextSlide}>→</button>
      </div>

    </section>
  );
}
