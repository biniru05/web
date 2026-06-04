export type TrackType = 'career' | 'activity' | 'language' | 'balance';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  grade: '1학년' | '2학년' | '3학년' | '4학년' | '공통';
  track: TrackType;
  links?: { label: string; url: string }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    text: string;
    scores: { [key: string]: number }; // score for each user traits (e.g. academic, career, social, wellness)
  }[];
}

export type UserTrait = 'academic' | 'portfolio' | 'networking' | 'wellness';

export interface QuizResult {
  title: string;
  subtitle: string;
  description: string;
  traits: string[]; // e.g., ["실행력 최고", "계획적인 전술가"]
  strengths: string[];
  weaknesses: string[];
  recommendedTrack: TrackType;
  actionPlans: string[];
}

export interface Habit {
  id: string;
  name: string;
  frequency: string;
  completedDates: string[]; // ISO string of dates (YYYY-MM-DD)
  streak: number;
}

export interface DDay {
  id: string;
  title: string;
  targetDate: string; // YYYY-MM-DD
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'competitions' | 'education' | 'scholarships' | 'books' | 'community';
  url: string;
  tags: string[];
  tips?: string;
}
