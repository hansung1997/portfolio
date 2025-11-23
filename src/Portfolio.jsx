// src/Portfolio.jsx
import React from "react";
import profileImg from "./assets/hsj.jpg";
import sw from "./assets/sw.png";
import sw2 from "./assets/sw2.png";
import st from "./assets/st.png";
import st2 from "./assets/st2.png";

// 섹션이 화면에 들어올 때 서서히 나타나고, 나가면 다시 사라지게 하는 훅
function useFadeInOnScroll(threshold = 0.2) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}


const projects = [
  {
    title: "고졸 검정고시 앱",
    role: "개인 프로젝트",
    period: "2021",
    tech: "java · Android Studio",
    description:
      "시험 문제를 풀고, 틀린 문제를 체크하여 학습할 수 있게끔 만들었습니다.",
  },
  {
    title: "식당 모바일 주문 시스템",
    role: "팀 프로젝트",
    period: "2024",
    tech: "Java · JSP · MySQL",
    description:
      "식당 테이블마다 QR코드를 비치하고, 고객이 휴대폰으로 메뉴를 주문하면 관리자 화면에서 주문 내역과 상태를 확인할 수 있는 웹 기반 주문 시스템입니다. 주문 상태(주문 · 조리중 · 완료)를 실시간으로 갱신할 수 있게 설계했습니다.",
    images:[sw,sw2],
  },
  
  {
    title: "OCR 실시간 번역 프로그램",
    role: "개인 프로젝트",
    period: "2024",
    tech: "Python · EasyOCR · Tkinter",
    description:
      "게임 화면의 일부를 캡처해 영어 텍스트를 인식하고, 한국어로 번역한 결과를 오버레이 창으로 바로 띄워주는 도구입니다. 실시간 번역, 오버레이 위치/크기 조절, 단축키로 켜고 끄는 기능을 구현했습니다.",
    images:[st2,st],
  }
];

const rootStyle = {
  backgroundColor: "#050816",
  color: "#e5e7eb",
  minHeight: "100vh",
  width: "100%",          //100vw xx
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  // overflowX: "hidden",  // 이 줄은 지우고, body에서만 처리
};


const pageContainer = {
  maxWidth: "960px",
  margin: "0 auto",
  padding: "64px 16px 40px",
};

const cardStyle = {
  backgroundColor: "#020617",
  borderRadius: "16px",
  border: "1px solid #111827",
  padding: "24px 24px 20px",
  boxShadow: "0 18px 40px rgba(0,0,0,0.5)",
};

/* ----------------- 공통 헤더 ----------------- */
function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#050816",
        borderBottom: "1px solid #111827",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            fontWeight: 800,
            color: "#f9fafb",
            textDecoration: "none",
            letterSpacing: "0.08em",
            fontSize: "14px",
          }}
        >
          &lt;HanSung /&gt;
        </a>

        <nav
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "14px",
            alignItems: "center",
          }}
        >
          <a
            href="#projects"
            style={{ color: "#e5e7eb", textDecoration: "none" }}
          >
            Projects
          </a>
          <a
            href="#intro"
            style={{ color: "#e5e7eb", textDecoration: "none" }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{ color: "#e5e7eb", textDecoration: "none" }}
          >
            Contact
          </a>

          {/* 👉 인쇄 버튼 추가 부분 */}
          <button
            type="button"
            onClick={() => window.print()}
            style={{
              color: "#e5e7eb",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              padding: 0,
            }}
          >
            Print
          </button>
        </nav>
      </div>
    </header>
  );
}


/* ----------------- 1. 타이틀 페이지 ----------------- */
function TitlePage() {
  const { ref, isVisible } = useFadeInOnScroll(0.2);
  return (
    <section
      id="top"
      ref={ref}
      className="no-print"
      style={{
        ...pageContainer,
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            color: "#9ca3af",
            marginBottom: "12px",
          }}
        >
          FRONT-END DEVELOPER
        </p>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "#f9fafb",
            marginBottom: "12px",
          }}
        >
          HAN SUNG
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#d1d5db",
            maxWidth: "520px",
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}
        >
          직관적인 UI와 가벼운 성능을 지향하는 프론트엔드 개발자입니다. 학교에서
          진행한 프로젝트들을 통해 실제로 동작하는 서비스를 만드는 경험을 쌓고
          있습니다.
        </p>
        <a
          href="#projects"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "999px",
            backgroundColor: "#ec4899",
            color: "#f9fafb",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          프로젝트 보러가기
        </a>
      </div>
    </section>
  );
}

