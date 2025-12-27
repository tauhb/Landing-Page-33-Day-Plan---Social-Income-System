import React from 'react';

export const PainPoints: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Ambience / Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Squeezed Headline */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 uppercase leading-[1.1] tracking-tighter mb-4">
            CHÚNG TA SẼ <br/>
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">VẤT VẢ RA SAO</span>
          </h2>
          <p className="font-mono text-red-400/80 uppercase tracking-[0.3em] text-sm animate-pulse">
            // CẢNH BÁO: ÁP LỰC CẠNH TRANH TĂNG CAO
          </p>
        </div>

        {/* The Pressure Chamber Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Item 1 */}
          <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-10 overflow-hidden hover:border-red-500/50 transition-colors duration-500">
             {/* Background Watermark Icon */}
             <i className="ph-fill ph-users-three absolute -right-4 -bottom-4 text-[10rem] text-white/5 group-hover:text-red-500/10 transition-colors duration-500 rotate-12"></i>
             
             {/* Glowing Bar */}
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-800 to-transparent group-hover:from-red-500 transition-colors duration-500"></div>

             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-xs font-mono text-gray-400 mb-6 border border-white/5">
                   <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                   ĐỐI TƯỢNG_01
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase mb-6 tracking-tight">Người làm dịch vụ</h3>
                
                <ul className="space-y-4">
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-warning text-red-500 text-xl"></i>
                      <span className="text-lg font-medium">Khách đòi nhiều hơn</span>
                   </li>
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-trend-down text-red-500 text-xl"></i>
                      <span className="text-lg font-medium">Giá ngày càng thấp</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Item 2 */}
          <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-10 overflow-hidden hover:border-orange-500/50 transition-colors duration-500 md:translate-y-12">
             <i className="ph-fill ph-laptop absolute -right-4 -bottom-4 text-[10rem] text-white/5 group-hover:text-orange-500/10 transition-colors duration-500 -rotate-6"></i>
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-800 to-transparent group-hover:from-orange-500 transition-colors duration-500"></div>

             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-xs font-mono text-gray-400 mb-6 border border-white/5">
                   <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                   ĐỐI TƯỢNG_02
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase mb-6 tracking-tight">Freelancer</h3>
                
                <ul className="space-y-4">
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-globe text-orange-500 text-xl"></i>
                      <span className="text-lg font-medium">Cạnh tranh toàn cầu</span>
                   </li>
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-hourglass-high text-orange-500 text-xl"></i>
                      <span className="text-lg font-medium">Khó giữ khách lâu dài</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Item 3 */}
          <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-10 overflow-hidden hover:border-red-500/50 transition-colors duration-500">
             <i className="ph-fill ph-shopping-cart absolute -right-4 -bottom-4 text-[10rem] text-white/5 group-hover:text-red-500/10 transition-colors duration-500 rotate-6"></i>
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-800 to-transparent group-hover:from-red-500 transition-colors duration-500"></div>

             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-xs font-mono text-gray-400 mb-6 border border-white/5">
                   <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                   ĐỐI TƯỢNG_03
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase mb-6 tracking-tight">Người bán online</h3>
                
                <ul className="space-y-4">
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-chart-line-up text-red-500 text-xl"></i>
                      <span className="text-lg font-medium">Quảng cáo đắt</span>
                   </li>
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-funnel-x text-red-500 text-xl"></i>
                      <span className="text-lg font-medium">Chuyển đổi giảm</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Item 4 */}
          <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-10 overflow-hidden hover:border-orange-500/50 transition-colors duration-500 md:translate-y-12">
             <i className="ph-fill ph-plant absolute -right-4 -bottom-4 text-[10rem] text-white/5 group-hover:text-orange-500/10 transition-colors duration-500 -rotate-12"></i>
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-800 to-transparent group-hover:from-orange-500 transition-colors duration-500"></div>

             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-xs font-mono text-gray-400 mb-6 border border-white/5">
                   <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                   ĐỐI TƯỢNG_04
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase mb-6 tracking-tight">Người mới</h3>
                
                <ul className="space-y-4">
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-books text-orange-500 text-xl"></i>
                      <span className="text-lg font-medium">Biết nhiều</span>
                   </li>
                   <li className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors">
                      <i className="ph-fill ph-empty text-orange-500 text-xl"></i>
                      <span className="text-lg font-medium">Nhưng không ra tiền</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};