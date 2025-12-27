
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TransformationMap } from './components/TransformationMap';
import { Instructor } from './components/Instructor';
import { MarketReality } from './components/MarketReality';
import { PainPoints } from './components/PainPoints';
import { KeySkills } from './components/KeySkills';
import { NewRules } from './components/NewRules';
import { AiSection } from './components/AiSection';
import { SystemModel } from './components/SystemModel';
import { RealityCheck } from './components/RealityCheck';
import { TheSqueeze } from './components/TheSqueeze';
import { TheMechanism } from './components/TheMechanism';
import { TheSolutionFoundation } from './components/TheSolutionFoundation';
import { PlatformAndAI } from './components/PlatformAndAI';
import { TheOpportunity } from './components/TheOpportunity';
import { TheBridge } from './components/TheBridge';
import { TheStruggleStory } from './components/TheStruggleStory';
import { OldModelAnalysis } from './components/OldModelAnalysis';
import { TheMarketParadox } from './components/TheMarketParadox';
import { TheBlueprint } from './components/TheBlueprint';
import { TheEpiphany } from './components/TheEpiphany';
import { TheNewReality } from './components/TheNewReality';
import { BarrierToEntry } from './components/BarrierToEntry';
import { TheResultAndTiming } from './components/TheResultAndTiming';
import { TheOneChannel } from './components/TheOneChannel';
import { FacebookStrategy } from './components/FacebookStrategy';
import { TheStoryPivot } from './components/TheStoryPivot';
import { TheComeback } from './components/TheComeback';
import { TheSystemOrigins } from './components/TheSystemOrigins';
import { TheVision } from './components/TheVision';
import { IntegratedSystemFlow } from './components/IntegratedSystemFlow';
import { TheDiagnosis } from './components/TheDiagnosis';
import { TheCrossroads } from './components/TheCrossroads';
import { TheOfferReveal } from './components/TheOfferReveal';
import { TargetAudience } from './components/TargetAudience';
import { TheSoloTrap } from './components/TheSoloTrap';
import { TheProgramPositioning } from './components/TheProgramPositioning';
import { TheDay33Vision } from './components/TheDay33Vision';
import { TheValueIntro } from './components/TheValueIntro';
import { TheDeliverables } from './components/TheDeliverables';
import { TheTotalValue } from './components/TheTotalValue';
import { ThePriceJustification } from './components/ThePriceJustification';
import { TheLimitedAccess } from './components/TheLimitedAccess';
import { TheFinalComparison } from './components/TheFinalComparison';
import { TheFinalCall } from './components/TheFinalCall';
import { Footer } from './components/Footer';
import { TheNewAssets } from './components/TheNewAssets';
import { RegistrationPopup } from './components/RegistrationPopup';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Trang chủ', id: 'hero' },
    { label: 'Nghịch lý thị trường', id: 'reality' },
    { label: 'Cỗ máy 100X', id: 'system' },
    { label: 'Lộ trình 33 Ngày', id: 'journey' },
    { label: 'Đăng ký tham gia', id: 'pricing' },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] w-full px-4 md:px-8 py-4 flex justify-between items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        
        {/* Contact Info - Visible on Desktop */}
        <div className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400">
          <i className="ph-fill ph-phone rotate-90 text-green-600"></i>
          <span>0943206688</span>
        </div>

        {/* Brand Logo - Center Mobile/Desktop */}
        <div 
          className="cursor-pointer md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" 
          onClick={() => scrollTo('hero')}
        >
          <div className="flex flex-col items-center bg-black dark:bg-white text-white dark:text-black px-3 py-1 skew-x-[-10deg] shadow-lg">
            <span className="text-xs md:text-sm font-black leading-none tracking-tighter uppercase skew-x-[10deg]">33 DAYS PLAN</span>
          </div>
        </div>

        {/* CTA, Theme Toggle and Menu Button - Always Visible */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={openPopup}
            className="px-3 md:px-4 py-2 bg-primary hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black font-black text-[10px] md:text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-sm border border-black/5"
          >
            GHI DANH MIỄN PHÍ
          </button>
          
          <div className="flex items-center gap-1 md:gap-2 border-l border-gray-200 dark:border-gray-800 pl-2 md:pl-4">
            <button 
              onClick={toggleTheme}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
              title={theme === 'dark' ? 'Chuyển sang Chế độ sáng' : 'Chuyển sang Chế độ tối'}
            >
              <i className={`ph-fill ${theme === 'dark' ? 'ph-sun' : 'ph-moon'} text-lg md:text-xl`}></i>
            </button>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-black tracking-widest text-black dark:text-white hover:text-green-600 transition-colors uppercase"
            >
              <span className="hidden sm:inline">MENU</span>
              <i className="ph ph-list text-xl md:text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Panel Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-full max-w-[320px] md:max-w-[400px] bg-white dark:bg-surface-dark shadow-2xl transition-transform duration-500 ease-expo ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Panel Header */}
          <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
             <span className="text-xs font-black uppercase tracking-widest text-gray-400">Điều hướng</span>
             <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
             >
                <i className="ph ph-x text-xl"></i>
             </button>
          </div>

          {/* Panel Items */}
          <div className="p-8 flex flex-col gap-6">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(item.id)}
                className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-400 hover:text-black dark:hover:text-white hover:pl-4 transition-all duration-300 text-left border-b border-transparent hover:border-primary pb-2"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
             <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Theo dõi chúng tôi</span>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/tauhb/" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:border-primary hover:text-black transition-all">
                    <i className="ph ph-facebook-logo text-xl"></i>
                  </a>
                  <a href="https://www.youtube.com/@hoangbatauofficial/" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:border-primary hover:text-black transition-all">
                    <i className="ph ph-youtube-logo text-xl"></i>
                  </a>
                  <a href="https://www.tiktok.com/@hoangbatau" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:border-primary hover:text-black transition-all">
                    <i className="ph ph-tiktok-logo text-xl"></i>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 w-full pt-16">
        <section id="hero"><Hero onCTA={openPopup} /></section>
        <TransformationMap />
        <Instructor />
        <section id="reality"><MarketReality /></section>
        <TheBridge />
        <TheSqueeze />
        <PainPoints />
        <KeySkills />
        <NewRules />
        <AiSection />
        <RealityCheck />
        <TheMechanism />
        <TheStruggleStory />
        <OldModelAnalysis />
        <section id="system-paradox"><TheMarketParadox /></section>
        <TheBlueprint />
        <section id="system"><SystemModel /></section>
        <div className="bg-background-light dark:bg-background-dark">
          <TheOpportunity />
          <TheNewReality />
          <TheSolutionFoundation />
          <PlatformAndAI />
          <TheEpiphany />
          <TheNewAssets />
        </div>
        <BarrierToEntry onCTA={openPopup} />
        <section id="results"><TheResultAndTiming /></section>
        <TheOneChannel />
        <FacebookStrategy />
        <TheStoryPivot />
        <TheComeback />
        <TheSystemOrigins />
        <TheVision />
        <IntegratedSystemFlow />
        <TheDiagnosis />
        <TheCrossroads />
        <section id="reveal"><TheOfferReveal /></section>
        <TargetAudience />
        <TheSoloTrap />
        <TheProgramPositioning />
        <TheDay33Vision />
        <TheValueIntro />
        <section id="journey"><TheDeliverables /></section>
        <section id="pricing"><TheTotalValue onCTA={openPopup} /></section>
        <ThePriceJustification />
        <TheLimitedAccess />
        <TheFinalComparison onCTA={openPopup} />
        <TheFinalCall onCTA={openPopup} />
      </main>

      <Footer />

      {/* Global Registration Popup */}
      <RegistrationPopup isOpen={isPopupOpen} onClose={closePopup} />
      
      <style>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>
    </div>
  );
};

export default App;
