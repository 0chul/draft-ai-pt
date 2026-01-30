import React from 'react';
import { Flag, Rocket, Briefcase, Server, CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      quarter: "2026.1Q",
      title: "MVP 고도화 및 PoC 수행",
      desc: "엑스퍼트 컨설팅 내부 영업조직 대상 기술 검증 및 초기 레퍼런스 확보",
      icon: <Flag className="w-5 h-5 text-white" />,
      color: "bg-blue-900",
      border: "border-blue-700",
      kpi: "PoC 성공률 90%",
      deliverables: [
        "RFP 분석 엔진 v1.0 개발",
        "엑스퍼트 컨설팅 사내 데이터 파이프라인 연동",
        "내부 컨설턴트 제안서 작성"
      ]
    },
    {
      quarter: "2026.2Q",
      title: "나라장터 PoC 및 베타 테스트",
      desc: "공공 입찰 특화 기능 고도화, 파트너사를 통한 채널 영업 본격화",
      icon: <Server className="w-5 h-5 text-white" />,
      color: "bg-blue-700",
      border: "border-blue-500",
      kpi: "입찰 공고 매칭 정확도 85%",
      deliverables: [
        "나라장터 API 연동 및 크롤러 개발",
        "자동 제안서 생성 템플릿(공공용) 제작",
        "내부 공공입찰 프로세스 자동화"
      ]
    },
    {
      quarter: "2026.3Q",
      title: "SI 사업 수주 및 핵심 고객사 확보",
      desc: "금융 및 대기업 대상 온프레미스 SI 사업 3~5건 수주, 안정적 매출 기반 마련",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: "bg-blue-600",
      border: "border-blue-400",
      kpi: "SI 매출 10억 달성",
      deliverables: [
        "금융권 보안 심의 통과 (On-premise)",
        "엔터프라이즈 관리자 대시보드 런칭",
        "구축형 솔루션 패키징 완료"
      ]
    },
    {
      quarter: "2026.4Q",
      title: "SaaS 버전 출시 및 구독 모델 전환",
      desc: "표준화된 클라우드 버전 출시, 중소·중견기업 대상 마케팅 및 세일즈 강화",
      icon: <Rocket className="w-5 h-5 text-white" />,
      color: "bg-cyan-500",
      border: "border-cyan-300",
      kpi: "MAU 1,000명 돌파",
      deliverables: [
        "SaaS 구독 결제 시스템 오픈",
        "Self-Service Onboarding 프로세스 구축",
        "수주형 B2B 산업 분야 별 최적화"
      ]
    },
  ];

  // Gantt Chart Data
  const tracks = [
    {
      category: "Technology (R&D)",
      tasks: [
        { name: "Core Engine Dev", start: 1, duration: 4, color: "bg-blue-500" },
        { name: "Public Data API", start: 4, duration: 3, color: "bg-blue-400" },
        { name: "SaaS Platform", start: 7, duration: 5, color: "bg-cyan-400" },
      ]
    },
    {
      category: "Business (Sales)",
      tasks: [
        { name: "Internal PoC", start: 2, duration: 2, color: "bg-purple-500" },
        { name: "Gov Pilot Project", start: 5, duration: 3, color: "bg-purple-400" },
        { name: "Enterprise SI Sales", start: 7, duration: 6, color: "bg-indigo-500" },
      ]
    },
    {
      category: "Funding & Admin",
      tasks: [
        { name: "Seed Round", start: 1, duration: 2, color: "bg-emerald-500" },
        { name: "초기창업패키지 (사업수행)", start: 3, duration: 8, color: "bg-emerald-400" },
        { name: "Series A Prep", start: 11, duration: 2, color: "bg-emerald-600" },
      ]
    }
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <section id="roadmap" className="py-24 bg-[#050b1d] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
          >
              Roadmap & Milestones
          </motion.h2>
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl font-bold text-white"
          >
              2026년 사업 추진 계획
          </motion.h3>
        </div>

        {/* Gantt Chart View */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-[#0f172a]/80 backdrop-blur-md rounded-2xl border border-gray-800 p-8 overflow-hidden"
        >
            <div className="flex items-center gap-2 mb-6 text-gray-300">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-bold">2026 Timeline View</span>
            </div>

            <div className="overflow-x-auto pb-4">
                <div className="min-w-[800px]">
                    {/* Header Months */}
                    <div className="grid grid-cols-12 gap-1 mb-4 border-b border-gray-700 pb-2">
                        {months.map((m, i) => (
                            <div key={i} className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider">{m}</div>
                        ))}
                    </div>

                    {/* Tracks and Bars */}
                    <div className="space-y-6">
                        {tracks.map((track, trackIdx) => (
                            <div key={trackIdx} className="relative">
                                <div className="text-xs font-bold text-gray-400 mb-2 pl-1 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                                    {track.category}
                                </div>
                                <div className="grid grid-cols-12 gap-1 h-8 relative bg-gray-900/50 rounded-lg">
                                    {/* Grid Lines */}
                                    {months.map((_, i) => (
                                        <div key={i} className="border-r border-gray-800/50 h-full"></div>
                                    ))}
                                    
                                    {/* Task Bars */}
                                    {track.tasks.map((task, taskIdx) => (
                                        <motion.div
                                            key={taskIdx}
                                            initial={{ width: 0, opacity: 0 }}
                                            whileInView={{ width: "100%", opacity: 1 }}
                                            transition={{ duration: 1, delay: taskIdx * 0.2 }}
                                            className={`absolute h-6 top-1 rounded-md ${task.color} shadow-lg flex items-center px-3 z-10 overflow-hidden whitespace-nowrap`}
                                            style={{
                                                gridColumnStart: task.start,
                                                gridColumnEnd: `span ${task.duration}`
                                            }}
                                        >
                                            <span className="text-[10px] font-bold text-white drop-shadow-md truncate">{task.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Detailed Quarterly Cards */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-cyan-500 -translate-y-1/2 z-0 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 group"
              >
                <div className={`p-6 rounded-2xl bg-[#0f172a] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col shadow-xl group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]`}>
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.color} text-white shadow-lg`}>
                        {item.quarter}
                    </span>
                    <div className={`p-2 rounded-lg bg-gray-800 group-hover:bg-blue-500/20 transition-colors`}>
                      {item.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-100 mb-2 min-h-[56px] break-keep leading-tight">
                      {item.title}
                  </h4>
                  
                  <p className="text-sm text-gray-400 break-keep leading-relaxed mb-6 border-b border-gray-800 pb-4">
                      {item.desc}
                  </p>

                  {/* Detail Section: Deliverables */}
                  <div className="flex-grow">
                      <p className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wide">Key Deliverables</p>
                      <ul className="space-y-2 mb-6">
                          {item.deliverables.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                  <CheckCircle2 className="w-3 h-3 text-gray-500 mt-0.5 shrink-0" />
                                  <span className="leading-tight">{d}</span>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* KPI Badge */}
                  <div className="bg-gray-900/80 rounded-lg p-3 border border-gray-800 flex items-center justify-between mt-auto">
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Target KPI</span>
                      <span className="text-xs font-bold text-cyan-400">{item.kpi}</span>
                  </div>

                </div>
                
                {/* Connector Dot (Desktop) */}
                <div className="hidden lg:block absolute top-[45px] -left-3 w-6 h-6 -translate-y-1/2 z-20">
                    {index !== 0 && (
                         <div className="w-3 h-3 bg-gray-900 border-2 border-blue-500 rounded-full mx-auto mt-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;