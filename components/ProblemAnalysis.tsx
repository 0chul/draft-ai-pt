import React from 'react';
import { Clock, AlertTriangle, TrendingDown, Users, Bot, HelpCircle, User, XCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const ProblemAnalysis: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-400" />,
      title: "과도한 시간 및 인력 소모",
      desc: "제안서 1건 작성에 수십 명의 인력과 수천 시간 투입. 연간 132건 작성 시 수억 원에 달하는 기회비용이 발생하는 심각한 병목점입니다.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
      title: "품질의 비일관성",
      desc: "작성자의 경험과 역량에 따라 결과물의 편차가 큽니다. 이는 일관된 브랜드 경험 제공 실패와 수주 성공률 저하로 이어집니다.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "고객 기대와 현실의 격차",
      desc: "고객의 73%는 초개인화된 제안을 원하지만, 실제 충족률은 37%에 불과합니다. 수동 프로세스로는 높아진 기대 수준을 맞추기 어렵습니다.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-purple-400" />,
      title: "AI 전환(AX)의 시급성",
      desc: "단순 디지털 전환을 넘어, 프로세스 자체에 지능을 심는 혁신이 필요합니다. 경쟁력 확보를 위해 제안 업무의 지능화는 필수입니다.",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="problem" className="py-24 bg-[#050b1d] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold tracking-widest uppercase mb-4"
          >
            The Problem
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            제안서는 B2B 매출의 병목이자, <br />
            <span className="text-white">가장 비싼 비용이 드는 구간입니다.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            고부가가치 B2B 영업의 핵심은 '제안'입니다. 하지만 현재의 수작업 프로세스는 
            과도한 리소스 소모와 품질 편차로 인해 기업 성장의 발목을 잡고 있습니다.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((prob, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-blue-500"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-100">{prob.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottleneck Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
            
            {/* Left: Existing Human Process */}
            <div className="flex-1 bg-[#0f172a] border border-gray-800 rounded-2xl p-8 relative group hover:border-blue-500/30 transition-all">
              <h4 className="text-xl font-bold text-blue-200 mb-6 text-center">Existing Process (Human)</h4>
              
              <div className="flex justify-center mb-10 relative h-32 items-center">
                {/* Visual Composition */}
                <div className="relative mr-8">
                  <Clock className="w-20 h-20 text-gray-600" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white bg-slate-800 px-2 py-1 rounded shadow-lg border border-gray-700">3-5 Days</div>
                </div>
                <div className="relative">
                   <User className="w-20 h-20 text-gray-500" />
                   <span className="absolute -top-1 -right-2 bg-yellow-600 text-white text-[10px] px-2 py-0.5 rounded font-bold shadow-md">Ace</span>
                   <HelpCircle className="w-8 h-8 text-gray-400 absolute -top-4 -left-4 animate-bounce bg-[#0f172a] rounded-full border border-gray-700 p-1" />
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                   <div className="mt-1 min-w-[20px]"><XCircle className="w-5 h-5 text-red-400" /></div>
                   <div>
                     <span className="block text-gray-200 font-bold text-sm mb-1">비효율적 리소스 투입</span>
                     <span className="text-gray-400 text-xs">제안서 1건 작성에 전문 인력 3~5일 소요</span>
                   </div>
                </li>
                <li className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                   <div className="mt-1 min-w-[20px]"><XCircle className="w-5 h-5 text-red-400" /></div>
                   <div>
                     <span className="block text-gray-200 font-bold text-sm mb-1">품질의 비표준화</span>
                     <span className="text-gray-400 text-xs">에이스 직원 의존도 심화</span>
                   </div>
                </li>
              </ul>
            </div>

            {/* Center: The Bottleneck Arrow */}
            <div className="md:w-48 flex flex-col items-center justify-center relative z-10 -my-4 md:my-0 shrink-0">
               {/* Desktop Arrow Shape */}
               <div className="hidden md:flex absolute inset-0 items-center justify-center">
                  <div className="w-full h-24 bg-gradient-to-r from-blue-700 to-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center" 
                       style={{ clipPath: "polygon(0% 20%, 85% 20%, 85% 0%, 100% 50%, 85% 100%, 85% 80%, 0% 80%)" }}>
                  </div>
               </div>
               
               {/* Mobile Arrow */}
               <div className="md:hidden w-10 h-10 bg-blue-600 rotate-90 mask-arrow mb-2" style={{ clipPath: "polygon(0% 20%, 70% 20%, 70% 0%, 100% 50%, 70% 100%, 70% 80%, 0% 80%)" }}></div>
               
               <div className="relative text-white font-extrabold text-xl md:text-xl py-3 px-6 whitespace-nowrap z-20 md:pr-10 drop-shadow-md">
                  The Bottleneck
               </div>
            </div>

            {/* Right: Generic AI Limitations */}
            <div className="flex-1 bg-[#1e293b] border border-gray-700 rounded-2xl p-8 relative group hover:border-red-500/30 transition-all">
              <h4 className="text-xl font-bold text-red-200 mb-6 text-center">Generic AI Limitations</h4>
              
              <div className="flex justify-center mb-10 relative h-32 items-center">
                 <div className="relative">
                    <Bot className="w-24 h-24 text-blue-300" />
                    <div className="absolute -top-2 -right-6 bg-red-500 rounded-full p-2 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                        <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                 </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                   <div className="mt-1 min-w-[20px]"><AlertTriangle className="w-5 h-5 text-orange-400" /></div>
                   <div>
                     <span className="block text-gray-200 font-bold text-sm mb-1">기존 AI의 한계</span>
                     <span className="text-gray-400 text-xs">고객사 맥락(Context) 이해 부족</span>
                   </div>
                </li>
                <li className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                   <div className="mt-1 min-w-[20px]"><AlertTriangle className="w-5 h-5 text-orange-400" /></div>
                   <div>
                     <span className="block text-gray-200 font-bold text-sm mb-1">Fact-check 불가능</span>
                     <span className="text-gray-400 text-xs">환각(Hallucination) 현상으로 실무 적용 불가</span>
                   </div>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemAnalysis;