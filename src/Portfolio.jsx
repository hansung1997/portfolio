// src/Portfolio.jsx
import React from "react";
import { createPortal } from "react-dom";

import profileImg from "./assets/hsj.jpg";
import sw from "./assets/sw.png";
import sw2 from "./assets/sw2.png";
import st from "./assets/st.png";
import st2 from "./assets/st2.png";
import app2 from "./assets/app2.jpg";
import app3 from "./assets/app3.jpg";

/**
 * 섹션이 화면에 들어올 때 서서히 나타나고(페이드인),
 * 화면에서 나가면 다시 사라지는(페이드아웃) 훅
 * - 인쇄(beforeprint) 시에는 항상 보이도록 처리(인쇄 누락 방지)
 * - motion reduce 환경은 즉시 표시
 */
function useFadeInOnScroll(threshold = 0.2) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const onBeforePrint = () => setIsVisible(true);
    window.addEventListener("beforeprint", onBeforePrint);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);

    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}

const projects = [
  {
    title: "고졸 검정고시 앱",
    role: "개인 프로젝트",
    period: "2021",
    tech: "Java · Android Studio",
    description: "시험 문제를 풀고, 틀린 문제를 체크하여 학습할 수 있게끔 만들었습니다.",
    images: [app2, app3],
  },
  {
    title: "식당 모바일 주문 시스템",
    role: "팀 프로젝트",
    period: "2024",
    tech: "Java · JSP · MySQL",
    description:
      "식당 테이블마다 QR코드를 비치하고, 고객이 휴대폰으로 메뉴를 주문하면 관리자 화면에서 주문 내역과 상태를 확인할 수 있는 웹 기반 주문 시스템입니다. 주문 상태(주문 · 조리중 · 완료)를 실시간으로 갱신할 수 있게 설계했습니다.",
    images: [sw, sw2],
  },
  {
    title: "OCR 실시간 번역 프로그램",
    role: "개인 프로젝트",
    period: "2024",
    tech: "Python · EasyOCR · Tkinter",
    description:
      "게임 화면의 일부를 캡처해 영어 텍스트를 인식하고, 한국어로 번역한 결과를 오버레이 창으로 바로 띄워주는 도구입니다. 실시간 번역, 오버레이 위치/크기 조절, 단축키로 켜고 끄는 기능을 구현했습니다.",
    images: [st2, st],
  },
];

