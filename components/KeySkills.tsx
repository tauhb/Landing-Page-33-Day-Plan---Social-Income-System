import React from 'react';

export const KeySkills: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT: The Commodity (Devalued) */}
          <div className="relative group p-8 md:p-12 rounded-3xl bg-[#0F0F0F] border border-white/5 overflow-hidden">
             {/* Background Pattern: Repeated Icons indicating mass production */}
             <div className="absolute inset-0 opacity-5 grid grid-cols-6 gap-4 p-4 pointer-events-none grayscale">
                {[...Array(24)].map((_, i) => (
                   <i key={i} className="ph-fill ph-gear text-2xl"></i>
                ))}
             </div>

             <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="inline-flex items-center gap-2 mb-6 text-gray-500">
                   <i className="ph-bold ph-trend-down text-red-500"></i>
                   <span className="text-sm font-mono uppercase tracking-widest">Xu Hướng: Mất Giá</span>
                </div>

                <h4 className="text-3xl font-bold text-gray-500 uppercase tracking-tight mb-8 leading-tight">
                  Kỹ năng không còn là<br/>
                  <span className="text-gray-600 line-through decoration-red-500/50 decoration-4">lợi thế hiếm</span>
                </h4>
                
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 group/item opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400">
                       <i className="ph-fill ph-lightning"></i>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-400 decoration-gray-600">
                      Học nhanh
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group/item opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400">
                       <i className="ph-fill ph-check-square"></i>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-400 decoration-gray-600">
                      Làm được
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group/item opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400">
                       <i className="ph-fill ph-copy"></i>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-400 decoration-gray-600">
                      Copy được
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/5 text-sm text-gray-600 italic">
                   "AI và Công cụ có thể làm thay bạn trong 3 giây."
                </div>
             </div>
          </div>
          
          {/* RIGHT: The Asset (Premium) */}
          <div className="relative group p-8 md:p-12 rounded-3xl bg-[#080808] border border-primary/20 shadow-[0_0_50px_rgba(212,240,119,0.05)] overflow-hidden">
             {/* Glow Effect */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="inline-flex items-center gap-2 mb-6 text-primary">
                   <i className="ph-fill ph-trend-up"></i>
                   <span className="text-sm font-mono uppercase tracking-widest">Xu Hướng: Tăng Giá Trị</span>
                </div>

                <h4 className="text-3xl font-bold text-white uppercase tracking-tight mb-8 leading-tight">
                  Thứ khan hiếm<br/>
                  <span className="text-primary underline decoration-4 decoration-primary/30 underline-offset-8">thật sự</span>
                </h4>
                
                <ul className="space-y-8">
                  <li className="flex items-center gap-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary text-black flex items-center justify-center shadow-[0_0_15px_rgba(212,240,119,0.4)]">
                       <i className="ph-fill ph-shield-check text-2xl"></i>
                    </div>
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                      Sự tin tưởng
                    </span>
                  </li>
                  <li className="flex items-center gap-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="w-12 h-12 rounded-xl bg-primary text-black flex items-center justify-center shadow-[0_0_15px_rgba(212,240,119,0.4)]">
                       <i className="ph-fill ph-users text-2xl"></i>
                    </div>
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                      Sự quen thuộc
                    </span>
                  </li>
                  <li className="flex items-center gap-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="w-12 h-12 rounded-xl bg-primary text-black flex items-center justify-center shadow-[0_0_15px_rgba(212,240,119,0.4)]">
                       <i className="ph-fill ph-fingerprint text-2xl"></i>
                    </div>
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                      Tiếng nói cá nhân
                    </span>
                  </li>
                </ul>

                <div className="mt-10 pt-6 border-t border-white/10 text-sm text-gray-400 font-medium flex items-center gap-2">
                   <i className="ph-fill ph-lock-key text-primary"></i>
                   <span>Đây là thứ duy nhất AI không thể sao chép.</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};