import { useState } from 'react';
import { devDeployNotes } from '../data/resourcesData';
import { X, Copy, Check, Terminal, Globe, Github, Info, Heart } from 'lucide-react';

interface DeployGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeployGuide({ isOpen, onClose }: DeployGuideProps) {
  const [activeTab, setActiveTab] = useState<'github' | 'vercel'>('github');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopyCmd = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Card Container */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full mx-auto shadow-2xl border border-teal-50 overflow-hidden z-10 transition-all flex flex-col max-h-[90vh]">
        
        {/* Banner header */}
        <div className="bg-gradient-to-r from-teal-900 to-teal-950 p-6 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/10 rounded-xl text-teal-300">
              <Terminal className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">{devDeployNotes.title}</h3>
              <p className="text-xs text-teal-200">초보 대학생 개발자도 3분 만에 마스터하는 런칭 체크리스트</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 text-white/80 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content space */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          
          {/* Informational introductory notice */}
          <div className="bg-teal-50 border border-teal-100/50 rounded-2xl p-4 text-xs sm:text-sm text-teal-950 flex gap-3 items-start leading-relaxed">
            <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-teal-800">잠깐! 이 템플릿은 Vercel 배포에 최적화되어 있습니다</span>
              <p className="mt-0.5">
                Vite + Tailwind CSS v4 조합으로 구성된 SPA 형태이므로, 깃허브 업로드 즉시 별도의 백엔드 가동 필요 없이 Vercel을 통한 완벽한 초고속 무제한 정적 배포(Static Hosting)가 완료됩니다.
              </p>
            </div>
          </div>

          {/* Steps Tabs selector */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setActiveTab('github')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold border-b-2 cursor-pointer ${
                activeTab === 'github'
                  ? 'border-teal-600 text-teal-600 font-extrabold'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <Github className="w-4.5 h-4.5" />
              1단계. GitHub 저장소 연동
            </button>
            <button
              onClick={() => setActiveTab('vercel')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold border-b-2 cursor-pointer ${
                activeTab === 'vercel'
                  ? 'border-teal-600 text-teal-600 font-extrabold'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <Globe className="w-4.5 h-4.5" />
              2단계. Vercel 실시간 배포
            </button>
          </div>

          {/* Steps Detail Content */}
          <div className="space-y-4">
            {activeTab === 'github' ? (
              <div className="space-y-4">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">GitHub 원스톱 코드 이전 절차</p>
                <div className="space-y-3">
                  {devDeployNotes.githubSteps.map((step, idx) => {
                    const isCommand = step.trim().startsWith('git ') || step.trim().includes('commit');
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex gap-2.5 items-start text-xs sm:text-sm">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-[11px]">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700 font-medium">{step.trim()}</span>
                        </div>
                        {isCommand && (
                          <div className="ml-7 bg-slate-900 rounded-xl p-3 flex justify-between items-center border border-slate-800">
                            <code className="font-mono text-teal-300 text-xs text-ellipsis overflow-hidden select-all whitespace-pre-wrap">
                              {step.trim()}
                            </code>
                            <button
                              onClick={() => handleCopyCmd(step.trim(), idx)}
                              className="shrink-0 p-1.5 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-lg transition-all cursor-pointer border border-white/5"
                              title="복사하기"
                            >
                              {copiedIndex === idx ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Vercel 호스팅 연동 절차</p>
                {devDeployNotes.vercelSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <p className="text-gray-700 font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Modal footer CTA */}
        <div className="p-6 border-t border-gray-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            대학생 성장을 응원합니다
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl hover:shadow-md cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
}
