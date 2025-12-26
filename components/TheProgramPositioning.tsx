import React from 'react';

export const TheProgramPositioning: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-white dark:bg-[#0b0c10] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Section 102: New Path */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-6">
            Đây là lúc cần <br/>
            <span className="text-primary-hover">Một con đường khác</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Không phải thêm kiến thức rác. Không phải xem cho vui.
          </p>
        </div>

        {/* Section 104 & 105: Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           {/* Course Card */}
           <div className="p-8 rounded-3xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-800 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-center mb-8">
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Cách thông thường</span>
                 <h3 className="text-2xl font-black text-gray-700 dark:text-gray-300 mt-2">KHOÁ HỌC ONLINE</h3>
              </div>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <i className="ph-bold ph-x text-red-500"></i> Học lý thuyết suông
                 </li>
                 <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <i className="ph-bold ph-x text-red-500"></i> Tự bơi một mình
                 </li>
                 <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <i className="ph-bold ph-x text-red-500"></i> Không ai sửa sai
                 </li>
                 <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <i className="ph-bold ph-x text-red-500"></i> Dễ bỏ cuộc giữa chừng
                 </li>
              </ul>
           </div>

           {/* Journey Card (Highlighted) */}
           <div className="p-8 rounded-3xl bg-black text-white border-2 border-primary shadow-2xl relative transform md:scale-105">
              <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-black text-xs font-bold rounded-bl-xl">THE NEW WAY</div>
              <div className="text-center mb-8">
                 <span className="text-sm font-bold text-primary uppercase tracking-widest">Giải pháp của chúng tôi</span>
                 <h3 className="text-2xl font-black text-white mt-2">HÀNH TRÌNH ĐỒNG HÀNH</h3>
              </div>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-white text-lg font-medium">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Làm thật - Ra kết quả thật
                 </li>
                 <li className="flex items-center gap-3 text-white text-lg font-medium">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Có người dẫn đường (Mentor)
                 </li>
                 <li className="flex items-center gap-3 text-white text-lg font-medium">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Sửa lỗi trực tiếp
                 </li>
                 <li className="flex items-center gap-3 text-white text-lg font-medium">
                    <i className="ph-fill ph-check-circle text-primary text-xl"></i> 
                    Giữ nhịp độ mỗi ngày
                 </li>
              </ul>
           </div>
        </div>

        {/* Section 106 & 107: The Promise */}
        <div className="max-w-3xl mx-auto text-center border-t border-b border-gray-200 dark:border-gray-800 py-12">
           <i className="ph-fill ph-handshake text-4xl text-gray-400 mb-6"></i>
           <h3 className="text-2xl font-serif italic text-gray-800 dark:text-gray-200 mb-6">
             "33 ngày này không dạy bạn mơ mộng hão huyền. <br/>
             Chúng tôi tập trung xây dựng <span className="text-gray-900 dark:text-white font-black not-italic border-b-2 border-primary">NỀN MÓNG TÀI SẢN THỰC SỰ</span>."
           </h3>
           <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
             Quan trọng nhất: BẠN KHÔNG ĐI MỘT MÌNH.
           </p>
        </div>

      </div>
    </section>
  );
};