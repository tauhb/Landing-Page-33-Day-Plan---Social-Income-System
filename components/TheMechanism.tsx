import React from 'react';

export const TheMechanism: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#050505] text-white overflow-hidden relative border-t border-gray-900">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-24">
            <p className="text-red-500 font-mono text-sm uppercase tracking-widest mb-4 font-bold">
               // CẢNH BÁO THỊ TRƯỜNG
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
               Mô hình kiếm tiền cũ <br/>
               <span className="text-gray-600 line-through decoration-red-600 decoration-4">Đang sụp đổ</span>
            </h2>
        </div>

        {/* THE GREAT DIVIDE (SPLIT LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
          
          {/* CENTER DIVIDER LINE (DESKTOP ONLY) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 -translate-x-1/2"></div>

          {/* LEFT COLUMN: THE TRAP (CÁI ĐANG BÓP NGHẸT BẠN) */}
          <div className="relative">
             <div className="text-left mb-10">
                <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-2">
                   Cái đang <span className="text-red-600">bóp nghẹt</span> bạn <br/>
                   không phải công việc
                </h3>
             </div>

             {/* The Chain Visual */}
             <div className="relative flex flex-col gap-4">
                {/* Vertical Chain Line */}
                <div className="absolute left-[2.5rem] top-0 bottom-0 w-1 bg-gray-800 z-0"></div>
                
                {/* Block 1 */}
                <div className="relative z-10 flex items-center gap-6 p-6 bg-[#0F0F0F] border border-gray-800 rounded-2xl group hover:border-red-900/50 transition-colors">
                   <div className="w-20 h-20 rounded-xl bg-[#1a1a1a] flex items-center justify-center border border-gray-700 group-hover:border-red-900/50 flex-shrink-0">
                      <i className="ph-fill ph-clock text-3xl text-gray-500 group-hover:text-red-500 transition-colors"></i>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-300 group-hover:text-white uppercase">Bán thời gian</h4>
                      <p className="text-sm text-gray-600 group-hover:text-red-400">Giới hạn 24h/ngày</p>
                   </div>
                </div>

                {/* Chain Link Icon */}
                <div className="relative z-10 pl-[2rem] py-1">
                   <i className="ph-fill ph-link text-gray-700 text-xl"></i>
                </div>

                {/* Block 2 */}
                <div className="relative z-10 flex items-center gap-6 p-6 bg-[#0F0F0F] border border-gray-800 rounded-2xl group hover:border-red-900/50 transition-colors">
                   <div className="w-20 h-20 rounded-xl bg-[#1a1a1a] flex items-center justify-center border border-gray-700 group-hover:border-red-900/50 flex-shrink-0">
                      <i className="ph-fill ph-barbell text-3xl text-gray-500 group-hover:text-red-500 transition-colors"></i>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-300 group-hover:text-white uppercase">Bán công sức</h4>
                      <p className="text-sm text-gray-600 group-hover:text-red-400">Cạnh tranh giá rẻ</p>
                   </div>
                </div>

                {/* Chain Link Icon */}
                <div className="relative z-10 pl-[2rem] py-1">
                   <i className="ph-fill ph-link text-gray-700 text-xl"></i>
                </div>

                {/* Block 3 */}
                <div className="relative z-10 flex items-center gap-6 p-6 bg-[#0F0F0F] border border-gray-800 rounded-2xl group hover:border-red-900/50 transition-colors">
                   <div className="w-20 h-20 rounded-xl bg-[#1a1a1a] flex items-center justify-center border border-gray-700 group-hover:border-red-900/50 flex-shrink-0">
                      <i className="ph-fill ph-plugs text-3xl text-gray-500 group-hover:text-red-500 transition-colors"></i>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-300 group-hover:text-white uppercase">Phụ thuộc 1 nguồn thu</h4>
                      <p className="text-sm text-gray-600 group-hover:text-red-400">Rủi ro mất việc = 100%</p>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN: THE DIVERGENCE (SỰ PHÂN HOÁ) */}
          <div className="relative h-full flex flex-col">
             <div className="text-left mb-10 pl-0 lg:pl-12">
                <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-2">
                   Sự phân hoá <br/>
                   <span className="text-primary">Đang diễn ra</span>
                </h3>
             </div>

             {/* The Flowchart Visual */}
             <div className="relative flex-1 flex flex-col justify-center px-4 lg:px-12">
                
                {/* START NODE */}
                <div className="relative z-20 bg-white text-black p-4 rounded-xl text-center font-black text-lg uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] border-2 border-white transform hover:scale-105 transition-transform">
                   Kiến thức + Kỹ năng
                </div>

                {/* FLOW LINES SVG */}
                <div className="h-24 w-full relative">
                   <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                      {/* Path Left (Bad) */}
                      <path d="M 50% 0 L 50% 20 L 20% 20 L 20% 100%" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="5 5" className="lg:hidden" /> 
                      <path d="M 50% 0 L 50% 30 C 50% 60 10% 30 10% 100%" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="6 4" className="hidden lg:block" />

                      {/* Path Right (Good) */}
                      <path d="M 50% 0 L 50% 20 L 80% 20 L 80% 100%" fill="none" stroke="#D4F077" strokeWidth="3" className="lg:hidden" />
                      <path d="M 50% 0 L 50% 30 C 50% 60 90% 30 90% 100%" fill="none" stroke="#D4F077" strokeWidth="4" className="hidden lg:block drop-shadow-[0_0_10px_rgba(212,240,119,0.5)]" />
                   </svg>
                   
                   {/* Direction Arrows */}
                   <div className="absolute bottom-0 left-[10%] lg:left-[10%] -translate-x-1/2 text-red-900 animate-bounce">
                      <i className="ph-fill ph-caret-down text-xl"></i>
                   </div>
                   <div className="absolute bottom-0 right-[20%] lg:right-[10%] translate-x-1/2 text-primary animate-bounce">
                      <i className="ph-fill ph-caret-down text-xl"></i>
                   </div>
                </div>

                {/* END NODES ROW */}
                <div className="grid grid-cols-2 gap-4 lg:gap-12 mt-2">
                   
                   {/* BAD ENDING */}
                   <div className="flex flex-col gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-gray-500 justify-center">
                         <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
                            <i className="ph-bold ph-x text-sm"></i>
                         </div>
                         <span className="text-xs font-bold uppercase hidden md:inline">Không có kênh</span>
                      </div>
                      
                      <div className="bg-[#1a0505] border border-red-900/50 p-6 rounded-2xl text-center h-full flex flex-col justify-center items-center">
                         <i className="ph-duotone ph-warning-circle text-3xl text-red-600 mb-2"></i>
                         <h4 className="font-bold text-red-500 uppercase leading-tight">Thu nhập bị ép</h4>
                         <p className="text-[10px] text-red-400 mt-1">Cạnh tranh giá</p>
                      </div>
                   </div>

                   {/* GOOD ENDING */}
                   <div className="flex flex-col gap-4 relative">
                      <div className="flex items-center gap-2 text-primary justify-center">
                         <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_15px_rgba(212,240,119,0.5)]">
                            <i className="ph-bold ph-check text-sm"></i>
                         </div>
                         <span className="text-xs font-bold uppercase hidden md:inline">Cộng với kênh</span>
                      </div>
                      
                      <div className="bg-primary/10 border-2 border-primary p-6 rounded-2xl text-center h-full flex flex-col justify-center items-center shadow-[0_0_40px_rgba(212,240,119,0.15)] relative overflow-hidden group">
                         <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <i className="ph-duotone ph-magnet text-3xl text-primary mb-2 relative z-10"></i>
                         <h4 className="font-black text-white uppercase leading-tight relative z-10">Cơ hội tự tìm đến</h4>
                         <p className="text-[10px] text-primary mt-1 relative z-10">Quyền lựa chọn</p>
                      </div>
                   </div>

                </div>

             </div>
          </div>

        </div>

        {/* BOTTOM SECTION: AI TRUTH & MARKET RULE */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
           
           {/* THE AI TRUTH (Full Width or Main Focus) */}
           <div className="lg:col-span-7 bg-[#D4F077] rounded-3xl p-8 md:p-12 text-black relative overflow-hidden group">
              <div className="relative z-10">
                 <div className="inline-block bg-black text-[#D4F077] text-xs font-black px-3 py-1 rounded mb-4 uppercase">
                    Key Insight
                 </div>
                 <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight leading-none">
                    Sự thật về AI
                 </h3>
                 <p className="text-xl md:text-2xl font-bold leading-tight mb-8">
                    AI không lấy tiền của bạn. <br/>
                    AI chỉ làm <span className="bg-black text-white px-1">kỹ năng trở nên rẻ hơn</span>.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">▼</div>
                       <div className="font-bold opacity-80">Người bán kỹ năng</div>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm"><i className="ph-fill ph-rocket-launch"></i></div>
                       <div className="font-bold border-b-2 border-black">Người sở hữu kênh</div>
                    </div>
                 </div>
              </div>
              
              {/* Background Decor */}
              <i className="ph-fill ph-robot absolute -right-6 -bottom-10 text-[12rem] text-black opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-500"></i>
           </div>

           {/* THE MARKET RULE (Dark Box) */}
           <div className="lg:col-span-5 bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4 text-center">
                 Quy luật thị trường mới
              </p>
              
              <div className="text-center">
                 <h3 className="text-xl md:text-2xl text-white font-bold mb-2">
                    "Thị trường trả tiền cho người...
                 </h3>
                 <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase italic animate-pulse">
                    ĐƯỢC NHÌN THẤY"
                 </h2>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};