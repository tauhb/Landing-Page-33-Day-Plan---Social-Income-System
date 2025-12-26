import React from 'react';

export const TheTotalValue: React.FC = () => {
  const items = [
    { name: "Hành Trình 33 Ngày Đồng Hành", value: "41.000.000đ", highlight: true },
    { name: "5 Buổi Zoom Đào Tạo Trực Tiếp", value: "7.000.000đ" },
    { name: "28 Buổi Zoom Đồng Hành (1H/Buổi)", value: "15.000.000đ" },
    { name: "100 Ngày Hỗ Trợ 1:1", value: "5.000.000đ" },
    { name: "Khoá học 100X Social Mastery", value: "5.000.000đ" },
    { name: "Kho trợ lý AI viết bài & làm ảnh", value: "4.000.000đ" },
    { name: "Phần mềm Content Flow", value: "3.000.000đ" },
    { name: "100 Bài Viết Viral Mẫu", value: "1.000.000đ" },
    { name: "Bộ Canva Template Viral", value: "1.000.000đ" },
    { name: "Trở thành RMK Partner Affiliate", value: "Vô giá" },
  ];

  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl mx-auto">
        
        {/* Receipt Visual */}
        <div className="bg-white dark:bg-white text-gray-900 p-8 md:p-12 shadow-2xl relative font-mono text-sm md:text-base rotate-1 transform hover:rotate-0 transition-transform duration-500">
           {/* Receipt Jagged Top */}
           <div className="absolute top-0 left-0 right-0 h-4 bg-background-light dark:bg-background-dark" style={{clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'}}></div>
           
           <div className="text-center border-b-2 border-dashed border-gray-300 pb-8 mb-8 mt-6">
              <h2 className="text-3xl font-black uppercase tracking-widest mb-2">TỔNG HỢP GIÁ TRỊ</h2>
              <p className="text-gray-500">Những gì bạn nhận được trong chương trình</p>
           </div>
           
           <ul className="space-y-4 mb-8">
              {items.map((item, idx) => (
                <li key={idx} className={`flex justify-between items-start ${item.highlight ? 'font-bold text-lg border-b border-gray-200 pb-2 mb-2' : ''}`}>
                   <span className="w-2/3">{item.name}</span>
                   <span className="w-1/3 text-right">{item.value}</span>
                </li>
              ))}
           </ul>
           
           <div className="border-t-4 border-black pt-6 mb-8">
              <div className="flex justify-between items-end mb-2">
                 <span className="font-bold text-lg">TỔNG GIÁ TRỊ THỰC:</span>
                 <span className="font-black text-2xl md:text-3xl">41.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between items-end text-gray-400">
                 <span className="font-medium">Giá thị trường:</span>
                 <span className="line-through decoration-2 decoration-red-500">45.000.000 VNĐ</span>
              </div>
           </div>

           <div className="bg-primary/20 p-6 text-center border-2 border-primary border-dashed rounded relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              
              <h3 className="text-3xl md:text-4xl font-black text-red-600 uppercase mb-1 leading-none transform -rotate-1">
                MIỄN PHÍ HỌC PHÍ
              </h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 line-through decoration-red-500">
                (Giá gốc: 45.000.000đ)
              </p>
              
              <div className="bg-white/80 p-4 rounded-xl border border-primary/30 shadow-sm">
                 <p className="text-sm font-bold text-gray-800 mb-1">
                   Bạn chỉ cần đóng <span className="underline decoration-primary decoration-2">phụ phí tổ chức</span>:
                 </p>
                 <div className="text-4xl md:text-5xl font-black text-gray-900 leading-none tracking-tight">
                    1.950.000<span className="text-2xl align-top">đ</span>
                 </div>
              </div>
           </div>
           
           {/* Receipt Jagged Bottom */}
           <div className="absolute bottom-0 left-0 right-0 h-4 bg-background-light dark:bg-background-dark" style={{clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}></div>
        </div>

        <div className="mt-12 text-center px-4">
           <button className="w-full md:w-auto bg-primary hover:bg-primary-hover text-black font-black text-xl md:text-2xl px-8 md:px-12 py-5 rounded-full shadow-[0_0_40px_rgba(212,240,119,0.5)] transform hover:scale-105 transition-transform duration-300 animate-pulse uppercase">
              ĐĂNG KÝ GHI DANH MIỄN PHÍ
           </button>
           
           <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-2 text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">
              <div className="w-5 h-5 rounded-md border-2 border-primary flex items-center justify-center bg-primary text-black flex-shrink-0">
                <i className="ph-bold ph-check text-xs"></i>
              </div>
              <p>YES! Tôi muốn ghi danh và đồng ý với phụ phí tổ chức 1.950.000đ</p>
           </div>
        </div>

      </div>
    </section>
  );
};