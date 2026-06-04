# 🚀 UniGrow - 대학생 자기계발 및 자아 성장 포털

대학생들이 길을 잃지 않고 체계적으로 학업 학점, 포트폴리오, 대외활동, 웰니스 균형을 관리할 수 있도록 지원하는 고성능 자아발람 및 실행력 강화 랜딩 페이지 빌더입니다.  
본 프로젝트는 **GitHub 저장소 연동 및 Vercel 정적 호스팅(Static Hosting)**에 100% 최적화되어 있습니다.

---

## ✨ 핵심 기능 (Features)

1. **지능형 1분 성장 유형 진단 (Quiz)**: 대학 생활 중 흥미, 우려, 성취감 스타일을 분석해 "학문 탐색가", "실전 하이퍼 메이커", "글로벌 네트워커", "웰니스 수호자" 등의 맞춤 유형 진단과 최우선 실천 전략 도출.
2. **분야별 & 학년별 커스텀 로드맵 (Roadmap)**: 취업/포트폴리오, 대외활동, 어학/자격증, 웰니스 4대 트랙의 학년별 마일스톤 설계 및 이수 여부 트래킹(LocalStorage에 자동 저장되어 정보 영구 유지).
3. **마이 에브리데이 대시보드 (Habit & D-Day)**: 루틴 성장을 위한 실천 습관 추가 및 달성 스트릭 트랙, 주요 학술 행사/공모전 마감일 D-Day 관리 기능.
4. **엄선 리소스 아카이브 (Resource Hub)**: 링커리어, 캠퍼즈, 아웃캠퍼스, K-MOOC 등 대한민국 대학생이 무조건 알아야 하는 알쩌 리포트 및 사이트 목록 큐레이션 및 검색 필터 탑재.
5. **Vercel 실시간 배포 가이드라인 (Deploy Kit)**: 깃허브 업로드부터 Vercel 배포까지 실시간 가이드 모달 제공.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend Framework**: React 19 (TypeScript)
- **Build System**: Vite 6.0
- **CSS Utility**: Tailwind CSS v4.0 (고성능 디자인 컴파일러 및 커스텀 테마 변수 매핑)
- **Icons Resource**: Lucide Icons
- **Data Hydration**: LocalStorage (습관 체크 및 로드맵 진행 상태 클라이언트 영구 보존)

---

## 📦 로컬 개발 서버 기동 방법 (Getting Started)

프로젝트를 로컬 환경에 다운로드 받아 기동하려면 다음 명령을 순서대로 실행하세요.

```bash
# 1. 의존성 패키지 설치
npm install

# 2. 로컬 개발 서버 실시간 가동 (http://localhost:3000)
npm run dev

# 3. 배포용 정적 파일 빌드 (dist/ 디렉토리에 빌드 완료)
npm run build
```

---

## 🌎 1. GitHub 저장소에 밀어넣기 (Push to GitHub)

GitHub에 코드를 푸시하기 전에, 가급적 터미널에서 다음 명령을 연속으로 입력해 코드를 저장소에 반영하세요.

```bash
# 로컬 Git 저장소 초기화
git init

# 모든 소스 파일 스테이징
git add .

# 원격 커밋 생성
git commit -m "feat: 대학생 자기계발 서비스 UniGrow 런칭 준비 완료"

# 메인 브랜치 설정
git branch -M main

# 내 원격 레포지토리 주소 바인딩 (유저 정보는 사용자 명의에 맞게 수정)
git remote add origin https://github.com/귀하의깃허브ID/레포지토리이름.git

# 코드 최종 푸시
git push -u origin main
```

---

## ⚡ 2. Vercel에 30초 만에 완벽 배포하기 (Deploy via Vercel)

Vercel은 본 프로젝트와 같은 Vite 기반 Single Page Application(SPA)의 배포를 세계에서 가장 빠르고 간편하게 완료하도록 가이드해 줍니다. 배포 비용은 **평생 무료**입니다.

### [A] Vercel Dashboard 웹 연동으로 배포하기 (인기 방식)
1. **[Vercel](https://vercel.com) 홈페이지**에 접속하여 회원가입을 완료합니다 (GitHub 계정으로 가입하는 것을 권장합니다).
2. 대시보드 화면 우측 상단에서 **[Add New] ➜ [Project]**를 선택합니다.
3. 앞에서 코드를 푸시해둔 GitHub의 레포지토리를 찾아 목록에서 **[Import]** 버튼을 클릭합니다.
4. **Framework Preset**의 설정이 `Vite`로 정상 인식되었는지 확인합니다 (기본 인식됩니다).
5. Build and Output Settings나 Environment Variables(기본 상태에서 사용되는 기기 비밀키는 필요로 하지 않으므로 빈칸으로 패스)는 그냥 **기본값**으로 둡니다.
6. 하단의 **[Deploy]** 버튼을 클릭하면, 단 1분 만에 글로벌 CDN을 통해 실시간 공유 가능한 도메인 주소가 발급되며 배포가 전격 마감됩니다!

### [B] Vercel CLI 사용하여 터미널에서 즉시 배포하기
```bash
# Vercel 글로벌 빌더 도구 설치
npm install -g vercel

# 프로젝트 디렉토리에서 바로 vercel 로그인 및 배포 기동
vercel
```
터미널의 질문들에 전부 `Y` 혹은 `Enter`를 통해 긍정 응답하고 나면, 찰나의 정적 압축 빌드 과정과 함께 실시간 운영 URL 주소가 터미널에 프린팅됩니다.

---

## 📝 라이선스 (License)

본 프로젝트는 Apache-2.0 라이선스를 준수하며, 상업적 및 비상업적 목적의 포크와 커스텀 배포를 자유롭게 허용합니다.
멋진 대학생들의 자기계발 성공 여정을 진심으로 응원합니다! 🎓🏆
