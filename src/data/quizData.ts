import { QuizQuestion, QuizResult } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "여유 시간이 생겼을 때, 나는 주로 어떤 행동을 하고 싶나요?",
    category: "leisure",
    options: [
      {
        text: "전공 분야 논문, 트렌드 아티클이나 관련 기술 스택 강의를 찾아본다.",
        scores: { academic: 3, portfolio: 1, networking: 0, wellness: 0 }
      },
      {
        text: "공모전 사이트를 뒤적거리거나 개인 포토폴리오, 사이드 프로젝트를 기획한다.",
        scores: { academic: 0, portfolio: 3, networking: 1, wellness: 0 }
      },
      {
        text: "동아리 동료들이나 선후배, 현업 직무 멘토에게 연락해 모임을 잡는다.",
        scores: { academic: 0, portfolio: 1, networking: 3, wellness: 0 }
      },
      {
        text: "미뤘던 꿀잠을 자거나 독서, 명상, 헬스장 등 오롯이 나만의 휴식을 즐긴다.",
        scores: { academic: 0, portfolio: 0, networking: 0, wellness: 3 }
      }
    ]
  },
  {
    id: 2,
    question: "대학 생활 중 현재 가장 고민이 되거나 준비하고 싶은 부분은 무엇인가요?",
    category: "concern",
    options: [
      {
        text: "높은 학점 유지, 대학원 진학 구상, 학술적 깊이를 넓히는 법",
        scores: { academic: 3, portfolio: 0, networking: 1, wellness: 0 }
      },
      {
        text: "서류와 면접에서 돋보일 나만의 무기(포트폴리오, 인턴 경험, 실전 스킬)",
        scores: { academic: 1, portfolio: 3, networking: 0, wellness: 0 }
      },
      {
        text: "어떤 동아리나 대외활동을 해야 할지, 인맥을 쌓고 트렌디한 사람들을 만나는 법",
        scores: { academic: 0, portfolio: 1, networking: 3, wellness: 0 }
      },
      {
        text: "현타(번아웃) 극복하기, 건강한 일상 루틴과 유리멘탈 다잡기",
        scores: { academic: 0, portfolio: 0, networking: 0, wellness: 3 }
      }
    ]
  },
  {
    id: 3,
    question: "어떤 방식으로 성과를 낼 때 가장 짜릿한 성취감을 느끼나요?",
    category: "satisfaction",
    options: [
      {
        text: "시험 점수 A+, 높은 장학금 수혜, 교수님으로부터 정교하고 탁월하다는 피드백을 들을 때",
        scores: { academic: 3, portfolio: 1, networking: 0, wellness: 0 }
      },
      {
        text: "내가 직접 빌딩한 사이트, 프로덕트, 기획안이 실제로 굴러가고 가시적인 성과로 남을 때",
        scores: { academic: 0, portfolio: 3, networking: 1, wellness: 0 }
      },
      {
        text: "다양한 사람들과 협동하여 대형 해커톤, 연합 동아리 행사, 공모전에서 협업해 수상할 때",
        scores: { academic: 0, portfolio: 1, networking: 3, wellness: 0 }
      },
      {
        text: "스스로 정한 루틴(일찍 일어나기, 매일 운동 등)들을 온전히 해내며 깊은 내적 평화를 누릴 때",
        scores: { academic: 0, portfolio: 0, networking: 0, wellness: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "방학 기간이 다가오면 나의 계획 스타일은 어떤가요?",
    category: "planning",
    options: [
      {
        text: "계절학기, 전공 선행학습 및 관련 연구회 활동 등 학업 중심의 철저한 학습 계획",
        scores: { academic: 3, portfolio: 0, networking: 0, wellness: 0 }
      },
      {
        text: "IT 부트캠프, 스타트업 인턴십, 실무 프로젝트, 공모전 출품 등 집중 스펙업 계획",
        scores: { academic: 0, portfolio: 3, networking: 1, wellness: 0 }
      },
      {
        text: "대외활동 발대식, 연합 동아리 워크숍, 파티, 다양한 직무의 네트워킹 데이 일정 빼놓기",
        scores: { academic: 0, portfolio: 1, networking: 3, wellness: 0 }
      },
      {
        text: "한 학기 동안 고생한 나를 위한 프리 타임, 제주도 자전거 종주, 미뤘던 취미 배우기",
        scores: { academic: 0, portfolio: 0, networking: 0, wellness: 3 }
      }
    ]
  },
  {
    id: 5,
    question: "내가 가장 가치를 두고 평생 키우고 싶은 필살 역량은 무엇인가요?",
    category: "value",
    options: [
      {
        text: "논리적이고 깊이 있는 통찰력, 전문 도메인 지식과 연구적 자질",
        scores: { academic: 3, portfolio: 0, networking: 0, wellness: 1 }
      },
      {
        text: "문제를 해결하기 위해 직접 발로 뛰고 만들어내는 강력한 실행력과 기술 스킬",
        scores: { academic: 1, portfolio: 3, networking: 1, wellness: 0 }
      },
      {
        text: "사람들의 마음을 움직이고 적합한 인재들을 모으는 소통 윤활유와 리더십",
        scores: { academic: 0, portfolio: 1, networking: 3, wellness: 0 }
      },
      {
        text: "어떤 격랑 속에서도 나 자신을 잃지 않는 단단한 자존감과 웰빙 라이프 밸런스",
        scores: { academic: 0, portfolio: 0, networking: 0, wellness: 3 }
      }
    ]
  }
];

export const quizResults: { [key: string]: QuizResult } = {
  academic: {
    title: "진지한 학구열의 전도사, '학문적 탐색가'",
    subtitle: "지식의 깊이를 탐구하며 이론과 논리를 사랑하는 유형",
    description: "당신은 단순히 피상적인 취업용 스펙을 쌓기보다, 본질적인 원리를 이성적으로 파고드는 연구자 기질이 흐르고 있습니다. 과제나 프로젝트를 할 때도 대충 넘어가는 법이 없고, 학점 관리와 개념 이해에 가장 높은 기쁨을 느낍니다. 전공 심화 지식이나 대학원 진학, 전문 자격 취득에 아주 강한 면모를 보여줄 수 있는 유재입니다.",
    traits: ["탁월한 분석력", "학구열 끝판왕", "완벽주의적 끈기", "명확한 학풍 선호"],
    strengths: ["어려운 내용도 끝까지 요약해내는 가공할 학습 지구력", "높은 수준의 평점 유지와 시험 분석력", "일반인보다 월등히 높은 집중력과 보고서 작성 능력"],
    weaknesses: ["지나치게 완벽을 지향하여 초기 실행 속도가 다소 느려질 수 있음", "이성적이고 엄밀한 편이라 가벼운 대인관계 중심 모임에서 피로감을 느낄 수 있음"],
    recommendedTrack: "career",
    actionPlans: [
      "희망 진로의 정형화된 전공 자격증(기사, 변리사, 전문 자격 등) 로드맵 초기에 세우기",
      "관심 연구실 학부생 연구원(R&E)이나 교수님 기획 프로젝트 인턴 지원하기",
      "이론 탐색에만 머무르지 말고 배운 것을 블로그나 노션에 요약하여 배포하는 연습하기"
    ]
  },
  portfolio: {
    title: "무서운 실행력의 메이커, '실전형 하이퍼 아치버'",
    subtitle: "직접 눈에 보이는 결과물을 만들고 증명해내는 무기 장인",
    description: "당신은 말보다는 결과물로 가치를 창출하는 것을 극도로 좋아하는 '메이커(Maker)'입니다. IT 개발, 디자인, 마케팅 전략 기획, 비즈니스 아이디어 실행 등 '직접 만들고 써먹는' 실전의 전율을 좋아합니다. 지루한 교과서 위주 공부보다 해커톤, 스타트업 프로젝트, 공모전 같은 격렬한 필드에서 가장 빠르게 배우고 단단해집니다.",
    traits: ["프로젝트 홀릭", "결과 중심 실행력", "실무 최적화 스킨십", "포트폴리오 장인"],
    strengths: ["탁월한 도구(Figma, IDE, Notion 등) 숙련도와 빠른 습득 무기", "어려운 난제를 결과물로 직접 프로토타이핑하는 초고속 가시화 속도", "비즈니스 지표 중심의 실무 분석 역량"],
    weaknesses: ["순수 기초 이론이나 형식적인 전공 학점 관리에 쉽게 흥미를 잃을 수 있음", "결과를 빨리 내려다보니 디테일한 문서화 및 체계적 기획이 누락될 수 있음"],
    recommendedTrack: "career", // we map to 'career' which contains portfolio blocks, or customized
    actionPlans: [
      "방학 시즌마다 최소 1개의 완성도 높은 사이드 프로젝트 완료 및 런칭하기",
      "내 포트폴리오를 웹사이트(GitHub Pages, Vercel)로 구축하여 언제든 링크 제공 가능하게 만들기",
      "기업의 협업형 실무 프로젝트나 스타트업 서포터 크루 활동으로 실무 필터 장착하기"
    ]
  },
  networking: {
    title: "마당발 리더십의 허브, '글로벌 네트워커'",
    subtitle: "다양한 사람들과 에너지를 주고받으며 세상을 넓혀가는 외교관",
    description: "당신은 사람이 바로 최고의 자산이자 기회라는 것을 잘 아는 지혜로운 전략가입니다. 연합동아리, 글로벌 봉사단, 서포터즈, 멘토링 프로그램 등에서 중추적인 협업 조율자 또는 리더 역할을 맡을 확률이 높습니다. 뛰어난 공감 능력과 말솜씨로 팀의 분위기를 이끌고 트렌드를 앞서 캐치하는 데 탁월한 두각을 보입니다.",
    traits: ["사교력 마스터", "협동 시너지 전문가", "트렌드 안테나", "글로벌 소통 우위"],
    strengths: ["새로운 그룹에도 순식간에 녹아들어 조화를 창출하는 소통 윤활유", "훌륭한 발표력과 프레젠테이션, 기획 대변 역할 수행", "동료들을 임파워링(Empowering)해주는 강력한 매력"],
    weaknesses: ["약속과 일정 조율이 과하여 영양가 없는 만남에 소중한 시간을 낭비할 수 있음", "혼자 집중해서 분석적으로 처리해야 하는 정적 작업을 쉽게 지루해함"],
    recommendedTrack: "activity",
    actionPlans: [
      "가장 인지도가 높은 '전국구 연합 대외활동' 1곳 이상에서 부단장, 기획팀장 등의 리더 해보기",
      "단순 소통을 넘어, 링크드인(LinkedIn)이나 커리어 플랫폼을 미리 관리해 인맥 자산화하기",
      "사람들을 관리하는 자신만의 팁이나 대외활동 회고록 브런치/노션에 연재하기"
    ]
  },
  wellness: {
    title: "단단한 뿌리의 웰니스 수호자, '라이프 밸런서'",
    subtitle: "마음의 평화와 지속 가능한 건강한 루틴을 설계하는 철학가",
    description: "당신은 남들이 피 터지게 무한 경쟁 속으로 폭주할 때, 무엇이 진정으로 귀중하고 나를 건강하게 만드는지 중심을 지킬 줄 아는 성숙한 수호자입니다. 단순 맹목적 스펙 한 줄보다 체력, 멘탈, 독서, 라이프워크 스타일의 '궁극적 일치'를 추구하며, 일정한 일상 리듬 속에서 조용히 내공을 쌓아 세상의 큰 파도에도 쉽게 부러지지 않습니다.",
    traits: ["루틴 설계 전문가", "강력한 회복탄력성", "내실 중심 추구자", "번아웃 제어자"],
    strengths: ["매우 규칙적인 시간 통제권과 스스로를 돌볼 줄 아는 성숙한 메타인지", "차분하고 장기적인 스터디, 자격증, 연구 등의 완수 능력", "타인의 불안감에 전염되지 않고 단단히 페이스 조절하는 역량"],
    weaknesses: ["치열하고 압박감이 높은 서열 경쟁 환경을 기피해 자칫 기회를 조기에 포기할 수 있음", "혼자 해결하려는 경향이 있어 다소 폐쇄적인 우물 안의 안전지대에 머무를 수 있음"],
    recommendedTrack: "balance",
    actionPlans: [
      "하루 30분 운동, 15분 독서 등 사소하지만 강력한 '시그니처 모닝/나이트 루틴' 설계하기",
      "나의 건강, 독서 기록 등을 공유하는 챌린지 모임(습관 형성 패밀리)을 주도하거나 참여하기",
      "감정에 휩쓸리지 않도록 일간 회고 일지(데일러 리포트)를 장기적으로 써보기"
    ]
  }
};
export const getDominantTrait = (scores: { [key: string]: number }): string => {
  let maxScore = -1;
  let dominant = 'academic';
  
  for (const [key, val] of Object.entries(scores)) {
    if (val > maxScore) {
      maxScore = val;
      dominant = key;
    }
  }
  return dominant;
};
