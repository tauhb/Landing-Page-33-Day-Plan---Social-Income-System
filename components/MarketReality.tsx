import React from 'react';

export const MarketReality: React.FC = () => {
  return (
    <section className="relative py-24 px-4 w-full bg-[#050505] overflow-hidden">
      
      {/* Background Alerts */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header: Glitch / Warning Style */}
        <div className="mb-16 select-none flex flex-col items-center group">
          <div className="flex items-center gap-2 mb-4 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-xs font-mono font-bold tracking-widest uppercase animate-pulse">
            <i className="ph-fill ph-warning-circle"></i>
            TÍN HIỆU CẢNH BÁO
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-gray-500 uppercase mb-2">
            GIAI ĐOẠN NÀY
          </h2>
          
          <h1 className="relative text-5xl md:text-8xl font-black tracking-normal uppercase leading-[1.15] text-white pt-4 py-2">
            <span className="relative z-10">ĐẦY BIẾN ĐỘNG</span>
            {/* Glitch Shadow */}
            <span className="absolute top-4 left-0 -ml-1 text-red-600 opacity-50 z-0 animate-pulse">ĐẦY BIẾN ĐỘNG</span>
          </h1>
        </div>
        
        {/* The 3 "Failure" Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
          {/* Card 1 */}
          <div className="relative group bg-[#0A0A0A] border border-gray-800 hover:border-red-500/50 p-8 rounded-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <i className="ph-fill ph-wave-sine text-4xl text-red-500"></i>
            </div>
            <div className="flex flex-col items-start h-full relative z-10">
               <div className="w-12 h-12 rounded bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-red-900/20 group-hover:text-red-500 group-hover:border-red-500/30 transition-colors">
                  <span className="font-mono font-bold">01</span>
               </div>
               <span className="text-2xl md:text-3xl font-black text-gray-200 uppercase tracking-tight leading-tight group-hover:text-white transition-colors">
                  Kinh tế <br/>biến động
               </span>
               <div className="mt-4 h-1 w-12 bg-gray-800 group-hover:bg-red-500 transition-colors"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group bg-[#0A0A0A] border border-gray-800 hover:border-red-500/50 p-8 rounded-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <i className="ph-fill ph-trend-down text-4xl text-red-500"></i>
            </div>
            <div className="flex flex-col items-start h-full relative z-10">
               <div className="w-12 h-12 rounded bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-red-900/20 group-hover:text-red-500 group-hover:border-red-500/30 transition-colors">
                  <span className="font-mono font-bold">02</span>
               </div>
               <span className="text-2xl md:text-3xl font-black text-gray-200 uppercase tracking-tight leading-tight group-hover:text-white transition-colors">
                  Thu nhập <br/>khó đoán
               </span>
               <div className="mt-4 h-1 w-12 bg-gray-800 group-hover:bg-red-500 transition-colors"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group bg-[#0A0A0A] border border-gray-800 hover:border-red-500/50 p-8 rounded-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <i className="ph-fill ph-sword text-4xl text-red-500"></i>
            </div>
            <div className="flex flex-col items-start h-full relative z-10">
               <div className="w-12 h-12 rounded bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-red-900/20 group-hover:text-red-500 group-hover:border-red-500/30 transition-colors">
                  <span className="font-mono font-bold">03</span>
               </div>
               <span className="text-2xl md:text-3xl font-black text-gray-200 uppercase tracking-tight leading-tight group-hover:text-white transition-colors">
                  Cạnh tranh <br/>gay gắt
               </span>
               <div className="mt-4 h-1 w-12 bg-gray-800 group-hover:bg-red-500 transition-colors"></div>
            </div>
          </div>
        </div>

        {/* Transition Text */}
        <div className="mb-16 max-w-3xl mx-auto space-y-6 text-center border-t border-b border-white/5 py-10">
          <p className="text-lg md:text-xl text-gray-500 font-medium uppercase tracking-widest">
            Những gì hiệu quả vài năm trước
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-3xl font-bold text-gray-300 leading-snug">
            <span className="line-through decoration-red-500 decoration-2 decoration-wavy">Không còn an toàn</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="line-through decoration-red-500 decoration-2 decoration-wavy">Không còn dễ lặp lại</span>
          </div>
        </div>

        {/* HUD Box / Mission Brief */}
        <div className="w-full max-w-4xl relative group">
          {/* HUD Corners */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary"></div>

          <div className="relative bg-[#111] bg-opacity-80 backdrop-blur-md border border-white/10 p-8 md:p-12">
            <div className="flex flex-col items-center gap-6">
              <p className="text-lg md:text-xl text-gray-400 font-medium font-mono text-center">
                > Tin_Nhắn_Hệ_Thống: "Chương trình này không truyền động lực."
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-3xl font-black text-white text-center leading-tight">
                <i className="ph-fill ph-cursor-click text-primary animate-bounce"></i>
                <span className="bg-white/5 border border-white/10 px-6 py-2 rounded-lg">
                  Nó được tạo ra để <span className="text-primary underline decoration-4 underline-offset-4 decoration-primary/30">hướng dẫn cách làm đúng</span>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};