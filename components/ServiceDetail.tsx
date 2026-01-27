import React from 'react';
import { FileSearch, PenTool, Layout, CheckCircle2, ArrowRight, BookOpen, BarChart3 } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const services = [
    {
      id: "01",
      icon: <FileSearch className="w-8 h-8 text-blue-400" />,
      title: "RFP Analysis Agent",
      subtitle: "RFP 분석 및 과업 구조화",
      description: "고객이 제출한 RFP(제안요청서), 미팅 회의록 등 비정형 문서를 분석하여 핵심 요구사항, 예산, 일정, 주요 평가 기준을 정확하게 추출하고 구조화합니다.",
      features: ["RFP 핵심 요구사항 자동 추출", "평가 기준 및 배점표 분석", "제안 전략(Concept) 수립"]
    },
    {
      id: "02",
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Trend Research Agent",
      subtitle: "시장 트렌드 및 경쟁사 분석",
      description: "분석된 산업 분야와 요구사항을 기반으로 최신 시장 동향, 경쟁사 현황, 관련 통계 데이터를 실시간으로 수집하여 제안서의 논리적 근거와 설득력을 강화합니다.",
      features: ["산업별 최신 트렌드 RAG 검색", "경쟁사 비교 분석 데이터 제공", "신뢰할 수 있는 통계 인용"]
    },
    {
      id: "03",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      title: "Curriculum Matching Agent",
      subtitle: "최적 솔루션 및 전문가 매칭",
      description: "고객의 니즈와 가장 부합하는 사내 솔루션, 서비스, 데이터, 전문가(강사) 풀을 자동으로 탐색하여 커리큘럼과 프로젝트 팀의 최적 조합을 추천합니다.",
      features: ["사내 데이터베이스(DB) 검색", "맞춤형 교육 커리큘럼 설계", "최적임 전문가/강사 추천"]
    },
    {
      id: "04",
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      title: "Proposal Assembly Agent",
      subtitle: "논리적 제안서 조립 및 완성",
      description: "모든 분석 데이터와 인사이트를 논리적 흐름(Pyramid Structure)에 맞게 조합하고, 사전에 지정된 표준 템플릿을 활용하여 최종 PPTX 형식의 제안서를 완성합니다.",
      features: ["표준 템플릿(Master) 자동 적용", "편집 가능한 PPTX 객체 생성", "논리적 스토리라인 구성"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a1022] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-900/5 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-cyan-900/5 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Core Agents</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            제안서 작성의 전 과정을 담당하는 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              지능형 AI 파트너 (Intelligent Agents)
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            단순 생성이 아닌 분석, 리서치, 매칭, 조립까지.<br />
            전문 컨설턴트의 업무 프로세스를 완벽하게 수행합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0f172a]/50 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:bg-[#0f172a]/80 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-6xl text-gray-500 select-none group-hover:opacity-20 transition-opacity">
                {service.id}
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wide">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-400 leading-relaxed mb-6 border-b border-gray-800 pb-6 min-h-[80px]">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area for Demo */}
        <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
                <span>서비스 시연 영상 보기</span>
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;