/* ----------------- 2. 이력서 페이지 ----------------- */
function ResumePage() {
  const { ref, isVisible } = useFadeInOnScroll(0.2);
  return (
    <section id="resume" className="print-page" style={pageContainer}>
      <div 
        className="print-keep"
        ref={ref}
        style={{
        ...pageContainer,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",}}>
        {/* 상단 이름 / 타이틀 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: "6px",
              }}
            >
              RESUME
            </p>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#f9fafb",
                marginBottom: "4px",
              }}
            >
              HAN SUNG JAE
            </h1>
            <p
              style={{
                fontSize: "13px",
                color: "#d1d5db",
              }}
            >
              Front-end Developer
            </p>
          </div>
          {/* 프로필 동그라미 자리 */}
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "999px",
              overflow: "hidden",          // 둥근 모양 안으로 잘라주기
              border: "1px solid #1f2937",
              backgroundColor: "#e5e7eb",  // 인쇄 시에도 밝게
            }}
          >
            <img
              src={profileImg}
              alt="Han Sung Jae"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

        </div>

        {/* 좌우 2컬럼 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "32px",
          }}
        >
          {/* 왼쪽 : 인적사항 / 연락처 */}
          <div style={{ fontSize: "13px", lineHeight: 1.7 }}>
            {/* Personal Info */}
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                }}
              >
                Personal Info
              </h3>
              <dl style={{ color: "#d1d5db" }}>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Name</dt>
                  <dd>한성재</dd>
                </div>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Birth</dt>
                  <dd>2000.11.24</dd>
                </div>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Gender</dt>
                  <dd>Male / Female</dd>
                </div>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Language</dt>
                  <dd>Korean, English (basic)</dd>
                </div>
              </dl>
            </div>

            {/* Contact */}
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                }}
              >
                Contact
              </h3>
              <dl style={{ color: "#d1d5db" }}>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Phone</dt>
                  <dd>010-3708-7965</dd>
                </div>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Mail</dt>
                  <dd>gkstjdwo9075@naver.com</dd>
                </div>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>GitHub</dt>
                  <dd>github.com/hansung1997</dd>
                </div>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Address</dt>
                  <dd>Incheon, South Korea</dd>
                </div>
              </dl>
            </div>

            {/* Languages */}
            <div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                }}
              >
                Languages
              </h3>
              <ul style={{ color: "#d1d5db", paddingLeft: "16px" }}>
                <li>Korean — Native</li>
                <li>English — Studying (IELTS 준비 중)</li>
              </ul>
            </div>
          </div>

          {/* 오른쪽 : 학력 / 경력 / 스킬 */}
          <div style={{ fontSize: "13px", lineHeight: 1.7 }}>
            {/* Education */}
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                  borderBottom: "1px solid #111827",
                  paddingBottom: "4px",
                }}
              >
                Education
              </h3>
              <div style={{ marginTop: "6px" }}>
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>
                  2023 – 2026 (예정)
                </p>
                <p style={{ fontWeight: 600, color: "#e5e7eb" }}>
                  인하공업전문대학 컴퓨터정보과
                </p>
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>
                  Web / Network / AI 관련 과목 수강, 팀 프로젝트 진행
                </p>
              </div>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                  borderBottom: "1px solid #111827",
                  paddingBottom: "4px",
                }}
              >
                Experience
              </h3>
              <div style={{ marginTop: "6px" }}>
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>
                  2024 – 현재
                </p>
                <p style={{ fontWeight: 600, color: "#e5e7eb" }}>
                  학부 / 개인 웹 프로젝트
                </p>
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>
                  식당 주문 시스템, PC 연동 제어, OCR 번역 도구 등
                  실사용을 목표로 한 프로젝트를 진행했습니다.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                  borderBottom: "1px solid #111827",
                  paddingBottom: "4px",
                }}
              >
                Skills
              </h3>
              <ul style={{ color: "#d1d5db", paddingLeft: "16px" }}>
                <li>Java, JavaScript, C#, Python 기초</li>
                <li>JSP/Servlet, Spring Boot, 간단한 REST API 연동</li>
                <li>MySQL 기초 쿼리 작성, 테이블 설계 경험</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
            <p
              style={{
                fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                  marginBottom: "6px",
                  borderBottom: "1px solid #111827",
                  paddingBottom: "4px",
              }}
            >
              자격증
            </p>
              <ul style={{ color: "#d1d5db",fontSize: "12px", paddingLeft: "16px" }}>
                <li>ITQ 정보기술자격</li>
                <li>컴퓨터활용 2급</li>
                <li>정보처리기능사</li>
              </ul>
          </div>
      </div>
    </section>
  );
}

