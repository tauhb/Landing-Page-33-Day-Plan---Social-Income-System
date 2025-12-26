import React from 'react';

export const TheStoryPivot: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Section 61: The Opportunity */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs uppercase tracking-widest mb-6">
            Phát hiện quan trọng
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-10 leading-tight">
            Tôi nhận ra đây là <br/>
            <span className="text-primary-hover underline decoration-4 underline-offset-4 decoration-primary/30">Cơ hội lớn</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
             {[
               "Không cần quay video", "Không cần lộ mặt", "Không cần đội ngũ", 
               "Không cần nhiều follow", "Xây nhiều kênh nhanh", "Dùng AI hỗ trợ", "Chỉ cần điện thoại"
             ].map((item, idx) => (
               <div key={idx} className="px-5 py-3 rounded-xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-800 flex items-center gap-2 shadow-sm hover:border-primary/50 transition-colors">
                  <i className="ph-fill ph-check-circle text-primary text-xl"></i>
                  <span className="font-bold text-gray-700 dark:text-gray-200">{item}</span>
               </div>
             ))}
          </div>
          <p className="mt-8 text-lg text-gray-500 italic">
            "Đây không phải cơ hội ăn xổi. Đây là hướng đi <span className="text-gray-900 dark:text-white font-bold not-italic">có thể nhân bản</span>."
          </p>
        </div>

        {/* Section 62-64: The Rise and Fall */}
        <div className="relative">
           {/* Connecting Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-gray-200 dark:via-gray-700 to-primary -translate-x-1/2 hidden md:block"></div>

           {/* Step 1: Success */}
           <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative z-10">
              <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12 mb-8 md:mb-0">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Khởi đầu thuận lợi</h3>
                 <p className="text-gray-500">Tôi thử nghiệm trên Facebook cá nhân</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-green-500 border-4 border-white dark:border-black flex items-center justify-center text-white text-2xl shadow-lg font-bold">1</div>
              <div className="w-full md:w-5/12 pl-0 md:pl-12">
                 <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-transform text-center md:text-left">
                    <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Kết quả</div>
                    <div className="text-4xl md:text-5xl font-black mb-2">17 TRIỆU</div>
                    <div className="font-bold text-lg">Lượt xem (Views)</div>
                 </div>
              </div>
           </div>

           {/* Step 2: The Crash (Simulated FB Restriction) */}
           <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative z-10">
              <div className="w-full md:w-5/12 order-3 md:order-1 pr-0 md:pr-12 text-center md:text-right">
                 <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-end text-red-600 dark:text-red-500">
                       <i className="ph-fill ph-warning-circle text-2xl"></i>
                       <span className="font-bold text-lg">Account Restricted</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Vi phạm chính sách do vài bài đăng... <br/>
                      <span className="font-bold">Mà tôi không hề biết trước.</span>
                    </p>
                 </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-red-500 border-4 border-white dark:border-black flex items-center justify-center text-white text-2xl shadow-lg font-bold order-2 md:order-2 my-6 md:my-0">
                 <i className="ph-bold ph-x"></i>
              </div>
              <div className="w-full md:w-5/12 order-1 md:order-3 pl-0 md:pl-12 text-center md:text-left mb-8 md:mb-0">
                 <h3 className="text-2xl font-bold text-red-600 dark:text-red-500 mb-2">Biến cố ập đến</h3>
                 <p className="text-gray-500">Kênh bị hạn chế. Mọi công sức có nguy cơ đổ sông đổ bể.</p>
              </div>
           </div>

           {/* Step 3: The Pivot */}
           <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12 mb-8 md:mb-0">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quyết định quan trọng</h3>
                 <p className="text-gray-500">Không than vãn. Không đổ lỗi.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary border-4 border-white dark:border-black flex items-center justify-center text-black text-2xl shadow-lg font-bold">
                 <i className="ph-bold ph-arrow-u-right-up"></i>
              </div>
              <div className="w-full md:w-5/12 pl-0 md:pl-12">
                 <div className="p-6 bg-background-light dark:bg-surface-dark border-l-4 border-primary rounded-r-xl shadow-sm">
                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      "Tôi chọn xây lại - nhưng làm khác đi."
                    </p>
                    <div className="flex items-center gap-2 text-primary-hover font-bold">
                       <span>Xây dựng hệ thống</span>
                       <i className="ph-bold ph-arrow-right"></i>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};