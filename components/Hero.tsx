import React from 'react';
import { ArrowRight, Sparkles, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>2026년 초기창업패키지 딥테크 특화형</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight break-keep">
              B2B 제안서 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                자동 생성 및 최적화
              </span>
              <br /> 에이전트
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl break-keep">
              Draft AI는 단순 생성이 아닙니다. 
              고객의 RFP를 분석하고 스스로 평가하며(Self-Critique), 
              최적의 제안 전략을 도출하는 <strong>지능형 멀티 에이전트 시스템</strong>입니다.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button 
                onClick={() => scrollToSection('solution')}
                className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                솔루션 살펴보기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('problem')}
                className="px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all text-gray-300 flex items-center justify-center"
              >
                문제 인식
              </button>
            </motion.div>
            
            <div className="pt-8 flex items-center gap-8 text-sm text-gray-500 font-mono">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-500" />
                <span>RAG Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-500" />
                <span>Recursive Critique Loop</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Abstract Dashboard Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 bg-[#0f172a] border border-slate-700 rounded-2xl p-2 shadow-2xl neon-glow"
            >
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                    alt="Dashboard Analytics" 
                    className="rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
                
                {/* Overlay Floating Cards */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-8 top-1/4 bg-[#1e293b]/90 backdrop-blur-md border border-blue-500/30 p-4 rounded-lg shadow-xl" 
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <span className="font-bold">98%</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Draft Completion</p>
                            <p className="text-sm font-bold text-white">Success Rate</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 1.2, duration: 0.5 }}
                   className="absolute -right-8 bottom-1/4 bg-[#1e293b]/90 backdrop-blur-md border border-cyan-500/30 p-4 rounded-lg shadow-xl" 
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Self-Critique</p>
                            <p className="text-sm font-bold text-white">Logic Verified</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            
            {/* Background Abstract Shapes */}
            <div className="absolute -top-10 -right-10 w-full h-full border border-blue-500/20 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
            <div className="absolute -bottom-10 -left-10 w-full h-full border border-cyan-500/20 rounded-2xl -z-10 -translate-x-4 -translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;