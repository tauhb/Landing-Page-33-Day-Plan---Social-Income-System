import React from 'react';

export const BarrierToEntry: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* BLOCK 1: THE OBJECTION & PIVOT */}
        <div className="relative bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-gray-700 transition-colors">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: The Fear */}
              <div>
                 <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                   "Nhưng tôi không phải chuyên gia?"
                 </h2>
                 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                   Tôi không có kiến thức sâu ở lĩnh vực nào cả, tôi hoàn toàn mới?
                 </p>
                 
                 <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-red-900/20 border border-red-900/50 flex items-center justify-center text-red-500">
                       <i className="ph-bold ph-x"></i>
                    </div>
                    <span className="text-gray-500 line-through decoration-red-500 decoration-2">Xây thương hiệu chuyên gia</span>
                 </div>
              </div>

              {/* Right: The New Choice */}
              <div className="relative">
                 {/* Neon Border Box */}
                 <div className="absolute inset-0 border-2 border-primary rounded-2xl blur-[2px] opacity-50"></div>
                 <div className="relative bg-[#0A0A0A] border border-primary rounded-2xl p-8 shadow-[0_0_30px_rgba(212,240,119,0.1)]">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                       Lựa chọn mới
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase leading-tight mb-4">
                       Xây kênh kiếm tiền <br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Không lộ mặt</span>
                    </h3>
                    <div className="flex items-start gap-3">
                       <i className="ph-fill ph-check-circle text-primary text-xl mt-0.5"></i>
                       <span className="text-gray-400 text-sm font-medium">Bạn không cần lựa chọn, AI làm thay bạn</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* BLOCK 2: WHO CAN DO IT */}
        <div className="text-center">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-16">
             Ai cũng có thể làm
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "1", text: "1 Kỹ năng / Trải nghiệm" },
                { num: "2", text: "1 Góc nhìn" },
                { num: "3", text: "Điện thoại + AI" },
                { num: "4", text: "30-60 Phút/Ngày" }
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
                   <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-gray-700 flex items-center justify-center text-xl font-black text-gray-500 group-hover:text-white group-hover:border-white transition-all shadow-lg">
                      {item.num}
                   </div>
                   <p className="font-bold text-gray-300 text-lg group-hover:text-white text-center">
                      {item.text}
                   </p>
                </div>
              ))}
           </div>
           
           <p className="mt-12 text-lg text-gray-400">
             Chỉ cần bắt đầu. <span className="text-white font-bold">Hệ thống lo phần còn lại.</span>
           </p>
        </div>

        {/* BLOCK 3: TIME COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-gray-800">
           
           {/* Left: The Old Way */}
           <div className="bg-[#0e1015] p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
              <h3 className="text-2xl font-black text-gray-500 uppercase mb-8">30-60 Phút thường ngày</h3>
              
              <ul className="space-y-6 mb-12">
                 <li className="flex items-center gap-4 text-gray-500 font-medium text-lg">
                    <i className="ph-fill ph-tiktok-logo text-2xl"></i> Xem TikTok
                 </li>
                 <li className="flex items-center gap-4 text-gray-500 font-medium text-lg">
                    <i className="ph-fill ph-newspaper text-2xl"></i> Đọc tin tức drama
                 </li>
                 <li className="flex items-center gap-4 text-gray-500 font-medium text-lg">
                    <i className="ph-fill ph-globe text-2xl"></i> Lướt web vô thức
                 </li>
              </ul>
              
              <div className="pt-8 border-t border-gray-800">
                 <p className="text-red-500 font-bold text-lg mb-1">Thu nhập không tăng.</p>
                 <p className="text-red-500 font-bold text-lg">Sự nghiệp đứng yên.</p>
              </div>
           </div>

           {/* Right: The New Way */}
           <div className="relative bg-gradient-to-b from-[#152005] to-[#050505] p-10 md:p-16 flex flex-col justify-center overflow-hidden">
              {/* Green Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

              <h3 className="text-2xl font-black text-primary uppercase mb-8 relative z-10">30-60 Phút xây kênh</h3>
              
              <div className="mb-12 relative z-10">
                 <h4 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                   Tại sao không dùng nó để <br/>
                   Xây tài sản số?
                 </h4>
              </div>

              <div className="relative z-10">
                 <button className="bg-primary hover:bg-primary-hover text-black font-black text-lg px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(212,240,119,0.4)] hover:shadow-[0_0_30px_rgba(212,240,119,0.6)] transform hover:scale-105 transition-all duration-300">
                   Tôi muốn bắt đầu
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};