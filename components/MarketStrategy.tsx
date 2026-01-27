import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Target, TrendingUp, Building2, Globe } from 'lucide-react';

const revenueData = [
  { name: 'SI/Consulting', value: 11, fill: '#1e3a8a' },
  { name: 'SaaS/Education', value: 8, fill: '#3b82f6' },
];

const budgetData = [
  { name: '인건비 (Dev/AI)', value: 55, color: '#1e40af' },
  { name: '개발비 (AWS/LLM)', value: 30, color: '#3b82f6' },
  { name: '사업화 (Mkt/PoC)', value: 15, color: '#60a5fa' },
];

const MarketStrategy: React.FC = () => {
  return (
    <section id="strategy" className="py-24 bg-[#0a1022]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Growth Strategy</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            SI로 수익성 확보, SaaS로 시장 확장 <br/>
            <span className="text-gray-400 text-2xl">(Two-Track Strategy)</span>
          </h3>
        </div>

        {/* Two Track Strategy Visual */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-[#172554] to-[#0f172a] p-8 rounded-2xl border border-blue-800 hover:border-blue-500 transition-all">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-900 rounded-lg">
                    <Building2 className="text-white w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white">Track 1: On-premise SI</h4>
                    <span className="text-blue-300 text-sm font-semibold">Cash Cow</span>
                </div>
            </div>
            <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-blue-500 mt-1" />
                    <span><strong>Target:</strong> 금융권, 대형 컨설팅 펌 (보안 중시)</span>
                </li>
                <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500 mt-1" />
                    <span><strong>Revenue:</strong> 고단가 구축형 계약 + 유지보수</span>
                </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-900 rounded-lg">
                    <Globe className="text-white w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white">Track 2: Subscription SaaS</h4>
                    <span className="text-cyan-300 text-sm font-semibold">Scale-up</span>
                </div>
            </div>
            <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-cyan-500 mt-1" />
                    <span><strong>Target:</strong> 중소/중견기업, 공공조달(나라장터)</span>
                </li>
                <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-cyan-500 mt-1" />
                    <span><strong>Revenue:</strong> 월 구독료 (Recurring Revenue)</span>
                </li>
            </ul>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-12">
            {/* Revenue Chart */}
            <div className="glass-panel p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-8 text-center">2026 Projected Revenue (19억 원)</h4>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={120} stroke="#94a3b8" fontSize={12} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                                cursor={{fill: 'transparent'}}
                            />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                                {revenueData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1e3a8a]"></div>SI: 11억</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#3b82f6]"></div>SaaS: 8억</div>
                </div>
            </div>

            {/* Budget Chart */}
            <div className="glass-panel p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-2 text-center">정부 지원금 활용 방안</h4>
                 <p className="text-center text-gray-400 text-sm mb-6">총 1.5억 원 (인건비 중심 투자)</p>
                <div className="h-64 w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={budgetData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {budgetData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-2xl font-bold">1.5억</span>
                    </div>
                </div>
                 <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400 flex-wrap">
                    {budgetData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                            {item.name} ({item.value}%)
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Nara Market Tactics */}
        <div className="mt-20 p-8 border-t border-gray-800">
             <h4 className="text-xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Tactics</span>
                시장 진입 전술: '나라장터' 공공 입찰 시장 공략
             </h4>
             <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                <div className="flex-1 bg-gray-900 p-6 rounded-xl w-full">
                    <p className="text-blue-400 font-bold mb-2">Targeting</p>
                    <p className="text-gray-300">연 200조 원 규모<br/>복잡한 서류 작업 병목</p>
                </div>
                <div className="hidden md:block text-2xl text-gray-600">➜</div>
                <div className="md:hidden text-2xl text-gray-600">↓</div>
                <div className="flex-1 bg-gray-800 p-6 rounded-xl w-full border border-blue-500">
                    <p className="text-blue-400 font-bold mb-2">Action Plan</p>
                    <p className="text-white font-bold">'나라장터 PoC' (2026.Q2)</p>
                    <p className="text-sm text-gray-400">입찰 공고 분석 → 서류 자동 패키징</p>
                </div>
                 <div className="hidden md:block text-2xl text-gray-600">➜</div>
                 <div className="md:hidden text-2xl text-gray-600">↓</div>
                <div className="flex-1 bg-gray-900 p-6 rounded-xl w-full">
                    <p className="text-blue-400 font-bold mb-2">Outcome</p>
                    <p className="text-gray-300">Niche Market 선점<br/>SaaS 초기 유저 확보</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStrategy;