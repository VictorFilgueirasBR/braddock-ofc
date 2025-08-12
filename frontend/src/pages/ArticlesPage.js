import "./ArticlesPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MiniHeroSlider from "../components/MiniHeroSlider";
import ContactSection from "../components/ContactSection";
import DynamicArticleSlider from "../components/DynamicArticleSlider";
import ArticleSlider from "../components/ArticleSlider";
import ArticlesHeader from "../components/ArticlesHeader";

export default function ArticlesPage() {
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
