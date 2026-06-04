import { ResourceItem } from '../types';

export const curatedResources: ResourceItem[] = [
  {
    id: "res-01",
    title: "링커리어 (Linkareer)",
    description: "대한민국 대표 대외활동, 공모전, 인턴십 채용 정보 아카이브 및 실제 합격 자기소개서 스터디 공간입니다.",
    category: "competitions",
    url: "https://linkareer.com",
    tags: ["공모전", "대외활동", "합격자소서", "필수포털"],
    tips: "조건 필터에서 '학점 무관', '모집 대상 전공' 등을 지정하면 나에게 딱 맞는 틈새 가산점 활동을 빠르게 찾을 수 있어요."
  },
  {
    id: "res-02",
    title: "아웃캠퍼스 (Outcampus)",
    description: "전국 대학 연합 동아리 연계 및 스타트업 서포터즈, 기업 주관 대형 대외 활동이 실시간으로 피드에 올라오는 네이버 최대 커뮤니티입니다.",
    category: "community",
    url: "https://cafe.naver.com/outcampus",
    tags: ["네트워킹", "연합동아리", "서포터즈", "카페"],
    tips: "동아리 모집이 빈번한 3월/9월 초에 '실시간 동아리 팀원 구하기' 게시판을 모니터링하면 수도권 우수 모임 선점이 가능합니다."
  },
  {
    id: "res-03",
    title: "캠퍼즈 (Campuz)",
    description: "학문적 공모전 정보와 대학 연합 공모전 팀원 빌딩을 지원하는 유서 깊은 교육 공모 사이트입니다.",
    category: "competitions",
    url: "http://www.campuz.net",
    tags: ["팀빌딩", "아이디어공모전", "인문사회", "기획서"],
    tips: "팀원이 없어도 '공모전 동행 구인' 피드에 내 직무와 강점을 상세히 명기하면 우수한 포트폴리오를 보유한 기획자를 사귈 수 있습니다."
  },
  {
    id: "res-04",
    title: "K-MOOC (한국형 무상 온라인 공개강좌)",
    description: "서울대, 카이스트, 고려대 등 국내 최고 명문 대학 교수진 핵심 전공 강좌를 비용 없이 무료로 무제한 수강할 수 있는 공공 플랫폼.",
    category: "education",
    url: "http://www.kmooc.kr",
    tags: ["대학강의", "무료교육", "인공지능", "수료증"],
    tips: "학점 인정 교육 과정도 많으니 꼭 조회하세요. 이수 시 공인 수료증 출력 및 자소서 전공 선행학습 증명서로 유용합니다."
  },
  {
    id: "res-05",
    title: "인프런 (Inflearn)",
    description: "IT 개발, 백엔드/프런트엔드 스택, 데이터 엔지니어링, 블랜더 디자인, 마케팅 실무 등 최고 수준의 현직 전문가 비디오 강좌 스토어.",
    category: "education",
    url: "https://www.inflearn.com",
    tags: ["코딩", "디자인", "직무실무", "동영상강의"],
    tips: "무료 강의 필터도 수천 개가 배치되어 있습니다. '로드맵' 기능을 타면 왕초보부터 상급 어플리케이션 배포까지 순차 수강 가이드가 정교합니다."
  },
  {
    id: "res-06",
    title: "러너스 가이드 - 부스트캠프 (Boostcamp)",
    description: "네이버 커넥트재단이 주최하는 국내 최고 수준의 실무 IT 정예 아카데미로, 우수 이수 시 테크 기업 인턴 연계 제공.",
    category: "education",
    url: "https://boostcamp.connect.or.kr",
    tags: ["부트캠프", "네이버", "인공지능", "웹풀스택"],
    tips: "기초 자가진단 합격을 위해 입과 전 베이직 프로그래밍 개념 및 자료구조 수련이 강력하게 필요합니다."
  },
  {
    id: "res-07",
    title: "한국장학재단 (KOSAF)",
    description: "국가장학금, 국가 근로 장학금, 저금리 대학생 학자금 대출 및 다채로운 인재 육성 지원 프로그램을 운영하는 공적 허브.",
    category: "scholarships",
    url: "http://www.kosaf.go.kr",
    tags: ["장학금", "국가근로", "지원금", "공공포털"],
    tips: "매기 학기가 끝나는 6월과 11월에 1차 신청이 오픈됩니다. 가구원 동의를 미리 해두어야 지급 지연을 예방할 수 있어요."
  },
  {
    id: "res-08",
    title: "드림스폰 (DreamSpon)",
    description: "정부 장학금 외에 민간 기업, 공익 재단, 지자체에서 출연하는 수만 개의 알짜배기 장학금 정보를 일목요연하게 큐레이션해주는 서비스.",
    category: "scholarships",
    url: "https://www.dreamspon.com",
    tags: ["외부장학", "보조금", "생활비지원", "스토리장학"],
    tips: "학점이 조금 낮거나 가구 소득 초과자도 에세이나 스토리 텔링을 통해 받을 수 있는 '민간 기업 장학금' 전용 필터를 사용해보세요."
  }
];
export const quotesList = [
  { text: "하루에 1%씩만 어제보다 나아진다면, 1년 뒤에는 37배 성장한 자신을 만나게 됩니다.", author: "제임스 클리어 (아주 작은 습관의 힘)" },
  { text: "길이 없으면 길을 찾고, 찾아도 없으면 직접 길을 닦아 나아가라.", author: "주영 회장" },
  { text: "천재는 노력하는 자를 이길 수 없고, 노력하는 자는 즐기는 자를 이길 수 없다.", author: "공자" },
  { text: "인생에서 가장 큰 실수는 성공하고자 노력하지 않았다는 데 있는 것이 아니다. 두려움에 도전조체 하지 않았다는 데에 있다.", author: "엘리너 루스벨트" },
  { text: "당신의 가치는 남들의 성과와 비교하여 측정되는 것이 아닙니다. 오직 당신이 정한 어제와의 비교를 즐기세요.", author: "마인드셋 저널" },
  { text: "작은 실천은 대단한 동기부여를 앞섭니다. 시작하려면 완벽할 필요가 없지만, 시작해야 완벽해집니다.", author: "지그 지글러" }
];
export const devDeployNotes = {
  title: "🚀 UniGrow GitHub & Vercel 배포 핵심 팩",
  githubSteps: [
    "GitHub 가입 후 우측 상단 '+' 버튼 클릭 ➜ 'New repository' 선택",
    "Repository Name 기입 (예: unigrow), Public/Private 지정 후 'Create Repository' 클릭",
    "현재 프로젝트 루트에서 터미널을 열고 순차 명령 입력:",
    "  git init",
    "  git add .",
    "  git commit -m 'Initial commit for UniGrow'",
    "  git branch -M main",
    "  git remote add origin https://github.com/사용자아이디/레포이름.git",
    "  git push -u origin main"
  ],
  vercelSteps: [
    "Vercel (https://vercel.com) 회원가입 진행 (GitHub로 가입 추천)",
    "대시보드에서 'Add New' ➜ 'Project' 클릭",
    "방금 업로드한 UniGrow GitHub 레포지토리를 연동 및 'Import' 선택",
    "Framework Preset은 'Vite' 가 자동 매핑되며, Build and Output Settings는 기본값 유지",
    "Environment Variables 필요 시 삽입 (없으면 생략 가능하므로 스킵)",
    "하단의 'Deploy' 버튼 클릭! ➜ 단 1~2분 만에 나만의 대학교 자기계발 포털 주소가 활성화됩니다!"
  ]
};
export const getRecommendedTips = (category: string) => {
  return curatedResources.filter(r => r.category === category);
};
