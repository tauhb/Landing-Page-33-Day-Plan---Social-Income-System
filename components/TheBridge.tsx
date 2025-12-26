import React from 'react';

export const TheBridge: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Danger Pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #330000 10px, #330000 20px)'}}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: The Visual Metaphor (The Hanging Weight) */}
          <div className="relative h-[500px] bg-[#0F0F0F] rounded-3xl border border-gray-800 flex flex-col items-center justify-start p-8 shadow-2xl">
             
             {/* The Rope */}
             <div className="w-1 h-32 bg-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-red-500 animate-pulse origin-top scale-y-110"></div>
                {/* Fraying effect */}
                <div className="absolute bottom-0 -left-2 w-4 h-4 border-b-2 border-red-500 rotate-45"></div>
             </div>

             {/* The Weight (Your Life) */}
             <div className="w-64 bg-gray-800 rounded-lg p-6 text-center border-2 border-red-900 shadow-[0_20px_50px_rgba(220,38,38,0.2)] relative z-10 animate-[swing_3s_ease-in-out_infinite]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-700 rotate-45"></div>
                <h3 className="text-xl font-black text-white uppercase mb-2">Cuộc Sống <br/>Của Bạn</h3>
                <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
                   <span className="px-2 py-1 bg-black rounded">Gia đình</span>
                   <span className="px-2 py-1 bg-black rounded">Hoá đơn</span>
                   <span className="px-2 py-1 bg-black rounded">Tương lai</span>
                </div>
             </div>

             {/* The Drop Zone */}
             <div className="mt-auto w-full text-center">
                <i className="ph-fill ph-arrow-down text-4xl text-red-900 animate-bounce"></i>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent mt-4"></div>
                <p className="text-red-900 font-mono text-xs mt-2 uppercase tracking-widest">Vực thẳm tài chính</p>
             </div>
             
             {/* Warning Badge */}
             <div className="absolute top-8 right-8 flex items-center gap-2 bg-red-500/10 border border-red-500/50 px-3 py-1 rounded text-red-500 text-xs font-bold uppercase animate-pulse">
                <i className="ph-fill ph-warning-octagon"></i>
                Nguy Hiểm
             </div>
          </div>

          {/* Right: The Hard Truth */}
          <div>
             <div className="inline-block px-4 py-1 rounded bg-red-600 text-white font-black text-xs uppercase tracking-widest mb-8">
               Sự thật tàn khốc
             </div>

             <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-8">
               Phụ thuộc vào <br/>
               <span className="text-red-500 underline decoration-4 underline-offset-8 decoration-red-900">01 Dòng thu nhập</span>
             </h2>

             <blockquote className="border-l-4 border-red-600 pl-6 my-8">
                <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
                  "Là bạn đang gián tiếp đẩy bản thân và gia đình vào những tình huống <span className="text-white font-bold bg-red-900/30 px-1">rủi ro đầy bị động</span>."
                </p>
             </blockquote>

             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-red-500 flex-shrink-0">
                      <i className="ph-fill ph-prohibit text-xl"></i>
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg">Mất việc = Mất tất cả</h4>
                      <p className="text-gray-500 text-sm">Không có lưới đỡ an toàn khi biến cố xảy ra.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-red-500 flex-shrink-0">
                      <i className="ph-fill ph-trend-down text-xl"></i>
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg">Không có quyền lựa chọn</h4>
                      <p className="text-gray-500 text-sm">Phải chấp nhận mọi yêu cầu, mọi mức lương vì sợ mất nguồn sống.</p>
                   </div>
                </div>
             </div>

             <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse">
                      <i className="ph-bold ph-shield-check text-2xl text-black"></i>
                   </div>
                   <div>
                      <h3 className="text-white font-black uppercase text-xl">Xây dựng dòng thu nhập thứ 2</h3>
                      <p className="text-primary font-mono text-sm uppercase tracking-wider">Không phải lựa chọn - Là bắt buộc</p>
                   </div>
                </div>
             </div>

          </div>

        </div>
      </div>
      <style>{`
        @keyframes swing {
           0% { transform: rotate(1deg); }
           50% { transform: rotate(-1deg); }
           100% { transform: rotate(1deg); }
        }
      `}</style>
    </section>
  );
};