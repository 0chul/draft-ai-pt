import React from 'react';
import { Search, Brain, FileText, Zap, FileCheck, Edit3, ShieldAlert, Cpu, BarChart3, BookOpen } from 'lucide-react';

const SolutionTech: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-cyan-400 font-bold tracking-widest uppercase mb-4">Multi-Agent Architecture</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            4개의 전문 에이전트와 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              재귀적 개선 루프(Recursive Loop)
            </span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            RFP 분석부터 트렌드 리서치, 커리큘럼 매칭, 제안서 조립까지.<br className="hidden md:block"/>
            각 분야의 전문 AI 에이전트들이 유기적으로 협업하여 최상의 결과물을 만들어냅니다.
          </p>
        </div>

        {/* 4 Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative">
             {/* Agent 1 */}
             <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all relative z-10 group">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-blue-400">
                    <Search className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">1. RFP 분석 에이전트</h4>
                <p className="text-xs text-gray-400 leading-relaxed">비정형 문서(RFP, 회의록)에서 핵심 요구사항, 예산, 평가 기준을 구조화하여 추출합니다.</p>
             </div>

             {/* Agent 2 */}
             <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all relative z-10 group">
                <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-cyan-400">
                    <BarChart3 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">2. 트렌드 리서치 에이전트</h4>
                <p className="text-xs text-gray-400 leading-relaxed">산업 동향, 경쟁사 분석 등 최신 데이터를 수집하여 제안서의 설득력을 높이는 인사이트를 제공합니다.</p>
             </div>

             {/* Agent 3 */}
             <div className="glass-panel p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all relative z-10 group">
                <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-purple-400">
                    <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">3. 커리큘럼 매칭 에이전트</h4>
                <p className="text-xs text-gray-400 leading-relaxed">고객 니즈에 가장 부합하는 사내 솔루션과 전문가(강사) 풀을 탐색하여 최적의 조합을 추천합니다.</p>
             </div>

             {/* Agent 4 */}
             <div className="glass-panel p-6 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all relative z-10 group">
                <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-green-400">
                    <FileText className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">4. 제안서 조립 에이전트</h4>
                <p className="text-xs text-gray-400 leading-relaxed">모든 데이터를 논리적 흐름에 맞게 조합하고, 표준 템플릿을 활용하여 최종 PPTX 초안을 완성합니다.</p>
             </div>
        </div>

        {/* Deep Tech Core Visualization */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#0f172a]">
             {/* Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row">
                 {/* Left: Description */}
                 <div className="lg:w-1/3 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-800 bg-[#020617]/50 backdrop-blur-sm">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold mb-6 border border-cyan-500/30">
                        <Zap className="w-3 h-3" /> Core Technology
                    </div>
                    <h3 className="text-3xl font-bold mb-6 leading-tight">
                        Recursive <br/>
                        <span className="text-cyan-400">Self-Critique</span> <br/>
                        Loop
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
                                <h5 className="font-bold text-white text-sm">Critique</h5>
                                <p className="text-xs text-gray-500">요구사항 충족도 및 논리적 일관성 평가</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                            <div>
                                <h5 className="font-bold text-white text-sm">Refine</h5>
                                <p className="text-xs text-gray-500">평가 미달 항목에 대한 구체적 수정 및 개선</p>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Right: Dynamic Visualization */}
                 <div className="lg:w-2/3 p-10 lg:p-0 relative min-h-[500px] flex items-center justify-center bg-[#0a1022]">
                    {/* Glowing Orbs Background */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/20 rounded-full blur-[80px]"></div>

                    {/* Diagram Container */}
                    <div className="relative w-full max-w-2xl h-[400px]">
                        
                        {/* 1. Generator Node (Left) */}
                        <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 w-40 p-4 rounded-xl bg-[#1e293b] border border-blue-500/50 shadow-lg z-20 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div className="text-center">
                                <div className="text-xs font-bold text-blue-300 mb-1">DRAFT</div>
                                <div className="text-[10px] text-gray-400">Agent Generation</div>
                            </div>
                        </div>

                        {/* 2. Critique Loop (Center) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 z-10">
                            {/* Orbit Ring */}
                            <div className="absolute inset-0 rounded-[40px] border-2 border-dashed border-cyan-500/30 animate-spin-slow"></div>
                            
                            {/* Top Node: Evaluator */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 py-2 px-3 rounded-lg bg-[#0f172a] border border-cyan-500 text-center shadow-[0_0_20px_rgba(6,182,212,0.3)] z-30">
                                <div className="flex items-center justify-center gap-2 text-cyan-400 mb-1">
                                    <ShieldAlert className="w-4 h-4" />
                                    <span className="text-xs font-bold">Critique</span>
                                </div>
                            </div>

                            {/* Bottom Node: Refiner */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 py-2 px-3 rounded-lg bg-[#0f172a] border border-purple-500 text-center shadow-[0_0_20px_rgba(168,85,247,0.3)] z-30">
                                <div className="flex items-center justify-center gap-2 text-purple-400 mb-1">
                                    <Edit3 className="w-4 h-4" />
                                    <span className="text-xs font-bold">Refine</span>
                                </div>
                            </div>

                            {/* Center Status */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Quality Score</div>
                                <div className="text-2xl font-black text-white">99.8%</div>
                                <div className="text-[10px] text-green-400 mt-1 flex items-center justify-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Verified
                                </div>
                            </div>
                        </div>

                        {/* 3. Output Node (Right) */}
                        <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 w-40 p-4 rounded-xl bg-[#1e293b] border border-green-500/50 shadow-lg z-20 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                <FileCheck className="w-6 h-6" />
                            </div>
                            <div className="text-center">
                                <div className="text-xs font-bold text-green-300 mb-1">FINAL</div>
                                <div className="text-[10px] text-gray-400">High-Quality PPTX</div>
                            </div>
                        </div>

                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {/* Draft to Loop */}
                            <path d="M 140 200 L 220 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                            
                            {/* Loop to Output */}
                            <path d="M 420 200 L 500 200" stroke="#22c55e" strokeWidth="2" />
                        </svg>

                        {/* Animated Particles */}
                        <div className="absolute top-[196px] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff] animate-move-right z-50"></div>
                    </div>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionTech;