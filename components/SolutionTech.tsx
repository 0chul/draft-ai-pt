import React from 'react';
import { Search, FileText, FileCheck, Edit3, ShieldAlert, BarChart3, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionTech: React.FC = () => {
  const agents = [
    {
      id: 1,
      title: "RFP 분석 에이전트",
      desc: "비정형 문서(RFP, 회의록)에서 핵심 요구사항, 예산, 평가 기준을 구조화하여 추출합니다.",
      icon: <Search className="w-6 h-6" />,
      color: "blue",
      borderColor: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/50",
      bg: "bg-blue-900/30",
      text: "text-blue-400"
    },
    {
      id: 2,
      title: "트렌드 리서치 에이전트",
      desc: "산업 동향, 경쟁사 분석 등 최신 데이터를 수집하여 제안서의 설득력을 높이는 인사이트를 제공합니다.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "cyan",
      borderColor: "border-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/50",
      bg: "bg-cyan-900/30",
      text: "text-cyan-400"
    },
    {
      id: 3,
      title: "커리큘럼 매칭 에이전트",
      desc: "고객 니즈에 가장 부합하는 사내 솔루션과 전문가(강사) 풀을 탐색하여 최적의 조합을 추천합니다.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "purple",
      borderColor: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/50",
      bg: "bg-purple-900/30",
      text: "text-purple-400"
    },
    {
      id: 4,
      title: "제안서 조립 에이전트",
      desc: "모든 데이터를 논리적 흐름에 맞게 조합하고, 표준 템플릿을 활용하여 최종 PPTX 초안을 완성합니다.",
      icon: <FileText className="w-6 h-6" />,
      color: "green",
      borderColor: "border-green-500/20",
      hoverBorder: "hover:border-green-500/50",
      bg: "bg-green-900/30",
      text: "text-green-400"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-bold tracking-widest uppercase mb-4"
          >
            Multi-Agent Architecture
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            4개의 전문 에이전트와 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              재귀적 개선 루프(Recursive Loop)
            </span>
          </motion.h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            RFP 분석부터 트렌드 리서치, 커리큘럼 매칭, 제안서 조립까지.<br className="hidden md:block"/>
            각 분야의 전문 AI 에이전트들이 유기적으로 협업하여 최상의 결과물을 만들어냅니다.
          </p>
        </div>

        {/* 4 Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative">
             {agents.map((agent, index) => (
               <motion.div
                 key={agent.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className={`glass-panel p-6 rounded-2xl border ${agent.borderColor} ${agent.hoverBorder} transition-all relative z-10 group`}
               >
                  <div className={`w-12 h-12 ${agent.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${agent.text}`}>
                      {agent.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{agent.id}. {agent.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{agent.desc}</p>
               </motion.div>
             ))}
        </div>

        {/* Deep Tech Core Visualization - Recursive Cycle */}
        <div className="relative w-full max-w-5xl mx-auto mt-20">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[#0a1022] rounded-3xl border border-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative z-10 py-16 md:py-24 flex justify-center overflow-hidden">
                {/* Diagram Container */}
                <div className="relative w-[800px] h-[600px] max-w-full scale-[0.6] md:scale-[0.8] lg:scale-100 origin-center select-none">
                    
                    {/* SVG Layer */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 800 600">
                        <defs>
                            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#d8b4fe" />
                            </linearGradient>
                             <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#60a5fa" />
                            </linearGradient>
                            <marker id="arrowHeadPurple" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                                <path d="M0,0 L4,2 L0,4 L0,0" fill="#a855f7" />
                            </marker>
                            <marker id="arrowHeadBlue" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                                <path d="M0,0 L4,2 L0,4 L0,0" fill="#3b82f6" />
                            </marker>
                        </defs>

                        {/* Main Circle */}
                        <circle cx="400" cy="300" r="200" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="8 8" />

                        {/* Path A: Decision (Bottom) to Refine (Left) */}
                        <motion.path 
                            d="M 400 500 A 200 200 0 0 1 200 300"
                            fill="none"
                            stroke="url(#purpleGradient)"
                            strokeWidth="3"
                            markerEnd="url(#arrowHeadPurple)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />

                        {/* Path B: Decision (Bottom) to Output (Right) */}
                        <motion.path 
                            d="M 460 500 C 550 500, 600 500, 670 450"
                            fill="none"
                            stroke="url(#blueGradient)"
                            strokeWidth="3"
                            markerEnd="url(#arrowHeadBlue)"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </svg>

                    {/* Center Content */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <h3 className="text-3xl font-bold text-white leading-tight">
                            Recursive<br/>
                            <span className="text-gray-400 text-2xl">Critique-Refine</span><br/>
                            Cycle
                        </h3>
                    </div>

                    {/* Nodes */}
                    
                    {/* Top: Draft Generation */}
                    <div className="absolute top-[100px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <motion.div 
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} 
                            className="w-24 h-24 rounded-full bg-[#0a1022] border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center relative z-10 mb-4"
                        >
                            <FileText className="w-10 h-10 text-blue-400" />
                        </motion.div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-white">Draft Generation</h4>
                            <p className="text-gray-400">초안 생성</p>
                        </div>
                    </div>

                    {/* Right: Critique Agent */}
                    <div className="absolute top-[300px] left-[600px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                         <motion.div 
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }}
                            className="w-24 h-24 rounded-full bg-[#0a1022] border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center relative z-10 mb-4"
                        >
                            <ShieldAlert className="w-10 h-10 text-cyan-400" />
                        </motion.div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-white">Critique Agent</h4>
                            <p className="text-gray-400">RFP 기반 엄격 평가</p>
                        </div>
                    </div>

                    {/* Left: Refine Generation */}
                    <div className="absolute top-[300px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                         <motion.div 
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }}
                            className="w-24 h-24 rounded-full bg-[#0a1022] border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)] flex items-center justify-center relative z-10 mb-4"
                        >
                            <Edit3 className="w-10 h-10 text-purple-400" />
                        </motion.div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-white">Refine Generation</h4>
                            <p className="text-gray-400">환각 억제 및 보강</p>
                        </div>
                    </div>

                    {/* Bottom: Decision Gate */}
                     <div className="absolute top-[500px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                         <motion.div 
                            initial={{ scale: 0, rotate: 45 }} whileInView={{ scale: 1, rotate: 45 }} transition={{ delay: 0.4 }}
                            className="w-28 h-28 bg-blue-600 flex items-center justify-center shadow-2xl border-4 border-[#0a1022] z-20 mb-8"
                         >
                             <div className="-rotate-45 text-center">
                                 <div className="text-blue-200 text-xs font-bold tracking-widest uppercase">Score</div>
                                 <div className="text-white text-2xl font-black">&lt; 80?</div>
                             </div>
                         </motion.div>
                         <div className="text-center w-40">
                            <h4 className="text-xl font-bold text-white">Decision Gate</h4>
                        </div>
                    </div>

                    {/* Final Output - Right Bottom */}
                     <div className="absolute top-[440px] left-[710px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                         <div className="relative group">
                             {/* Dashed placeholder effect */}
                             <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-12 border-2 border-dashed border-gray-600 rounded-lg opacity-50"></div>
                             <ArrowRight className="absolute -top-8 left-1/2 -translate-x-1/2 -rotate-90 text-blue-500 w-6 h-6 animate-bounce" />

                             <motion.div 
                                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                                className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-xl border-4 border-[#0a1022] relative z-10"
                             >
                                <FileCheck className="w-10 h-10 text-blue-600" />
                            </motion.div>
                         </div>
                         <div className="mt-3 font-bold text-blue-100 text-xl">Final Output</div>
                    </div>

                    {/* Labels */}
                    <motion.div 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}
                        className="absolute top-[440px] left-[260px] rotate-[-45deg] z-20"
                    >
                        <span className="bg-[#0a1022] text-purple-400 border border-purple-500/50 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            Path A (If Yes)
                        </span>
                    </motion.div>

                     <motion.div 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}
                        className="absolute top-[480px] left-[540px] z-20"
                    >
                        <span className="bg-[#0a1022] text-blue-400 border border-blue-500/50 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            Path B (If No)
                        </span>
                    </motion.div>

                    {/* Decor Arrows */}
                     <ArrowRight className="absolute top-[160px] left-[540px] text-gray-700 rotate-45 w-8 h-8" />
                     <ArrowRight className="absolute top-[440px] left-[540px] text-gray-700 rotate-[135deg] w-8 h-8" />
                     <ArrowRight className="absolute top-[160px] left-[260px] text-gray-700 -rotate-45 w-8 h-8" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionTech;