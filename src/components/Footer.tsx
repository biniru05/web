interface FooterProps {
  onOpenDeploy: () => void;
}

export default function Footer({ onOpenDeploy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-500" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Grid deck */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-200 pb-12 mb-10">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleScrollToTop}>
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
                <div className="w-3.5 h-3.5 border-2 border-white rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 font-display tracking-tight">
                UNI<span className="text-indigo-600">.GROW</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              유니그로우는 목적 잃은 스펙 한 판 경쟁에서 탈피해, 대학생들이 자신만의 고유한 학술 자산, 포트폴리오 스택, 인적 교류 및 라이프 밸런스를 완성할 수 있도록 돕는 실천형 가이드 포털입니다.
            </p>
          </div>

          {/* Quick links Columns */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-gray-900 text-xs font-bold uppercase tracking-wider font-display">주요 기능</h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a href="#quiz" className="hover:text-indigo-600 transition-colors">성장 체질 1분 자가진단</a>
              <a href="#roadmap" className="hover:text-indigo-600 transition-colors">학년별 커스텀 마일스톤</a>
              <a href="#planner" className="hover:text-indigo-600 transition-colors">마이 데일리 습관 빌더</a>
              <a href="#resources" className="hover:text-indigo-600 transition-colors">대학생 엄선 사이트 라이브</a>
            </div>
          </div>

          {/* Support Actions Column */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-gray-900 text-xs font-bold uppercase tracking-wider font-display">Vercel 호스팅 킷</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              본 프로젝트는 GitHub 및 Vercel 배포에 완전히 호환되도록 경량 클라이언트 환경으로 정밀 설계되었습니다. 배포 후 자유롭게 커스텀을 가하세요!
            </p>
            <button
              onClick={onOpenDeploy}
              className="inline-flex items-center gap-1.5 px-4 rounded-lg py-2.5 bg-black hover:bg-gray-800 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
            >
              배포 가이드 가동하기
            </button>
          </div>

        </div>

        {/* Mid segment */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} UniGrow. Created for University Students' self-development.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-700 cursor-pointer" onClick={handleScrollToTop}>맨 위로 가기 ▲</span>
          </div>
        </div>

      </div>

      {/* Signature Geometric Status Bar */}
      <div className="bg-gray-100/80 border-t border-gray-200 py-3 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-gray-400 font-bold tracking-widest uppercase">
        <div className="flex space-x-6">
          <span>Version 1.0.4-Alpha</span>
          <span>Supported by GitHub Students</span>
        </div>
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-1 text-emerald-500">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Server Operational</span>
          </div>
          <span>&copy; {currentYear} UniGrow Inc.</span>
        </div>
      </div>
    </footer>
  );
}
