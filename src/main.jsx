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
  ServerCog,
  Smartphone,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "소개", href: "#about" },
  { label: "기술스택", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락처", href: "#contact" },
];

const skillGroups = [
  {
    title: "Backend",
    icon: ServerCog,
    items: ["Spring Boot", "REST API", "JPA", "Security", "Architecture"],
  },
  {
    title: "ML/DL & AI",
    icon: BrainCircuit,
    items: ["Machine Learning", "Deep Learning", "Model Training", "Python", "Data Pipeline"],
  },
  {
    title: "Frontend & App",
    icon: Layers,
    items: ["React", "Vite", "React Native", "Responsive UI", "State Design"],
  },
  {
    title: "Data & Infra",
    icon: Database,
    items: ["SQL", "API Integration", "Deployment", "Monitoring", "Git"],
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
      "개발자의 역량과 프로젝트를 한눈에 볼 수 있도록 구성한 반응형 홈페이지 프로젝트입니다.",
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
      "모바일 환경의 사용성과 화면 전환 경험을 고려해 제작한 React Native 앱 프로젝트입니다.",
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
        <img className="hero-image" src="/hero-ai-systems.png" alt="" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Backend · ML/DL · AI Developer
          </p>
          <h1 id="hero-title">임종경</h1>
          <p className="hero-copy">
            안정적인 백엔드 구조와 데이터 기반 AI 모델을 연결해, 실제 서비스에서 작동하는 지능형 시스템을 만듭니다.
          </p>
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
          <h2>서비스의 뼈대와 지능을 함께 설계하는 개발자</h2>
          <div className="about-copy">
            <p>
              임종경은 백엔드 개발을 기반으로 ML/DL, AI 프로젝트까지 확장해온 개발자입니다.
              견고한 API, 명확한 데이터 흐름, 모델이 실제 제품 안에서 동작하는 방식에 관심이 많습니다.
            </p>
            <p>
              Spring Boot와 React 생태계를 활용해 웹과 앱을 구현하고, 머신러닝 프로젝트에서는 데이터 전처리부터 모델 평가까지 문제 해결 과정을 직접 다룹니다.
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

      <section id="contact" className="section contact-section">
        <div>
          <div className="section-label">연락처</div>
          <h2>좋은 문제를 함께 풀 준비가 되어 있습니다.</h2>
          <p>
            프로젝트 링크, GitHub, 이메일 주소를 알려주면 바로 실제 연락 정보로 교체할 수 있습니다.
          </p>
        </div>
        <div className="contact-actions">
          <a href="mailto:your-email@example.com">
            <Mail size={18} />
            your-email@example.com
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
