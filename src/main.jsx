import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Code2,
  Database,
  Layers,
  LoaderCircle,
  Mail,
  Menu,
  Send,
  Phone,
  ServerCog,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const assetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;
const localized = (ko, en) => ({ ko, en });

const navItems = [
  { label: localized("소개", "About"), href: "#about" },
  { label: localized("기술스택", "Skills"), href: "#skills" },
  { label: localized("프로젝트", "Projects"), href: "#projects" },
  { label: localized("교육", "Education"), href: "#education" },
  { label: localized("연락처", "Contact"), href: "#contact" },
];

const copy = {
  ko: {
    brandAria: "임종경 포트폴리오 홈",
    navAria: "주요 메뉴",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
    profileAlt: "임종경 프로필 사진",
    name: "임종경",
    heroCopy: "문제를 해결하고 효율을 만드는 백엔드, AI 개발자!",
    viewProjects: "프로젝트 보기",
    contact: "연락하기",
    capabilities: "핵심 역량",
    aboutLabel: "소개",
    aboutTitle: "문제 해결을 서비스로 구현하는 개발자",
    aboutOne:
      "백엔드 개발을 기반으로 ML/DL, AI 프로젝트까지 확장해온 개발자입니다. 견고한 API, 명확한 데이터 흐름, 실제 서비스에 적용되는 모델 구조를 함께 고민합니다.",
    aboutTwo:
      "Spring Boot와 React 생태계를 활용해 웹과 앱을 구현하고, 머신러닝 프로젝트에서는 데이터 전처리부터 모델 평가까지 직접 다룹니다.",
    skillsLabel: "기술스택",
    skillsCopy: "백엔드 안정성, AI 실험력, 프론트 구현력을 한 프로젝트 흐름 안에서 연결합니다.",
    projectsLabel: "프로젝트",
    projectsCopy: "AI 모델링, 백엔드, 모바일, 웹 프로젝트의 결과물과 실행 링크를 한눈에 확인할 수 있도록 정리했습니다.",
    chatbotLabel: "포트폴리오 챗봇",
    chatbotTitle: "임종경 봇",
    chatbotCopy:
      "기술스택, 프로젝트, 교육 이력, 연락 방법을 짧게 안내하는 API 기반 챗봇입니다.",
    chatbotTeaser: "무엇이든 물어보세요!",
    chatbotPlaceholder: "예: 임종경은 어떤 개발자인가요?",
    chatbotPrivacyNote:
      "개인정보는 이력서를 통해 참고 부탁드립니다! 개인정보에 대한 질문은 받지 않고 있습니다!",
    chatbotSend: "질문하기",
    chatbotLoading: "답변을 만드는 중입니다...",
    chatbotFallback:
      "챗봇 API가 아직 연결되지 않았습니다. Vercel 환경변수 OPENAI_API_KEY를 설정하면 활성화됩니다.",
    chatbotStarterOne: "대표 프로젝트 알려줘",
    chatbotStarterTwo: "백엔드 경험이 뭐야?",
    chatbotStarterThree: "연락 방법 알려줘",
    testAccount: "테스트 계정",
    educationLabel: "교육 및 학력",
    educationCopy: "Java 백엔드, 헬스케어 AI, AWS 클라우드까지 실무형 학습 경험을 쌓았습니다.",
    training: "교육",
    academics: "학력",
    contactLabel: "연락처",
    contactTitle: "함께 풀 문제를 기다리고 있습니다.",
    contactCopy: "백엔드, AI, 웹 서비스 프로젝트와 관련해 편하게 연락 주세요.",
  },
  en: {
    brandAria: "Lim Jongkyung portfolio home",
    navAria: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    profileAlt: "Portrait of Lim Jongkyung",
    name: "Lim Jongkyung",
    heroCopy: "A backend and AI developer who solves problems and improves efficiency.",
    viewProjects: "View Projects",
    contact: "Contact",
    capabilities: "Core capabilities",
    aboutLabel: "About",
    aboutTitle: "Turning problems into working services",
    aboutOne:
      "I am a backend developer expanding into ML/DL and AI projects. I focus on robust APIs, clear data flows, and model architectures that can operate in real services.",
    aboutTwo:
      "I build web and mobile applications with the Spring Boot and React ecosystems, and handle the full machine-learning workflow from data preprocessing to model evaluation.",
    skillsLabel: "Skills",
    skillsCopy: "I connect backend reliability, AI experimentation, and frontend implementation within a complete project workflow.",
    projectsLabel: "Projects",
    projectsCopy: "Explore AI modeling, backend, mobile, and web projects with clear result links and project materials.",
    chatbotLabel: "Portfolio Chatbot",
    chatbotTitle: "Lim Jongkyung Bot",
    chatbotCopy:
      "A compact API-powered chatbot that explains skills, projects, education, and contact details.",
    chatbotTeaser: "Ask me anything!",
    chatbotPlaceholder: "Ex: What kind of developer is Lim Jongkyung?",
    chatbotPrivacyNote:
      "Please refer to the resume for personal details. Personal-information questions are not accepted.",
    chatbotSend: "Ask",
    chatbotLoading: "Writing an answer...",
    chatbotFallback:
      "The chatbot API is not connected yet. Set OPENAI_API_KEY on Vercel to enable it.",
    chatbotStarterOne: "Show key projects",
    chatbotStarterTwo: "What backend experience?",
    chatbotStarterThree: "How can I contact him?",
    testAccount: "Test Account",
    educationLabel: "Education",
    educationCopy: "Hands-on training across Java backend development, healthcare AI, and AWS cloud services.",
    training: "Training",
    academics: "Academic Background",
    contactLabel: "Contact",
    contactTitle: "Ready for the next problem to solve.",
    contactCopy: "Feel free to reach out about backend, AI, and web service projects.",
  },
};

