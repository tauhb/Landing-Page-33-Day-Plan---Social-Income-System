import React from 'react';

export const ProcessStep5_Example: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-[#0b0c10] to-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Step 5: Automation */}
        <div>
           <div className="flex flex-col items-center text-center mb-16">
              <div className="w-20 h-20 rounded-2xl bg-primary text-black flex items-center justify-center text-4xl font-black shadow-[0_0_40px_rgba(212,240,119,0.3)] mb-6">#5</div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Tự động hoá</h2>
              <p className="text-xl text-gray-400">Thiết lập 1 lần - Chạy mãi mãi.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Desktop Auto */}
              <div className="bg-[#1a1d24] p-8 rounded-3xl border border-gray-800 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full group-hover:bg-green-500/20 transition-colors"></div>
                 <div className="flex items-center gap-3 mb-8">
                    <i className="ph-fill ph-desktop text-2xl text-gray-400"></i>
                    <h3 className="text-xl font-bold uppercase">Trên máy tính</h3>
                 </div>
                 <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded bg-green-900/30 text-green-500 flex items-center justify-center border border-green-500/30"><i className="ph-fill ph-file-csv"></i></div>
                       <span className="text-gray-300">Nhập ý tưởng vào Google Sheets</span>
                    </div>
                    <div className="w-0.5 h-6 bg-gray-700 ml-4"></div>
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded bg-purple-900/30 text-purple-500 flex items-center justify-center border border-purple-500/30"><i className="ph-fill ph-robot"></i></div>
                       <span className="text-gray-300">AI viết & Tạo ảnh tự động</span>
                    </div>
                    <div className="w-0.5 h-6 bg-gray-700 ml-4"></div>
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-500/30"><i className="ph-fill ph-calendar-check"></i></div>
                       <span className="text-gray-300">Hệ thống tự động đăng</span>
                    </div>
                 </div>
              </div>

              {/* Mobile Auto */}
              <div className="bg-[#1a1d24] p-8 rounded-3xl border border-gray-800 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors"></div>
                 <div className="flex items-center gap-3 mb-8">
                    <i className="ph-fill ph-device-mobile text-2xl text-gray-400"></i>
                    <h3 className="text-xl font-bold uppercase">Trên điện thoại</h3>
                 </div>
                 <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                       <i className="ph-bold ph-check text-primary mt-1"></i>
                       Cài đặt chủ đề & Khách hàng mục tiêu
                    </li>
                    <li className="flex items-start gap-3">
                       <i className="ph-bold ph-check text-primary mt-1"></i>
                       AI tự động gợi ý ý tưởng mỗi ngày
                    </li>
                    <li className="flex items-start gap-3">
                       <i className="ph-bold ph-check text-primary mt-1"></i>
                       Bấm 1 nút: Có bài viết + Ảnh/Carousel
                    </li>
                 </ul>
                 <div className="mt-8 p-4 bg-black rounded-xl border border-gray-700 text-center text-sm font-mono text-primary animate-pulse">
                    > Chế độ Tự động: BẬT
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};