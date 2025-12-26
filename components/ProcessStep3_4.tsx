import React from 'react';

export const ProcessStep3_4: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           
           {/* Step 3: Media */}
           <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-2xl font-black shadow-lg">#3</div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase">Tạo Media</h3>
              </div>
              
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-lg">
                 <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Tôi dùng <span className="font-bold text-gray-900 dark:text-white">ContentFlow</span> để tạo Ảnh & Carousel siêu tốc.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[4/5] bg-gray-100 dark:bg-black rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 group cursor-pointer hover:border-primary transition-colors">
                       <div className="text-center">
                          <i className="ph-fill ph-image text-3xl text-gray-400 mb-2 group-hover:text-primary"></i>
                          <span className="block text-xs font-bold text-gray-500 uppercase">Single Image</span>
                       </div>
                    </div>
                    <div className="aspect-[4/5] bg-gray-100 dark:bg-black rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 group cursor-pointer hover:border-primary transition-colors relative">
                       <div className="absolute right-2 top-2 bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">PDF</div>
                       <div className="text-center">
                          <i className="ph-fill ph-slideshow text-3xl text-gray-400 mb-2 group-hover:text-primary"></i>
                          <span className="block text-xs font-bold text-gray-500 uppercase">Carousel</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Step 4: Distribution */}
           <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-2xl font-black shadow-lg">#4</div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase">Đăng tải</h3>
              </div>

              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-lg h-fit">
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                       <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          <i className="ph-bold ph-meta-logo text-xl"></i>
                       </div>
                       <div>
                          <div className="font-bold text-gray-900 dark:text-white">Meta Business Suite</div>
                          <div className="text-xs text-gray-500">Đăng Facebook & Instagram</div>
                       </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                       <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white">
                          <i className="ph-bold ph-funnel text-xl"></i>
                       </div>
                       <div>
                          <div className="font-bold text-gray-900 dark:text-white">Funnel.vn</div>
                          <div className="text-xs text-gray-500">Đăng đa kênh tự động</div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
                    <div className="inline-flex items-center gap-2 text-gray-500 font-medium">
                       <i className="ph-bold ph-arrows-left-right text-primary text-xl"></i>
                       <span>Tái sử dụng nội dung với <span className="font-bold text-gray-900 dark:text-white">ContentFlow</span></span>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};