const skillGroups = [
  {
    title: "Backend",
    icon: ServerCog,
    items: ["SpringBoot", "Java", "JPA", "XML", "MyBatis"],
  },
  {
    title: "ML/DL & AI",
    icon: BrainCircuit,
    items: [
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "NLP",
      "LLM API Integration",
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "React-Native", "Vite", "Expogo", "HTML", "CSS", "JavaScript", "AJAX"],
  },
  {
    title: "Data & Infra",
    icon: Database,
    items: ["MySQL", "OracleDB", "Git", "GitHub Codespace", "firebase", "GCP"],
  },
];

const projects = [
  {
    title: "Pneumonia X-ray Classification",
    type: "Deep Learning",
    icon: BrainCircuit,
    description:
      localized(
        "데이콘 폐렴 X-ray 이미지 분류 해커톤에서 EfficientNet-B0, ResNet18, ResNet34 앙상블과 validation 기반 threshold tuning을 적용해 성능을 개선한 딥러닝 프로젝트입니다.",
        "A Dacon pneumonia X-ray classification project using an EfficientNet-B0, ResNet18, and ResNet34 ensemble with validation-based threshold tuning.",
      ),
    tags: ["PyTorch", "EfficientNet-B0", "ResNet", "Ensemble", "Grad-CAM"],
    highlights: [
      {
        title: localized("최종 성과", "Final Result"),
        metric: "Accuracy 0.9519",
        body: localized(
          "EfficientNet-B0, ResNet18, ResNet34 앙상블과 validation 기반 threshold tuning으로 초기 0.9455에서 최종 0.9519까지 개선했습니다.",
          "Improved from 0.9455 to 0.9519 Accuracy using an EfficientNet-B0, ResNet18, and ResNet34 ensemble with validation-based threshold tuning.",
        ),
      },
    ],
    links: [
      {
        label: localized("PDF 보고서", "PDF Report"),
        href: assetPath("pneumonia-xray-v41-portfolio.pdf"),
        cta: true,
      },
      {
        label: localized("PPT 발표자료", "PPT Deck"),
        href: assetPath("pneumonia-xray-v41-portfolio.pptx"),
        cta: true,
      },
    ],
  },
  {
    title: "Infertility Prediction Model",
    type: "Machine Learning",
    icon: BrainCircuit,
    description:
      localized(
        "난임 예측 데이터를 기반으로 전처리, feature engineering, 모델 학습, 평가를 수행해 예측 성능 개선 가능성을 검증한 머신러닝 프로젝트입니다.",
        "A machine-learning project for infertility prediction, covering preprocessing, feature engineering, model training, and evaluation.",
      ),
    tags: ["Python", "sklearn", "pandas", "Feature Engineering", "Evaluation"],
    highlights: [
      {
        title: localized("최종 성과", "Final Result"),
        metric: "Final Score 0.7402",
        body: localized(
          "데이터 전처리, feature engineering, 모델 학습 및 평가를 통해 난임 예측 문제의 성능 개선 가능성을 검증했습니다.",
          "Validated performance improvement for infertility prediction through preprocessing, feature engineering, model training, and evaluation.",
        ),
      },
    ],
    links: [
      {
        label: localized("PDF 보고서", "PDF Report"),
        href: assetPath("prediction-mini-project.pdf"),
        cta: true,
      },
      {
        label: localized("PPT 발표자료", "PPT Deck"),
        href: assetPath("prediction-mini-project.pptx"),
        cta: true,
      },
    ],
  },
  {
    title: "Spring Boot Backend Service",
    type: "Backend",
    icon: ServerCog,
    description:
      localized(
        "도메인 중심 설계와 안정적인 API 흐름을 목표로 만든 Spring Boot 기반 백엔드 프로젝트입니다.",
        "A Spring Boot backend project designed around domain-driven structure and reliable API flows.",
      ),
    tags: ["Spring Boot", "Java", "JPA", "REST API"],
    highlights: [
      {
        title: localized("구현 범위", "Scope"),
        metric: "User + Admin",
        body: localized(
          "사용자 페이지와 관리자 페이지를 분리해 실제 서비스 운영 흐름을 확인할 수 있게 구성했습니다.",
          "Separated user and admin pages so the operational service flow can be reviewed directly.",
        ),
      },
    ],
    links: [
      {
        label: localized("사용자 페이지", "User Page"),
        href: "https://refreshmarket-1069542000196.asia-northeast3.run.app/",
        cta: true,
      },
      {
        label: localized("관리자 페이지", "Admin Page"),
        href: "https://refreshmarket-management-1069542000196.asia-northeast3.run.app/",
        cta: true,
      },
    ],
    testAccount: {
      description: localized(
        "사용자 페이지와 관리자 페이지를 모두 체험할 수 있는 테스트 계정입니다.",
        "Use this test account to explore both the user and admin pages.",
      ),
      username: "portfolio",
      password: "*Portfolio1234",
    },
  },
  {
    title: "Biblical Archaeology Web",
    type: "Web · Frontend",
    icon: Code2,
    description:
      localized(
        "React 기반 컴포넌트 구조와 반응형 화면을 적용해 제작한 성서고고학 웹사이트입니다. 사용자가 다양한 자료를 편리하게 탐색할 수 있도록 콘텐츠 흐름과 화면 구성을 설계하고, Firebase를 활용해 실제 웹 환경에 배포했습니다.",
        "A biblical archaeology website built with React components and responsive layouts. I designed the content flow for convenient exploration and deployed the production site with Firebase.",
      ),
    tags: ["React", "JavaScript", "Firebase", "Responsive Web", "Frontend"],
    highlights: [
      {
        title: localized("배포 형태", "Deployment"),
        metric: "Live Web",
        body: localized(
          "콘텐츠 탐색 흐름과 반응형 화면을 직접 설계하고 Firebase 기반으로 배포했습니다.",
          "Designed the content flow and responsive UI, then deployed the site with Firebase.",
        ),
      },
    ],
    links: [
      {
        label: localized("사이트 보기", "View Site"),
        href: "https://sjs-biblical-archaeology.web.app/",
        cta: true,
      },
    ],
  },
  {
    title: "GodTalk Mobile App",
    type: "Mobile",
    icon: Smartphone,
    description:
      localized(
        "React Native로 개발하고 App Store에 정식 출시한 모바일 앱 프로젝트입니다. 모바일 앱과 웹사이트에 Gemini 기반 말씀상담 LLM 서비스를 연동했으며, Firebase Functions로 API 키를 보호하고 모델 fallback을 구성해 실제 서비스 형태로 구현했습니다.",
        "A React Native mobile application officially released on the App Store. I added a Gemini-powered Bible counseling LLM service to both the mobile app and website, protecting the API key through Firebase Functions and adding model fallback for production use.",
      ),
    tags: ["React Native", "Expo", "Gemini API", "LLM", "Firebase Functions", "App Store"],
    highlights: [
      {
        title: localized("출시 결과", "Release"),
        metric: "App Store",
        body: localized(
          "모바일 앱 출시 이후 Gemini 기반 말씀상담 LLM을 앱과 웹에 연동했습니다.",
          "Released the mobile app and integrated a Gemini-powered counseling LLM across app and web.",
        ),
      },
    ],
    links: [
      {
        label: localized("앱스토어 보기", "View on App Store"),
        href: "https://apps.apple.com/kr/app/godtalk-%EA%B0%93%ED%86%A1/id6757742863",
        cta: true,
      },
      {
        label: localized("GodTalk 홈페이지", "GodTalk Website"),
        href: "https://godtalk-6cd29.web.app/",
        cta: true,
      },
    ],
  },
  {
    title: "Portfolio Chatbot",
    type: "AI · API",
    icon: Bot,
    description:
      localized(
        "포트폴리오 방문자가 기술스택, 프로젝트, 교육 이력을 빠르게 확인할 수 있도록 만든 서버리스 API 기반 챗봇입니다. OpenAI API를 브라우저에 노출하지 않도록 Vercel 함수로 질문을 처리합니다.",
        "A serverless API chatbot that helps visitors quickly explore skills, projects, and education history. Questions are handled through a Vercel function so the OpenAI API key is not exposed in the browser.",
      ),
    tags: ["OpenAI API", "Vercel Function", "React", "Prompt Design"],
    highlights: [
      {
        title: localized("보안 구조", "Security"),
        metric: "Serverless API",
        body: localized(
          "OpenAI API 키가 브라우저에 노출되지 않도록 Vercel 서버리스 함수로 질문을 처리합니다.",
          "Uses a Vercel serverless function so the OpenAI API key is never exposed in the browser.",
        ),
      },
    ],
    links: [
      {
        label: localized("챗봇 열기", "Open Chatbot"),
        href: "#chatbot",
        internal: true,
        cta: true,
      },
    ],
  },
];

