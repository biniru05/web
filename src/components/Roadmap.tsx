import { useState, useEffect } from 'react';
import { Milestone, TrackType } from '../types';
import { roadmapMilestones, tracksInfo, gradesList, GradeType } from '../data/roadmapData';
import { CheckCircle2, Circle, Briefcase, Compass, BookOpen, Heart, Award, Sparkles } from 'lucide-react';

interface RoadmapProps {
  recommendedTrack: TrackType;
  onSetRecommendedTrack: (track: TrackType) => void;
}

export default function Roadmap({ recommendedTrack, onSetRecommendedTrack }: RoadmapProps) {
  const [selectedGrade, setSelectedGrade] = useState<GradeType | '전체'>('1학년');
  
  // Track checked milestones in localStorage so user data actually persists!
  const [checkedMilestones, setCheckedMilestones] = useState<string[]>(() => {
    const saved = localStorage.getItem('unigrow_checked_milestones');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('unigrow_checked_milestones', JSON.stringify(checkedMilestones));
  }, [checkedMilestones]);

  const toggleMilestone = (id: string) => {
    setCheckedMilestones(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  const activeTrackInfo = tracksInfo.find(t => t.id === recommendedTrack) || tracksInfo[0];

  // Helper to render track icon dynamically
  const renderTrackIcon = (iconName: string, className: string = "w-5 h-5") => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Heart': return <Heart className={className} />;
      default: return <Award className={className} />;
    }
  };

  // Filter logic
  const filteredMilestones = roadmapMilestones.filter(m => {
    const trackMatch = m.track === recommendedTrack;
    const gradeMatch = selectedGrade === '전체' || m.grade === selectedGrade;
    return trackMatch && gradeMatch;
  });

  // Calculate completion percentage for the current filtered domain
  const totalInFilter = filteredMilestones.length;
  const checkedInFilter = filteredMilestones.filter(m => checkedMilestones.includes(m.id)).length;
  const progressPercent = totalInFilter > 0 ? Math.round((checkedInFilter / totalInFilter) * 100) : 0;

  return (
    <section className="py-24 bg-white" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-indigo-50 border border-indigo-100 rounded-full mb-3">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-bold text-indigo-800">Growth Roadmaps</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 font-display">
            분야별 & 학년별 체계적 로드맵
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-normal">
            대학 4년의 골든 아워를 허비하지 마세요. 내가 강화하고 싶은 핵심 자질을 선택한 뒤, 차근차근 점검하며 성장 지수를 조립해보세요.
          </p>
        </div>

        {/* Tracks Selector Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {tracksInfo.map((track) => {
            const isActive = recommendedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => onSetRecommendedTrack(track.id)}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                  isActive 
                    ? 'border-indigo-600 bg-indigo-50/20 shadow-xs ring-2 ring-indigo-600/10' 
                    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-black text-white shadow-xs' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {renderTrackIcon(track.icon, "w-4.5 h-4.5")}
                  </div>
                  <span className={`font-bold text-sm tracking-tight ${isActive ? 'text-indigo-900' : 'text-gray-900'}`}>
                    {track.name}
                  </span>
                </div>
                <p className="text-[11.5px] text-gray-500 leading-normal line-clamp-2">
                  {track.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Master Flex Panel (Grid with Side panel and MileStone List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Control Desk: Grades & General Tracker summary */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Grade filter card */}
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 sm:p-7">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-5 flex items-center gap-1.5 font-display">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                학년 필터 설정
              </h3>
              <div className="flex flex-col gap-2.5">
                {(['전체', ...gradesList] as const).map((grade) => {
                  const isActive = selectedGrade === grade;
                  return (
                    <button
                      key={grade}
                      onClick={() => setSelectedGrade(grade)}
                      className={`text-left px-4 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                        isActive
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-950'
                      }`}
                    >
                      {grade}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Completion Meter Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xs">
              <h4 className="text-[10px] uppercase tracking-widest font-black text-indigo-400">내 현재 도달도</h4>
              <p className="text-lg font-black mt-1.5 text-ellipsis overflow-hidden font-display">
                {activeTrackInfo.name} ({selectedGrade})
              </p>
              
              {/* Radial or thick bar completion */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-3xl font-extrabold tracking-tight font-mono">{progressPercent}%</span>
                  <p className="text-[11px] text-indigo-400 font-semibold mt-1">
                    총 {totalInFilter}개 중 {checkedInFilter}개 클리어
                  </p>
                </div>
                <span className="bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/5 text-[10px] font-bold font-mono tracking-wider">
                  CL-TRACK
                </span>
              </div>

              {/* Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-5">
                <div 
                  className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Milestones Content List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-150 pb-4 mb-2">
              <p className="text-xs font-bold text-gray-500">
                선택된 리스트 총 <span className="text-indigo-600 font-mono font-black">{totalInFilter}</span>개 마일스톤
              </p>
              {checkedInFilter > 0 && (
                <button 
                  onClick={() => {
                    const filteredIds = filteredMilestones.map(m => m.id);
                    setCheckedMilestones(prev => prev.filter(id => !filteredIds.includes(id)));
                  }}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                >
                  이 필터 체크포인트 초기화
                </button>
              )}
            </div>

            {filteredMilestones.length > 0 ? (
              <div className="space-y-4">
                {filteredMilestones.map((milestone) => {
                  const isChecked = checkedMilestones.includes(milestone.id);
                  return (
                    <div
                      key={milestone.id}
                      onClick={() => toggleMilestone(milestone.id)}
                      className={`group flex items-start gap-4 p-5 rounded-xl border transition-all cursor-pointer ${
                        isChecked 
                          ? 'border-indigo-200 bg-indigo-50/20' 
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-xs'
                      }`}
                    >
                      {/* Check trigger */}
                      <button className="shrink-0 text-indigo-600 pt-0.5" id={`check-${milestone.id}`}>
                        {isChecked ? (
                          <CheckCircle2 className="w-5 h-5 text-indigo-650" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300 group-hover:text-indigo-650 transition-colors" />
                        )}
                      </button>

                      {/* Info stack */}
                      <div className="space-y-1 flex-grow">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold text-indigo-750 bg-indigo-50 border border-indigo-100/50 px-2.5 py-0.5 rounded-md">
                            {milestone.grade}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">
                            ID: {milestone.id}
                          </span>
                        </div>
                        <h4 className={`text-base font-bold tracking-tight transition-colors ${
                          isChecked ? 'text-gray-400 line-through font-normal' : 'text-gray-950'
                        }`}>
                          {milestone.title}
                        </h4>
                        <p className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                          isChecked ? 'text-gray-350' : 'text-gray-500'
                        }`}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50/80 border border-gray-200/65 rounded-xl">
                <p className="text-gray-400 text-sm">해당 학년의 로드맵 마일스톤이 아직 비어있습니다.</p>
                <button 
                  onClick={() => setSelectedGrade('전체')} 
                  className="mt-3 text-xs font-bold text-indigo-600 hover:text-indigo-850 transition-colors"
                >
                  학년 필터를 '전체'로 풀기
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
