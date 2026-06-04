import { useState } from 'react';
import { curatedResources } from '../data/resourcesData';
import { ResourceItem } from '../types';
import { Search, ExternalLink, Lightbulb, BookMarked } from 'lucide-react';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: '전체 자료' },
    { id: 'competitions', name: '공모전 & 대외활동' },
    { id: 'education', name: '무료 대학 교육 & 코딩' },
    { id: 'scholarships', name: '알짜 장학금 정보' },
    { id: 'community', name: '네트워킹 & 커뮤니티' }
  ];

  // Filtering + Searching logic
  const filteredResources = curatedResources.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const searchMatch = !query || 
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) || 
      item.tags.some(t => t.toLowerCase().includes(query));
    
    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-24 bg-white" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-indigo-50 border border-indigo-100 rounded-full mb-3">
            <BookMarked className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-bold text-indigo-800">Resource Curations</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-955 font-display">
            대학생 필수 자기계발 리소스 링크 허브
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-normal">
            매 학기, 수만원 이상의 교육 강의나 대규모 정부 지원 장학금을 놓치고 뒤늦게 후회하곤 합니다. 검증된 한국 대표 대학생 추천 채널들을 한곳에 축적했습니다.
          </p>
        </div>

        {/* Search & Tabs Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-150">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100/90 hover:text-gray-950 border border-gray-200/70'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
            <input
              type="text"
              placeholder="태그 또는 사이트명 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 hover:bg-gray-100/60 focus:bg-white border border-gray-200 focus:border-indigo-500 rounded-xl text-xs focus:outline-hidden text-gray-800 font-medium"
            />
          </div>
        </div>

        {/* Resources Grid render */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-200/85 p-6 flex flex-col justify-between hover:shadow-md hover:shadow-gray-200/30 hover:-translate-y-1 transition-all group"
              >
                <div>
                  {/* Visual Top row */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-indigo-750 bg-indigo-50 border border-indigo-100/50 px-2.5 py-0.5 rounded capitalize">
                      {item.category === 'competitions' ? '공모전&대외활동' :
                       item.category === 'education' ? '교육&아카데미' :
                       item.category === 'scholarships' ? '국가지원장학' :
                       item.category === 'community' ? '소풍 커뮤니티' : '일반도서'}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-gray-50 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                      title="해당 포털로 새창 이동"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-indigo-650 transition-colors tracking-tight line-clamp-1 mb-2 font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
                    {item.description}
                  </p>

                  {/* Tags cluster */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-gray-500 bg-gray-100 border border-gray-150/40 px-2.5 py-0.5 rounded font-mono font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mentor Tip Box if present */}
                {item.tips && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200/60 text-xs text-gray-800 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold block text-indigo-850 mb-0.5">캠퍼스 멘토 Tip:</span>
                      <p className="leading-relaxed font-medium text-gray-650">{item.tips}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 border border-gray-200/60 rounded-xl">
            <p className="text-gray-400 text-sm">해당 조건에 만족하는 자기계발 추천 리소스가 비어 있습니다.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-indigo-600 hover:text-indigo-850 transition-colors"
            >
              검색 키워드 및 필터 초기화
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
