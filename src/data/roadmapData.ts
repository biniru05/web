import { Milestone, TrackType } from '../types';

export const roadmapMilestones: Milestone[] = [
  // 1. 취업 & 포트폴리오 (Career & Portfolio)
  {
    id: "cr-01-01",
    title: "직무 기초 진단 & 희망 도메인 선배 인터뷰",
    description: "관심 직군의 현직자 유튜브, 브런치, 커리어 플랫폼 글 5개 정독하고 내 강점과 딜마 매칭하기",
    grade: "1학년",
    track: "career"
  },
  {
    id: "cr-01-02",
    title: "기초 전공 지식 & 실무 독학 입문",
    description: "기초 전공 개념 요약 노션 생성, 마케팅/개발/기획 등 무료 온라인 스타터 코스(K-MOOC 등) 1개 수강하기",
    grade: "1학년",
    track: "career"
  },
  {
    id: "cr-02-01",
    title: "첫 실전 프로덕트 제작 (GitHub 혹은 노션 포트폴리오 기틀 잡기)",
    description: "배운 직무 지식을 토대로 소소하더라도 가시적인 개인 프로젝트 결과물(기획서, 디자인, 코드) 1개 빌딩하기",
    grade: "2학년",
    track: "career"
  },
  {
    id: "cr-02-02",
    title: "직무 기술 블로그 혹은 직무 SNS 개설 및 연재",
    description: "공부하거나 프로젝트를 헤맨 기록들을 정기적으로 velog, 티스토리, 혹은 티스토리에 연재 시작하기",
    grade: "2학년",
    track: "career"
  },
  {
    id: "cr-03-01",
    title: "산학협력 프로젝트 혹은 공모전 도전 추천",
    description: "실제 현업이 출제한 공모전, 기획안 대회, 기업 연계 산학협력 도전에 팀장 혹은 핵심 역할로 참여하기",
    grade: "3학년",
    track: "career"
  },
  {
    id: "cr-03-02",
    title: "직무용 완벽 포트폴리오(V1.0) & 이력서 준비",
    description: "내 모든 주요 학술, 실무 레퍼런스를 담아 한 장짜리 resume와 10페이지 내외 장표 포트폴리오 완성하기",
    grade: "3학년",
    track: "career"
  },
  {
    id: "cr-04-01",
    title: "스타트업 인턴십 혹은 기업 현장실습 주도",
    description: "3~6개월 장단기 직무 인턴십에 투입되어 실무 협업 메커니즘을 경험하고 기업 내부 리포트 1개 분석해보기",
    grade: "4학년",
    track: "career"
  },
  {
    id: "cr-04-02",
    title: "공채/상시 리크루팅 실무 면접 대비 & 포트폴리오 디벨롭",
    description: "모의 면접 스터디, 자소서 최종 다듬기, 포트폴리오 GitHub Pages 구축 등 실전 배포 및 최종 취준 완료하기",
    grade: "4학년",
    track: "career"
  },

  // 2. 대외활동 & 네트워킹 (Activity & Networking)
  {
    id: "act-01-01",
    title: "교내 학회, 중앙 동아리 혹은 과 학생회 1개 수료",
    description: "단체 활동에 적극 참여하며 대인관계 협업 예절을 습득하고 소속 학생들과 유대 형성하기",
    grade: "1학년",
    track: "activity"
  },
  {
    id: "act-01-02",
    title: "대학생 대상 무료 트레이닝&특강 3회 청강",
    description: "정부나 테크 기업들이 주관하는 오프라인 밋업, 토크 콘서트, 자기계발 워크숍 참여해 시야 풀기",
    grade: "1학년",
    track: "activity"
  },
  {
    id: "act-02-01",
    title: "교외 연합 동아리 핵심 부원 선발 및 수료",
    description: "수도권/전국 단위 연합 동아리(기획, 개발, 소통 등)에서 마음 맞는 파트너들을 만나고 다양한 학풍 경험하기",
    grade: "2학년",
    track: "activity"
  },
  {
    id: "act-02-02",
    title: "기업 기자단, 마케터 서포터즈 참여",
    description: "특정 브랜드의 앰배서더/서포터즈로 선발되어 실제 마케팅 리소스를 지원 받고 팀 프로젝트 운영해보기",
    grade: "2학년",
    track: "activity"
  },
  {
    id: "act-03-01",
    title: "전국구 해커톤 혹은 기획 공모전 참가하여 네트워킹",
    description: "무박 2일 혹은 장기 해커톤에 투입되어 다채로운 배경의 사람들과 한팀이 되어 압축적인 성장에 도전하기",
    grade: "3학년",
    track: "activity"
  },
  {
    id: "act-03-02",
    title: "현업자 멘토링 프로그램 참여",
    description: "잇다(itdaa), 코멘토(Comento) 혹은 대학 제휴 링크드인 멘토 프로그램을 통해 커리어를 장기 검증받기",
    grade: "3학년",
    track: "activity"
  },
  {
    id: "act-04-01",
    title: "그로스 연합 밋업 기획자 혹은 연합동아리 '운영진/리더' 등극",
    description: "팔로워에 그치지 않고, 팀이나 네트워크를 직접 가이드하는 리더(회장, 기획팀장)가 되어 주도권 잡기",
    grade: "4학년",
    track: "activity"
  },
  {
    id: "act-04-02",
    title: "링크드인(LinkedIn) 네트워킹 극대화 & 네트워크 자산화",
    description: "그동안 만났던 모든 멘토, 동아리 동료, 현업 관계자를 일촌으로 저장하고 추천사 교환하기",
    grade: "4학년",
    track: "activity"
  },

  // 3. 어학과 자격증 (Language & Certifications)
  {
    id: "lang-01-01",
    title: "대학 필수 기본 필수 교양 뽀개기 & 영어 스터디",
    description: "영어 공인시험 유형을 가볍게 맛보기 위해 영자신문 읽기 모임이나 온라인 회화 튜터링 4주 진행해보기",
    grade: "1학년",
    track: "language"
  },
  {
    id: "lang-01-02",
    title: "기초 컴퓨터 활용 자격증 (컴활, MOS, 워드 등) 확보",
    description: "모든 프로젝트와 업무를 서포트하는 가장 기본적인 문서 작성툴과 스프레드시트 단축키 극복하기",
    grade: "1학년",
    track: "language"
  },
  {
    id: "lang-02-01",
    title: "공인 영어 시험 최초 정식 응시 (TOEIC, OPIc, Toss 등)",
    description: "현재 나의 객관적인 스피킹이나 리스닝 점수를 파악하고, 방학 한달 집중반 스터디 완료해보기",
    grade: "2학년",
    track: "language"
  },
  {
    id: "lang-02-02",
    title: "직무 특성에 맞는 중급/고급 자격증 1차 필기 통과",
    description: "이공계(정보처리기사, SQLD, ADsP), 경영계(재경관리사, 무역영어, CFA Lv1) 등 내 직군의 시그니처 자격 준비",
    grade: "2학년",
    track: "language"
  },
  {
    id: "lang-03-01",
    title: "공인 외국어 원스톱 마감 (TOEIC 850+ 혹은 OPIc IH 이상)",
    description: "취업 준비 시 걸림돌이 되지 않도록 2년 유효기간을 고려해 3학년 하반기에 시그니처 스피킹 점수를 완성하기",
    grade: "3학년",
    track: "language"
  },
  {
    id: "lang-03-02",
    title: "제2외국어 도전 혹은 고급 기사 자격증 최종 실기 합격",
    description: "메이저 기사 자격 취득으로 필수 전공 자질을 입증하거나, 일본어 JPT / 중국어 HSK 보조 무기 마련하기",
    grade: "3학년",
    track: "language"
  },
  {
    id: "lang-04-01",
    title: "글로벌 비즈니스 프레젠테이션 & 영문 이력서(Cover Letter) 마감",
    description: "해외 매체나 영문 자소서를 요구하는 글로벌 기업 공략을 위해 내 직무 성과를 영어로 서술하는 트레이닝",
    grade: "4학년",
    track: "language"
  },
  {
    id: "lang-04-02",
    title: "외국 바이어 통화 모의 실습 혹은 직무 영어 모크 테스트",
    description: "직접 전화 통화, 이메일 어구 사용법 등을 실무 관점으로 브러시업하고 해외 기업 공채 직접 터치다운",
    grade: "4학년",
    track: "language"
  },

  // 4. 웰니스와 일상 균형 (Wellness & Balance)
  {
    id: "bal-01-01",
    title: "수면 위생 구축 & 건강한 식습관 기틀",
    description: "밤샘 과제나 지나친 유흥에서 벗어나 하루 평균 7시간 수면을 유지하는 수면 골든 타임 루틴 구축",
    grade: "1학년",
    track: "balance"
  },
  {
    id: "bal-01-02",
    title: "매일 아침 10분 스트레칭 & 물 1.5L 마시기",
    description: "작지만 아침을 기분 좋게 시작할 수 있는 최우선 오프닝 생체 의식 가동",
    grade: "1학년",
    track: "balance"
  },
  {
    id: "bal-02-01",
    title: "평생 취미용 유산소/근력 운동 1개 정착",
    description: "러닝, 필라테스, 헬스, 수영, 크로스핏 등 나에게 엔도르핀을 선사해 주는 보약 같은 정기 활동 6개월 수강",
    grade: "2학년",
    track: "balance"
  },
  {
    id: "bal-02-02",
    title: "한 달에 도서 2권 완독 습관 설계",
    description: "웹소설이나 유튜브 쇼츠 쇼핑 대신에 인문, 교양, 에세이 도서를 곱씹어 읽으며 장문 해해력 기르기",
    grade: "2학년",
    track: "balance"
  },
  {
    id: "bal-03-01",
    title: "회고 저널링 & 번아웃 체크리스트 정기 작성",
    description: "취업 스트레스와 무력감이 엄습하는 3학년 시기, 일기를 쓰며 심리를 정화하고 스스로 번아웃 점검하기",
    grade: "3학년",
    track: "balance"
  },
  {
    id: "bal-03-02",
    title: "스마트폰 스피드 디톡스 (주말 하루 소셜 미디어 안 하기)",
    description: "타인의 부유한 대외활동 자랑에 휘둘려 도파민에 시달리던 뇌를 꺼주는 완벽한 적막 경험하기",
    grade: "3학년",
    track: "balance"
  },
  {
    id: "bal-04-01",
    title: "매일 감사 일기 3줄 쓰기 & 불안감 해소 명상",
    description: "취업의 문턱에서 쏟아지는 불합격 소식이나 스트레스에 연연하지 않고 마인드 컨트롤 명상(Mindfulness) 진행",
    grade: "4학년",
    track: "balance"
  },
  {
    id: "bal-04-02",
    title: "인생 5년 비전 로드맵 & 웰빙 가치관 보고서 작성",
    description: "나에게 직업이란 어떤 의미인지, 어떤 환경의 회사를 갈지, 나의 가치를 명확히 하여 온전한 웰빙 도달하기",
    grade: "4학년",
    track: "balance"
  }
];
export const tracksInfo = [
  { id: 'career' as TrackType, name: '취업 & 포트폴리오', icon: 'Briefcase', desc: '이론을 넘어 실전 포트폴리오를 만들어가는 무기 장착 로드맵' },
  { id: 'activity' as TrackType, name: '대외활동 & 인맥', icon: 'Compass', desc: '다채로운 연합동아리, 해커톤, 멘토링 속에서 협업 가치 창출하는 로드맵' },
  { id: 'language' as TrackType, name: '어학 & 전문 자격', icon: 'BookOpen', desc: '컴활, 자격증, 영어 공인 성적 등 필살 스펙을 체계적으로 뽀개는 로드맵' },
  { id: 'balance' as TrackType, name: '웰니스 & 루틴 관리', icon: 'Heart', desc: '어떤 번아웃 스트레스 속에서도 수면, 운동, 멘탈을 완벽 수호하는 로드맵' },
];
export const gradesList = ['1학년', '2학년', '3학년', '4학년'] as const;
export type GradeType = typeof gradesList[number];
