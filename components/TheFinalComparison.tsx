import React from 'react';

export const TheFinalComparison: React.FC = () => {
  const deliverables = [
    { title: "Hành trình 33 ngày", sub: "Đồng hành Xây kênh & Kiếm tiền" },
    { title: "5 Buổi Đào tạo", sub: "Trực tiếp qua Zoom" },
    { title: "28 Buổi Kèm cặp", sub: "Thực chiến mỗi ngày" },
    { title: "100 Ngày Support 1:1", sub: "Hỗ trợ kỹ thuật & Tư duy" },
    { title: "Khoá học Mastery", sub: "Trọn bộ video 100X Social" },
    { title: "Trợ lý AI", sub: "Viết bài & Tạo ảnh tự động" },
    { title: "ContentFlow", sub: "Phần mềm quản lý nội dung" },
    { title: "100 Viral Post", sub: "Kho mẫu bài viết có sẵn" },
    { title: "Canva Template", sub: "Thiết kế chuyên nghiệp" },
    { title: "Affiliate Partner", sub: "Cơ hội kiếm tiền ngay" },
  ];

  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto">
        
        {/* Section 127 & 128: Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-24">
           
           {/* The Hard Way */}
           <div className="bg-gray-200 dark:bg-gray-800 p-10 rounded-t-3xl md:rounded-3xl opacity-70">
              <h3 className="text-xl font-bold text-gray-500 uppercase mb-8 flex items-center gap-2">
                 <i className="ph-bold ph-x-circle"></i> Cách vất vả trước đây
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
                 <li className="flex items-center gap-3"><i className="ph-bold ph-minus text-gray-400"></i> Nghĩ ý tưởng mỗi ngày</li>
                 <li className="flex items-center gap-3"><i className="ph-bold ph-minus text-gray-400"></i> Viết bài thủ công</li>
                 <li className="flex items-center gap-3"><i className="ph-bold ph-minus text-gray-400"></i> Lên kịch bản video, quay, dựng</li>
                 <li className="flex items-center gap-3"><i className="ph-bold ph-minus text-gray-400"></i> Thiết kế hình ảnh tốn giờ</li>
                 <li className="flex items-center gap-3"><i className="ph-bold ph-minus text-gray-400"></i> Lên lịch đăng đa nền tảng</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700 font-bold text-gray-500 uppercase">
                 👉 Rất nhiều công sức
              </div>
           </div>

           {/* The 33 Days Way */}
           <div className="bg-white dark:bg-surface-dark p-10 rounded-b-3xl md:rounded-3xl border-2 border-primary shadow-2xl relative z-10">
              <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-black text-xs font-bold rounded-bl-xl">THE SOLUTION</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase mb-8 flex items-center gap-2">
                 <i className="ph-fill ph-check-circle text-primary"></i> Chương trình 33 Ngày
              </h3>
              <ul className="space-y-4 text-gray-800 dark:text-gray-200 font-bold text-lg">
                 <li className="flex items-center gap-3"><i className="ph-fill ph-check text-primary"></i> Không phải nghĩ đăng gì (Có quy trình)</li>
                 <li className="flex items-center gap-3"><i className="ph-fill ph-check text-primary"></i> Không làm một mình (Có Mentor)</li>
                 <li className="flex items-center gap-3"><i className="ph-fill ph-check text-primary"></i> Không thử sai trong vô định</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 font-black text-primary uppercase text-xl">
                 👉 THOÁT KHỎI TẤT CẢ
              </div>
           </div>

        </div>

        {/* Section 129: REVAMPED RECAP VALUE */}
        <div className="max-w-4xl mx-auto">
           <div className="relative bg-[#08090C] rounded-[2.5rem] p-8 md:p-12 border border-gray-800 overflow-hidden shadow-2xl">
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-800 via-primary to-gray-800"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="text-center mb-10">
                 <h3 className="text-gray-400 font-bold uppercase tracking-[0.2em] mb-4 text-sm">Nhắc lại những gì bạn nhận được</h3>
                 <div className="w-16 h-1 bg-gray-800 mx-auto rounded-full"></div>
              </div>

              {/* List Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                 {deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-[#13151A] border border-gray-800 hover:border-gray-600 transition-colors group">
                       <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                          <i className="ph-bold ph-check"></i>
                       </div>
                       <div>
                          <div className="font-bold text-white text-lg leading-tight group-hover:text-primary-hover transition-colors">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{item.sub}</div>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Pricing & Offer Section */}
              <div className="text-center relative">
                 <div className="inline-block relative mb-2">
                    <span className="text-3xl md:text-5xl font-black text-gray-600 line-through decoration-red-500 decoration-4">45.000.000 VNĐ</span>
                    <span className="absolute -top-4 -right-8 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded rotate-12">GIÁ GỐC</span>
                 </div>
                 
                 <div className="my-8 p-6 bg-primary/10 border-2 border-primary/30 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-2xl md:text-4xl font-black text-primary uppercase mb-2">
                       MIỄN PHÍ HỌC PHÍ & PHÍ ĐÀO TẠO
                    </h3>
                    <p className="text-gray-400 font-medium mb-4">
                       Chỉ cần đóng <span className="text-white font-bold underline decoration-primary decoration-2">phụ phí tổ chức</span> (Tool, Vận hành, Support):
                    </p>
                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                       1.950.000<span className="text-2xl align-top text-gray-500">đ</span>
                    </div>
                 </div>

                 {/* Updated CTA Button */}
                 <div className="relative z-10">
                    <button className="w-full md:w-auto bg-primary hover:bg-white text-black px-8 py-4 rounded-2xl shadow-[0_0_40px_rgba(212,240,119,0.4)] transform hover:scale-[1.02] transition-all duration-300 group flex flex-col items-center justify-center gap-1 mx-auto">
                       <span className="text-xl md:text-2xl font-black uppercase flex items-center gap-2">
                          ĐĂNG KÝ GHI DANH MIỄN PHÍ <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                       </span>
                       <span className="text-[10px] md:text-xs font-bold opacity-80 flex items-center gap-1 bg-black/10 px-3 py-1 rounded-full mt-1">
                          <i className="ph-bold ph-check-square"></i>
                          YES! Tôi muốn ghi danh và đồng ý với phụ phí tổ chức 1.950.000đ
                       </span>
                    </button>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </section>
  );
};