import React from 'react';

export const TheNewReality: React.FC = () => {
  const notNeeded = [
    "Nổi tiếng", "Ngoại hình đẹp", "Quá sáng tạo", "Lộ mặt", "Kỹ năng cao siêu", "Bỏ công việc hiện tại", "Cạnh tranh gay gắt"
  ];

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-t from-background-light to-white dark:from-background-dark dark:to-[#0b0c10]">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-4">
          Tại sao phải bắt đầu từ <br/>
          <span className="text-primary-hover">Xây kênh & Thương hiệu</span>?
        </h2>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 uppercase border-b border-gray-100 dark:border-gray-700 pb-4">Sự thật quan trọng</h3>
              <ul className="space-y-4">
                 {notNeeded.map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <i className="ph-bold ph-check text-green-600 dark:text-green-400 text-xs"></i>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">Không cần <span className="font-bold text-gray-800 dark:text-white">{item}</span></span>
                   </li>
                 ))}
              </ul>
           </div>
           
           <div className="flex flex-col justify-center items-center p-8 bg-primary/10 rounded-2xl border border-primary/20">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30 animate-bounce">
                 <i className="ph-fill ph-currency-dollar text-4xl text-black"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase leading-tight mb-2">
                Tiền là hệ quả
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Khi bạn sở hữu Kênh & Thương hiệu phát triển.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};