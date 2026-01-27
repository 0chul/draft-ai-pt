import React from 'react';
import { Search, FileText, Zap, FileCheck, Edit3, ShieldAlert, BarChart3, BookOpen, ArrowRight } from 'lucide-react';
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
        <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#0f172a] min-h-[800px] xl:min-h-[700px] flex flex-col xl:flex-row">
             {/* Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             
             {/* Left: Description Panel */}
             <div className="xl:w-1/3 p-10 xl:p-12 border-b xl:border-b-0 xl:border-r border-gray-800 bg-[#020617]/50 backdrop-blur-sm z-20 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold mb-6 border border-cyan-500/30">
                    <Zap className="w-3 h-3" /> Deep Tech Editorial
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight">
                    Deep Tech Core: <br/>
                    스스로 평가하고 고쳐 쓰는 <br/>
                    <span className="text-cyan-400">'재귀적 개선 루프'</span> <br/>
                    (Self-Critique Loop)
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    Draft AI는 생성된 초안을 그대로 내놓지 않습니다. 
                    <strong>'평가(Critique)'</strong>와 <strong>'개선(Refine)'</strong> 과정을 반복 수행하여 
                    환각(Hallucination)을 억제하고, 결과물의 사실적 신뢰도를 보장합니다.
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                        <div>
                            <h5 className="font-bold text-white text-sm">Critique Agent</h5>
                            <p className="text-xs text-gray-500">RFP 요구사항 기반 엄격 평가</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                        <div>
                            <h5 className="font-bold text-white text-sm">Decision Gate</h5>
                            <p className="text-xs text-gray-500">품질 점수 미달 시 재작성 지시 (Loop)</p>
                        </div>
                    </div>
                </div>
             </div>

             {/* Right: Visualization Diagram */}
             <div className="xl:w-2/3 relative flex items-center justify-center overflow-hidden py-10 xl:py-0">
                
                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Diagram Container - Scaled for responsiveness */}
                <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] select-none scale-90 md:scale-100">
                    
                    {/* --- SVG Layer for Lines & Circles --- */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                        <defs>
                            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
                                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                                <stop offset="100%" stopColor="#7e22ce" stopOpacity="1" />
                            </linearGradient>
                            <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6 L0,0" fill="#475569" />
                            </marker>
                             <marker id="arrowHeadBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6 L0,0" fill="#3b82f6" />
                            </marker>
                             <marker id="arrowHeadPurple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L6,3 L0,6 L0,0" fill="#a855f7" />
                            </marker>
                        </defs>

                        {/* Main Dashed Circle */}
                        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="8 8" className="opacity-50" />

                        {/* Path A: Purple Curve (Bottom to Left) */}
                        {/* Approx path from 6 o'clock to 9 o'clock */}
                        <path 
                            d="M 300 540 A 240 240 0 0 1 60 300" 
                            fill="none" 
                            stroke="url(#purpleGradient)" 
                            strokeWidth="4"
                            strokeLinecap="round"
                            className="hidden lg:block" /* Only visible on large screens matching the coordinate system */
                        />
                         {/* Responsive Path A for smaller screens (simplified logic via CSS classes elsewhere or media queries not easily done in SVG coords without viewBox)
                             Using viewbox to normalize coordinates 
                         */}
                    </svg>
                    
                    {/* SVG for normalized coordinates */}
                    <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                        {/* Path A Highlight (Bottom to Left) */}
                         <motion.path 
                            d="M 300 540 A 240 240 0 0 1 60 300" 
                            fill="none" 
                            stroke="#a855f7" 
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            markerEnd="url(#arrowHeadPurple)"
                        />
                        
                        {/* Path B Highlight (Bottom to Right Out) */}
                        <motion.path 
                            d="M 350 540 C 450 540, 500 500, 580 450" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="3"
                            strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            markerEnd="url(#arrowHeadBlue)"
                        />

                        {/* Arrows on the circle */}
                         <path d="M 300 60 L 310 60" markerEnd="url(#arrowHead)" stroke="none" transform="rotate(45 300 300) translate(240 0)" /> 
                    </svg>


                    {/* --- Center Text --- */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0 w-48">
                        <h4 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            Recursive<br/>
                            <span className="text-gray-400">Critique-Refine</span><br/>
                            Cycle
                        </h4>
                    </div>


                    {/* --- Node 1: Top (Draft Generation) --- */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-20%] flex flex-col items-center z-10">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f172a] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-4"
                        >
                            <FileText className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                        </motion.div>
                        <div className="text-center w-48">
                            <h5 className="font-bold text-white text-lg">Draft Generation</h5>
                            <p className="text-sm text-gray-400">초안 생성</p>
                        </div>
                    </div>

                    {/* --- Node 2: Right (Critique Agent) --- */}
                    <div className="absolute top-1/2 right-0 translate-x-[20%] -translate-y-1/2 flex flex-col items-center z-10">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f172a] border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-4"
                        >
                            <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                        </motion.div>
                        <div className="text-center w-48">
                            <h5 className="font-bold text-white text-lg">Critique Agent</h5>
                            <p className="text-sm text-gray-400">RFP 기반 엄격 평가</p>
                        </div>
                    </div>

                    {/* --- Node 3: Bottom (Decision Gate) --- */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] flex flex-col items-center z-10">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="w-24 h-24 md:w-28 md:h-28 bg-blue-600 rotate-45 flex items-center justify-center shadow-xl border-4 border-[#0a1022] z-20 mb-8"
                        >
                            <div className="-rotate-45 text-center">
                                <span className="block text-white/80 text-xs font-bold uppercase">Score</span>
                                <span className="block text-white font-extrabold text-xl">&lt; 80?</span>
                            </div>
                        </motion.div>
                         <div className="text-center w-48 -mt-2">
                            <h5 className="font-bold text-white text-lg">Decision Gate</h5>
                        </div>
                    </div>

                    {/* --- Node 4: Left (Refine Generation) --- */}
                    <div className="absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 flex flex-col items-center z-10">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f172a] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] mb-4"
                        >
                            <Edit3 className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                        </motion.div>
                        <div className="text-center w-48">
                            <h5 className="font-bold text-white text-lg">Refine Generation</h5>
                            <p className="text-sm text-gray-400">환각 억제 및 보강</p>
                        </div>
                    </div>

                    {/* --- Path Labels & Decorators --- */}
                    
                    {/* Arrow: Top to Right */}
                    <div className="absolute top-[15%] right-[15%] text-gray-600 rotate-45">
                        <ArrowRight className="w-6 h-6" />
                    </div>
                    {/* Arrow: Right to Bottom */}
                    <div className="absolute bottom-[15%] right-[15%] text-gray-600 rotate-[135deg]">
                        <ArrowRight className="w-6 h-6" />
                    </div>
                    {/* Arrow: Left to Top */}
                     <div className="absolute top-[15%] left-[15%] text-gray-600 -rotate-[45deg]">
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    {/* Path A Label (Loop) */}
                    <div className="absolute bottom-[18%] left-[18%] rotate-[-45deg] text-center">
                        <div className="text-purple-400 font-bold text-sm bg-[#0f172a] px-2 py-1 rounded-full border border-purple-500/30">
                            Path A (If Yes)
                        </div>
                    </div>

                    {/* Path B Label (Exit) */}
                     <div className="absolute bottom-[8%] right-[20%] text-center z-20">
                         <div className="text-blue-400 font-bold text-sm whitespace-nowrap bg-[#0f172a] px-2 py-1 rounded-full border border-blue-500/30">
                            Path B (If No)
                         </div>
                    </div>

                    {/* Final Output Node */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-[-10%] right-[-15%] flex flex-col items-center z-10"
                    >
                         <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-xl border-4 border-[#0a1022] z-20 mb-2">
                            <FileCheck className="w-10 h-10 text-blue-600" />
                         </div>
                         <h5 className="font-bold text-blue-100 text-lg">Final Output</h5>
                    </motion.div>

                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionTech;