import React from 'react';

export const TheDeliverables: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#080808] border-t border-gray-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Hệ thống toàn diện</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
             Mổ xẻ chi tiết <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Vũ khí hạng nặng</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
             Đây là chi tiết những gì bạn sẽ được trang bị trong 33 ngày tới. <br/>
             Không chỉ là kiến thức, đó là <span className="text-white font-bold">Môi trường, Công cụ và Tài nguyên</span>.
           </p>
        </div>

        {/* =========================================================================
            PILLAR 1: THE JOURNEY (Timeline / Human & Environment)
            ========================================================================= */}
        <div className="mb-24">
           <div className="flex items-end gap-4 mb-8 border-b border-gray-800 pb-4">
              <h3 className="text-2xl font-black text-white uppercase">01. Lộ trình & Con người</h3>
              <span className="text-sm text-gray-500 font-mono mb-1 hidden md:block">// THE JOURNEY</span>
           </div>

           <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gray-800 to-gray-800 md:-translate-x-1/2"></div>

              {/* Item 1: Training */}
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-12 group">
                 <div className="pl-20 md:pl-0 md:w-[45%] md:text-right order-1">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">5 Buổi Đào Tạo Chuyên Sâu</h4>
                    <p className="text-gray-400 text-sm">Trực tiếp qua Zoom. Chuyển giao tư duy, chiến lược và bản đồ tổng thể. Không lý thuyết suông.</p>
                 </div>
                 
                 <div className="absolute left-8 md:left-1/2 -translate-x-[9px] md:-translate-x-1/2 w-5 h-5 rounded-full bg-black border-4 border-primary shadow-[0_0_15px_rgba(212,240,119,0.5)] z-20 order-2"></div>
                 
                 <div className="hidden md:block md:w-[45%] order-3 text-left pl-12 opacity-50 font-mono text-xs text-gray-600 uppercase">
                    Phase 1: Knowledge Upload
                 </div>
              </div>

              {/* Item 2: Coaching (Highlight) */}
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-12 group">
                 <div className="hidden md:block md:w-[45%] text-right pr-12 opacity-50 font-mono text-xs text-gray-600 uppercase order-1">
                    Phase 2: Deep Execution
                 </div>

                 <div className="absolute left-8 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(212,240,119,0.8)] z-20 order-2 animate-pulse"></div>
                 
                 <div className="pl-20 md:pl-0 md:w-[45%] order-3">
                    <div className="inline-block px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded mb-2">QUAN TRỌNG NHẤT</div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">28 Buổi Kèm Cặp Thực Chiến</h4>
                    <p className="text-gray-400 text-sm">
                       Cầm tay chỉ việc mỗi ngày. Sửa bài, chỉnh lỗi, ép kỷ luật. <br/>
                       <span className="text-white font-medium">Bạn làm - Chúng tôi sửa - Bạn ra kết quả.</span>
                    </p>
                 </div>
              </div>

              {/* Item 3: Support */}
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between group">
                 <div className="pl-20 md:pl-0 md:w-[45%] md:text-right order-1">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">100 Ngày Support 1:1</h4>
                    <p className="text-gray-400 text-sm">Không bỏ rơi sau khoá học. Team kỹ thuật luôn túc trực để giải quyết mọi vấn đề phát sinh.</p>
                 </div>
                 
                 <div className="absolute left-8 md:left-1/2 -translate-x-[9px] md:-translate-x-1/2 w-5 h-5 rounded-full bg-black border-4 border-gray-600 group-hover:border-primary transition-colors z-20 order-2"></div>
                 
                 <div className="hidden md:block md:w-[45%] order-3 text-left pl-12 opacity-50 font-mono text-xs text-gray-600 uppercase">
                    Phase 3: Long-term Safety
                 </div>
              </div>
           </div>
        </div>

        {/* =========================================================================
            PILLAR 2: THE TECH STACK (Bento Grid / Automation)
            ========================================================================= */}
        <div className="mb-24">
           <div className="flex items-end gap-4 mb-8 border-b border-gray-800 pb-4">
              <h3 className="text-2xl font-black text-white uppercase">02. Công nghệ & Đòn bẩy</h3>
              <span className="text-sm text-gray-500 font-mono mb-1 hidden md:block">// THE TECH STACK</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Main Software Box (7 Cols) */}
              <div className="md:col-span-7 bg-[#111] rounded-3xl border border-gray-800 p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <i className="ph-fill ph-kanban text-8xl text-blue-500"></i>
                 </div>
                 <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-900/20 text-blue-500 flex items-center justify-center text-2xl mb-6">
                       <i className="ph-fill ph-app-window"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">ContentFlow Software</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                       Phần mềm quản lý quy trình sản xuất nội dung độc quyền. Giúp bạn quản lý ý tưởng, lịch đăng bài và tiến độ team (hoặc cá nhân) một cách khoa học.
                    </p>
                    {/* Mock UI */}
                    <div className="w-full h-32 bg-[#1A1A1A] rounded-xl border border-gray-700 p-3 flex gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                       <div className="w-1/3 h-full bg-gray-800 rounded animate-pulse"></div>
                       <div className="w-1/3 h-full bg-gray-800 rounded"></div>
                       <div className="w-1/3 h-full bg-gray-800 rounded"></div>
                    </div>
                 </div>
              </div>

              {/* Stacked Right Boxes (5 Cols) */}
              <div className="md:col-span-5 flex flex-col gap-6">
                 
                 {/* AI Box */}
                 <div className="flex-1 bg-[#111] rounded-3xl border border-gray-800 p-6 flex items-center gap-6 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-purple-900/20 text-purple-500 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform">
                       <i className="ph-fill ph-sparkle"></i>
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white mb-1">Trợ Lý AI Tự Động</h4>
                       <p className="text-xs text-gray-500">
                          Viết kịch bản, tạo hình ảnh minh hoạ chỉ với 1 click. Không cần thuê Designer/Writer.
                       </p>
                    </div>
                 </div>

                 {/* Money Box */}
                 <div className="flex-1 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-6 flex items-center gap-6 hover:border-green-500/50 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 rounded-2xl bg-green-900/20 text-green-500 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform relative z-10">
                       <i className="ph-fill ph-money"></i>
                    </div>
                    <div className="relative z-10">
                       <h4 className="text-lg font-bold text-white mb-1">Affiliate Partner</h4>
                       <p className="text-xs text-gray-500">
                          Cơ hội kiếm tiền ngay (Monetization) với mức hoa hồng hấp dẫn dành riêng cho học viên.
                       </p>
                    </div>
                 </div>

              </div>
           </div>
        </div>

        {/* =========================================================================
            PILLAR 3: THE ASSETS (Library Cards / Resources)
            ========================================================================= */}
        <div>
           <div className="flex items-end gap-4 mb-8 border-b border-gray-800 pb-4">
              <h3 className="text-2xl font-black text-white uppercase">03. Tài Nguyên Có Sẵn</h3>
              <span className="text-sm text-gray-500 font-mono mb-1 hidden md:block">// THE ASSETS VAULT</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Mastery Course */}
              <div className="bg-[#0F0F0F] p-8 rounded-3xl border border-gray-800 group hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-full aspect-video bg-gray-800 rounded-lg mb-6 relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <i className="ph-fill ph-play-circle text-4xl text-gray-600 group-hover:text-white transition-colors"></i>
                    </div>
                    {/* Progress Bar Decor */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                       <div className="w-1/3 h-full bg-primary"></div>
                    </div>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">Khoá học Mastery</h4>
                 <p className="text-sm text-gray-500">
                    Trọn bộ video 100X Social. Thư viện kiến thức trọn đời để bạn tra cứu bất cứ lúc nào.
                 </p>
              </div>

              {/* Card 2: Viral Posts */}
              <div className="bg-[#0F0F0F] p-8 rounded-3xl border border-gray-800 group hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-full aspect-video bg-[#151515] rounded-lg mb-6 relative overflow-hidden border border-gray-800 group-hover:border-primary/30 transition-colors p-4">
                    <div className="space-y-2">
                       <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
                       <div className="h-2 w-full bg-gray-700 rounded"></div>
                       <div className="h-2 w-5/6 bg-gray-700 rounded"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded">
                       DONE-FOR-YOU
                    </div>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">100 Viral Posts Mẫu</h4>
                 <p className="text-sm text-gray-500">
                    Kho bài viết điền vào chỗ trống (Fill-in-the-blank). Chỉ cần Copy & Paste để có bài đăng chất lượng.
                 </p>
              </div>

              {/* Card 3: Canva Templates */}
              <div className="bg-[#0F0F0F] p-8 rounded-3xl border border-gray-800 group hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-full aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg mb-6 relative overflow-hidden border border-gray-800 flex items-center justify-center">
                    <i className="ph-fill ph-paint-brush-broad text-4xl text-gray-600 group-hover:text-white transition-colors"></i>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">Canva Template Viral</h4>
                 <p className="text-sm text-gray-500">
                    Bộ thiết kế chuẩn UI/UX cho Social. Không cần thuê Designer, chỉ cần kéo thả.
                 </p>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};