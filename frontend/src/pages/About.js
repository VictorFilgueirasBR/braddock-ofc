import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import corporateOffice from "../assets/images/corporate-office.png";
import founderImage from "../assets/images/founder.jpeg";
import ContactSection from "../components/ContactSection";
import MiniHeroSlider from "../components/MiniHeroSlider";
import "./About.css";

export default function About() {
  const sectionsRef = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  // Observa seções + elementos do hero
  const elements = [...sectionsRef.current, ...document.querySelectorAll(".fade-element")];

  elements.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);


  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="about-hero fade-section" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="overlay"></div>
        <img
            src={corporateOffice}
            alt="Escritório corporativo"
            className="about-hero-image"
        />
        <div className="hero-content">
        <h1 className="fade-element">Bradock Intelligence Academy</h1>
        <p className="fade-element">
            Somos especialistas em inteligência corporativa, consultoria estratégica
            e segurança empresarial, oferecendo soluções inovadoras para um futuro
            mais seguro.
        </p>
        <button className="hero-cta fade-element">Saiba Mais</button>
        </div>
      </section>

      {/* About Text */}
      <section className="about-text fade-section" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="container">
          <h2>Quem Somos</h2>
          <p>
            A Bradock Intelligence Academy foi concebida a partir da visão e experiência de seu fundador, Adriano Filgueiras, Oficial Superior e veterano do Corpo de Fuzileiros Navais com 34 anos de serviço, que atuou como consultor e gestor de inteligência, riscos e segurança.
            Com expertise comprovada, Adriano Filgueiras foi Agente de Segurança Pessoal no Gabinete de Segurança Institucional da Presidência da República, atuando em diversos países e em todos os estados do Brasil. Ele liderou a segurança em missões internacionais, como Chefe de Segurança da Força-Tarefa Marítima da ONU no Líbano em 2018 e Chefe do Destacamento de Segurança da Embaixada do Brasil no Haiti em 2023.
            Sua formação robusta inclui pós-graduações em Inteligência e Gestão Estratégica, Docência de Segurança Pública e MBA em Governança, Risco e Compliance. Essa bagagem acadêmica e prática o posicionou para liderar projetos no setor público e privado.
            A Bradock Intelligence Academy oferece soluções estratégicas e personalizadas para a proteção de executivos e seus negócios. Nossos serviços abrangem segurança pessoal, física e patrimonial, além de consultoria especializada e capacitação em Segurança, Inteligência e Compliance para o ambiente corporativo.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Presentation Video */}
      <div className="fade-section" ref={(el) => (sectionsRef.current[2] = el)}>
        <Presentation />
      </div>

      {/* Founder Section */}
      <section className="about-founder fade-section" ref={(el) => (sectionsRef.current[4] = el)}>
            <div className="container founder-wrapper">
                <div className="founder-card">
                <div className="founder-image-wrapper">
                    <img src={founderImage} alt="Fundador da empresa" className="founder-photo" />
                    <span className="founder-glow"></span>
                </div>
                <div className="founder-text">
                    <h2>Adriano Filgueiras</h2>
                    <h4>Fundador & CEO</h4>
                    <p>
                     Adriano Filgueiras, Oficial Superior e veterano do Corpo de Fuzileiros Navais com 34 anos de serviço. Ele possui vasta experiência em segurança pessoal, tendo atuado como Agente de Segurança Pessoal no Gabinete de Segurança Institucional da Presidência da República em diversos países e em todos os estados do Brasil.

                    Em missões internacionais, ele foi Chefe de Segurança da Força-Tarefa Marítima da ONU no Líbano em 2018 e Chefe do Destacamento de Segurança da Embaixada do Brasil no Haiti em 2023. 

                    Pós-graduado em Inteligência e Gestão Estratégica, Docência de Segurança Pública e MBA em Governança, Risco e Compliance. 
                    </p>
                    <button className="founder-cta">Conheça a História</button>
                </div>
                </div>
            </div>
     </section>

     {/* Additional Section */}
      <section className="about-extra fade-section" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="container">
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é capacitar organizações para protegerem seus ativos e dados,
            garantindo operações seguras e sustentáveis em um ambiente corporativo
            cada vez mais desafiador.
            Prestando serviços especializados de consultoria e treinamentos com elevado grau de excelência e eficiência nas áreas de Gestão Estratégica, Segurança, Inteligência, Riscos e Compliance.
          </p>
        </div>
      </section>

     <MiniHeroSlider />




      <Footer />
    </>
  );
}
