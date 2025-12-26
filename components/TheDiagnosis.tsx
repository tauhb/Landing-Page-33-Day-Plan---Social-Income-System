import React from 'react';

export const TheDiagnosis: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Section 72: Stuck? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           <div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-8 leading-tight">
                Nếu bạn đang <br/>
                <span className="text-red-600 dark:text-red-500">Bế tắc...</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Thì đây có thể là lý do:
              </p>
              
              <ul className="space-y-4">
                 {[
                   "Làm content mỗi ngày nhưng thiếu chiến lược",
                   "Chạy quảng cáo đốt tiền không hiệu quả",
                   "Content thiếu sức hút, đăng 'cho có'",
                   "Ngại lộ mặt, không dám xây thương hiệu",
                   "Kiệt sức vì phải nghĩ ý tưởng mỗi ngày"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                      <i className="ph-bold ph-x text-red-500 text-xl mt-0.5"></i>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
              
              <div className="mt-8 pl-4 border-l-4 border-red-500">
                 <p className="text-2xl font-black text-gray-900 dark:text-white">
                   👉 Và vẫn không ra đơn.
                 </p>
              </div>
           </div>

           {/* Section 75: The Bottleneck Visual */}
           <div className="flex flex-col justify-center">
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-widest rounded-bl-xl">
                   Nút thắt thật sự
                 </div>
                 
                 <div className="flex flex-col items-center gap-6 mt-8">
                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-3xl animate-bounce">
                       <i className="ph-fill ph-lightbulb text-gray-400"></i>
                    </div>
                    <div className="text-center space-y-2">
                       <p className="font-bold text-gray-500">Nghĩ</p>
                       <i className="ph-bold ph-arrow-down text-gray-300"></i>
                       <p className="font-bold text-gray-500">Viết</p>
                       <i className="ph-bold ph-arrow-down text-gray-300"></i>
                       <p className="font-bold text-gray-500">Đăng</p>
                       <i className="ph-bold ph-arrow-down text-gray-300"></i>
                       <p className="font-black text-red-500 uppercase">Cạn ý tưởng</p>
                    </div>
                 </div>
                 
                 <div className="mt-8 text-center bg-gray-50 dark:bg-black/20 p-4 rounded-xl">
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      "Tôi không thiếu ý tưởng." <br/>
                      <span className="text-primary-hover">"Tôi thiếu hệ thống nhân bản."</span>
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 73: The Solution Reveal */}
        <div className="text-center mb-0">
           <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Giải pháp được gọi tên</p>
           <div className="inline-block relative group cursor-pointer">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-green-400 to-primary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
              <div className="relative bg-black text-white px-8 md:px-16 py-8 md:py-12 rounded-2xl border border-gray-800">
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">
                   Triển khai chiến lược <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">100X CONTENT</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl">
                   Xây kênh & Thương hiệu cá nhân <span className="text-white font-bold underline decoration-primary decoration-2">không cần lộ mặt</span>.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};