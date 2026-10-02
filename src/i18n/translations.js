export const SUPPORTED_LANGUAGES = ["pt", "en"]
export const DEFAULT_LANGUAGE = "en"

export const translations = {
  pt: {
    meta: {
      title: "Gabriel Feitosa — Desenvolvedor Full Stack",
      notFoundTitle: "Página não encontrada",
    },
    header: {
      home: "Home",
      about: "Sobre mim",
      projects: "Projetos",
      contact: "Fale Comigo",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    language: {
      label: "Idioma",
      switchTo: "Mudar para inglês",
      pt: "Português",
      en: "Inglês",
    },
    home: {
      badge: "Disponível para novos projetos",
      // Cada item é uma linha do título; "highlight" pinta a linha de verde
      // e "fit" ajusta o tamanho da linha para ter a mesma largura das demais
      titleLines: [
        { text: "Eu construo" },
        { text: "experiências", highlight: true },
        { text: "digitais" },
      ],
      subtitle:
        "Desenvolvedor Full Stack apaixonado por transformar ideias em interfaces modernas, performáticas e com código limpo.",
      scroll: "SCROLL",
    },
    techCarousel: {
      title: "Tecnologias que domino",
    },
    about: {
      label: "Sobre mim",
      p1: (b, { years, months }) => (
        <>
          Sou desenvolvedor {b("Full Stack")} com {months > 0 ? "mais de " : ""}{b(`${years} ${years === 1 ? "ano" : "anos"} de experiência`)}, especializado em criar e otimizar soluções digitais de alta performance. Atualmente, atuo no grupo {b("Pneufree.com")}, um dos maiores e-commerces do segmento no Brasil, entregando sistemas escaláveis e eficientes.
        </>
      ),
      p2: (b) => (
        <>
          Tenho sólida vivência no desenvolvimento de interfaces modernas e responsivas utilizando {b("React, Next.js, TypeScript e Tailwind")}. No back-end, construo arquiteturas robustas com {b("Node.js")} e bancos de dados como {b("SQL Server, PostgreSQL e MongoDB")}. Além do código, possuo um forte olhar para {b("UI/UX")}, utilizando o {b("Figma")} para aprimorar a usabilidade das aplicações.
        </>
      ),
      p3: (b) => (
        <>
          Com perfil {b("proativo")} e {b("colaborativo")}, foco em unir design atraente, código limpo e funcionalidade impecável para resolver problemas reais e trazer melhorias contínuas aos projetos em que atuo.
        </>
      ),
      resume: "Acessar Currículo",
      resumeUrl:
        "https://drive.google.com/file/d/1IeRSLgkIs3xAeBRXuYutlHaJB1aJ95hB/view?usp=sharing",
    },
    projects: {
      label: "Portfólio",
      title: "Projetos",
      titleHighlight: "recentes",
      subtitle: "Uma seleção dos meus trabalhos mais relevantes",
      categories: {
        profissional: "Profissional",
        pessoais: "Proj. Pessoais",
        estudos: "Estudos",
      },
      empty: "Nenhum projeto cadastrado nesta categoria no momento.",
      code: "Código",
      demo: "Demo",
      visit: "Acessar site",
    },
    stack: {
      title: "Com o que eu trabalho",
      categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Ferramentas: "Ferramentas",
        Mobile: "Mobile",
      },
    },
    footer: {
      label: "Contato",
      titleStart: "Vamos construir algo",
      titleHighlight: "incrível",
      titleEnd: "juntos?",
      subtitle:
        "Estou sempre aberto a novos projetos e oportunidades. Entre em contato e vamos conversar.",
      emailCopied: "E-mail copiado!",
      rights: "Todos os direitos reservados.",
    },
    notFound: {
      title: "Ops! página não encontrada",
      description:
        "Volte para a página anterior ou clique no botão abaixo para voltar para a página inicial.",
      back: "Voltar",
    },
  },

  en: {
    meta: {
      title: "Gabriel Feitosa — Full Stack Developer",
      notFoundTitle: "Page not found",
    },
    header: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      contact: "Let's Talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    language: {
      label: "Language",
      switchTo: "Switch to Portuguese",
      pt: "Portuguese",
      en: "English",
    },
    home: {
      badge: "Available for new projects",
      titleLines: [
        { text: "I build digital" },
        { text: "experiences", highlight: true, fit: true },
      ],
      subtitle:
        "Full Stack Developer passionate about turning ideas into modern, high-performance interfaces built with clean code.",
      scroll: "SCROLL",
    },
    techCarousel: {
      title: "Technologies I master",
    },
    about: {
      label: "About me",
      p1: (b, { years, months }) => (
        <>
          I&apos;m a {b("Full Stack")} developer with {months > 0 ? "over " : ""}{b(`${years} ${years === 1 ? "year" : "years"} of experience`)}, specialized in building and optimizing high-performance digital solutions. I currently work at the {b("Pneufree.com")} group, one of the largest e-commerce companies in its segment in Brazil, delivering scalable and efficient systems.
        </>
      ),
      p2: (b) => (
        <>
          I have solid experience building modern, responsive interfaces with {b("React, Next.js, TypeScript and Tailwind")}. On the back end, I design robust architectures with {b("Node.js")} and databases such as {b("SQL Server, PostgreSQL and MongoDB")}. Beyond code, I have a strong eye for {b("UI/UX")}, using {b("Figma")} to improve the usability of applications.
        </>
      ),
      p3: (b) => (
        <>
          With a {b("proactive")} and {b("collaborative")} mindset, I focus on combining attractive design, clean code and flawless functionality to solve real problems and bring continuous improvements to the projects I work on.
        </>
      ),
      resume: "View Resume",
      resumeUrl:
        "https://docs.google.com/document/d/1aIcJuORQyk-MO7Ir-ZOSz-zKQBATe08Azgs31kN83ao/edit?usp=sharing",
    },
    projects: {
      label: "Portfolio",
      title: "Recent",
      titleHighlight: "projects",
      subtitle: "A selection of my most relevant work",
      categories: {
        profissional: "Professional",
        pessoais: "Personal",
        estudos: "Studies",
      },
      empty: "No projects in this category at the moment.",
      code: "Code",
      demo: "Demo",
      visit: "Visit site",
    },
    stack: {
      title: "What I work with",
      categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Ferramentas: "Tools",
        Mobile: "Mobile",
      },
    },
    footer: {
      label: "Contact",
      titleStart: "Shall we build something",
      titleHighlight: "amazing",
      titleEnd: "together?",
      subtitle:
        "I'm always open to new projects and opportunities. Get in touch and let's talk.",
      emailCopied: "E-mail copied!",
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Oops! Page not found",
      description:
        "Go back to the previous page or click the button below to return to the home page.",
      back: "Go back",
    },
  },
}
