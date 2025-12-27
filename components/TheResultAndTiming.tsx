
import React from 'react';

export const TheResultAndTiming: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* BLOCK 1: THE RESULTS (Kết quả đạt được) */}
        <div className="space-y-12">
           <div className="text-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 block">Sau 3 - 6 tháng nỗ lực</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
                Kết quả <span className="text-[#D4F077]">Có Thể Đạt được</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Income */}
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center hover:border-primary/50 transition-colors duration-300 group">
                 <div className="text-5xl md:text-6xl font-black text-[#D4F077] mb-2 group-hover:scale-110 transition-transform duration-300">10-150</div>
                 <div className="text-lg font-bold text-gray-400 uppercase tracking-wide mb-4">Triệu / Tháng</div>
                 <p className="text-sm text-gray-500 font-medium">Dòng thu nhập thứ 2 bền vững</p>
              </div>

              {/* Card 2: Audience */}
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center hover:border-blue-500/50 transition-colors duration-300 group">
                 <i className="ph-fill ph-users-three text-5xl text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300"></i>
                 <div className="text-xl font-black text-white uppercase tracking-wide mb-2">Tệp khách chất lượng</div>
                 <p className="text-sm text-gray-500 font-medium">Chủ động tìm đến bạn</p>
              </div>

              {/* Card 3: Asset */}
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center hover:border-purple-500/50 transition-colors duration-300 group">
                 <i className="ph-fill ph-robot text-5xl text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300"></i>
                 <div className="text-xl font-black text-white uppercase tracking-wide mb-2">Nội dung tự động</div>
                 <p className="text-sm text-gray-500 font-medium">Tài sản truyền thông lâu dài</p>
              </div>
           </div>
        </div>

        {/* BLOCK 2: THE CONTEXT & OPPORTUNITY WINDOW (Grid Pattern Background) */}
        <div className="relative w-full bg-black rounded-3xl border border-gray-800 overflow-hidden">
           {/* Grid Pattern Background */}
           <div className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px'}}>
           </div>
           
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

           <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: The "Hard" Question */}
              <div className="space-y-8">
                 <div className="space-y-2">
                    <p className="text-2xl text-gray-500 font-bold">"Xây kênh khó lắm?"</p>
                    <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                       Đó là chuyện cũ. <br/>
                       Bây giờ: <span className="text-[#D4F077]">Ai cũng có thể làm.</span>
                    </h3>
                 </div>

                 <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                       <i className="ph-fill ph-lightning text-[#D4F077] text-xl"></i>
                       <span className="text-lg font-medium text-gray-300">AI hỗ trợ cực mạnh</span>
                    </li>
                    <li className="flex items-center gap-3">
                       <i className="ph-fill ph-trend-up text-[#D4F077] text-xl"></i>
                       <span className="text-lg font-medium text-gray-300">Thuật toán ưu tiên người mới</span>
                    </li>
                    <li className="flex items-center gap-3">
                       <i className="ph-fill ph-tag text-[#D4F077] text-xl"></i>
                       <span className="text-lg font-medium text-gray-300">0 Đồng để bắt đầu</span>
                    </li>
                 </ul>
              </div>

              {/* Right: The Red Window Card */}
              <div className="relative group">
                 <div className="absolute -inset-1 bg-red-900/20 blur-xl rounded-2xl"></div>
                 <div className="relative bg-[#0F0505]/90 border border-red-900/50 p-10 rounded-2xl text-center backdrop-blur-sm shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                    <div className="mb-6">
                       <i className="ph-fill ph-hourglass-high text-5xl text-red-500 animate-pulse"></i>
                    </div>
                    <h4 className="text-xl font-bold text-red-500 uppercase tracking-widest mb-2">Cửa sổ cơ hội</h4>
                    <div className="text-4xl md:text-5xl font-black text-white mb-4">12 - 24 Tháng</div>
                    <p className="text-gray-500 font-medium">Trước khi thị trường bão hoà</p>
                 </div>
              </div>

           </div>
        </div>

        {/* BLOCK 3: THE OPPORTUNITY LIST */}
        <div className="text-center space-y-10">
           <h3 className="text-2xl md:text-3xl font-bold text-white">
             Những cơ hội từng rất khó - Nay lại quá dễ
           </h3>
           
           <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Affiliate: 10-30Tr", icon: "ph-link" },
                { label: "Booking & tài trợ", icon: "ph-star" },
                { label: "Bán Ebook / Course", icon: "ph-book-open" },
                { label: "Bán Template & Prompt", icon: "ph-layout" },
                { label: "Coaching nhóm kín", icon: "ph-users-three" },
                { label: "Bán App AI White-label", icon: "ph-cpu" },
                { label: "Membership thu phí", icon: "ph-crown" },
                { label: "Dịch vụ AI Agency", icon: "ph-lightning" },
                { label: "Faceless Content", icon: "ph-mask-happy" },
              ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#151515] border border-gray-800 hover:border-primary/50 hover:bg-[#1a1a1a] transition-all cursor-default group shadow-lg">
                    <i className={`ph-fill ${item.icon} text-gray-500 group-hover:text-primary transition-colors text-xl`}></i>
                    <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                 </div>
              ))}
           </div>
           
           <p className="text-gray-500 text-sm font-medium italic">
             *Chỉ cần một kênh có lượng tiếp cận ổn định, tiền sẽ tự chảy về theo nhiều hướng khác nhau.
           </p>
        </div>

      </div>
    </section>
  );
};