const rootStyle = {
  backgroundColor: "#050816",
  color: "#e5e7eb",
  minHeight: "100vh",
  width: "100%",
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
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
      className="no-print"
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
          <a href="#projects" style={{ color: "#e5e7eb", textDecoration: "none" }}>
            Projects
          </a>
          <a href="#intro" style={{ color: "#e5e7eb", textDecoration: "none" }}>
            About
          </a>
          <a href="#contact" style={{ color: "#e5e7eb", textDecoration: "none" }}>
            Contact
          </a>

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
          직관적인 UI와 가벼운 성능을 지향하는 프론트엔드 개발자입니다. 학교에서 진행한 프로젝트들을 통해
          실제로 동작하는 서비스를 만드는 경험을 쌓고 있습니다.
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
        className="print-keep anim"
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
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
            <p style={{ fontSize: "13px", color: "#d1d5db" }}>Front-end Developer</p>
          </div>

          {/* 프로필 이미지 */}
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "999px",
              overflow: "hidden",
              border: "1px solid #1f2937",
              backgroundColor: "#e5e7eb",
              flex: "0 0 auto",
            }}
          >
            <img
              src={profileImg}
              alt="Han Sung Jae"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
          {/* 왼쪽 */}
          <div style={{ fontSize: "13px", lineHeight: 1.7 }}>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", color: "#e5e7eb", marginBottom: "6px" }}>
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
                  <dd>Male</dd>
                </div>
                <div style={{ display: "flex" }}>
                  <dt style={{ width: "84px", color: "#9ca3af" }}>Language</dt>
                  <dd>Korean, English (basic)</dd>
                </div>
              </dl>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", color: "#e5e7eb", marginBottom: "6px" }}>
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

            <div>
              <h3 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", color: "#e5e7eb", marginBottom: "6px" }}>
                Languages
              </h3>
              <ul style={{ color: "#d1d5db", paddingLeft: "16px" }}>
                <li>Korean — Native</li>
                <li>English — Studying (IELTS 준비 중)</li>
              </ul>
            </div>
          </div>

          {/* 오른쪽 */}
          <div style={{ fontSize: "13px", lineHeight: 1.7 }}>
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
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>2023 – 2026 (예정)</p>
                <p style={{ fontWeight: 600, color: "#e5e7eb" }}>인하공업전문대학 컴퓨터정보과</p>
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>Web / Network / AI 관련 과목 수강, 팀 프로젝트 진행</p>
              </div>
            </div>

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
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>2024 – 현재</p>
                <p style={{ fontWeight: 600, color: "#e5e7eb" }}>학부 / 개인 웹 프로젝트</p>
                <p style={{ color: "#9ca3af", fontSize: "12px" }}>
                  식당 주문 시스템, PC 연동 제어, OCR 번역 도구 등 실사용을 목표로 한 프로젝트를 진행했습니다.
                </p>
              </div>
            </div>

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

        {/* 자격증 */}
        <div style={{ marginTop: "18px" }}>
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
          <ul style={{ color: "#d1d5db", fontSize: "12px", paddingLeft: "16px" }}>
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
      className="print-page anim"
      style={{
        ...pageContainer,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className="print-keep" style={{ ...cardStyle, marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#f9fafb", marginBottom: "16px", textAlign: "center" }}>
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
          <p style={{ marginBottom: "12px" }}>
            저는 실생활에서 바로 사용할 수 있는 프로그램을 만드는 것에 관심이 많은 개발자입니다. 식당 주문 시스템,
            PC 연동 프로그램, OCR 번역 도구처럼 “지금 당장 쓰일 수 있는 것”을 목표로 프로젝트를 진행해 왔습니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            프로젝트를 진행할 때는 기능을 빠르게 만드는 것보다, 구조를 명확하게 나누고 이후에 유지보수하기 쉬운 코드를
            작성하는 것을 중요하게 생각합니다. 팀 프로젝트에서는 화면 설계와 프론트엔드 구현을 주로 맡았고, 백엔드와의
            연동 방식도 함께 설계했습니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            앞으로는 언어 부분에서 능력을 키워서 한국 뿐만이 아닌, 외국에서도 기회를 잡기 위해 별도로 어학 능력이나
            기술들을 함양시켜 나갈 생각입니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            이런 방향성을 바탕으로 학교 수업과 개인 학습을 병행하며 여러 프로젝트를 계속해서 개선해 나가고 있습니다.
          </p>
          <p style={{ marginBottom: "12px" }}>
            개발 과정에서 에러나 막히는 부분이 생기면, 단순히 해결 방법만 검색하기보다 왜 이런 문제가 발생했는지 원인을
            끝까지 추적하려고 합니다. 로그를 남기고, 작은 테스트 코드를 따로 만들어 재현해 보면서, 같은 문제가 다시
            생기지 않도록 구조와 코드를 함께 정리하는 편입니다.
          </p>
          <p style={{ marginBottom: "0px" }}>
            협업에서는 일정과 커뮤니케이션을 특히 중요하게 생각합니다. 진행 상황을 미리 공유하고, 제가 맡은 부분의 한계를
            솔직하게 이야기하면서 팀원들과 역할을 조정해 본 경험이 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------- 4. Projects + Lightbox ----------------- */
function ProjectsPage() {
  const { ref, isVisible } = useFadeInOnScroll(0.2);

  const [openIndex, setOpenIndex] = React.useState(null);

  // 라이트박스 상태
  const [lightbox, setLightbox] = React.useState({
    open: false,
    images: [],
    index: 0,
    title: "",
  });

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const openLightbox = React.useCallback((images, index, title) => {
    setLightbox({ open: true, images, index, title });
  }, []);

  const closeLightbox = React.useCallback(() => {
    setLightbox((s) => ({ ...s, open: false }));
  }, []);

  // 라이트박스 열렸을 때: 스크롤 잠금 + ESC/좌우키 + 레이아웃 밀림 방지
  React.useEffect(() => {
    if (!lightbox.open) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbarWidth ? `${scrollbarWidth}px` : "0px";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();

      if (e.key === "ArrowLeft") {
        setLightbox((s) => ({
          ...s,
          index: (s.index - 1 + s.images.length) % s.images.length,
        }));
      }

      if (e.key === "ArrowRight") {
        setLightbox((s) => ({
          ...s,
          index: (s.index + 1) % s.images.length,
        }));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox.open, closeLightbox]);

  const currentSrc =
    lightbox.open && lightbox.images?.length ? lightbox.images[lightbox.index] : null;

  return (
    <section
      ref={ref}
      className="print-page anim"
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "64px 16px 40px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {lightbox.open &&
        createPortal(
          <div
            className="lightbox-backdrop no-print"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div className="lightbox-dialog" onClick={(e) => {
                                                        e.stopPropagation();
                                                        openLightbox(imgs, i, p.title);
                                                      }}>
              <button className="lightbox-close" onClick={closeLightbox} type="button">
                ✕
              </button>

              {lightbox.images.length > 1 && (
                <>
                  <button
                    className="lightbox-nav lightbox-prev"
                    type="button"
                    onClick={() =>
                      setLightbox((s) => ({
                        ...s,
                        index: (s.index - 1 + s.images.length) % s.images.length,
                      }))
                    }
                    aria-label="previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="lightbox-nav lightbox-next"
                    type="button"
                    onClick={() =>
                      setLightbox((s) => ({
                        ...s,
                        index: (s.index + 1) % s.images.length,
                      }))
                    }
                    aria-label="next image"
                  >
                    ›
                  </button>
                </>
              )}

              <img
                src={currentSrc}
                alt={`${lightbox.title} 원본 이미지`}
                className="lightbox-img"
                draggable={false}
              />
              <div className="lightbox-caption">
                {lightbox.title} ({lightbox.index + 1}/{lightbox.images.length})
              </div>
            </div>
          </div>,
          document.body
        )}


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

        <div style={{ display: "grid", gap: "20px" }}>
          {projects.map((p, idx) => {
            const isOpen = openIndex === idx;
            const imgs = (p.images || (p.image ? [p.image] : [])).filter(Boolean);

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
                {/* 타이틀/기간 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "4px",
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#f9fafb" }}>{p.title}</h3>
                  <span style={{ fontSize: "12px", color: "#9ca3af" }}>{p.period}</span>
                </div>

                {/* role / desc / tech */}
                <p style={{ fontSize: "13px", color: "#d1d5db", marginBottom: "8px" }}>{p.role}</p>
                <p style={{ fontSize: "13px", color: "#d1d5db", lineHeight: 1.7, marginBottom: "10px" }}>
                  {p.description}
                </p>
                <p style={{ fontSize: "12px", color: "#a5b4fc" }}>Tech Stack: {p.tech}</p>

                {/* 열렸을 때 이미지 썸네일 */}
                {isOpen && imgs.length > 0 && (
                  <div
                    className="project-extra"
                    style={{
                      marginTop: "14px",
                      maxHeight: "560px",
                      opacity: 1,
                      overflow: "hidden",
                      transition:
                        "max-height 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "10px",
                      }}
                    >
                      {imgs.map((src, i) => (
                        <button
                          key={i}
                          type="button"
                          // 여기 중요: onClick이 아니라 onMouseDown에서 열기(닫힘/버블링 충돌 방지)
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openLightbox(imgs, i, p.title);
                          }}
                          onClick={(e) => {
                            // 일부 브라우저에서 click이 추가로 발생하는 경우를 방지
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          style={{
                            padding: 0,
                            border: "1px solid #111827",
                            borderRadius: "14px",
                            overflow: "hidden",
                            background: "#0b1220",
                            cursor: "zoom-in",
                            aspectRatio: "16 / 10",
                            display: "block",
                          }}
                          aria-label={`${p.title} 이미지 크게 보기`}
                        >
                          <img
                            src={src}
                            alt={`${p.title} 이미지 ${i + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact + Footer */}
      <div className="print-keep">
        <section id="contact" style={{ textAlign: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#f9fafb", marginBottom: "12px" }}>
            Contact
          </h2>
          <p style={{ fontSize: "14px", color: "#d1d5db", marginBottom: "12px" }}>
            관련 문의는 메일로 연락해 주세요.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="mailto:gkstjdwo9075@naver.com"
              style={{ fontSize: "14px", color: "#93c5fd", textDecoration: "underline" }}
            >
              gkstjdwo9075@naver.com
            </a>
            <a href="#top" style={{ fontSize: "14px", color: "#a5b4fc", textDecoration: "underline" }}>
              메인 화면
            </a>
          </div>
        </section>

        <p style={{ fontSize: "11px", color: "#6b7280", textAlign: "center", marginTop: "8px" }}>
          © {new Date().getFullYear()} Han Sung. All rights reserved.
        </p>
      </div>
    </section>
  );
}

/* ----------------- 최상위 ----------------- */
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
