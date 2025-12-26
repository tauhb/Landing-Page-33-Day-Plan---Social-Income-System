import React from 'react';

export const TheFaceDebate: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#050608] border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0A0B0E] border border-white/5 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>

           <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">
             Vấn đề không phải "Lộ mặt hay không"
           </h3>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 relative z-10">
              <div className="flex flex-col items-center opacity-50">
                 <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                    <i className="ph-fill ph-smiley-x-eyes text-4xl text-gray-500"></i>
                 </div>
                 <span className="font-bold text-gray-500 line-through decoration-2">Gương mặt</span>
              </div>
              
              <i className="ph-bold ph-arrow-right text-3xl text-gray-600 hidden md:block"></i>
              
              <div className="flex flex-col items-center transform scale-110">
                 <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4 border-2 border-primary shadow-[0_0_30px_rgba(212,240,119,0.3)]">
                    <i className="ph-fill ph-diamond text-4xl text-primary"></i>
                 </div>
                 <span className="font-black text-white uppercase text-xl">GIÁ TRỊ</span>
              </div>
           </div>
           
           <p className="text-lg text-gray-400 mb-8 relative z-10">
             Bạn hoàn toàn có thể xây thương hiệu cá nhân ẩn danh bằng:
           </p>
           
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {['Bài viết', 'Carousel', 'Video chữ', 'Voice AI', 'Slides'].map((item, idx) => (
                 <span key={idx} className="px-6 py-2 rounded-full bg-black border border-gray-700 font-bold text-gray-200 shadow-sm hover:border-primary/50 hover:text-white transition-colors cursor-default">
                   {item}
                 </span>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};