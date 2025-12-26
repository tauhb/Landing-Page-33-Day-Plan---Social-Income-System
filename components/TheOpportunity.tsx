import React from 'react';

export const TheOpportunity: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl font-serif italic text-gray-500 mb-4 animate-fade-in-up">
             "Và từ mô hình đó, tôi phát hiện ra..."
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-4">
            Một <span className="text-primary-hover underline decoration-4 decoration-primary/30 underline-offset-8">Cơ hội lớn</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Để tạo thu nhập mỗi tháng mà không cần sự phức tạp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
          
          {/* Left: What you don't need */}
          <div className="p-10 md:p-12 bg-gray-50 dark:bg-black/30 flex flex-col justify-center">
             <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-8">Bạn không cần</h3>
             <ul className="space-y-6">
                <li className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-lg line-through decoration-red-500/50 decoration-2">
                   <i className="ph-bold ph-x text-red-500 text-2xl no-underline"></i>
                   Kỹ năng kỹ thuật
                </li>
                <li className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-lg line-through decoration-red-500/50 decoration-2">
                   <i className="ph-bold ph-x text-red-500 text-2xl no-underline"></i>
                   Chạy quảng cáo
                </li>
                <li className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-lg line-through decoration-red-500/50 decoration-2">
                   <i className="ph-bold ph-x text-red-500 text-2xl no-underline"></i>
                   Sản phẩm riêng
                </li>
             </ul>
          </div>

          {/* Right: What you need */}
          <div className="p-10 md:p-12 bg-primary/10 flex flex-col justify-center relative">
             <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 blur-2xl rounded-full"></div>
             <h3 className="text-xl font-bold text-primary-hover uppercase tracking-widest mb-8">Bạn chỉ cần</h3>
             <ul className="space-y-6">
                <li className="flex items-center gap-4 text-gray-900 dark:text-white text-xl font-bold">
                   <i className="ph-fill ph-check-circle text-primary text-2xl"></i>
                   1 Facebook cá nhân
                </li>
                <li className="flex items-center gap-4 text-gray-900 dark:text-white text-xl font-bold">
                   <i className="ph-fill ph-check-circle text-primary text-2xl"></i>
                   30 - 60 phút / ngày
                </li>
                <li className="flex items-center gap-4 text-gray-900 dark:text-white text-xl font-bold">
                   <i className="ph-fill ph-check-circle text-primary text-2xl"></i>
                   Ứng dụng AI
                </li>
             </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
           <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Cơ hội này chính là</p>
           <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 uppercase leading-none tracking-tight">
             Xây kênh & <br/>
             Thương hiệu cá nhân
           </h1>
        </div>

      </div>
    </section>
  );
};