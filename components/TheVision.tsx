import React from 'react';

export const TheVision: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-black overflow-hidden border-t border-white/5 font-sans">
      {/* Background Ambience - Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BIG STATEMENT */}
        <div className="text-center mb-24 relative">
           <p className="text-gray-500 uppercase tracking-[0.4em] mb-4 font-black text-[10px] md:text-xs">Hệ thống đo lường hiệu suất</p>
           <h2 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-4 text-white">
             141,842,000
           </h2>
           <h3 className="text-2xl md:text-5xl font-black uppercase text-gray-500 mb-8 tracking-tighter">
             TỔNG LƯỢT XEM / 28 NGÀY
           </h3>
           <div className="flex flex-wrap justify-center gap-3">
              {["Không lộ mặt", "0đ Quảng cáo", "Vận hành tự động"].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 border border-white/10 rounded-md bg-white/5 text-[10px] md:text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
           </div>
        </div>

        {/* LOGIC DASHBOARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          
          {/* LEFT: WORKFLOW BREAKDOWN */}
          <div className="md:col-span-5 bg-[#080808] border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest font-mono">Tối ưu hóa quy trình</h3>
               </div>
               <span className="text-[10px] text-gray-600 font-mono">phiên bản 2.4.0</span>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Step 1 */}
              <div className="flex items-start gap-5 group/step">
                 <div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/5 flex items-center justify-center shrink-0 font-mono text-sm text-gray-500 group-hover/step:text-primary group-hover/step:border-primary/30 transition-all">05'</div>
                 <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">Quét xu hướng AI</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Quét xu hướng thị trường & đề xuất 3 góc nhìn viral dựa trên dữ liệu thật.</p>
                 </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-5 group/step">
                 <div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/5 flex items-center justify-center shrink-0 font-mono text-sm text-gray-500 group-hover/step:text-primary group-hover/step:border-primary/30 transition-all">05'</div>
                 <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">Kịch bản cá nhân hoá</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Sử dụng Prompt mẫu để AI viết bản thảo theo đúng "giọng đọc" cá nhân của bạn.</p>
                 </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-5 group/step">
                 <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 font-mono text-sm text-primary group-hover/step:scale-110 transition-all shadow-[0_0_20px_rgba(212,240,119,0.1)]">05'</div>
                 <div>
                    <h4 className="text-sm font-black text-primary uppercase tracking-tight mb-1">Tự động đóng gói</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Đóng gói bằng Template có sẵn và đẩy vào lịch đăng tự động đa nền tảng.</p>
                 </div>
              </div>
            </div>

            {/* Efficiency Progress Bar */}
            <div className="mt-12 pt-8 border-t border-white/5">
               <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">
                  <span>Thủ công (5h)</span>
                  <span className="text-primary">Hệ thống (15p)</span>
               </div>
               <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden flex">
                  <div className="h-full bg-gray-800 w-[5%]"></div>
                  <div className="h-full bg-primary w-[95%] shadow-[0_0_10px_rgba(212,240,119,0.5)]"></div>
               </div>
               <p className="mt-4 text-[10px] text-gray-600 font-medium italic text-center">
                 "Chúng tôi không cắt giảm chất lượng, chúng tôi cắt bỏ thao tác thừa."
               </p>
            </div>
          </div>

          {/* RIGHT: COMPOUNDING ASSETS */}
          <div className="md:col-span-7 bg-[#080808] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none font-mono text-[8px] text-primary leading-tight">
               01010110 10101001 01010110<br/>
               TAI_SAN_KHOA: 142_BAI_DANG<br/>
               MUC_TIEU_TIEP_CAN: 100M+<br/>
               HIEU_SUAT: 94.2%
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-10">
                <span className="inline-block px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  Logic lãi kép tăng tưởng
                </span>
                <h3 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-6 italic">
                  Nội dung chất <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Liên tục tăng</span>
                </h3>
                <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-10">
                  Một bài đăng không làm nên sự nghiệp. Nhưng <span className="text-white font-bold">hệ thống 142+ bài đăng</span> làm việc 24/7 thay bạn sẽ tạo ra kết quả không thể đảo ngược.
                  Cần phải có hệ thống, chứ nếu thực hiện như cách cũ sẽ không thể nào đạt được.
                </p>
              </div>

              {/* Mini Dashboard Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                 <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Số lượng</div>
                    <div className="text-3xl font-black text-white font-mono leading-none">142<span className="text-primary">.</span></div>
                    <div className="text-[10px] text-green-500 mt-2 font-bold">+12 Thêm mới hôm nay</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Số giờ tiết kiệm</div>
                    <div className="text-3xl font-black text-white font-mono leading-none">684<span className="text-gray-500">giờ</span></div>
                    <div className="text-[10px] text-gray-600 mt-2 font-bold">Dự kiến mỗi năm</div>
                 </div>
              </div>

              {/* Chart Metaphor */}
              <div className="absolute bottom-0 right-0 left-0 h-40 pointer-events-none opacity-20 px-10 overflow-hidden">
                 <svg viewBox="0 0 800 200" className="w-full h-full">
                    <path d="M0,50 Q100,60 200,100 T400,150 T800,180" fill="none" stroke="#666" strokeWidth="2" strokeDasharray="6 4" />
                    <path d="M0,180 Q100,170 200,160 T400,100 T600,50 T800,10" fill="none" stroke="#D4F077" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="800" cy="10" r="4" fill="#D4F077" className="animate-ping" />
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge */}
        <div className="text-center max-w-4xl mx-auto">
           <div className="w-16 h-px bg-gray-800 mx-auto mb-10"></div>
           <h3 className="text-xl md:text-2xl font-medium text-gray-400 leading-relaxed italic">
             "Khi số lượng nội dung chất lượng tăng lên và lượt tiếp cận tăng vọt, <br className="hidden md:block"/> 
             bạn không chỉ đang kiếm tiền, bạn đang <span className="text-white font-bold not-italic border-b-2 border-primary/50">Cài đặt cỗ máy tự do</span>."
           </h3>
        </div>

      </div>
    </section>
  );
};