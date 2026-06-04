import { useState } from 'react';
import { quizQuestions, quizResults, getDominantTrait } from '../data/quizData';
import { QuizResult, TrackType } from '../types';
import { ChevronRight, RefreshCw, Award, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Compass } from 'lucide-react';

interface QuizProps {
  onSetRecommendedTrack: (track: TrackType) => void;
  onScrollToRoadmap: () => void;
}

export default function Quiz({ onSetRecommendedTrack, onScrollToRoadmap }: QuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({
    academic: 0,
    portfolio: 0,
    networking: 0,
    wellness: 0,
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [dominantKey, setDominantKey] = useState<string>('');

  const handleOptionSelect = (optionScores: { [key: string]: number }) => {
    const newScores = { ...scores };
    Object.entries(optionScores).forEach(([trait, val]) => {
      newScores[trait] = (newScores[trait] || 0) + val;
    });
    setScores(newScores);

    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      const dominant = getDominantTrait(newScores);
      setDominantKey(dominant);
      const res = quizResults[dominant] || quizResults.academic;
      setResult(res);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setScores({
      academic: 0,
      portfolio: 0,
      networking: 0,
      wellness: 0,
    });
    setSubmitted(false);
    setResult(null);
    setDominantKey('');
  };

  const handleApplyRoadmap = () => {
    if (result) {
      onSetRecommendedTrack(result.recommendedTrack);
      onScrollToRoadmap();
    }
  };

  const traitLabels: { [key: string]: string } = {
    academic: '학술적 열망 (Academic)',
    portfolio: '실전 기획/개발 (Portfolio)',
    networking: '사회적 교류 (Networking)',
    wellness: '마음과 생활 균형 (Wellness)'
  };

  const currentQuestion = quizQuestions[currentIdx];
  const progressPercent = Math.round(((currentIdx) / quizQuestions.length) * 100);

  return (
    <section className="py-24 bg-white border-y border-gray-200" id="quiz">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-indigo-50 border border-indigo-100 rounded-full mb-3">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-bold text-indigo-800">Growth Diagnostics</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 font-display">
            대학생 성장 체질 1분 진단 서비스
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-normal">
            나의 본질적인 흥미, 우선순위, 리액션을 기반으로 숨어 있는 시그니처 역량 유형을 발견하고 맞춤형 액션 플랜을 도출해 드립니다.
          </p>
        </div>

        {/* Quiz Module Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden min-h-[480px] flex flex-col justify-between p-6 sm:p-10 relative">
          
          {!submitted ? (
            // Quiz Input stage
            <div className="flex flex-col justify-between h-full flex-grow">
              
              {/* Question numbers */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-indigo-650 mb-2">
                  <span className="bg-indigo-50 px-2.5 py-1 rounded-md text-indigo-750 border border-indigo-100/50">
                    질문 {currentIdx + 1} / {quizQuestions.length}
                  </span>
                  <span className="text-gray-500">{progressPercent}% 완료</span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8">
                  <div 
                    className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

                {/* Question Prompt */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-955 leading-snug mb-8 font-sans">
                  Q. {currentQuestion.question}
                </h3>
              </div>

              {/* Options Stack */}
              <div className="space-y-3.5 flex-grow">
                {currentQuestion.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionSelect(opt.scores)}
                    className="w-full text-left p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50/25 text-gray-800 hover:text-indigo-950 text-sm sm:text-base font-medium transition-all hover:shadow-xs active:scale-[0.99] cursor-pointer flex justify-between items-center group"
                  >
                    <span>{opt.text}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-3" />
                  </button>
                ))}
              </div>

              {/* Subtle disclaimer */}
              <div className="mt-8 text-center text-xs text-gray-400">
                선택 즉시 자동으로 실시간 채점이 진행되며 다음 문항으로 넘어갑니다.
              </div>
            </div>
          ) : (
            // Quiz Result view (highly stylized dashboard)
            result && (
              <div className="space-y-8 animate-fadeIn">
                
                {/* Result Hero Header */}
                <div className="text-center pb-8 border-b border-gray-100">
                  <div className="inline-flex p-3.5 bg-indigo-50 rounded-full text-indigo-650 mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-indigo-600">성장 성향 매칭 완료</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 font-display">
                    {result.title}
                  </h3>
                  <p className="text-xs text-indigo-850 font-bold mt-1.5 bg-indigo-50 border border-indigo-100/50 px-3.5 py-1 rounded-full inline-block">
                    {result.subtitle}
                  </p>
                </div>

                {/* Overall Description */}
                <div className="bg-gray-50/80 border border-gray-200/50 rounded-xl p-5 sm:p-6 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  <p>{result.description}</p>
                </div>

                {/* Score Chart Representation */}
                <div>
                  <h4 className="text-sm font-bold text-gray-950 mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    내 성장 성향 포트폴리오 차트
                  </h4>
                  <div className="space-y-3.5">
                    {Object.entries(scores).map(([traitKey, scoreVal]) => {
                      const maxPossibleScore = 15;
                      const numericScore = Number(scoreVal);
                      const percentage = Math.min(100, Math.round((numericScore / maxPossibleScore) * 100));
                      const isDominant = traitKey === dominantKey;
                      
                      return (
                        <div key={traitKey} className="space-y-1">
                          <div className="flex justify-between items-center text-xs sm:text-sm">
                            <span className={isDominant ? 'font-bold text-indigo-800' : 'text-gray-500'}>
                              {traitLabels[traitKey]} {isDominant && '(대표성향)'}
                            </span>
                            <span className="font-mono text-xs font-semibold text-gray-700">{numericScore} 점</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ${
                                isDominant ? 'bg-indigo-600' : 'bg-indigo-250'
                              }`}
                              style={{ width: `${Math.max(10, percentage)}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Grid of Strengths / Weaknesses */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Strengths Card */}
                  <div className="p-5 bg-indigo-50/40 rounded-xl border border-indigo-100/50">
                    <h5 className="font-bold text-indigo-900 text-sm mb-3 flex items-center gap-1.5 font-display">
                      <CheckCircle2 className="w-4 h-4 text-indigo-650" />
                      핵심 강점
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-indigo-950 font-normal">
                      {result.strengths.map((str, index) => (
                        <li key={index} className="flex gap-2 items-start">
                          <span className="text-indigo-600 font-bold">•</span>
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses Card */}
                  <div className="p-5 bg-amber-50/40 rounded-xl border border-amber-100/50">
                    <h5 className="font-bold text-amber-900 text-sm mb-3 flex items-center gap-1.5 font-display">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      주의 사항
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-amber-950 font-normal">
                      {result.weaknesses.map((weak, index) => (
                        <li key={index} className="flex gap-2 items-start">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{weak}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended Blueprint Action item list */}
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-bold text-gray-955 mb-3 font-display">🎯 이번 학기 최우선 3대 실천 전략</h4>
                  <div className="space-y-3">
                    {result.actionPlans.map((plan, index) => (
                      <div key={index} className="flex gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100 text-xs sm:text-sm text-gray-750">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-850 flex items-center justify-center font-bold text-xs border border-indigo-200/50">
                          {index + 1}
                        </span>
                        <p className="font-medium">{plan}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 border-t border-gray-100">
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 py-3 text-sm font-semibold text-gray-550 bg-gray-100 hover:bg-gray-200/80 rounded-xl transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    다시 하기
                  </button>
                  <button
                    onClick={handleApplyRoadmap}
                    className="group flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-black hover:bg-gray-800 rounded-xl transition-all shadow-md shadow-indigo-600/5 cursor-pointer"
                  >
                    권장 커스텀 로드맵 타러 가기
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
