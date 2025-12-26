import React from 'react';

export const TheSystemOrigins: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#050505] text-white border-t border-gray-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Intro Header */}
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-none tracking-tight">
             Tôi tổng hợp lại <br/>
             <span className="text-gray-600">Thành quy trình chuẩn</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             Để không chỉ một mình tôi làm được, mà bất kỳ ai trong team cũng có thể nhân bản kết quả này.
           </p>
        </div>

        {/* THE 100X SYSTEM BOX (Black Monolith Style) */}
        <div className="relative max-w-5xl mx-auto mb-32">
           <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-3xl rounded-[3rem] opacity-50"></div>
           
           <div className="relative bg-[#0A0A0A] p-8 md:p-16 rounded-[2.5rem] text-center border border-gray-800 shadow-2xl overflow-hidden group">
              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-mono text-xs font-bold mb-8 uppercase tracking-widest">
                CÔNG BỐ HỆ THỐNG
              </div>
              
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white leading-[0.85]">
                100X <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600">CONTENT</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-400 uppercase tracking-[0.2em] mb-12">
                Chiến lược & Tự động hoá AI
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                    { icon: "ph-user", label: "Chỉ 1 người" },
                    { icon: "ph-device-mobile", label: "Chỉ điện thoại" },
                    { icon: "ph-magic-wand", label: "Không cần viết" },
                    { icon: "ph-check-square-offset", label: "Đúng quy trình" }
                 ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 group/item">
                       <div className="w-12 h-12 rounded-full bg-[#151515] flex items-center justify-center border border-gray-800 group-hover/item:border-primary group-hover/item:text-primary transition-colors">
                          <i className={`ph-fill ${item.icon} text-2xl`}></i>
                       </div>
                       <span className="font-bold text-gray-300 text-sm">{item.label}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* SCALING PROOF SECTION (The Revamp) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           
           {/* LEFT: The Narrative & Metrics (5 Cols) */}
           <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-1 bg-primary"></div>
                 <span className="text-primary font-bold uppercase tracking-widest text-sm">Giai đoạn kiểm chứng</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                Từ trải nghiệm cá nhân <br/>
                <span className="text-gray-500">➔ Quy trình đội ngũ</span>
              </h3>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Tôi bắt đầu chia sẻ quy trình này cho team. Đây là lúc mọi thứ được kiểm chứng, không còn là may mắn của riêng tôi.
              </p>
              
              <div className="space-y-4">
                 {/* Metric 1 */}
                 <div className="group flex items-center gap-5 p-5 bg-[#111] rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-blue-900/20 text-blue-500 flex items-center justify-center text-2xl font-black border border-blue-900/30">
                       7
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">Kênh Facebook mới</div>
                       <div className="text-sm text-gray-500">Được xây dựng trong 3 tháng qua</div>
                    </div>
                 </div>

                 {/* Metric 2 */}
                 <div className="group flex items-center gap-5 p-5 bg-[#111] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-purple-900/20 text-purple-500 flex items-center justify-center text-2xl font-black border border-purple-900/30">
                       14M+
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg group-hover:text-purple-400 transition-colors">Lượt xem tự nhiên</div>
                       <div className="text-sm text-gray-500">Không tốn 1 đồng quảng cáo</div>
                    </div>
                 </div>

                 {/* Metric 3 */}
                 <div className="group flex items-center gap-5 p-5 bg-[#111] rounded-2xl border border-gray-800 hover:border-green-500/50 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-green-900/20 text-green-500 flex items-center justify-center text-2xl font-black border border-green-900/30">
                       0đ
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg group-hover:text-green-400 transition-colors">Chi phí Ads</div>
                       <div className="text-sm text-gray-500">Tiếp cận khách hàng Free Traffic</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* RIGHT: The Viral Wall (7 Cols) - REPLACED PLACEHOLDERS */}
           <div className="lg:col-span-7 relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
              
              <div className="relative grid grid-cols-2 gap-4 md:gap-6">
                 
                 {/* Item 1: Viral Video */}
                 <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 relative group transform translate-y-8 hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                    <div className="aspect-[9/16] relative">
                        <img src="https://picsum.photos/400/700?random=50" alt="Viral Video 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 animate-pulse">
                            <i className="ph-fill ph-fire"></i> THỊNH HÀNH
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <div className="text-2xl font-black text-white">1.2M</div>
                            <div className="text-xs text-gray-300 font-mono uppercase">Lượt xem • 2 Ngày trước</div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                 <i className="ph-fill ph-play text-white text-xl"></i>
                             </div>
                        </div>
                    </div>
                 </div>

                 {/* Item 2: High Engagement Post */}
                 <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 relative group hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                    <div className="aspect-[4/5] relative">
                        <img src="https://picsum.photos/400/500?random=51" alt="Viral Post 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <div className="text-2xl font-black text-white">8.5K</div>
                            <div className="text-xs text-gray-300 font-mono uppercase">Chia sẻ • Tự nhiên</div>
                        </div>
                    </div>
                    <div className="p-4 bg-[#111]">
                        <div className="h-2 w-2/3 bg-gray-700 rounded mb-2"></div>
                        <div className="h-2 w-1/2 bg-gray-700 rounded"></div>
                    </div>
                 </div>

                 {/* Item 3: Carousel */}
                 <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 relative group transform translate-y-4 hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                    <div className="aspect-square relative">
                        <img src="https://picsum.photos/400/400?random=52" alt="Carousel" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded border border-white/20">
                            1/10
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <div className="text-2xl font-black text-white">450K</div>
                            <div className="text-xs text-gray-300 font-mono uppercase">Tiếp cận</div>
                        </div>
                    </div>
                 </div>

                 {/* Item 4: Result Notification */}
                 <div className="bg-[#111] rounded-2xl border border-gray-800 p-6 relative group transform hover:-translate-y-2 transition-transform duration-500 shadow-xl flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-900/30 text-green-500 flex items-center justify-center border border-green-500/20">
                            <i className="ph-fill ph-money text-xl"></i>
                        </div>
                        <div className="text-xs font-bold text-gray-400 uppercase">Bảng hoa hồng</div>
                    </div>
                    <div className="text-3xl font-black text-white mb-1">+ 15.2M</div>
                    <div className="text-sm text-green-500 font-bold mb-4">▲ 124% Tháng này</div>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="w-[70%] h-full bg-green-500 rounded-full"></div>
                    </div>
                 </div>
                 
                 {/* Center Badge Overlay */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-primary text-black font-black text-sm md:text-xl px-6 py-3 rounded-full shadow-[0_0_30px_rgba(212,240,119,0.6)] transform -rotate-6 border-2 border-black whitespace-nowrap animate-bounce">
                       HIỆU QUẢ!
                    </div>
                 </div>

              </div>
              
              <div className="mt-8 text-center md:text-right">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                     *Kết quả thực tế từ các thành viên team Rainmaker
                  </p>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};