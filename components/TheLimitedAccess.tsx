import React from 'react';

export const TheLimitedAccess: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-white dark:bg-[#0b0c10] border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Section 124: The Fee */}
        <div className="text-center mb-20">
           <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-4">
             Miễn phí học phí & Đào tạo
           </h2>
           <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 font-medium">
             Chỉ cần đóng <span className="font-bold text-gray-900 dark:text-white underline decoration-primary decoration-4 underline-offset-4">phụ phí tổ chức</span>
           </h3>

           <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-green-400 to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
              <div className="relative bg-white dark:bg-surface-dark px-10 py-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl">
                 <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 tracking-tighter">
                    1.950.000<span className="text-3xl align-top text-gray-500">đ</span>
                 </div>
              </div>
           </div>

           <p className="mt-8 text-sm md:text-base text-gray-500 max-w-xl mx-auto italic">
             "Đây không phải giá bán khoá học. Đây là phụ phí để tổ chức, vận hành, hỗ trợ và đồng hành thực tế cùng bạn."
           </p>
        </div>

        {/* Section 125 & 126: Scarcity & Deadline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Limit */}
           <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-500 text-3xl mb-4 animate-bounce">
                 <i className="ph-fill ph-users-three"></i>
              </div>
              <h4 className="text-2xl font-black text-red-600 dark:text-red-500 uppercase mb-2">Giới hạn 20 người</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Cho lần mở cửa ghi danh đăng ký này.
              </p>
              <div className="inline-block px-3 py-1 bg-red-200 dark:bg-red-900/50 rounded text-red-700 dark:text-red-300 text-xs font-bold uppercase">
                 Chúng tôi cũng không thường xuyên mở cửa đăng ký. Hãy nhanh tay.
              </div>
           </div>

           {/* Deadline */}
           <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-500 text-3xl mb-4">
                 <i className="ph-fill ph-clock-countdown"></i>
              </div>
              <h4 className="text-2xl font-black text-orange-600 dark:text-orange-500 uppercase mb-2">Điền Thông Tin Trước 23h30 Hôm Nay</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Sau thời điểm này có thể cửa đăng ký ghi danh chương trình sẽ đóng.
              </p>
              <div className="inline-block px-3 py-1 bg-orange-200 dark:bg-orange-900/50 rounded text-orange-700 dark:text-orange-300 text-xs font-bold uppercase">
                 Không nhận thêm
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};