const educationPrograms = [
  {
    period: "2026. 04 ~ 2026. 09",
    title: localized(
      "헬스케어 데이터 기반 인공지능 디지털 의료 웹 서비스 개발자 양성과정",
      "Healthcare Data-Based AI Digital Medical Web Service Developer Program",
    ),
    organization: localized("넥스트러너스평생교육시설", "Next Runners Lifelong Education Center"),
    details: [
      localized(
        "Python을 활용한 헬스케어 데이터 분석 및 시각화",
        "Healthcare data analysis and visualization with Python",
      ),
      localized(
        "Database를 활용한 헬스케어 데이터 분석",
        "Healthcare data analysis using databases",
      ),
      localized(
        "헬스케어 데이터 기반 분석 및 시각화 미니 프로젝트",
        "Healthcare data analysis and visualization mini project",
      ),
      localized(
        "진료 기록 요약을 위한 자연어 처리(NLP)",
        "Natural language processing for summarizing medical records",
      ),
    ],
  },
  {
    period: "2025. 06 ~ 2025. 06",
    title: localized("AWS TechCamp", "AWS TechCamp"),
    organization: localized("AWS", "AWS"),
    details: [
      localized(
        "처음 시작하는 AWS: 기초부터 웹 서비스 구축까지",
        "AWS fundamentals and web service deployment",
      ),
      localized(
        "서버리스로 가속하는 현대적 웹 애플리케이션 구축",
        "Building modern serverless web applications",
      ),
      localized(
        "손쉬운 Agent 조합으로 복잡한 문제를 해결하는 스마트 비서 만들기",
        "Building an agent-based smart assistant for complex tasks",
      ),
      localized(
        "Amazon Q 개발자 워크샵 - Q-Words 앱 구축하기",
        "Amazon Q Developer workshop: building the Q-Words application",
      ),
      localized(
        "제조업, 여행 및 숙박업 사례 기반 디지털 전환 워크샵",
        "Digital transformation workshops based on manufacturing, travel, and hospitality cases",
      ),
    ],
  },
  {
    period: "2024. 04 ~ 2024. 09",
    title: localized(
      "(디지털컨버전스) 공공데이터 융합 자바개발자 양성과정 A30",
      "Public Data Convergence Java Developer Program A30",
    ),
    organization: localized("KH정보교육원", "KH Information Education Center"),
    details: [
      localized(
        "Java, SQL, 데이터베이스, 네트워크 프로그래밍",
        "Java, SQL, databases, and network programming",
      ),
      localized(
        "UI 디자인 및 구현, 서버 프로그램 구현",
        "UI design and implementation, server-side programming",
      ),
      localized(
        "요구사항 확인, 화면 구현, 통합 구현",
        "Requirements analysis, interface implementation, and system integration",
      ),
      localized(
        "공공데이터 활용 프로젝트, 애플리케이션 테스트 및 배포",
        "Public-data projects, application testing, and deployment",
      ),
    ],
  },
];

