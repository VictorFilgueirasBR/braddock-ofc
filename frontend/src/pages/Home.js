import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import ContactSection from "../components/ContactSection";
import MiniHeroSlider from "../components/MiniHeroSlider";
import ArticleSlider from "../components/ArticleSlider";
import ChatBot from "../components/ChatBot";
import Presentation from "../components/Presentation";
import "./Home.css";

export default function Home() {

  // 🔹 Garante que a página sempre começa no topo ao ser carregada
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="home-page">
      <Header />
      <HeroSlider />
      <Presentation />
      <MiniHeroSlider />
      <ContactSection />

      <div className="space-between">

      </div>

      <ChatBot />
      <ArticleSlider />
      <Footer />
    </div>
  );
}
