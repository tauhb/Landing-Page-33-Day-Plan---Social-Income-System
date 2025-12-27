import React from 'react';

export const NewRules: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Console */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-400 font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Trạng Thái: Đang Quét Dữ Liệu...
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 uppercase tracking-tight mb-2">
            ĐỪNG TỰ TRÁCH MÌNH
          </h2>
          <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-normal leading-[1.15] pt-4 py-2 glitch-text">
            LUẬT CHƠI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">ĐÃ KHÁC</span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent -translate-x-1/2"></div>
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#080808] border border-gray-700 rounded-full items-center justify-center z-10">
             <i className="ph-bold ph-arrow-right text-gray-500"></i>
          </div>

          {/* LEFT: OLD OS (Self Blame) */}
          <div className="group relative p-8 rounded-2xl bg-[#0F0F0F] border border-red-900/20 overflow-hidden">
            {/* Status Bar */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
               <div className="flex items-center gap-2 text-red-500">
                  <i className="ph-fill ph-x-circle text-xl"></i>
                  <span className="font-mono text-sm font-bold uppercase">Phân Tích Sai</span>
               </div>
               <span className="text-xs text-gray-600 font-mono">CODE: OLD_MINDSET</span>
            </div>

            <h4 className="text-2xl font-black text-gray-400 uppercase mb-6">Không phải bạn</h4>
            
            <div className="space-y-4">
               {["Chưa đủ giỏi", "Chưa đủ chăm", "Chưa học đủ khoá"].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-red-950/10 rounded-lg border border-red-900/10 group-hover:border-red-900/30 transition-colors">
                     <span className="text-lg text-gray-500 line-through decoration-red-500/50 decoration-2">{item}</span>
                     <span className="text-xs font-bold text-red-900 bg-red-900/20 px-2 py-1 rounded uppercase">Đã loại bỏ</span>
                  </div>
               ))}
            </div>
            
            <div className="mt-6 text-xs text-gray-600 font-mono text-center">
               // Đây không phải nguyên nhân thất bại.
            </div>
          </div>
          
          {/* RIGHT: NEW OS (Reality) */}
          <div className="group relative p-8 rounded-2xl bg-[#0F0F0F] border border-primary/20 shadow-[0_0_30px_rgba(212,240,119,0.05)] overflow-hidden">
            {/* Status Bar */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
               <div className="flex items-center gap-2 text-primary">
                  <i className="ph-fill ph-check-circle text-xl"></i>
                  <span className="font-mono text-sm font-bold uppercase">Nguyên Nhân Gốc</span>
               </div>
               <span className="text-xs text-gray-600 font-mono">CODE: REALITY_CHECK</span>
            </div>

            <h4 className="text-2xl font-black text-white uppercase mb-6">Vấn đề nằm ở</h4>
            
            <div className="space-y-4">
               {["Cách kiếm tiền", "Cách tiếp cận thị trường", "Cách tạo niềm tin"].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
                     <span className="text-lg text-white font-bold">{item}</span>
                     <i className="ph-bold ph-check text-primary"></i>
                  </div>
               ))}
            </div>

             <div className="mt-6 text-xs text-primary/60 font-mono text-center animate-pulse">
               // Cần cập nhật kỹ năng xây kênh ngay lập tức.
            </div>
          </div>
        </div>
        
        {/* Footer Alert */}
        <div className="mt-16 flex justify-center">
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
             <div className="relative bg-black border border-gray-800 px-8 py-4 rounded-lg flex items-center gap-4">
                <i className="ph-fill ph-warning-octagon text-2xl text-red-500"></i>
                <span className="text-lg md:text-xl font-bold text-gray-300 uppercase tracking-wide">
                  Trò chơi đã đổi – <span className="text-white border-b-2 border-red-500">chơi kiểu cũ thì thua</span>.
                </span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};