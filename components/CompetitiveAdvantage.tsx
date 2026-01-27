import React from 'react';
import { ShieldCheck, Database, Users, GitMerge } from 'lucide-react';

const CompetitiveAdvantage: React.FC = () => {
  return (
    <section id="advantage" className="py-24 bg-[#020617] relative">
       {/* Decorative Lines */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Title & Summary */}
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Competitive Advantage</h2>
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
              왜 <br/>
              <span className="text-blue-500">Draft AI</span> 인가?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              일반적인 AI 모델은 '그럴듯한' 글을 쓰지만, Draft AI는 '팔리는' 제안을 씁니다.<br/><br/>
              25년의 컨설팅 노하우와 독보적인 데이터 파이프라인이 결합된, 
              대체 불가능한 경쟁 우위를 보유하고 있습니다.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400"/>
                    Proven Success
                </h4>
                <p className="text-sm text-gray-400">
                    이미 핵심 기능에 대한 MVP 개발 및 고객사 시나리오 기반 실증 테스트를 완료하여 기술적 실현 가능성을 검증했습니다.
                </p>
            </div>
          </div>

          {/* Right: Detailed Points */}
          <div className="lg:w-2/3 grid gap-8">
            
            {/* Advantage 1 */}
            <div className="group relative bg-[#0f172a] rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-bl-full rounded-tr-2xl transition-all group-hover:bg-blue-600/20"></div>
                <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400 shrink-0">
                        <Users className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-3">Domain x Tech Synergy</h4>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            단순 IT 기업이 흉내 낼 수 없는 <strong>'업의 본질'</strong>에 대한 이해가 있습니다.
                            대표이사의 25년 경영 컨설팅 경력과 12년차 개발팀의 기술력이 결합되어, 
                            실무자가 진짜 필요로 하는 디테일과 UX를 구현했습니다.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold border border-blue-500/20">25년 업력 노하우</span>
                            <span className="px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold border border-blue-500/20">실전 영업 프로세스 내재화</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advantage 2 */}
            <div className="group relative bg-[#0f172a] rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600/10 rounded-bl-full rounded-tr-2xl transition-all group-hover:bg-cyan-600/20"></div>
                <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-cyan-900/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <Database className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-3">Exclusive Data Moat</h4>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            파트너사 <strong>'Expert Consulting'</strong>과 <strong>'Consumer Insight'</strong>의 방대한 데이터베이스를 독점적으로 활용합니다.
                            수천 건의 실제 제안서, 교육 커리큘럼, 시장 조사 데이터를 RAG(검색 증강 생성)에 활용하여 
                            경쟁사가 따라올 수 없는 품질의 콘텐츠를 생성합니다.
                        </p>
                         <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-400 text-xs font-bold border border-cyan-500/20">High-Quality Data</span>
                            <span className="px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-400 text-xs font-bold border border-cyan-500/20">독점 파트너십</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advantage 3 */}
            <div className="group relative bg-[#0f172a] rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-bl-full rounded-tr-2xl transition-all group-hover:bg-purple-600/20"></div>
                <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-purple-900/30 flex items-center justify-center text-purple-400 shrink-0">
                        <GitMerge className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-3">Human-in-the-Loop UX</h4>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            완전 자동화의 오류 가능성을 인정하고, 전문가가 핵심 의사결정에 개입할 수 있는 
                            <strong>'협업형 UX'</strong>를 설계했습니다. AI가 초안을 잡고, 
                            Self-Critique 루프가 검증하며, 인간이 최종 승인하는 프로세스로 신뢰도를 극대화합니다.
                        </p>
                         <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-xs font-bold border border-purple-500/20">신뢰성 보장</span>
                            <span className="px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-xs font-bold border border-purple-500/20">환각(Hallucination) 제어</span>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;