const academicHistory = [
  {
    period: "2022. 03 ~ 2026. 02",
    status: localized("졸업", "Graduated"),
    title: localized(
      "장로회신학대학교 신학대학원",
      "Presbyterian University and Theological Seminary, Graduate School",
    ),
    description: localized("신학과 석사과정(3년제)", "Master's program in Theology"),
  },
  {
    period: "2018. 03 ~ 2022. 02",
    status: localized("졸업", "Graduated"),
    title: localized(
      "장로회신학대학교",
      "Presbyterian University and Theological Seminary",
    ),
    description: localized("신학과 편입", "Transferred into the Department of Theology"),
  },
  {
    period: "2016. 03 ~ 2018. 02",
    status: localized("중퇴", "Transferred"),
    title: localized("호남신학대학교", "Honam Theological University and Seminary"),
    description: localized(
      "신학과 재학 후 장로회신학대학교 편입",
      "Studied Theology before transferring to Presbyterian University and Theological Seminary",
    ),
  },
  {
    period: "2012",
    status: localized("졸업", "Graduated"),
    title: localized("영동일고등학교", "Youngdongil High School"),
    description: localized("고등학교 졸업", "High school diploma"),
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("ko");
  const [chatOpen, setChatOpen] = React.useState(false);
  const [chatInput, setChatInput] = React.useState("");
  const [chatMessages, setChatMessages] = React.useState([]);
  const [chatLoading, setChatLoading] = React.useState(false);
  const text = copy[language];
  const t = (value) =>
    value && typeof value === "object" && "ko" in value ? value[language] : value;

  const askPortfolioBot = async (message = chatInput) => {
    const cleanMessage = message.trim();
    if (!cleanMessage || chatLoading) return;

    setChatOpen(true);
    setChatMessages((current) => [
      ...current,
      { role: "user", content: cleanMessage },
    ]);
    setChatInput("");
    setChatLoading(true);

    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: cleanMessage }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Chatbot API is unavailable.");
      }

      setChatMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer },
      ]);
    } catch (error) {
      setChatMessages((current) => [
        ...current,
        { role: "assistant", content: text.chatbotFallback },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <main lang={language}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={text.brandAria}>
          <span className="brand-mark">J</span>
          <span>Lim Jongkyung</span>
        </a>
        <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label={text.navAria}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {t(item.label)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button
              className={language === "ko" ? "is-active" : ""}
              type="button"
              onClick={() => setLanguage("ko")}
              aria-pressed={language === "ko"}
            >
              KO
            </button>
            <button
              className={language === "en" ? "is-active" : ""}
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? text.menuClose : text.menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={assetPath("hero-ai-systems.png")} alt="" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Backend · ML/DL · AI Developer
          </p>
          <div className="hero-profile">
            <img src={assetPath("profile.jpeg")} alt={text.profileAlt} />
            <div>
              <h1 id="hero-title">{text.name}</h1>
              <p className="hero-copy">{text.heroCopy}</p>
            </div>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              {text.viewProjects}
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-link" href="#contact">
              {text.contact}
            </a>
          </div>
        </div>
        <div className="hero-status" aria-label={text.capabilities}>
          <span>API</span>
          <span>Model</span>
          <span>Service</span>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-label">{text.aboutLabel}</div>
        <div className="about-grid">
          <h2>{text.aboutTitle}</h2>
          <div className="about-copy">
            <p>{text.aboutOne}</p>
            <p>{text.aboutTwo}</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <div>
            <div className="section-label">{text.skillsLabel}</div>
            <h2>Build, learn, deploy.</h2>
          </div>
          <p>{text.skillsCopy}</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <div>
            <div className="section-label">{text.projectsLabel}</div>
            <h2>Selected work</h2>
          </div>
          <p>{text.projectsCopy}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>{project.type}</span>
                  <Icon size={22} />
                </div>
                <h3>{project.title}</h3>
                <p>{t(project.description)}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.highlights && (
                  <div className="project-highlights">
                    {project.highlights.map((item) => (
                      <div className="project-highlight" key={t(item.title)}>
                        <strong>{t(item.title)}</strong>
                        <span>{item.metric}</span>
                        <p>{t(item.body)}</p>
                      </div>
                    ))}
                  </div>
                )}
                {project.testAccount && (
                  <div className="test-account">
                    <strong>{text.testAccount}</strong>
                    <p>{t(project.testAccount.description)}</p>
                    <div>
                      <span>
                        ID <code>{project.testAccount.username}</code>
                      </span>
                      <span>
                        PW <code>{project.testAccount.password}</code>
                      </span>
                    </div>
                  </div>
                )}
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      className={`project-link${link.cta ? " is-cta" : ""}`}
                      href={link.href}
                      key={t(link.label)}
                      target={link.internal ? undefined : "_blank"}
                      rel={link.internal ? undefined : "noreferrer"}
                      onClick={
                        link.href === "#chatbot"
                          ? () => setChatOpen(true)
                          : undefined
                      }
                      aria-label={`${project.title} ${t(link.label)}`}
                    >
                      {t(link.label)}
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="education" className="section education-section">
        <div className="section-heading">
          <div>
            <div className="section-label">{text.educationLabel}</div>
            <h2>Learning timeline</h2>
          </div>
          <p>{text.educationCopy}</p>
        </div>
        <div className="timeline-layout">
          <div>
            <h3 className="timeline-title">{text.training}</h3>
            <div className="timeline-list">
              {educationPrograms.map((item) => (
                <article className="timeline-item" key={t(item.title)}>
                  <span className="timeline-period">{item.period}</span>
                  <h4>{t(item.title)}</h4>
                  <p>{t(item.organization)}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={t(detail)}>{t(detail)}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="timeline-title">{text.academics}</h3>
            <div className="timeline-list compact">
              {academicHistory.map((item) => (
                <article className="timeline-item" key={`${item.period}-${t(item.title)}`}>
                  <div className="academic-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span>{t(item.status)}</span>
                  </div>
                  <h4>{t(item.title)}</h4>
                  <p>{t(item.description)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <div className="section-label">{text.contactLabel}</div>
          <h2>{text.contactTitle}</h2>
          <p>{text.contactCopy}</p>
        </div>
        <div className="contact-actions">
          <a href="tel:010-6554-2523">
            <Phone size={18} />
            010-6554-2523
          </a>
          <a href="mailto:ljk8324@naver.com">
            <Mail size={18} />
            ljk8324@naver.com
          </a>
          <a href="mailto:ljk8324@gmail.com">
            <Mail size={18} />
            ljk8324@gmail.com
          </a>
          <a href="https://github.com/LimJongKyung/lim-jongkyung-portfolio" target="_blank" rel="noreferrer">
            <Code2 size={18} />
            GitHub
          </a>
        </div>
      </section>

      <aside id="chatbot" className={`chatbot-float ${chatOpen ? "is-open" : ""}`} aria-label={text.chatbotLabel}>
        {chatOpen && (
          <div className="chatbot-bubble" role="dialog" aria-label={text.chatbotTitle}>
            <div className="chatbot-header">
              <div className="robot-face" aria-hidden="true">
                <span />
                <i />
              </div>
              <div>
                <h3>{text.chatbotTitle}</h3>
                <p>{text.chatbotCopy}</p>
              </div>
              <button
                className="chatbot-close"
                type="button"
                aria-label={text.menuClose}
                onClick={() => setChatOpen(false)}
              >
                <X size={17} />
              </button>
            </div>
            <div className="starter-row">
              {[text.chatbotStarterOne, text.chatbotStarterTwo, text.chatbotStarterThree].map(
                (starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => askPortfolioBot(starter)}
                    disabled={chatLoading}
                  >
                    {starter}
                  </button>
                ),
              )}
            </div>
            <div className="chat-window" aria-live="polite">
              {chatMessages.length === 0 ? (
                <div className="chat-message assistant">
                  <span>{text.chatbotPlaceholder}</span>
                  <small>{text.chatbotPrivacyNote}</small>
                </div>
              ) : (
                chatMessages.map((message, index) => (
                  <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                    {message.content}
                  </div>
                ))
              )}
              {chatLoading && (
                <div className="chat-message assistant loading">
                  <LoaderCircle size={16} />
                  {text.chatbotLoading}
                </div>
              )}
            </div>
            <form
              className="chat-form"
              onSubmit={(event) => {
                event.preventDefault();
                askPortfolioBot();
              }}
            >
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder={text.chatbotPlaceholder}
                maxLength={500}
              />
              <button type="submit" disabled={!chatInput.trim() || chatLoading}>
                <Send size={17} />
                {text.chatbotSend}
              </button>
            </form>
          </div>
        )}
        <button
          className="robot-launcher"
          type="button"
          aria-label={text.chatbotLabel}
          onClick={() => setChatOpen((value) => !value)}
        >
          {!chatOpen && <span className="robot-teaser">{text.chatbotTeaser}</span>}
          <span className="robot-antenna" />
          <span className="robot-eyes">
            <i />
            <i />
          </span>
          <span className="robot-mouth" />
        </button>
      </aside>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
