import React from 'react';
import { Flag, Rocket, Briefcase, Server } from 'lucide-react';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      quarter: "2026.1Q",
      title: "MVP 고도화 및 PoC 수행",
      desc: "엑스퍼트 컨설팅 내부 영업조직 대상 기술 검증 및 초기 레퍼런스 확보",
      icon: <Flag className="w-5 h-5 text-white" />,
      color: "bg-blue-900",
      border: "border-blue-700"
    },
    {
      quarter: "2026.2Q",
      title: "나라장터 PoC 및 베타 테스트",
      desc: "공공 입찰 특화 기능 고도화, 파트너사를 통한 채널 영업 본격화",
      icon: <Server className="w-5 h-5 text-white" />,
      color: "bg-blue-700",
      border: "border-blue-500"
    },
    {
      quarter: "2026.3Q",
      title: "SI 사업 수주 및 핵심 고객사 확보",
      desc: "금융 및 대기업 대상 온프레미스 SI 사업 3~5건 수주, 안정적 매출 기반 마련",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: "bg-blue-600",
      border: "border-blue-400"
    },
    {
      quarter: "2026.4Q",
      title: "SaaS 버전 출시 및 구독 모델 전환",
      desc: "표준화된 클라우드 버전 출시, 중소·중견기업 대상 마케팅 및 세일즈 강화",
      icon: <Rocket className="w-5 h-5 text-white" />,
      color: "bg-cyan-500",
      border: "border-cyan-300"
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#050b1d] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Milestones</h2>
          <h3 className="text-4xl font-bold text-white">2026년 사업 추진 일정</h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {milestones.map((item, index) => (
              <div key={index} className="relative z-10 group">
                <div className={`p-6 rounded-2xl ${item.color} bg-opacity-20 border ${item.border} backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] h-full flex flex-col`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-white">{item.quarter}</span>
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-100 mb-2 min-h-[56px] break-keep">{item.title}</h4>
                  <p className="text-sm text-gray-400 break-keep leading-relaxed">{item.desc}</p>
                </div>
                
                {/* Connector Dot (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-8 -translate-y-1/2 z-20">
                    {index !== 0 && (
                         <div className="w-3 h-3 bg-gray-600 rounded-full mx-auto mt-2.5"></div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;