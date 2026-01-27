import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">BX Consulting</h2>
            <p className="text-gray-500 text-sm">AI 기반 B2B 제안서 자동 생성 SaaS 솔루션, Draft AI</p>
          </div>
          <div className="flex gap-4">
             <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors">
                제휴 문의
             </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <div className="mb-4 md:mb-0">
            <p>서울특별시 송파구 중대로 121, 2층</p>
            <p>사업자등록번호: 625-87-03471 | 대표자: 박준호</p>
            <p>Copyright © 2026 BX Consulting Co., Ltd. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;