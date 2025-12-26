import React from 'react';

export const TheConflict: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-dark text-white relative">
      <div className="max-w-5xl mx-auto">
        
        {/* The Breakdown */}
        <div className="bg-red-950/20 border border-red-900/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
           <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#450a0a 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
           
           <h3 className="text-2xl md:text-3xl font-black text-red-500 mb-8 uppercase tracking-widest relative z-10">Khi mọi thứ sụp đổ</h3>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 relative z-10">
              <div className="text-center">
                 <div className="text-4xl md:text-5xl font-black text-white mb-2">Đốt tiền</div>
                 <div className="text-gray-500">Cho quảng cáo</div>
              </div>
              <i className="ph-bold ph-arrow-right text-3xl text-red-600 hidden md:block"></i>
              <i className="ph-bold ph-arrow-down text-3xl text-red-600 md:hidden"></i>
              <div className="text-center">
                 <div className="text-4xl md:text-5xl font-black text-white mb-2">0</div>
                 <div className="text-gray-500">Khách hàng</div>
              </div>
           </div>

           <p className="text-lg text-gray-300 max-w-2xl mx-auto italic relative z-10">
             "Tôi biết: Nếu tiếp tục làm như cũ, tôi sẽ phá sản cả về tài chính lẫn niềm tin. Tôi buộc phải thay đổi."
           </p>
        </div>
      </div>
    </section>
  );
};