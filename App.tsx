import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import ProblemAnalysis from './components/ProblemAnalysis';
import SolutionTech from './components/SolutionTech';
import ServiceDetail from './components/ServiceDetail';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import MarketStrategy from './components/MarketStrategy';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'services', label: 'Services' },
    { id: 'advantage', label: 'Advantage' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'team', label: 'Team' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span>Draft <span className="text-blue-500">AI</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase hover:text-blue-400"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0f172a] border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-2 text-gray-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <ProblemAnalysis />
        <SolutionTech />
        <ServiceDetail />
        <CompetitiveAdvantage />
        <MarketStrategy />
        <Roadmap />
        <Team />
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 z-40 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;