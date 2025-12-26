import React from 'react';

export const TheOneChannel: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#050608] border-t border-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: CONTENT & ARGUMENTS (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/20 border border-blue-500/30 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
               <i className="ph-fill ph-crosshair"></i> Chiến lược tập trung
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
              Bạn không cần <br/>
              <span className="text-gray-600 line-through decoration-red-500 decoration-4">Làm nhiều kênh</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 font-medium">
              Khi mới bắt đầu, sai lầm lớn nhất là phân tán nguồn lực. Hãy tập trung vào <span className="text-blue-500 font-bold">Facebook</span>.
            </p>

            {/* The 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {/* Card 1 */}
               <div className="p-5 rounded-2xl bg-[#0F1115] border border-gray-800 hover:border-blue-500/50 transition-colors group">
                  <i className="ph-fill ph-users-three text-3xl text-gray-500 group-hover:text-blue-500 mb-3 transition-colors"></i>
                  <h4 className="font-bold text-white mb-1">Người dùng thật</h4>
                  <p className="text-xs text-gray-500">Nhu cầu thật, sức mua thật, không ảo.</p>
               </div>
               
               {/* Card 2 */}
               <div className="p-5 rounded-2xl bg-[#0F1115] border border-gray-800 hover:border-blue-500/50 transition-colors group">
                  <i className="ph-fill ph-shield-check text-3xl text-gray-500 group-hover:text-blue-500 mb-3 transition-colors"></i>
                  <h4 className="font-bold text-white mb-1">Dễ xây niềm tin</h4>
                  <p className="text-xs text-gray-500">Kết nối sâu qua bài viết & tương tác.</p>
               </div>

               {/* Card 3 */}
               <div className="p-5 rounded-2xl bg-[#0F1115] border border-gray-800 hover:border-blue-500/50 transition-colors group">
                  <i className="ph-fill ph-arrow-fat-line-right text-3xl text-gray-500 group-hover:text-blue-500 mb-3 transition-colors"></i>
                  <h4 className="font-bold text-white mb-1">Dễ chuyển đổi</h4>
                  <p className="text-xs text-gray-500">Từ người xem → Khách hàng nhanh nhất.</p>
               </div>

               {/* Card 4 */}
               <div className="p-5 rounded-2xl bg-[#0F1115] border border-gray-800 hover:border-blue-500/50 transition-colors group">
                  <i className="ph-fill ph-chart-bar text-3xl text-gray-500 group-hover:text-blue-500 mb-3 transition-colors"></i>
                  <h4 className="font-bold text-white mb-1">Ai cũng làm được</h4>
                  <p className="text-xs text-gray-500">Phù hợp cả Newbie lẫn Pro.</p>
               </div>
            </div>

            {/* Transition Link */}
            <div className="flex items-center gap-3 text-gray-400 group cursor-pointer">
               <span className="font-mono text-sm uppercase tracking-widest border-b border-transparent group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                 Tại sao lại thế?
               </span>
               <i className="ph-bold ph-arrow-down text-blue-500 animate-bounce"></i>
            </div>
          </div>

          {/* RIGHT: THE VISUAL METAPHOR (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
             {/* The Radar Container */}
             <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-[#0A0B0E] border border-gray-800 overflow-hidden flex items-center justify-center">
                {/* Radar Grids */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
                <div className="absolute inset-0 border border-gray-800 rounded-full scale-50 opacity-30"></div>
                <div className="absolute inset-0 border border-gray-800 rounded-full scale-75 opacity-30"></div>
                <div className="absolute w-full h-px bg-gray-800/50 top-1/2 left-0"></div>
                <div className="absolute h-full w-px bg-gray-800/50 left-1/2 top-0"></div>

                {/* The Scanner Beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent w-full h-full animate-[spin_4s_linear_infinite] origin-center opacity-50" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)'}}></div>

                {/* Center: Facebook (The Hero) */}
                <div className="relative z-20 w-32 h-32 rounded-3xl bg-blue-600 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.6)] animate-pulse">
                   <i className="ph-fill ph-facebook-logo text-7xl text-white"></i>
                   <div className="absolute -bottom-8 bg-blue-900/50 border border-blue-500/50 px-3 py-1 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-wider backdrop-blur-md">
                      Mảnh đất vàng
                   </div>
                </div>

                {/* Orbiting Distractions (The Noise) */}
                {/* TikTok */}
                <div className="absolute top-[20%] left-[20%] opacity-30 grayscale blur-[1px]">
                   <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center border border-gray-700">
                      <i className="ph-fill ph-tiktok-logo text-3xl text-gray-500"></i>
                   </div>
                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full border border-gray-700 flex items-center justify-center">
                      <i className="ph-bold ph-x text-xs text-red-500"></i>
                   </div>
                </div>

                {/* YouTube */}
                <div className="absolute bottom-[25%] right-[20%] opacity-30 grayscale blur-[1px]">
                   <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center border border-gray-700">
                      <i className="ph-fill ph-youtube-logo text-3xl text-gray-500"></i>
                   </div>
                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full border border-gray-700 flex items-center justify-center">
                      <i className="ph-bold ph-x text-xs text-red-500"></i>
                   </div>
                </div>

                {/* Instagram */}
                <div className="absolute bottom-[15%] left-[30%] opacity-20 grayscale blur-[2px]">
                   <i className="ph-fill ph-instagram-logo text-4xl text-gray-600"></i>
                </div>

             </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};