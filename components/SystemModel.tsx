import React from 'react';

export const SystemModel: React.FC = () => {
  return (
    <section className="relative z-10 w-full pt-8 pb-24 px-6 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Công thức thành công đó là</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-8 leading-tight">
            <span className="inline-flex flex-col md:flex-row flex-wrap justify-center items-center gap-y-2 gap-x-4">
              <span className="text-gray-900 dark:text-white">SOCIAL</span>
              <i className="ph-bold ph-arrow-right text-primary text-2xl md:text-4xl rotate-90 md:rotate-0"></i>
              <span className="text-gray-900 dark:text-white">INCOME</span>
              <i className="ph-bold ph-arrow-right text-primary text-2xl md:text-4xl rotate-90 md:rotate-0"></i>
              <span className="text-gray-900 dark:text-white">SYSTEM</span>
            </span>
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Không phải kiếm tiền ngẫu hứng. Không phải làm hôm nay, mai lại bắt đầu từ 0. <br className="hidden md:block"/>
            Mà là xây <span className="text-gray-900 dark:text-white font-bold">nền móng – dòng tiền – hệ thống</span>.
          </p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start pt-4">
          <div className="hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-300 dark:border-gray-700 -z-0"></div>
          
          {/* Step 1 */}
          <div className="group relative flex flex-col items-center text-center bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition-all duration-300 z-10 h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Bước 1</div>
            <div className="w-24 h-24 rounded-full bg-gray-50 dark:bg-[#0b0c10] border-4 border-white dark:border-gray-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
              <i className="ph-fill ph-megaphone-simple text-4xl text-gray-800 dark:text-gray-100"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">SOCIAL</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Xây kênh & Thương hiệu cá nhân để thu hút sự chú ý (Traffic).</p>
            <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary">
              <i className="ph-bold ph-arrow-down text-3xl"></i>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="group relative flex flex-col items-center text-center bg-white dark:bg-surface-dark p-8 rounded-3xl border-2 border-primary/20 hover:border-primary shadow-xl hover:-translate-y-2 transition-all duration-300 z-10 h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Bước 2</div>
            <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-white dark:border-gray-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 text-primary-hover">
              <i className="ph-fill ph-trend-up text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">INCOME</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Chuyển đổi sự chú ý thành thu nhập (Affiliate, Sản phẩm, Dịch vụ...).</p>
            <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary">
              <i className="ph-bold ph-arrow-down text-3xl"></i>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="group relative flex flex-col items-center text-center bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition-all duration-300 z-10 h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Bước 3</div>
            <div className="w-24 h-24 rounded-full bg-gray-50 dark:bg-[#0b0c10] border-4 border-white dark:border-gray-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
              <i className="ph-fill ph-gear text-4xl text-gray-800 dark:text-gray-100"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">SYSTEM</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Tự động hoá quy trình để giải phóng thời gian & mở rộng quy mô.</p>
          </div>
        </div>
      </div>
    </section>
  );
};