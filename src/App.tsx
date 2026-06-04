/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Roadmap from './components/Roadmap';
import Planner from './components/Planner';
import Resources from './components/Resources';
import DeployGuide from './components/DeployGuide';
import Footer from './components/Footer';
import { TrackType } from './types';

export default function App() {
  const [recommendedTrack, setRecommendedTrack] = useState<TrackType>('career');
  const [isDeployOpen, setIsDeployOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Simple scroll spying to highlight active navigations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'quiz', 'roadmap', 'planner', 'resources'];
      const scrollPos = window.scrollY + 160;

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartQuiz = () => {
    scrollToSection('quiz');
  };

  const handleExploreRoadmap = () => {
    scrollToSection('roadmap');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-teal-600 selection:text-white" id="unigrow-app">
      {/* Floating Header */}
      <Navbar 
        onOpenDeploy={() => setIsDeployOpen(true)} 
        activeSection={activeSection} 
      />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Grid */}
        <Hero 
          onStartQuiz={handleStartQuiz} 
          onExploreRoadmap={handleExploreRoadmap} 
        />

        {/* Self-Diagnostic assessment */}
        <Quiz 
          onSetRecommendedTrack={(track) => setRecommendedTrack(track)}
          onScrollToRoadmap={() => scrollToSection('roadmap')}
        />

        {/* Milestone Growth Roadmaps */}
        <Roadmap 
          recommendedTrack={recommendedTrack}
          onSetRecommendedTrack={(track) => setRecommendedTrack(track)}
        />

        {/* Daily Habits & Countdown dashboard */}
        <Planner />

        {/* Curated Resources Hub */}
        <Resources />
      </main>

      {/* Persistent Elegant Footer */}
      <Footer onOpenDeploy={() => setIsDeployOpen(true)} />

      {/* Developer Vercel/GitHub Deployment Overlay Help modal */}
      <DeployGuide 
        isOpen={isDeployOpen} 
        onClose={() => setIsDeployOpen(false)} 
      />
    </div>
  );
}

