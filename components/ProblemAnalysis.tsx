import React from 'react';
import { Clock, AlertTriangle, TrendingDown, Users } from 'lucide-react';
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

        {/* Impact Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 glass-panel p-10 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-900/10 to-transparent"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">The Bottleneck</h4>
                    <p className="text-gray-400">전통적 수작업 제안 프로세스의 한계</p>
                </div>
                <div className="flex-1 w-full relative h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute left-0 top-0 h-full bg-red-500"
                    ></motion.div>
                    <div className="absolute left-0 top-0 h-full bg-red-500 w-[85%] animate-pulse opacity-50"></div>
                    <span className="absolute top-[-25px] right-[15%] text-red-400 text-xs font-bold">Inefficiency: 85%</span>
                </div>
                <div className="text-4xl font-bold text-red-500">Critical</div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemAnalysis;