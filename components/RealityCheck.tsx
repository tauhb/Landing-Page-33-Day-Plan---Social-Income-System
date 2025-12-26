import React from 'react';

export const RealityCheck: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(transparent_0%,rgba(255,0,0,0.1)_50%,transparent_100%)] bg-[length:100%_4px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/30 border border-red-900/50 rounded mb-6">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
             </span>
             <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">
               Sự thật về thu nhập
             </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Vấn đề là:
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full animate-pulse"></div>
        </div>

        {/* The 3 Diagnostics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="group relative bg-[#0a0a0a] border border-gray-800 hover:border-red-600 transition-all duration-300 p-8 rounded-2xl overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <i className="ph-fill ph-chart-line-down text-6xl text-red-500"></i>
             </div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center text-gray-500 mb-6 group-hover:bg-red-900/20 group-hover:text-red-500 transition-colors">
                   <i className="ph-fill ph-pulse text-2xl"></i>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">Kiếm tiền có ổn định không?</h3>
                <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gray-800 pl-4 group-hover:border-red-600 transition-colors">
                  Hay tháng này có, tháng sau lại mất?
                </p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#0a0a0a] border border-gray-800 hover:border-red-600 transition-all duration-300 p-8 rounded-2xl overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <i className="ph-fill ph-arrow-counter-clockwise text-6xl text-red-500"></i>
             </div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center text-gray-500 mb-6 group-hover:bg-red-900/20 group-hover:text-red-500 transition-colors">
                   <i className="ph-fill ph-arrows-clockwise text-2xl"></i>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">Có lặp lại không?</h3>
                <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gray-800 pl-4 group-hover:border-red-600 transition-colors">
                  Hay phải liên tục đi tìm khách mới?
                </p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#0a0a0a] border border-gray-800 hover:border-red-600 transition-all duration-300 p-8 rounded-2xl overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <i className="ph-fill ph-battery-warning text-6xl text-red-500"></i>
             </div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center text-gray-500 mb-6 group-hover:bg-red-900/20 group-hover:text-red-500 transition-colors">
                   <i className="ph-fill ph-piggy-bank text-2xl"></i>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">Có tích luỹ không?</h3>
                <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gray-800 pl-4 group-hover:border-red-600 transition-colors">
                  Hay làm bao nhiêu tiêu bấy nhiêu?
                </p>
             </div>
          </div>

        </div>

        {/* The Fatal Error Box */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Glitchy Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-lg opacity-50 blur-sm animate-pulse"></div>
          
          <div className="relative bg-black border border-red-600/50 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Icon Alert */}
            <div className="flex-shrink-0 relative">
               <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse"></div>
               <i className="ph-fill ph-warning-octagon text-6xl md:text-7xl text-red-500 relative z-10"></i>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
               <div className="font-mono text-red-400 text-xs uppercase tracking-widest mb-2">
                 // Chẩn_Đoán_Hệ_Thống: LỖI_NGHIÊM_TRỌNG
               </div>
               
               <p className="text-xl md:text-2xl font-medium text-gray-300 mb-4 leading-relaxed">
                 Nếu tháng nào cũng phải bắt đầu lại từ <span className="text-white font-black bg-red-600 px-2 py-0.5 rounded-sm">SỐ 0</span>
               </p>
               
               <div className="w-full h-px bg-red-900/50 my-4"></div>
               
               <p className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
                 Đó là <span className="text-red-500 underline decoration-4 underline-offset-4 decoration-red-700">RỦI RO</span>, không phải sự nghiệp.
               </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};