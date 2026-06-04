import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenDeploy: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenDeploy, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', name: '홈' },
    { id: 'quiz', name: '자기진단' },
    { id: 'roadmap', name: '성장로드맵' },
    { id: 'planner', name: '데일리트래커' },
    { id: 'resources', name: '리소스허브' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
        : 'py-5 bg-transparent'
    }`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
              <div className="w-3.5 h-3.5 border-2 border-white rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 font-display">
              UNI<span className="text-indigo-600">.GROW</span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2.5 py-0.5 rounded-full hidden sm:inline-block">
              GROWTH PLATFORM
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' 
                    : 'text-gray-500'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Action CTA & Deploy Kit */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDeploy}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-700 bg-white rounded-lg transition-all hover:bg-gray-50 border border-gray-200 cursor-pointer shadow-xs"
              id="btn-deploy-kit"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-500" />
              깃허브 & Vercel 배포 가이드
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className="px-5 py-2 text-sm font-bold text-white bg-black rounded-full transition-colors hover:bg-gray-800 active:scale-95 cursor-pointer shadow-sm"
            >
              성장진단 테스트
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4 space-y-3 shadow-lg max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-2.5 text-base font-semibold rounded-lg transition-all cursor-pointer ${
                activeSection === item.id 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
            <button
              onClick={() => { setIsOpen(false); onOpenDeploy(); }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100"
            >
              <Terminal className="w-4 h-4 text-indigo-500" />
              배포 가이드북 (Vercel)
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className="w-full text-center px-4 py-3 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800"
            >
              성장진단 시작하기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
