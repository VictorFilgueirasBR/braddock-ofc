import { useEffect } from "react";
import "./ArticlesPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MiniHeroSlider from "../components/MiniHeroSlider";
import ContactSection from "../components/ContactSection";
import DynamicArticleSlider from "../components/DynamicArticleSlider";
import ArticleSlider from "../components/ArticleSlider";
import ArticlesHeader from "../components/ArticlesHeader";

export default function ArticlesPage() {
  // Garante que ao carregar a página (ou trocar de artigo) ela comece do topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Caso queira garantir que sempre que o usuário clicar num link de artigo a rolagem vá para o topo
  useEffect(() => {
    const handleArticleClick = (event) => {
      const link = event.target.closest("a[href^='/artigos/']");
      if (link) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    document.addEventListener("click", handleArticleClick);
    return () => document.removeEventListener("click", handleArticleClick);
  }, []);

  return (
    <div className="articles-page">
      <Header />
      <DynamicArticleSlider />
      <ArticlesHeader />
      <ContactSection />
      <MiniHeroSlider />
      <ArticleSlider />
      <div className="space-between"></div>
      <Footer />
    </div>
  );
}
