import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Mail,
  Menu,
  Phone,
  ServerCog,
  Smartphone,
  Sparkles,
  Terminal,
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
    projectsCopy: "웹사이트, 앱스토어, PDF 자료를 각 프로젝트 카드에서 바로 확인할 수 있습니다.",
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
    projectsCopy: "Open live websites, App Store pages, and project PDFs directly from each project card.",
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
    items: ["sklearn", "numpy", "pandas", "seaborn", "matplotlib", "Pytorch"],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "React-Native", "Vite", "Expogo", "HTML", "CSS", "JavaScript", "AJAX"],
  },
  {
    title: "Data & Infra",
    icon: Database,
    items: ["MySQL", "OracleDB", "Git", "GitHub Codespace", "firebase"],
  },
];

const projects = [
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
    links: [
      {
        label: localized("사용자 페이지", "User Page"),
        href: "https://refreshmarket.168-107-2-100.sslip.io/",
      },
      {
        label: localized("관리자 페이지", "Admin Page"),
        href: "https://refreshmarket-management.168-107-49-23.sslip.io/",
      },
      {
        label: localized("포트폴리오 PDF", "Portfolio PDF"),
        href: assetPath("company-portfolio.pdf"),
      },
    ],
    testAccount: {
      description: localized(
        "사용자 페이지와 관리자 페이지를 모두 체험할 수 있는 테스트 계정입니다.",
        "Use this test account to explore both the user and admin pages.",
      ),
      username: "portfolio",
      password: "portfolio1234",
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
    links: [
      {
        label: localized("사이트 보기", "View Site"),
        href: "https://sjs-biblical-archaeology.web.app/",
      },
    ],
  },
  {
    title: "GodTalk Mobile App",
    type: "Mobile",
    icon: Smartphone,
    description:
      localized(
        "React Native로 개발하고 App Store에 정식 출시한 모바일 앱 프로젝트입니다. 모바일 사용성과 자연스러운 화면 전환 흐름을 고려했으며, 재사용 가능한 컴포넌트와 API 연동을 통해 실제 서비스 형태로 구현했습니다.",
        "A React Native mobile application officially released on the App Store. It features mobile-focused usability, smooth navigation, reusable components, and API integration.",
      ),
    tags: ["React Native", "Expo", "Mobile", "App UX", "API", "App Store"],
    links: [
      {
        label: localized("앱스토어 보기", "View on App Store"),
        href: "https://apps.apple.com/kr/app/godtalk-%EA%B0%93%ED%86%A1/id6757742863",
      },
    ],
  },
  {
    title: "Prediction Model Mini Project",
    type: "AI",
    icon: BrainCircuit,
    description:
      localized(
        "데이터 전처리, 모델 학습, 성능 평가를 거쳐 문제 해결 가능성을 검증한 머신러닝 프로젝트입니다.",
        "A machine-learning project covering data preprocessing, model training, and performance evaluation to validate a predictive solution.",
      ),
    tags: ["Python", "sklearn", "pandas", "Evaluation"],
    links: [
      {
        label: localized("PDF 보기", "View PDF"),
        href: assetPath("prediction-mini-project.pdf"),
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
  const text = copy[language];
  const t = (value) =>
    value && typeof value === "object" && "ko" in value ? value[language] : value;

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
                      className="project-link"
                      href={link.href}
                      key={t(link.label)}
                      target="_blank"
                      rel="noreferrer"
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
          <a href={assetPath("company-portfolio.pdf")} target="_blank" rel="noreferrer">
            <Terminal size={18} />
            Portfolio PDF
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Code2 size={18} />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
