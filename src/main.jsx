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

const navItems = [
  { label: "소개", href: "#about" },
  { label: "기술스택", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "교육", href: "#education" },
  { label: "연락처", href: "#contact" },
];

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
      "도메인 중심 설계와 안정적인 API 흐름을 목표로 만든 Spring Boot 기반 백엔드 프로젝트입니다.",
    tags: ["Spring Boot", "Java", "JPA", "REST API"],
  },
  {
    title: "Portfolio Website",
    type: "Website",
    icon: Code2,
    description:
      "개발자의 역량과 프로젝트를 직관적으로 보여주는 반응형 홈페이지 프로젝트입니다.",
    tags: ["React", "Vite", "CSS", "UI"],
  },
  {
    title: "React Web Application",
    type: "Frontend",
    icon: Terminal,
    description:
      "사용자 흐름과 컴포넌트 구조를 중심으로 구현한 React 기반 웹 애플리케이션입니다.",
    tags: ["React", "JavaScript", "Component", "SPA"],
  },
  {
    title: "React Native Mobile App",
    type: "Mobile",
    icon: Smartphone,
    description:
      "모바일 사용성과 화면 전환 흐름을 고려해 제작한 React Native 앱 프로젝트입니다.",
    tags: ["React Native", "Mobile", "App UX", "API"],
  },
  {
    title: "Machine Learning Project",
    type: "AI",
    icon: BrainCircuit,
    description:
      "데이터 전처리, 모델 학습, 성능 평가를 거쳐 문제 해결 가능성을 검증한 머신러닝 프로젝트입니다.",
    tags: ["Python", "ML", "Data", "Evaluation"],
  },
];

const educationPrograms = [
  {
    period: "2026. 04 ~ 2026. 09",
    title: "헬스케어 데이터 기반 인공지능 디지털 의료 웹 서비스 개발자 양성과정",
    organization: "넥스트러너스평생교육시설",
    details: [
      "Python을 활용한 헬스케어 데이터 분석 및 시각화",
      "Database를 활용한 헬스케어 데이터 분석",
      "헬스케어 데이터 기반 분석 및 시각화 미니 프로젝트",
      "진료 기록 요약을 위한 자연어 처리(NLP)",
    ],
  },
  {
    period: "2025. 06 ~ 2025. 06",
    title: "AWS TechCamp",
    organization: "AWS",
    details: [
      "처음 시작하는 AWS: 기초부터 웹 서비스 구축까지",
      "서버리스로 가속하는 현대적 웹 애플리케이션 구축",
      "손쉬운 Agent 조합으로 복잡한 문제를 해결하는 스마트 비서 만들기",
      "Amazon Q 개발자 워크샵 - Q-Words 앱 구축하기",
      "제조업, 여행 및 숙박업 사례 기반 디지털 전환 워크샵",
    ],
  },
  {
    period: "2024. 04 ~ 2024. 09",
    title: "(디지털컨버전스) 공공데이터 융합 자바개발자 양성과정 A30",
    organization: "KH정보교육원",
    details: [
      "Java, SQL, 데이터베이스, 네트워크 프로그래밍",
      "UI 디자인 및 구현, 서버 프로그램 구현",
      "요구사항 확인, 화면 구현, 통합 구현",
      "공공데이터 활용 프로젝트, 애플리케이션 테스트 및 배포",
    ],
  },
];

const academicHistory = [
  {
    period: "2022. 03 ~ 2026. 02",
    status: "졸업",
    title: "장로회신학대학교 신학대학원",
    description: "신학과 석사과정(3년제)",
  },
  {
    period: "2018. 03 ~ 2022. 02",
    status: "졸업",
    title: "장로회신학대학교",
    description: "신학과 편입",
  },
  {
    period: "2016. 03 ~ 2018. 02",
    status: "중퇴",
    title: "호남신학대학교",
    description: "신학과 재학 후 장로회신학대학교 편입",
  },
  {
    period: "2012",
    status: "졸업",
    title: "영동일고등학교",
    description: "고등학교 졸업",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="임종경 포트폴리오 홈">
          <span className="brand-mark">J</span>
          <span>Lim Jongkyung</span>
        </a>
        <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
            <img src={assetPath("profile.jpeg")} alt="임종경 프로필 사진" />
            <div>
              <h1 id="hero-title">임종경</h1>
              <p className="hero-copy">
                문제를 해결하고 효율을 만드는 백엔드, AI 개발자!
              </p>
            </div>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              프로젝트 보기
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-link" href="#contact">
              연락하기
            </a>
          </div>
        </div>
        <div className="hero-status" aria-label="핵심 역량">
          <span>API</span>
          <span>Model</span>
          <span>Service</span>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-label">소개</div>
        <div className="about-grid">
          <h2>문제 해결을 서비스로 구현하는 개발자</h2>
          <div className="about-copy">
            <p>
              백엔드 개발을 기반으로 ML/DL, AI 프로젝트까지 확장해온 개발자입니다.
              견고한 API, 명확한 데이터 흐름, 실제 서비스에 적용되는 모델 구조를 함께 고민합니다.
            </p>
            <p>
              Spring Boot와 React 생태계를 활용해 웹과 앱을 구현하고, 머신러닝 프로젝트에서는 데이터 전처리부터 모델 평가까지 직접 다룹니다.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <div>
            <div className="section-label">기술스택</div>
            <h2>Build, learn, deploy.</h2>
          </div>
          <p>백엔드 안정성, AI 실험력, 프론트 구현력을 한 프로젝트 흐름 안에서 연결합니다.</p>
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
            <div className="section-label">프로젝트</div>
            <h2>Selected work</h2>
          </div>
          <p>프로젝트 상세 링크와 저장소 주소는 준비되는 대로 각 카드에 연결할 수 있습니다.</p>
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
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="project-link" href="#contact" aria-label={`${project.title} 문의하기`}>
                  자세히 논의하기
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="education" className="section education-section">
        <div className="section-heading">
          <div>
            <div className="section-label">교육 및 학력</div>
            <h2>Learning timeline</h2>
          </div>
          <p>
            Java 백엔드, 헬스케어 AI, AWS 클라우드까지 실무형 학습 경험을 쌓았습니다.
          </p>
        </div>
        <div className="timeline-layout">
          <div>
            <h3 className="timeline-title">교육</h3>
            <div className="timeline-list">
              {educationPrograms.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <span className="timeline-period">{item.period}</span>
                  <h4>{item.title}</h4>
                  <p>{item.organization}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="timeline-title">학력</h3>
            <div className="timeline-list compact">
              {academicHistory.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <div className="academic-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span>{item.status}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <div className="section-label">연락처</div>
          <h2>함께 풀 문제를 기다리고 있습니다.</h2>
          <p>
            백엔드, AI, 웹 서비스 프로젝트와 관련해 편하게 연락 주세요.
          </p>
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
