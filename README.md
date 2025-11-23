# HanSung Portfolio

프론트엔드 / 웹 개발자로서의 이력과 프로젝트를 한눈에 볼 수 있도록 만든 개인 포트폴리오 사이트입니다.  
GitHub Pages를 통해 배포되어 **이력서 · 자기소개서 · 프로젝트 소개**를 한 페이지에서 인쇄까지 할 수 있게 구성했습니다.

> 🔗 배포 주소: https://hansung1997.github.io/portfolio/

---

## 주요 특징

### 1. 타이틀 섹션 (Title / Hero)
- 상단에 HAN SUNG 이름과 역할(Front-end Developer)을 강조하는 메인 섹션
- 간단한 한 줄 소개 + “프로젝트 보러가기” 버튼
- 상단 네비게이션: `Projects / About / Contact` + `Print` 버튼

### 2. 이력서 페이지 (Resume)
- 실제 이력서 형식을 참고하여 구성한 섹션
- **Personal Info**
  - 이름, 생년월일, 성별, 사용 언어 등 기본 정보
- **Contact**
  - 전화번호, 이메일, GitHub, 주소
- **Education**
  - 인하공업전문대학 컴퓨터정보과 (2023–2026 예정)
- **Experience**
  - 학부 팀 프로젝트 및 개인 프로젝트 내용 요약
- **Skills**
  - Java, JavaScript, C#, Python 기초
  - JSP/Servlet, Spring Boot, REST API 연동
  - MySQL 기초 쿼리 및 테이블 설계 경험
- **Certificates**
  - ITQ 정보기술자격  
  - 컴퓨터활용능력 2급  
  - 정보처리기능사  

### 3. 자기소개 페이지 (Introduction)
- 자기소개서 형식의 문단으로 구성
- 실생활에 바로 사용할 수 있는 프로그램을 만드는 목표,  
  프로젝트를 진행하는 방식, 공부 방향(어학·기술) 등을 서술

### 4. 프로젝트 페이지 (Projects)
아래 프로젝트들을 카드 형태로 정리했습니다.  

- **고졸 검정고시 앱**
  - 개인 프로젝트
  - 사용 기술: Java, Android Studio  
  - 시험 문제 풀이 및 오답 체크 기능

- **식당 모바일 주문 시스템**
  - 팀 프로젝트
  - 사용 기술: Java, JSP, MySQL  
  - QR 코드 기반 테이블 주문, 관리자 화면에서 주문/조리/완료 상태 실시간 확인

- **OCR 실시간 번역 프로그램**
  - 개인 프로젝트
  - 사용 기술: Python, EasyOCR, Tkinter  
  - 게임 화면 일부를 캡처해 영어 텍스트를 인식·번역한 뒤 오버레이 창으로 실시간 표시

각 프로젝트 카드를 클릭하면 **아래로 확장되면서 최대 3장의 스크린샷이 3열 레이아웃으로 표시**됩니다.  
다시 클릭하면 접히는 토글 방식입니다.

---

## 인쇄 지원 (Print-friendly)

- 헤더 우측 `Print` 버튼 클릭 시 브라우저 인쇄 다이얼로그가 열립니다.
- 인쇄 모드에서는:
  - 배경이 **흰색**, 텍스트는 **검은색**으로 변경
  - 화면 전용 UI(헤더, 일부 배경 등)는 숨김
  - 프로젝트 카드 확장 영역(스크린샷)은 자동으로 숨겨져  
    **깔끔한 이력서 + 자기소개서 + 프로젝트 요약 텍스트만** 인쇄되도록 설정

---

## 기술 스택

- **Frontend**
  - React
  - Vite
- **Styling**
  - 커스텀 CSS (다크 테마, 카드 레이아웃, 인쇄용 스타일)
- **배포**
  - GitHub Pages

---

## 프로젝트 구조 (요약)

```bash
my-portfolio/
├─ public/
├─ src/
│  ├─ assets/
│  │  ├─ hsj.jpg          # 프로필 이미지 등
│  ├─ App.jsx
│  ├─ App.css
│  ├─ Portfolio.jsx       # 메인 포트폴리오 페이지 (타이틀/이력서/자기소개/프로젝트)
│  ├─ main.jsx
│  └─ index.css
├─ vite.config.js         # GitHub Pages용 base 설정 (/portfolio/)
├─ package.json
└─ README.md
