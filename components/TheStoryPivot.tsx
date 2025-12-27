import React from 'react';

export const TheStoryPivot: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-black text-white overflow-hidden relative border-t border-gray-900">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            HÀNH TRÌNH <span className="text-gray-500">XƯƠNG MÁU</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto italic">
            "Từ một sai lầm suýt mất trắng, tôi đã tìm ra công thức xây dựng hệ thống bền vững thay vì làm theo bản năng."
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* Central Vertical Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-rose-500 to-primary hidden md:block -translate-x-1/2 opacity-30"></div>

          {/* PHASE 1: THE UPRISING */}
          <div className="relative grid grid-cols-1 md:grid-cols-11 gap-8 mb-32 items-center">
            {/* Left Content */}
            <div className="md:col-span-5 text-center md:text-right space-y-6">
              <div>
                <h3 className="text-3xl font-black uppercase mb-2">Khởi đầu thuận lợi</h3>
                <p className="text-gray-500 font-medium italic">Tôi thử nghiệm trên Facebook cá nhân</p>
              </div>
              
              {/* Chart Climb */}
              <div className="flex justify-center md:justify-end">
                <div className="w-48 h-20 relative opacity-60">
                   <svg viewBox="0 0 100 40" className="w-full h-full stroke-emerald-500 fill-none stroke-[3]">
                      <path d="M0,35 Q20,33 40,25 T80,5 T100,0" strokeLinecap="round" />
                      <circle cx="100" cy="0" r="2" fill="#10B981" />
                   </svg>
                   <span className="absolute -bottom-6 right-0 text-[10px] font-mono text-emerald-500 uppercase font-bold tracking-widest animate-pulse">Phát triển nóng</span>
                </div>
              </div>
            </div>

            {/* Middle Node */}
            <div className="md:col-span-1 flex justify-center relative z-20">
               <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center font-black text-xl shadow-[0_0_30px_rgba(16,185,129,0.5)] border-4 border-black">
                  1
               </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-emerald-500 rounded-2xl p-8 text-black shadow-2xl transform hover:scale-105 transition-transform">
                  <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">KẾT QUẢ</div>
                  <div className="text-6xl font-black leading-none mb-2">17 TRIỆU</div>
                  <div className="text-lg font-bold uppercase tracking-tight">Lượt xem (Views)</div>
               </div>
               {/* Screenshot - NOW CLEAR */}
               <div className="aspect-video bg-gray-900 rounded-xl border border-white/10 overflow-hidden relative group shadow-2xl">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24ccafc54375e3b43e05.png" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                    alt="Bằng chứng tăng trưởng nóng" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-black rounded font-black text-[10px] uppercase tracking-widest shadow-lg">Tăng Trưởng Nóng</span>
                  </div>
               </div>
            </div>
          </div>

          {/* PHASE 2: THE CRASH */}
          <div className="relative grid grid-cols-1 md:grid-cols-11 gap-8 mb-32 items-center">
            {/* Left Content (Warning UI) */}
            <div className="md:col-span-5 space-y-6 order-2 md:order-1">
               <div className="bg-[#150505] border border-rose-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-rose-500 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-rose-600 animate-pulse"></div>
                  <div className="flex items-center gap-4 text-rose-500 mb-6">
                     <i className="ph-fill ph-warning-octagon text-4xl animate-bounce"></i>
                     <h3 className="text-2xl font-black uppercase tracking-tight">Tài khoản bị khoá</h3>
                  </div>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Vi phạm chính sách do vài bài đăng... <br/>
                    <span className="text-white font-bold">Mà tôi không hề biết trước.</span>
                  </p>
               </div>
               {/* Chart Flatline */}
               <div className="flex justify-center md:justify-start">
                <div className="w-48 h-20 relative opacity-40">
                   <svg viewBox="0 0 100 40" className="w-full h-full stroke-rose-600 fill-none stroke-[3]">
                      <path d="M0,0 L30,5 L50,35 L100,35" strokeLinecap="round" />
                      <circle cx="100" cy="35" r="2" fill="#E11D48" />
                   </svg>
                   <span className="absolute -bottom-6 left-0 text-[10px] font-mono text-rose-500 uppercase font-bold tracking-widest animate-pulse">Đóng băng traffic</span>
                </div>
              </div>
            </div>

            {/* Middle Node */}
            <div className="md:col-span-1 flex justify-center relative z-20 order-1 md:order-2">
               <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center font-black text-xl shadow-[0_0_30px_rgba(225,29,72,0.5)] border-4 border-black">
                  <i className="ph-bold ph-x"></i>
               </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-5 text-center md:text-left space-y-6 order-3">
               <div>
                 <h3 className="text-3xl font-black uppercase mb-2 text-rose-500">Biến cố ập đến</h3>
                 <p className="text-gray-500 font-medium italic">Kênh bị hạn chế. Mọi công sức có nguy cơ đổ sông đổ bể.</p>
               </div>
               {/* Screenshot - NOW CLEAR */}
               <div className="aspect-video bg-gray-900 rounded-xl border border-white/10 overflow-hidden relative group shadow-2xl">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f467edda1922395817175.png" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                    alt="Bằng chứng tài khoản bị khoá" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-rose-600 text-white rounded font-black text-[10px] uppercase tracking-widest shadow-lg">Hạn chế tài khoản</span>
                  </div>
               </div>
            </div>
          </div>

          {/* PHASE 3: THE RESET & REBIRTH */}
          <div className="relative grid grid-cols-1 md:grid-cols-11 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-5 text-center md:text-right space-y-6">
              <div>
                <h3 className="text-3xl font-black uppercase mb-2">Quyết định quan trọng</h3>
                <p className="text-gray-500 font-medium italic">Không than vãn. Không đổ lỗi.</p>
              </div>
              
              {/* Chart Staircase */}
              <div className="flex justify-center md:justify-end">
                <div className="w-48 h-20 relative opacity-80">
                   <svg viewBox="0 0 100 40" className="w-full h-full stroke-primary fill-none stroke-[3]">
                      <path d="M0,40 L20,40 L20,30 L40,30 L40,20 L60,20 L60,10 L80,10 L80,0 L100,0" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="100" cy="0" r="2" fill="#D4F077" />
                   </svg>
                   <span className="absolute -bottom-6 right-0 text-[10px] font-mono text-primary uppercase font-bold tracking-widest animate-pulse">Xây dựng bền vững</span>
                </div>
              </div>
            </div>

            {/* Middle Node */}
            <div className="md:col-span-1 flex justify-center relative z-20">
               <div className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center font-black text-xl shadow-[0_0_30px_rgba(212,240,119,0.5)] border-4 border-black animate-[spin_4s_linear_infinite]">
                  <i className="ph-bold ph-arrows-counter-clockwise"></i>
               </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-[#0A0B0E] border-l-4 border-primary rounded-r-2xl p-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <blockquote className="text-2xl font-black leading-tight text-white mb-6">
                    "Tôi chọn xây lại - nhưng làm khác đi, để nó bền vững."
                  </blockquote>
                  <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm cursor-pointer hover:pl-2 transition-all">
                     <span>Xây dựng hệ thống</span>
                     <i className="ph-bold ph-arrow-right"></i>
                  </div>
               </div>
               {/* Screenshot - NOW CLEAR */}
               <div className="aspect-video bg-gray-900 rounded-xl border border-white/10 overflow-hidden relative group shadow-2xl">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cc19b8c3b779c25cd4.png" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                    alt="Kết quả xây hệ thống mới" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-black rounded font-black text-[10px] uppercase tracking-widest shadow-lg">800K Views Sau 7 Ngày</span>
                  </div>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};