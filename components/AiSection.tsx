import React from 'react';

export const AiSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
             </span>
             <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">Phân Tích Hiệu Suất</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight leading-none mb-4">
            Cuộc Đua <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gray-500 to-primary">Không Cân Sức</span>
          </h2>
        </div>

        {/* The Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative">
          
          {/* VS Badge (Absolute Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-16 h-16 bg-black border border-gray-800 rounded-full items-center justify-center shadow-xl">
             <span className="font-black text-white italic text-xl">VS</span>
          </div>

          {/* LEFT: Biological / Manual (The Losing Side) */}
          <div className="group relative bg-[#0a0a0a] border border-red-900/30 p-8 rounded-3xl overflow-hidden hover:border-red-600/50 transition-colors duration-500">
             <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             {/* Header */}
             <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-red-900/20 text-red-500 flex items-center justify-center text-2xl border border-red-900/30">
                      <i className="ph-fill ph-hand-fist"></i>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white uppercase">Sức Người</h3>
                      <p className="text-xs text-red-400 font-mono mt-1">TRẠNG THÁI: QUÁ TẢI</p>
                   </div>
                </div>
                <i className="ph-bold ph-battery-low text-red-500 text-2xl animate-pulse"></i>
             </div>

             {/* Stats */}
             <div className="space-y-6">
                <div className="space-y-2">
                   <div className="flex justify-between text-sm text-gray-400">
                      <span>Tốc độ</span>
                      <span className="text-red-500">Thấp</span>
                   </div>
                   <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-[20%] h-full bg-red-600 rounded-full"></div>
                   </div>
                </div>
                
                <div className="space-y-4 pt-4">
                   <li className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300">
                      <i className="ph-fill ph-warning-circle text-red-500 mt-1"></i>
                      <span><strong className="text-white">Bị ép giá:</strong> Cạnh tranh với hàng triệu người khác.</span>
                   </li>
                   <li className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300">
                      <i className="ph-fill ph-scales text-red-500 mt-1"></i>
                      <span><strong className="text-white">Bị so sánh:</strong> Khách hàng luôn tìm người rẻ hơn.</span>
                   </li>
                   <li className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300">
                      <i className="ph-fill ph-trend-down text-red-500 mt-1"></i>
                      <span><strong className="text-white">Giới hạn:</strong> Chỉ làm được 8-10 tiếng/ngày.</span>
                   </li>
                </div>
             </div>
          </div>

          {/* RIGHT: Digital / AI (The Winning Side) */}
          <div className="group relative bg-[#0a0a0a] border border-primary/20 p-8 rounded-3xl overflow-hidden hover:border-primary/60 transition-colors duration-500 shadow-[0_0_50px_rgba(212,240,119,0.05)]">
             <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             {/* Header */}
             <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-2xl border border-primary/30">
                      <i className="ph-fill ph-cpu"></i>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white uppercase">Công Nghệ AI</h3>
                      <p className="text-xs text-primary font-mono mt-1">TRẠNG THÁI: TỐI ƯU</p>
                   </div>
                </div>
                <i className="ph-bold ph-lightning text-primary text-2xl animate-pulse"></i>
             </div>

             {/* Stats */}
             <div className="space-y-6">
                <div className="space-y-2">
                   <div className="flex justify-between text-sm text-gray-400">
                      <span>Tốc độ</span>
                      <span className="text-primary">Cực Đại</span>
                   </div>
                   <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-primary rounded-full shadow-[0_0_10px_rgba(212,240,119,0.8)]"></div>
                   </div>
                </div>
                
                <div className="space-y-4 pt-4">
                   <li className="flex items-start gap-3 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-check-circle text-primary mt-1"></i>
                      <span><strong className="text-white">Nhanh hơn:</strong> Hoàn thành việc cả ngày trong 30 phút.</span>
                   </li>
                   <li className="flex items-start gap-3 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-check-circle text-primary mt-1"></i>
                      <span><strong className="text-white">Rẻ hơn:</strong> Chi phí gần như bằng 0.</span>
                   </li>
                   <li className="flex items-start gap-3 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-check-circle text-primary mt-1"></i>
                      <span><strong className="text-white">Đều hơn:</strong> Không biết mệt, không cảm xúc.</span>
                   </li>
                </div>
             </div>
          </div>
        </div>

        {/* The Verdict Box */}
        <div className="mt-12 relative">
           <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl blur opacity-20"></div>
           <div className="relative bg-[#0f0f0f] border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="hidden md:flex w-20 h-20 rounded-full bg-gray-900 border border-gray-700 items-center justify-center shrink-0">
                 <i className="ph-fill ph-warning-octagon text-4xl text-yellow-500"></i>
              </div>
              <div>
                 <h4 className="text-lg font-mono text-yellow-500 uppercase tracking-widest mb-2">Sự Thật Tàn Khốc</h4>
                 <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed">
                   AI không cướp việc của bạn. <br/>
                   AI làm cho <span className="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">giá trị lao động chân tay</span> giảm xuống đáy.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};