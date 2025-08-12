import { useParams } from "react-router-dom";
import { useState } from "react";
import "./DynamicArticleSlider.css";

const articles = [
  {
    id: "acessoramento-de-alto-nível",
    title: "Rompendo a Névoa da Guerra",
    resumo: "Como a Inteligência Estratégica Garante a Segurança em Tempos de Incerteza.",
    date: "30/07/2025",
    image: "/images/capa-mini-um.png",
    content: `
O estrategista militar prussiano Carl von Clausewitz descreveu o ambiente de conflito como envolto em uma "névoa da guerra", uma metáfora perfeita para a incerteza e a falta de clareza que permeiam as situações de risco. Essa névoa obscurece informações, distorce a percepção e dificulta a tomada de decisões eficazes. Em um cenário contemporâneo, essa incerteza não se limita apenas ao campo de batalha, mas se estende ao mundo da segurança corporativa e da proteção pessoal.
Nesse contexto, a Bradock Intelligence Academy atua como uma barreira estratégica contra essa névoa, oferecendo serviços especializados que transformam a incerteza em clareza e a vulnerabilidade em resiliência. Através de um sistema de capacitação e consultoria independente e altamente qualificado, a academia capacita indivíduos e organizações a enxergar além das ameaças óbvias e a se prepararem de forma proativa.
Vantagens de um Sistema de Capacitação e Consultoria Qualificado
Um sistema como o oferecido pela Bradock Intelligence Academy proporciona vantagens cruciais que se traduzem em segurança e eficiência operacional:
 * Visão Otimizada e Independente: Como um agente externo, a academia oferece uma perspectiva imparcial e isenta de vieses internos. Essa visão "de fora" permite identificar vulnerabilidades e riscos que poderiam ser negligenciados por quem está imerso na rotina da organização.
 * Expertise Especializada e Atualizada: A equipe da academia é composta por profissionais com profundo conhecimento em inteligência, segurança e gestão de riscos. Eles trazem as melhores práticas e as ferramentas mais recentes do mercado, garantindo que as estratégias de segurança estejam sempre à frente das ameaças emergentes.
 * Otimização de Recursos: Ao identificar precisamente os pontos de vulnerabilidade e os riscos reais, a consultoria evita o desperdício de recursos em soluções genéricas ou ineficazes. O investimento em segurança se torna direcionado e estratégico, gerando maior retorno e eficiência.
 * Capacitação Contínua: Além de identificar problemas, a academia atua na transferência de conhecimento. Seus programas de capacitação fortalecem as equipes internas, criando uma cultura de segurança e inteligência que perdura e se adapta às novas exigências do ambiente.
 * Redução de Vulnerabilidades: A principal vantagem é a capacidade de mitigar riscos e reduzir o espectro de vulnerabilidades. Ao desvendar a "névoa da guerra", a consultoria permite que as organizações e indivíduos ajam de forma preventiva, transformando possíveis perdas em oportunidades de melhoria e fortalecimento.
Em um mundo onde a única constante é a mudança, ter um parceiro estratégico como a Bradock Intelligence Academy não é um luxo, mas uma necessidade. É a chave para transformar a incerteza em vantagem competitiva e garantir que a segurança seja um pilar sólido e não um ponto cego.`
  },
  {
    id: "zero-trust",
    title: "Zero Trust — O Novo Paradigma da Segurança Corporativa",
    resumo: "Zero Trust redefine o conceito de segurança corporativa...",
    date: "28/07/2025",
    image: "/images/capa-mini-dois.png",
    content: `O modelo de Zero Trust — ou "Nunca confie, sempre verifique" — se consolidou em 2025 como padrão essencial para proteger organizações contra ameaças internas e externas.

    Conteúdo:

    Princípios-chave: autenticação contínua, privilégios mínimos, segmentação de rede e verificação escrupulosa de identidade e acesso.

    Razões de adoção: trabalho remoto, ambientes multicloud e mobilidade corporativa aumentam a exposição, tornando infraestrutura Zero Trust imprescindível.

    Implementação técnica: uso de MFA, single sign‑on, microsegmentação, monitoramento contínuo, controle sobre IoT e endpoints com EDR/XDR.

    Benefícios estratégicos: maior resiliência, mitigação de ameaças internas, alinhamento com conformidade (LGPD, GDPR), adaptabilidade a mudanças de TI e negócios.`
  },
  {
    id: "autoprotecao-empresarial",
    title: "Governança, Autoproteção, Privacidade e Compliance",
    resumo: "Da Autoproteção à Segurança Corporativa: O Poder da Inteligência...",
    date: "25/07/2025",
    image: "/images/capa-mini-tres.png",
    content: `A segurança, seja ela pessoal ou corporativa, é uma preocupação constante em um mundo cada vez mais complexo. Muitas vezes, a associamos diretamente a equipamentos de alta tecnologia ou a treinamentos físicos, mas a verdade é que a base de uma defesa eficaz reside em algo muito mais fundamental: a Atividade de Inteligência.
    
Pensar em segurança sem inteligência é como tentar construir um prédio sem planta. Na defesa pessoal, por exemplo, a inteligência é o que nos permite analisar o ambiente, identificar potenciais riscos e tomar decisões preventivas. Não se trata de paranoia, mas de consciência situacional. É a capacidade de observar, processar informações e agir de forma proativa para evitar uma situação de perigo, em vez de reagir a ela. É entender que a melhor luta é aquela que nunca acontece.

Da mesma forma, na segurança corporativa, a proteção dos ativos de uma empresa — sejam eles físicos, financeiros, ou intelectuais — exige uma análise judiciosa e metódica. A atividade de inteligência é a ferramenta essencial que permite aos gestores ir além da superfície. Ela coleta e analisa dados sobre ameaças internas e externas, vulnerabilidades do sistema e perfis de risco. Essa coleta não se limita a relatórios e câmeras de segurança; ela investiga o comportamento humano, a dinâmica do mercado e as tendências criminosas.

Com base nessa análise, a inteligência transforma dados brutos em informações estratégicas. Isso possibilita um planejamento de segurança realmente eficaz, direcionando o investimento de recursos cruciais (como orçamento e pessoal) para onde eles terão o maior impacto. Ao invés de adotar medidas de segurança genéricas, a empresa pode implementar protocolos específicos para suas ameaças reais, otimizando seu desempenho e custo-benefício.

Para aqueles que buscam aprimorar essa visão e elevar o nível de sua proteção, a Bradock Intelligence Academy se apresenta como o recurso estratégico ideal. A academia atua diretamente na potencialização das medidas de defesa pessoal e segurança corporativa já existentes. Por meio de uma metodologia focada em inteligência, ela auxilia na mitigação de riscos, na redução do espectro de vulnerabilidades e na exploração de oportunidades de melhoria contínua. É o elo que transforma a teoria da inteligência em uma prática de segurança eficiente e proativa.

Em suma, a inteligência é o alicerce sobre o qual a segurança é construída. Ela é a força motriz por trás de uma defesa robusta e resiliente, tanto para o indivíduo que busca autoproteção quanto para a empresa que deseja salvaguardar seus bens mais valiosos. Em ambos os cenários, a capacidade de coletar, analisar e aplicar informações de forma estratégica é o que verdadeiramente garante o sucesso e a proteção de todos os ativos envolvidos.`
  },
  {
    id: "compliance-investigacoes",
    title: "Compliance e Investigações — Escudo Contra Riscos",
    resumo: "Compliance não é apenas uma formalidade. Em um cenário corporativo cada vez mais complexo.",
    date: "22/07/2025",
    image: "/images/capa-compliance.png",
    content: `Em um cenário corporativo cada vez mais complexo, o Compliance não é apenas uma formalidade, mas um escudo essencial para a saúde e a sustentabilidade de qualquer organização. Sua importância é ressaltada de forma ainda mais crítica na condução de Investigações Corporativas.

    O Compliance atua como um sistema preventivo, estabelecendo diretrizes claras e promovendo uma cultura de ética e integridade. Quando bem implementado, ele cria um ambiente onde as regras são claras e as expectativas de conduta, transparentes.

    No entanto, mesmo com as melhores práticas preventivas, incidentes podem ocorrer. É aí que as Investigações Corporativas entram em cena, atuando como um mecanismo crucial para:

     Mitigar Riscos: Ao investigar fraudes, assédios, mau comportamento ou quaisquer outras irregularidades, a empresa identifica as causas e os responsáveis, evitando que pequenos problemas se transformem em grandes crises.
     Proteger a Reputação: Uma resposta rápida e eficaz a incidentes demonstra compromisso com a ética e a responsabilidade, protegendo a imagem da empresa perante clientes, parceiros, investidores e o público em geral.
     Garantir um Ambiente Seguro: Ações corretivas baseadas em investigações robustas eliminam fontes de risco e promovem um local de trabalho mais seguro e justo para todos os colaboradores.
     Evitar Perdas Financeiras e Jurídicas: A detecção precoce de irregularidades pode prevenir perdas financeiras significativas e evitar sanções legais severas, multas e processos judiciais.

    Em suma, a sinergia entre o Compliance e as Investigações Corporativas é fundamental para construir um ambiente de negócios mais seguro, transparente e resiliente, onde os riscos são minimizados e a integridade é sempre a prioridade.`
  },
  {
    id: "seguranca-corporativa",
    title: "Segurança Corporativa Essencial",
    resumo: "Protegendo seus ativos essenciais de forma inteligente.",
    date: "20/07/2025",
    image: "/images/capa-um.png",
    content: `No dinâmico e competitivo cenário atual, a segurança corporativa transcendeu a ideia de um simples custo operacional para se tornar um pilar estratégico indispensável. Não se trata apenas de proteger o patrimônio físico, mas de salvaguardar informações cruciais, a reputação da marca, a continuidade dos negócios e, acima de tudo, a integridade de seus colaboradores. A ausência de um sistema de segurança robusto pode expor a empresa a riscos cibernéticos, fraudes, espionagem industrial, perdas financeiras e até mesmo danos irreversíveis à sua imagem no mercado. Investir em segurança é, portanto, investir na sustentabilidade e no crescimento de qualquer organização.

    A Bradock Intelligence Academy oferece soluções inteligentes em consultoria e capacitação. Com expertise aprofundada, a BIA está preparada para analisar as vulnerabilidades da sua empresa, desenvolver estratégias personalizadas e treinar suas equipes, garantindo entregáveis eficientes que otimizam integralmente seus sistemas de segurança. 

    Deixe a Bradock Intelligence Academy fortalecer a blindagem da sua corporação, permitindo que você foque no que realmente importa: O sucesso do seu negócio.`
  },
  {
    id: "protecao-empresarial",
    title: "Proteção Empresarial Total — Antecipando Ataques",
    resumo: "A segurança corporativa é muito mais que um gasto. No cenário atual é um pilar estratégico essencial.",
    date: "18/07/2025",
    image: "/images/capa-dois.png",
    content: `No cenário atual, a segurança corporativa é muito mais que um gasto, é um pilar estratégico essencial. Não estamos falando só de proteger bens físicos, mas de resguardar informações cruciais, a reputação da sua marca, a continuidade dos negócios e, acima de tudo, a integridade dos seus colaboradores. 

    Sem um sistema de segurança robusto, sua empresa fica vulnerável a ataques cibernéticos, fraudes, espionagem industrial e perdas financeiras que podem causar danos irreversíveis à sua imagem. Ou seja, investir em segurança é investir diretamente na sustentabilidade e no crescimento do seu negócio.

    Pensando nessa necessidade vital, a Bradock Intelligence Academy oferece soluções inteligentes em consultoria e capacitação. Com nossa expertise aprofundada, vamos analisar as vulnerabilidades da sua empresa, criar estratégias personalizadas e treinar suas equipes. Nosso objetivo é entregar resultados eficientes que otimizam integralmente seus sistemas de segurança. 

    Deixe a Bradock Intelligence Academy fortalecer a blindagem da sua corporação, assim você pode focar no que realmente importa: O sucesso do seu negócio.`
  },
  {
    id: "capacitacao-treinamentos",
    title: "Capacitação e Treinamentos em Inteligência e Áreas de Segurança",
    resumo: "Transforme sua segurança com a Bradock Intelligence Academy. Oferecemos cursos e especializações em Inteligência, Segurança Corporativa e Pessoal, além de Gestão de Riscos e Crises.",
    date: "08/08/2025",
    image: "/images/capa-quatro.png",
    content: `A vasta experiência na formação de Recursos Humanos é o alicerce da Bradock Intelligence Academy. O seu fundador, com uma sólida trajetória nas áreas de Segurança Pessoal, Segurança Corporativa e Inteligência, une conhecimento teórico e prático para oferecer uma formação de altíssimo nível.

Sua base em Pedagogia e a pós-graduação em Docência em Segurança Pública demonstram uma compreensão profunda sobre os processos de ensino e aprendizagem, enquanto a expertise acumulada tanto no ambiente militar quanto no civil confere uma visão 360° dessas disciplinas.

Essa combinação única de qualificações capacita o fundador a treinar profissionais com excelência, preparando-os para os desafios complexos do mercado de segurança e inteligência.`
  }
];

export default function DynamicArticleSlider() {
  const { id } = useParams();
  const [currentIndex] = useState(
    articles.findIndex((article) => article.id === id) !== -1
      ? articles.findIndex((article) => article.id === id)
      : 0
  );

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
