import React from 'react';

export const TheCrossroads: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-16">
          Và bây giờ, bạn có <br/>
          <span className="text-primary-hover underline decoration-4 underline-offset-8 decoration-primary/30">2 Lựa chọn</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
           
           {/* Option 1: Old Way */}
           <div className="group relative p-8 rounded-3xl bg-gray-100 dark:bg-[#1a1d24] border border-gray-200 dark:border-gray-800 hover:border-red-500 transition-colors duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center border-4 border-white dark:border-[#0f1115]">
                 <i className="ph-bold ph-x text-gray-600 dark:text-gray-300 text-xl group-hover:text-red-500 transition-colors"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-500 mt-6 mb-8 uppercase">Cách cũ</h3>
              <ul className="space-y-4 text-left">
                 <li className="flex items-center gap-3 text-gray-500">
                    <i className="ph-fill ph-warning-circle"></i> Tiếp tục làm ngẫu hứng
                 </li>
                 <li className="flex items-center gap-3 text-gray-500">
                    <i className="ph-fill ph-warning-circle"></i> Đốt thời gian & Tiền bạc
                 </li>
                 <li className="flex items-center gap-3 text-gray-500">
                    <i className="ph-fill ph-warning-circle"></i> Chạy Ads không hiệu quả
                 </li>
                 <li className="flex items-center gap-3 text-gray-500">
                    <i className="ph-fill ph-warning-circle"></i> Kết quả mơ hồ
                 </li>
              </ul>
           </div>

           {/* Option 2: New Way */}
           <div className="group relative p-8 rounded-3xl bg-white dark:bg-surface-dark border-2 border-primary shadow-2xl transform md:scale-105">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-white dark:border-[#0f1115] shadow-lg">
                 <i className="ph-bold ph-check text-black text-3xl"></i>
              </div>
              <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-black text-xs font-bold rounded-bl-xl rounded-tr-xl">RECOMMENDED</div>
              
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mt-8 mb-8 uppercase">Cách mới</h3>
              <ul className="space-y-4 text-left">
                 <li className="flex items-center gap-3 text-lg font-medium text-gray-900 dark:text-white">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Hệ thống 100X Content
                 </li>
                 <li className="flex items-center gap-3 text-lg font-medium text-gray-900 dark:text-white">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Xây Brand không lộ mặt
                 </li>
                 <li className="flex items-center gap-3 text-lg font-medium text-gray-900 dark:text-white">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Nội dung đều đặn mỗi ngày
                 </li>
                 <li className="flex items-center gap-3 text-lg font-medium text-gray-900 dark:text-white">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Khách hàng tự tìm đến
                 </li>
              </ul>
           </div>

        </div>
      </div>
    </section>
  );
};