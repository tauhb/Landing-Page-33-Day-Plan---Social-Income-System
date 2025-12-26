import React from 'react';

export const TheOfferReveal: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-white to-background-light dark:from-[#0b0c10] dark:to-background-dark border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Section 93 & 94: The Gift */}
        <div className="mb-24">
           <div className="inline-block p-1 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 mb-8 animate-pulse">
              <div className="bg-white dark:bg-black px-6 py-2 rounded-full">
                 <span className="font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest text-sm">Special Offer</span>
              </div>
           </div>
           
           <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-8">
             Nếu bạn chọn <span className="text-primary-hover underline decoration-4 underline-offset-4">Cách Mới</span>...
           </h2>

           <div className="relative max-w-3xl mx-auto bg-white dark:bg-[#1a1d24] rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
              {/* Gift Icon Decoration */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-primary to-green-500 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-primary/30 z-20 border-4 border-white dark:border-[#0b0c10]">
                 <i className="ph-fill ph-gift text-4xl text-black -rotate-45"></i>
              </div>
              
              <div className="mt-8">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                   Tôi sẽ chuyển giao trọn bộ <br/>
                   <span className="text-primary-hover">Hệ thống 100X Content</span>
                 </h3>
                 
                 <div className="flex flex-col gap-4 text-left max-w-md mx-auto mb-8">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                       <i className="ph-fill ph-check-circle text-green-500 text-xl"></i>
                       <span className="text-gray-700 dark:text-gray-300 font-medium">Quy trình tìm ý tưởng không giới hạn</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                       <i className="ph-fill ph-check-circle text-green-500 text-xl"></i>
                       <span className="text-gray-700 dark:text-gray-300 font-medium">Công thức viết Viral & Chất lượng</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
                       <i className="ph-fill ph-check-circle text-green-500 text-xl"></i>
                       <span className="text-gray-700 dark:text-gray-300 font-medium">Setup Tự động hoá hoàn toàn</span>
                    </div>
                 </div>

                 <div className="inline-block px-4 py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-transparent text-gray-500 text-sm italic">
                    "Đây là món quà để bạn có vũ khí ra trận ngay lập tức."
                 </div>
              </div>
           </div>
        </div>

        {/* Section 95: The Program Name Reveal */}
        <div className="relative py-12 md:py-20">
           {/* Background Text Effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[10rem] font-black text-gray-100 dark:text-white/5 uppercase tracking-tighter leading-none select-none pointer-events-none whitespace-nowrap">
              The Journey
           </div>
           
           <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-500 font-serif italic mb-6">Chương trình này được gọi tên là</p>
              
              <h1 className="text-[5rem] md:text-[8rem] font-black leading-[0.85] tracking-tighter text-gray-900 dark:text-white mb-4">
                33 NGÀY
              </h1>
              <div className="h-2 w-32 bg-primary mx-auto mb-6"></div>
              
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200">
                Đồng hành Xây Kênh & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Thương hiệu cá nhân</span>
              </h2>
           </div>
        </div>

      </div>
    </section>
  );
};