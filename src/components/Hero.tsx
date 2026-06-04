import { ArrowRight, Flame, Target, Sparkles, BookOpen } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onExploreRoadmap: () => void;
}

export default function Hero({ onStartQuiz, onExploreRoadmap }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F9FAFB] grid-background" id="hero">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-violet-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-1.5 rounded-full text-indigo-600 text-xs font-bold mb-6 border border-indigo-100 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>대학 생활의 방향타, UniGrow 자기계발 에디션</span>
          </div>

          {/* Main Title with Display Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold font-display text-gray-900 leading-tight mb-6">
            대학생 자기계발의 해답,<br />
            <span className="text-indigo-600">나만의 성장 로드맵</span>
            으로 설계하다
          </h1>

          {/* Subtext description with elegant spacing and lineheight */}
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2.5xl mx-auto mb-10 leading-relaxed font-normal">
            막연한 취업 스펙 쌓기에 번아웃을 느끼나요? 학점, 대외활동, 자격증, 그리고 마음 웰니스까지. 대학생 맞춤형 4대 트랙 로드맵과 1분 성장 체질 진단을 통해 무기력한 대학 생활을 최고의 자기계발 여정으로 만들어보세요.
          </p>

          {/* Core CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={onStartQuiz}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold text-base rounded-lg shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              id="hero-btn-quiz"
            >
              <span>성장 유형 1분 진단하기</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onExploreRoadmap}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-950 font-bold text-base rounded-lg border border-gray-200 shadow-sm transition-all cursor-pointer"
              id="hero-btn-roadmap"
            >
              전학년 로드맵 탐색
            </button>
          </div>

          {/* University Trust Badges or Core Values */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-gray-200/80 pt-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">4대 핵심 트랙</h3>
              <p className="text-xs text-gray-500 leading-snug">포트폴리오•학업•자격•웰니스</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">1분 무료 유형진단</h3>
              <p className="text-xs text-gray-500 leading-snug">나의 성장 체질과 전략 보약</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">올인원 로드맵</h3>
              <p className="text-xs text-gray-500 leading-snug">학년별 핵심 성취 로직 제공</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 relative">
                <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full animate-ping"></div>
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Vercel & GitHub</h3>
              <p className="text-xs text-gray-500 leading-snug">웹 배포 대응 포트폴리오 가이드</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
