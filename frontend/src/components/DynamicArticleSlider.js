import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./DynamicArticleSlider.css";

const articles = [
  {
    id: "acessoramento-de-alto-nível",
    title: "Rompendo a Névoa da Guerra",
    resumo: "Como a Inteligência Estratégica Garante a Segurança em Tempos de Incerteza.",
    date: "30/07/2025",
    image: "/images/capa-mini-um.png",
    content: `
O estrategista militar prussiano Carl Von Clausewitz descreveu o ambiente de conflito como envolto em uma "névoa da guerra", ...
`
  },
  {
    id: "zero-trust",
    title: "Zero Trust — O Novo Paradigma da Segurança Corporativa",
    resumo: "Zero Trust redefine o conceito de segurança corporativa...",
    date: "28/07/2025",
    image: "/images/capa-mini-dois.png",
    content: `O modelo de Zero Trust — ou "Nunca confie, sempre verifique" — ...`
  },
  {
    id: "autoprotecao-empresarial",
    title: "Governança, Autoproteção, Privacidade e Compliance",
    resumo: "Da Autoproteção à Segurança Corporativa — O Poder da Inteligência...",
    date: "25/07/2025",
    image: "/images/capa-mini-tres.png",
    content: `A segurança, seja ela pessoal ou corporativa, é uma preocupação constante ...`
  },
  {
    id: "compliance-investigacoes",
    title: "Compliance e Investigações — Escudo Contra Riscos",
    resumo: "Compliance não é apenas uma formalidade. Em um cenário corporativo cada vez mais complexo.",
    date: "22/07/2025",
    image: "/images/capa-compliance.png",
    content: `Em um cenário corporativo cada vez mais complexo, o Compliance não é apenas uma formalidade ...`
  },
  {
    id: "seguranca-corporativa",
    title: "Segurança Corporativa Essencial",
    resumo: "Protegendo seus ativos essenciais de forma inteligente.",
    date: "20/07/2025",
    image: "/images/capa-um.png",
    content: `No dinâmico e competitivo cenário atual, a segurança corporativa transcendeu ...`
  },
  {
    id: "protecao-empresarial",
    title: "Proteção Empresarial Total — Antecipando Ataques",
    resumo: "A segurança corporativa é muito mais que um gasto. No cenário atual é um pilar estratégico essencial.",
    date: "18/07/2025",
    image: "/images/capa-dois.png",
    content: `No cenário atual, a segurança corporativa é muito mais que um gasto ...`
  },
  {
    id: "capacitacao-treinamentos",
    title: "Capacitação e Treinamentos em Inteligência e Áreas de Segurança",
    resumo: "Transforme sua segurança com a Bradock Intelligence Academy...",
    date: "08/08/2025",
    image: "/images/capa-quatro.png",
    content: `A vasta experiência na formação de Recursos Humanos é o alicerce da Bradock Intelligence Academy ...`
  }
];

export default function DynamicArticleSlider() {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(
    articles.findIndex((article) => article.id === id) !== -1
      ? articles.findIndex((article) => article.id === id)
      : 0
  );

  // Sempre que o id mudar, atualiza índice e rola para o topo
  useEffect(() => {
    const index = articles.findIndex((article) => article.id === id);
    setCurrentIndex(index !== -1 ? index : 0);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const { title, resumo, date, image, content } = articles[currentIndex];

  return (
    <section className="das-container fade-in">
      <div className="das-header">
        <img src={image} alt={title} className="das-image" />
        <div className="das-image-overlay"></div>
        <h2 className="das-title">{title}</h2>
        <span className="das-date">{date}</span>
      </div>

      <div className="das-body">
        <p className="das-resumo">{resumo}</p>
        <div className="das-divider active"></div>
        <div className="das-content">{content}</div>
      </div>
    </section>
  );
}
