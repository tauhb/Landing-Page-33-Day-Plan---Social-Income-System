import React from 'react';

export const TheValueIntro: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Section 109 */}
        <div className="mb-20">
           <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-hover font-bold text-xs uppercase tracking-widest mb-6">
             Value Stack
           </span>
           <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-6 leading-tight">
             Trong hành trình này <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Bạn sẽ nhận được</span>
           </h2>
           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Không nói chung chung. Đây là những "vũ khí" cụ thể bạn được cầm trên tay để triển khai ngay lập tức.
           </p>
        </div>

        {/* Section 110: The Core Program */}
        <div className="relative group">
           <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
           <div className="relative bg-white dark:bg-[#1a1d24] border-2 border-primary rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-black text-xs font-black px-4 py-2 rounded-bl-xl uppercase tracking-wider">
                 Core Product
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black text-white flex items-center justify-center border-4 border-gray-100 dark:border-gray-700 shadow-lg">
                       <span className="font-black text-4xl md:text-5xl">01</span>
                    </div>
                 </div>
                 
                 <div className="text-left flex-1">
                    <h3 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white uppercase mb-4 leading-none">
                      Hành trình 33 Ngày <br/>
                      Đồng hành Xây kênh & Kiếm tiền
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                       <span className="px-3 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold border border-red-200 dark:border-red-900/50">
                          <i className="ph-bold ph-x mr-1"></i> KHÔNG PHẢI KHOÁ HỌC
                       </span>
                       <span className="px-3 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold border border-green-200 dark:border-green-900/50">
                          <i className="ph-bold ph-check mr-1"></i> LÀ CHƯƠNG TRÌNH TRIỂN KHAI
                       </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Dành cho người muốn có kênh rõ ràng, thu nhập có nền tảng và <span className="text-gray-900 dark:text-white font-bold">không muốn đi một mình</span>.
                    </p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};