import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { quotesList } from '../data/resourcesData';
import { Habit, DDay } from '../types';
import { Sparkles, Calendar, Plus, Trash2, Check, RefreshCw, ChevronRight, Trophy } from 'lucide-react';

export default function Planner() {
  // Quote cycling
  const [quoteIdx, setQuoteIdx] = useState(0);

  // Load / store Habits
  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem('unigrow_habits');
    if (saved) return JSON.parse(saved);
    return [
      { id: 'h-1', name: '외국어 리스닝 15분 청강', frequency: '매일', completedDates: [], streak: 0 },
      { id: 'h-2', name: '전공 서적 혹은 교양 도서 독서 10p', frequency: '매일', completedDates: [], streak: 0 },
      { id: 'h-3', name: '체력 증진용 홈트레이닝/러닝', frequency: '매일', completedDates: [], streak: 0 }
    ];
  });

  // Load / store D-Days
  const [ddays, setDdays] = useState<DDay[]>(() => {
    const saved = localStorage.getItem('unigrow_ddays');
    if (saved) return JSON.parse(saved);
    
    // Default dynamic D-days relative to current year
    const currentYear = new Date().getFullYear();
    return [
      { id: 'd-1', title: '여름방학 대정비 & 자격증 접수일', targetDate: `${currentYear}-07-15` },
      { id: 'd-2', title: '전국 연합 IT 마케팅 해커톤 공모전', targetDate: `${currentYear}-08-20` },
      { id: 'd-3', title: '2학기 우수 수혜 국가장학금 신청마감', targetDate: `${currentYear}-09-30` }
    ];
  });

  const [newHabitName, setNewHabitName] = useState('');
  const [newDDayTitle, setNewDDayTitle] = useState('');
  const [newDDayDate, setNewDDayDate] = useState('');

  useEffect(() => {
    localStorage.setItem('unigrow_habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('unigrow_ddays', JSON.stringify(ddays));
  }, [ddays]);

  // Rotator of daily quote
  const rotateQuote = () => {
    setQuoteIdx((quoteIdx + 1) % quotesList.length);
  };

  // Helper date calculation string (YYYY-MM-DD in Local time)
  const getTodayString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Habit management
  const handleAddHabit = (e: FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;
    const newHabit: Habit = {
      id: `h-${Date.now()}`,
      name: newHabitName.trim(),
      frequency: '매일',
      completedDates: [],
      streak: 0
    };
    setHabits([...habits, newHabit]);
    setNewHabitName('');
  };

  const handleToggleHabit = (id: string) => {
    const today = getTodayString();
    setHabits(prev => prev.map(habit => {
      if (habit.id !== id) return habit;
      
      const isCompletedToday = habit.completedDates.includes(today);
      let updatedDates = [...habit.completedDates];
      let newStreak = habit.streak;

      if (isCompletedToday) {
        // Toggle off
        updatedDates = updatedDates.filter(d => d !== today);
        newStreak = Math.max(0, newStreak - 1);
      } else {
        // Toggle on
        updatedDates.push(today);
        newStreak = newStreak + 1;
      }

      return {
        ...habit,
        completedDates: updatedDates,
        streak: newStreak
      };
    }));
  };

  const handleDeleteHabit = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setHabits(prev => prev.filter(h => h.id !== id));
  };

  // D-Day management
  const handleAddDDay = (e: FormEvent) => {

    e.preventDefault();
    if (!newDDayTitle.trim() || !newDDayDate) return;
    const item: DDay = {
      id: `d-${Date.now()}`,
      title: newDDayTitle.trim(),
      targetDate: newDDayDate
    };
    setDdays([...ddays, item]);
    setNewDDayTitle('');
    setNewDDayDate('');
  };

  const handleDeleteDDay = (id: string) => {
    setDdays(prev => prev.filter(d => d.id !== id));
  };

  // D-Day calculation mathematically
  const getDDayCount = (target: string) => {
    const today = new Date(getTodayString());
    const targetDate = new Date(target);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'D-Day';
    if (diffDays > 0) return `D-${diffDays}`;
    return `D+${Math.abs(diffDays)}`;
  };

  const todayStr = getTodayString();

  return (
    <section className="py-24 bg-white border-y border-gray-200" id="planner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-indigo-50 border border-indigo-150 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-bold text-indigo-800">Daily Life Manager</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-955 font-display">
            마이 데일리 성장 대시보드
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-normal">
            위대한 성장은 결국 매일의 작은 습관에서 찾아옵니다. 일일 정복해야 할 루틴 습관들과 중요한 진로 일정을 브라우저에 등록하고 트래킹하세요.
          </p>
        </div>

        {/* Motivational Quote Billboard Card */}
        <div className="bg-[#F9FAFB] rounded-2xl border border-gray-200/80 p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-750 bg-white px-2.5 py-1 rounded border border-indigo-150 shadow-xs">
              <Sparkles className="w-3 h-3 text-indigo-650" /> Today's Motivation
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-indigo-950 leading-relaxed italic">
              "{quotesList[quoteIdx].text}"
            </p>
            <p className="text-xs text-indigo-700 font-semibold">— {quotesList[quoteIdx].author}</p>
          </div>
          <button
            onClick={rotateQuote}
            className="flex-shrink-0 flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-xs font-bold text-gray-700 border border-gray-200 hover:border-gray-300 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3 text-indigo-550" /> 다른 조언 보기
          </button>
        </div>

        {/* Core Multi-Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Deck A: Habits Builder list */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-950 flex items-center gap-2 font-display">
                <Trophy className="w-5 h-5 text-indigo-600" />
                일일 습관 빌더
              </h3>
              <span className="text-xs font-bold text-indigo-750 bg-indigo-50 border border-indigo-100/50 px-2.5 py-1 rounded-full">
                완성된 습관: {habits.filter(h => h.completedDates.includes(todayStr)).length}개
              </span>
            </div>

            {/* Quick add form */}
            <form onSubmit={handleAddHabit} className="flex gap-2.5">
              <input
                type="text"
                placeholder="매일 아침 30분 전공 복습..."
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                className="flex-grow px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-indigo-500 focus:bg-white text-gray-800"
              />
              <button
                type="submit"
                className="shrink-0 px-4.5 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <Plus className="w-5 h-5" />
              </button>
            </form>

            {/* Habits List render */}
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              {habits.length > 0 ? (
                habits.map((habit) => {
                  const isChecked = habit.completedDates.includes(todayStr);
                  return (
                    <div
                      key={habit.id}
                      onClick={() => handleToggleHabit(habit.id)}
                      className={`group flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                        isChecked 
                          ? 'border-indigo-200 bg-indigo-50/20' 
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                          isChecked 
                            ? 'bg-indigo-600 border-indigo-650 text-white' 
                            : 'border-gray-300 bg-gray-50 text-transparent group-hover:border-indigo-550'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${
                            isChecked ? 'text-gray-400 line-through font-normal' : 'text-gray-950 shadow-xs'
                          }`}>
                            {habit.name}
                          </p>
                          <span className="text-[10px] text-indigo-750 bg-indigo-50/60 border border-indigo-100/30 py-0.5 px-2 rounded font-bold">
                            현재 {habit.streak}일 연속 달성 중 🔥
                          </span>
                        </div>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={(e) => handleDeleteHabit(habit.id, e)}
                        className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center text-gray-400 text-sm bg-gray-50 rounded-xl border border-gray-200">
                  등록된 습관이 없습니다. 상단 폼을 유심히 써서 추가해 보세요.
                </div>
              )}
            </div>
          </div>

          {/* Deck B: Academic D-Days */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-gray-955 flex items-center gap-2 font-display">
              <Calendar className="w-5 h-5 text-indigo-600" />
              학업 & 캐리어 D-Day 카운트다운
            </h3>

            {/* Quick Add Dday */}
            <form onSubmit={handleAddDDay} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <div className="sm:col-span-7">
                <input
                  type="text"
                  placeholder="예: OPIC 정기고사 발표일"
                  value={newDDayTitle}
                  onChange={(e) => setNewDDayTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-indigo-500 focus:bg-white text-gray-800"
                />
              </div>
              <div className="sm:col-span-3">
                <input
                  type="date"
                  value={newDDayDate}
                  onChange={(e) => setNewDDayDate(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-indigo-500 focus:bg-white text-gray-500 font-medium"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full h-full py-3 sm:py-0 bg-black hover:bg-gray-800 text-white rounded-xl font-bold text-sm flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  추가
                </button>
              </div>
            </form>

            {/* Ddays render list */}
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              {ddays.length > 0 ? (
                ddays.map((dday) => {
                  const ddayString = getDDayCount(dday.targetDate);
                  const isDday = ddayString === 'D-Day';
                  const isPassed = ddayString.startsWith('D+');

                  return (
                    <div
                      key={dday.id}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/60 rounded-xl border border-gray-200/50 group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-wider text-center font-mono ${
                          isDday 
                            ? 'bg-red-500 text-white animate-pulse'
                            : isPassed
                            ? 'bg-gray-250 text-gray-400'
                            : 'bg-indigo-50 text-indigo-800 border border-indigo-100/50'
                        }`}>
                          {ddayString}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 leading-tight">
                            {dday.title}
                          </p>
                          <span className="text-[10px] text-gray-400 font-mono font-medium">
                            목표일: {dday.targetDate}
                          </span>
                        </div>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => handleDeleteDDay(dday.id)}
                        className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center text-gray-400 text-sm bg-gray-50 rounded-xl border border-gray-200">
                  남은 카운트다운 일정이 비어 있습니다. 다이어리 대용으로 활용해보세요.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
