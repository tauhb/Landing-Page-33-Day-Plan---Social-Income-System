import React from 'react';

export const TheSqueeze: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#080808] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* PART 1: THE ECONOMIC VISE (Sự Bóp Nghẹt) */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32 relative">
          
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded mb-6">
                <i className="ph-bold ph-chart-line-down text-red-500"></i>
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                  Bối cảnh thị trường
                </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight mb-6">
              Chúng ta <br/>
              <span className="text-gray-600 line-through decoration-red-500 decoration-4">Không nghèo đi</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-red-600 uppercase mb-8 leading-tight">
              Nhưng đang bị <br/>bóp nghẹt
            </h3>
            
            <div className="space-y-6">
               <div className="group flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 group-hover:text-black transition-colors text-red-500">
                   <i className="ph-bold ph-trend-up text-xl"></i>
                 </div>
                 <div>
                   <p className="font-bold text-white text-lg">Chi phí sống tăng phi mã</p>
                   <p className="text-sm text-gray-500">Ăn uống, đi lại, nhà cửa, mọi thứ đều tăng.</p>
                 </div>
               </div>
               
               <div className="group flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gray-500/50 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0 text-gray-400">
                   <i className="ph-bold ph-minus text-xl"></i>
                 </div>
                 <div>
                   <p className="font-bold text-gray-400 text-lg">Thu nhập thực tế dậm chân</p>
                   <p className="text-sm text-gray-600">Làm nhiều hơn nhưng dư ít hơn.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* The Chart Visual */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full"></div>
             <div className="relative bg-[#0c0c0c] border border-gray-800 p-8 rounded-3xl shadow-2xl">
                {/* Header Chart */}
                <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                   <span className="text-xs font-mono text-gray-500 uppercase">Dữ liệu tài chính cá nhân</span>
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="text-xs font-bold text-red-500 uppercase">Cảnh báo</span>
                   </div>
                </div>

                {/* The Diverging Lines */}
                <div className="relative h-64 w-full">
                   {/* Grid */}
                   <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                      {[...Array(24)].map((_, i) => (
                         <div key={i} className="border-r border-t border-gray-800/30"></div>
                      ))}
                   </div>
                   
                   {/* Cost Line (Red) */}
                   <div className="absolute bottom-0 left-0 w-full h-full">
                      <svg className="w-full h-full overflow-visible">
                         <path d="M0,180 C100,170 200,100 400,20" fill="none" stroke="#EF4444" strokeWidth="3" />
                         <circle cx="400" cy="20" r="4" fill="#EF4444" />
                         <text x="410" y="25" fill="#EF4444" className="text-xs font-bold">Chi Phí</text>
                      </svg>
                   </div>

                   {/* Income Line (Gray) */}
                   <div className="absolute bottom-0 left-0 w-full h-full">
                      <svg className="w-full h-full overflow-visible">
                         <path d="M0,180 C100,180 200,175 400,170" fill="none" stroke="#6B7280" strokeWidth="3" strokeDasharray="5 5" />
                         <circle cx="400" cy="170" r="4" fill="#6B7280" />
                         <text x="410" y="175" fill="#6B7280" className="text-xs font-bold">Thu Nhập</text>
                      </svg>
                   </div>
                   
                   {/* The Gap */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="h-24 w-px bg-red-500/50 border-l border-r border-red-500/20"></div>
                      <span className="bg-red-900/80 text-red-200 text-xs px-2 py-1 rounded mt-2 uppercase font-bold backdrop-blur-sm">
                         Áp lực
                      </span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* PART 2: THE INFINITE LOOP (Vòng Lặp) */}
        <div className="relative pt-12 border-t border-white/5">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
                 Bạn có đang kẹt trong <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Vòng lặp này?</span>
              </h2>
              <p className="font-mono text-red-400 text-sm uppercase tracking-widest animate-pulse">
                 // Cảnh_báo: Tiến trình không phản hồi
              </p>
           </div>

           <div className="relative w-full max-w-3xl mx-auto aspect-square md:aspect-[16/9] flex items-center justify-center">
              
              {/* Connecting Ring (Animated) */}
              <div className="absolute inset-0 md:inset-10 border-2 border-dashed border-gray-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-0 md:inset-10 border-2 border-transparent border-t-red-900/50 rounded-full animate-[spin_3s_linear_infinite]"></div>

              {/* Center Core: The Black Hole */}
              <div className="absolute z-20 w-48 h-48 rounded-full bg-black border border-red-900/50 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                 <div className="absolute inset-0 rounded-full bg-red-500/5 animate-ping"></div>
                 <i className="ph-fill ph-spinner text-4xl text-red-500 mb-2 animate-spin"></i>
                 <h3 className="text-xl font-black text-white uppercase leading-none">Treo Máy</h3>
                 <span className="text-xs text-red-500 font-mono mt-1">Status: Stuck</span>
              </div>

              {/* Node 1: Work More (Top) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-40 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-[#111] border border-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:border-white transition-colors z-10 relative">
                    <i className="ph-fill ph-briefcase text-2xl text-gray-400 group-hover:text-white"></i>
                    <div className="absolute -bottom-2 px-2 py-0.5 bg-gray-800 text-[10px] text-gray-400 rounded font-mono">BƯỚC_01</div>
                 </div>
                 <p className="font-bold text-gray-300 group-hover:text-white">Cày cuốc thêm giờ</p>
              </div>

              {/* Node 2: Learn Skills (Right) */}
              <div className="absolute right-0 top-1/2 translate-x-1/4 md:translate-x-0 -translate-y-1/2 w-40 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-[#111] border border-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:border-white transition-colors z-10 relative">
                    <i className="ph-fill ph-books text-2xl text-gray-400 group-hover:text-white"></i>
                    <div className="absolute -bottom-2 px-2 py-0.5 bg-gray-800 text-[10px] text-gray-400 rounded font-mono">BƯỚC_02</div>
                 </div>
                 <p className="font-bold text-gray-300 group-hover:text-white">Học thêm kỹ năng</p>
              </div>

              {/* Node 3: Price War (Bottom) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-y-1/2 w-40 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-[#111] border border-red-900 flex items-center justify-center shadow-lg mb-3 group-hover:border-red-500 transition-colors z-10 relative">
                    <i className="ph-fill ph-trend-down text-2xl text-red-500"></i>
                    <div className="absolute -bottom-2 px-2 py-0.5 bg-red-900/50 text-[10px] text-red-300 rounded font-mono">LỖI_03</div>
                 </div>
                 <p className="font-bold text-red-400 group-hover:text-red-300">Cạnh tranh giảm giá</p>
              </div>

              {/* Node 4: Start Over (Left) */}
              <div className="absolute left-0 top-1/2 -translate-x-1/4 md:translate-x-0 -translate-y-1/2 w-40 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-[#111] border border-gray-700 flex items-center justify-center shadow-lg mb-3 group-hover:border-white transition-colors z-10 relative">
                    <i className="ph-fill ph-arrow-u-up-left text-2xl text-gray-400 group-hover:text-white"></i>
                    <div className="absolute -bottom-2 px-2 py-0.5 bg-gray-800 text-[10px] text-gray-400 rounded font-mono">BƯỚC_04</div>
                 </div>
                 <p className="font-bold text-gray-300 group-hover:text-white">Lại bắt đầu từ số 0</p>
              </div>
           </div>
           
           {/* Code Snippet Decoration */}
           <div className="mt-16 max-w-lg mx-auto bg-black border border-gray-800 rounded-lg p-4 font-mono text-xs md:text-sm text-gray-500 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
              <div className="space-y-1">
                 <p><span className="text-purple-400">trong_khi</span> <span className="text-yellow-400">(</span><span className="text-white">vẫn_làm_cách_cũ</span><span className="text-yellow-400">)</span> <span className="text-yellow-400">{'{'}</span></p>
                 <p className="pl-4 text-blue-400">lao_động_chăm_chỉ();</p>
                 <p className="pl-4 text-blue-400">thu_nhập_thấp();</p>
                 <p className="pl-4 text-red-500">kiệt_sức();</p>
                 <p className="text-yellow-400">{'}'}</p>
                 <p className="mt-2 text-red-500 animate-pulse">// LỖI: Vòng lặp vô tận phát hiện!</p>
              </div>
           </div>

           <div className="text-center mt-8">
              <p className="text-lg md:text-xl font-medium text-gray-400">
                 Bạn đang chạy trên máy chạy bộ. <span className="text-white font-bold">Tốn sức, nhưng không đi đến đâu cả.</span>
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};