/* ----------------- 3. 자기소개서 페이지 ----------------- */
function IntroPage() {
  const { ref, isVisible } = useFadeInOnScroll(0.2);
  return (
    <section
      id="intro"
      ref={ref}
      className="print-page"
      style={{
        ...pageContainer,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      >
      <div 
        className="print-keep"
        style={{ ...cardStyle, marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "#f9fafb",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          자기소개
        </h2>
        <div
          style={{
            fontSize: "14px",
            color: "#d1d5db",
            lineHeight: 1.8,
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          {/* 자기소개서 내용 */}
          <p style={{ marginBottom: "12px" }}>
            저는 실생활에서 바로 사용할 수 있는 프로그램을 만드는 것에
            관심이 많은 개발자입니다. 식당 주문 시스템, PC 연동 프로그램, OCR
            번역 도구처럼 “지금 당장 쓰일 수 있는 것”을 목표로 프로젝트를
            진행해 왔습니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            프로젝트를 진행할 때는 기능을 빠르게 만드는 것보다, 구조를
            명확하게 나누고 이후에 유지보수하기 쉬운 코드를 작성하는 것을
            중요하게 생각합니다. 팀 프로젝트에서는 화면 설계와 프론트엔드
            구현을 주로 맡았고, 백엔드와의 연동 방식도 함께 설계했습니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            앞으로는 언어 부분에서 능력을 키워서 한국 뿐만이 아닌,
            외국에서도 기회를 잡기 위해, 별도로 어학 능력이나 기술들을 함양시켜 나갈 생각입니다.
          </p>
          <p style={{ marginBottom: "12px" }}> 
            이런 방향성을 바탕으로 학교 수업과 개인 학습을 병행하며
            여러 프로젝트를 계속해서 개선해 나가고 있습니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            개발 과정에서 에러나 막히는 부분이 생기면, 단순히 해결 방법만 검색하기보다
            왜 이런 문제가 발생했는지 원인을 끝까지 추적하려고 합니다. 로그를 남기고,
            하루가 지나면 백업용 폴더 안에 기존 코드들을 전부 집어넣고,
            작은 테스트 코드를 따로 만들어 재현해 보면서, 같은 문제가 다시 생기지 않도록
            구조와 코드를 함께 정리하는 편입니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            협업에서는 일정과 커뮤니케이션을 특히 중요하게 생각합니다. 진행 상황을
            미리 공유하고, 제가 맡은 부분의 한계를 솔직하게 이야기하면서 팀원들과
            역할을 조정해 본 경험이 있습니다. 덕분에 마감이 촉박한 상황에서도
            기능을 포기하기보다, 우선순위를 조정해 핵심 기능부터 안정적으로 완성하는
            방식을 배웠습니다.
          </p>  
        </div>
      </div>
    </section>
  );
}


function ProjectsPage() {
  // 섹션 페이드 인/아웃
  const { ref, isVisible } = useFadeInOnScroll(0.2);
  

  // 어떤 카드가 열려 있는지 (인덱스로 관리)
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={ref}
      className="print-page"
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "64px 16px 40px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Projects 목록 */}
      <section id="projects" style={{ marginBottom: "72px" }}>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: 800,
            color: "#f9fafb",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Projects
        </h2>
        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {projects.map((p, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={p.title}
                className="print-keep"
                onClick={() => handleToggle(idx)}
                style={{
                  borderRadius: "16px",
                  border: "1px solid #111827",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.8))",
                  padding: "20px 20px 18px",
                  cursor: "pointer",
                  transition: "background 0.2s ease, transform 0.2s ease",
                  transform: isOpen ? "translateY(-1px)" : "translateY(0)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "4px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#f9fafb",
                    }}
                  >
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#9ca3af",
                    }}
                  >
                    {p.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#d1d5db",
                    marginBottom: "8px",
                  }}
                >
                  {p.role}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#d1d5db",
                    lineHeight: 1.7,
                    marginBottom: "10px",
                  }}
                >
                  {p.description}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#a5b4fc",
                  }}
                >
                  Tech Stack: {p.tech}
                </p>

                {/* ↓ 클릭 시 열리는 영역 (이미지) */}
                {isOpen && (
                  <div
                    className="project-extra"
                    style={{
                      marginTop: isOpen ? "14px" : "0px",
                      maxHeight: isOpen ? "420px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      overflow: "hidden",
                      transition:
                        "max-height 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gap: "8px",
                      }}
                    >
                      {(p.images || (p.image ? [p.image] : []))
                        .slice(0, 3)
                        .map((src, i) => (
                          <div
                            key={i}
                            style={{
                              borderRadius: "12px",
                              overflow: "hidden",
                              border: "1px solid #111827",
                              aspectRatio: "1 / 1",
                            }}
                          >
                            <img
                              src={src}
                              alt={`${p.title} 이미지 ${i + 1}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact + Footer를 한 덩어리로 */}
      <div className="print-keep">
        <section
          id="contact"
          style={{ textAlign: "center", marginBottom: "24px" }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#f9fafb",
              marginBottom: "12px",
            }}
          >
            Contact
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#d1d5db",
              marginBottom: "12px",
            }}
          >
            관련 문의는 메일로 연락해 주세요.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <a
              href="mailto:gkstjdwo9075@naver.com"
              style={{
                fontSize: "14px",
                color: "#93c5fd",
                textDecoration: "underline",
              }}
            >
              gkstjdwo9075@naver.com
            </a>
            <a
              href="#top"
              style={{
                fontSize: "14px",
                color: "#a5b4fc",
                textDecoration: "underline",
              }}
            >
              메인 화면
            </a>
          </div>
        </section>

        <p
          style={{
            fontSize: "11px",
            color: "#6b7280",
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          © {new Date().getFullYear()} Han Sung. All rights reserved.
        </p>
      </div>
    </section>
  );
}


/* ----------------- 최상위 : 타이틀 → 이력서 → 자기소개서 → 프로젝트 ----------------- */
export default function Portfolio() {
  return (
    <div style={rootStyle}>
      <Header />
      <TitlePage />
      <ResumePage />
      <IntroPage />
      <ProjectsPage />
    </div>
  );
}
