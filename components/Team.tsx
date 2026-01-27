import React from 'react';
import { Code, Briefcase } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      role: "CEO (대표)",
      name: "박준호",
      desc: "사업 총괄. 경영학 박사수료, 경영 컨설팅 경력 25년.",
      tag: "Business",
      color: "bg-blue-600",
    },
    {
      role: "Lead Developer (매니저)",
      name: "오현우",
      desc: "AI 시스템 개발. 컴퓨터공학 학사, 서버 개발 경력 12년.",
      tag: "Tech",
      color: "bg-cyan-600",
    },
    {
      role: "Team Lead (팀장)",
      name: "조영철",
      desc: "기획/마케팅. 경영학 학사, 마케팅 임원 경력 12년.",
      tag: "Business",
      color: "bg-blue-600",
    },
    {
      role: "Senior Consultant (선임)",
      name: "엄승빈",
      desc: "컨설팅/사업수행. 경영학 박사과정, 교육 컨설팅 경력 8년 이상.",
      tag: "Business",
      color: "bg-blue-600",
    },
    {
      role: "Junior Consultant (주임)",
      name: "Junior Consultant",
      desc: "컨설팅. 독어독문/데이터사이언스 학사, 마케팅 경력 1년.",
      tag: "Business",
      color: "bg-blue-600",
    },
  ];

  return (
    <section id="team" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Team & Partners</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            25년 도메인 전문성과 <br/>12년 개발 역량의 결합
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl border-t border-white/10 hover:bg-white/5 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-xl min-w-[48px]`}>
                  {member.name === "Junior Consultant" ? "J" : member.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{member.role}</p>
                  <h4 className="text-base font-bold text-white truncate">{member.name}</h4>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 h-20 break-keep">{member.desc}</p>
              <div className="flex items-center gap-2 text-xs font-semibold">
                {member.tag === 'Business' ? <Briefcase className="w-3 h-3 text-blue-400"/> : <Code className="w-3 h-3 text-cyan-400"/>}
                <span className={member.tag === 'Business' ? 'text-blue-400' : 'text-cyan-400'}>{member.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="glass-panel rounded-3xl p-10 lg:p-20 bg-[#0f172a] border border-gray-800 relative overflow-hidden">
           {/* Background Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

           <h4 className="text-center text-2xl font-bold mb-16 text-gray-200">협력 파트너십 및 데이터 생태계</h4>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10">
              
              {/* Left EC */}
              <div className="relative group">
                 <div className="w-72 h-64 border-2 border-dashed border-blue-300/30 rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:border-blue-400/60 group-hover:bg-blue-500/5">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-slate-900 font-extrabold text-2xl">EXPERT</span>
                    </div>
                    <h5 className="font-bold text-white text-xl text-center mb-2">실제 고객 및 영업망</h5>
                    <p className="text-sm text-gray-400 font-bold tracking-wide">엑스퍼트컨설팅</p>
                 </div>
              </div>

              {/* Connecting Line Left */}
              <div className="hidden md:block w-12 h-[1px] bg-gray-700"></div>
              
              {/* Center Draft AI */}
              <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
                 <div className="relative w-80 h-48 bg-[#0f172a] border border-blue-500 rounded-xl flex flex-col items-center justify-center shadow-2xl">
                    <h5 className="font-black text-4xl text-white tracking-tight mb-2">Draft AI</h5>
                    <p className="text-blue-400 font-bold text-lg">BX Consulting</p>
                 </div>
              </div>

              {/* Connecting Line Right */}
              <div className="hidden md:block w-12 h-[1px] bg-gray-700"></div>

              {/* Right CI */}
              <div className="relative group">
                 <div className="w-72 h-64 border-2 border-dashed border-cyan-300/30 rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/5">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-slate-900 font-extrabold text-2xl">C.Insight</span>
                    </div>
                    <h5 className="font-bold text-white text-xl text-center mb-2">실제 리서치 데이터</h5>
                    <p className="text-sm text-gray-400 font-bold tracking-wide">컨슈머인사이트</p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default Team;