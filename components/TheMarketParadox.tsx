import React from 'react';

export const TheMarketParadox: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#080808] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tight">
             Nghịch lý <span className="text-gray-600">Thị trường</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             Tại sao công cụ nhiều hơn, cơ hội nhiều hơn, nhưng việc kiếm tiền lại khó hơn?
           </p>
        </div>

        {/* MAIN COMPARISON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
           
           {/* LEFT: THE ABUNDANCE (Cơ hội) */}
           <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-green-500/30">
                 <h3 className="text-2xl font-bold text-white uppercase mb-2">Vấn đề không phải thiếu cơ hội</h3>
                 <p className="text-gray-500">Mọi tài nguyên bạn cần đều đang dư thừa.</p>
              </div>

              {/* Card 1: Internet Money */}
              <div className="group bg-[#111] border border-gray-800 p-6 rounded-2xl flex items-center gap-6 hover:border-green-500/50 transition-colors">
                 <div className="w-16 h-16 rounded-xl bg-green-900/10 flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(74,222,128,0.1)] group-hover:scale-110 transition-transform">
                    <i className="ph-fill ph-globe-hemisphere-west text-3xl"></i>
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white mb-1">Dòng tiền Internet</h4>
                    <p className="text-sm text-gray-500">Người mua hàng online vẫn tăng trưởng 20%/năm. Tiền vẫn ở đó.</p>
                 </div>
              </div>

              {/* Card 2: AI Tech */}
              <div className="group bg-[#111] border border-gray-800 p-6 rounded-2xl flex items-center gap-6 hover:border-blue-500/50 transition-colors">
                 <div className="w-16 h-16 rounded-xl bg-blue-900/10 flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform">
                    <i className="ph-fill ph-robot text-3xl"></i>
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white mb-1">Đòn bẩy Công nghệ</h4>
                    <p className="text-sm text-gray-500">AI giúp bạn làm việc của 10 người với chi phí gần như bằng 0.</p>
                 </div>
              </div>
           </div>

           {/* RIGHT: THE REALITY (The Revamped Block) */}
           <div className="relative group">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Main Diagnostic Card */}
              <div className="relative bg-[#0F0505] border border-red-900/50 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
                 {/* Scan Line Animation */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-[50%] animate-[scan_3s_linear_infinite] pointer-events-none"></div>

                 {/* Header */}
                 <div className="flex justify-between items-start mb-10">
                    <div>
                       <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest mb-1 animate-pulse">
                          <i className="ph-fill ph-warning-octagon"></i> CẢNH BÁO HỆ THỐNG
                       </div>
                       <h3 className="text-2xl font-black text-white uppercase">Thực tế đau lòng</h3>
                    </div>
                    <div className="text-right">
                       <div className="text-xs text-gray-500 uppercase font-mono">Tỷ lệ giữ chân</div>
                       <div className="text-2xl font-mono font-bold text-red-500">0.00%</div>
                    </div>
                 </div>

                 {/* Visualization: The Broken Flow */}
                 <div className="relative flex flex-col items-center gap-2 mb-8">
                    
                    {/* Step 1: Incoming (Green) */}
                    <div className="w-full bg-[#1A1A1A] rounded-lg p-3 flex justify-between items-center border border-gray-800 opacity-50">
                       <span className="text-xs font-mono text-gray-400">TRAFFIC ĐI VÀO</span>
                       <span className="text-xs font-mono text-green-500">PHÁT HIỆN TIỀN</span>
                    </div>

                    {/* Arrow Down */}
                    <i className="ph-bold ph-arrow-down text-gray-600"></i>

                    {/* Step 2: The Crash Node (Red) */}
                    <div className="w-full bg-red-900/10 border border-red-500/50 rounded-xl p-6 text-center relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-red-500 animate-pulse"></div>
                       <div className="absolute top-0 right-0 w-1 h-full bg-red-500 animate-pulse"></div>
                       
                       <i className="ph-duotone ph-shield-warning text-4xl text-red-500 mb-2"></i>
                       <div className="font-black text-white text-lg uppercase tracking-wider">LỖI: KHÔNG CÓ BRAND</div>
                       <div className="text-xs text-red-400 font-mono mt-1">Độ Tin Cậy = Thấp</div>
                    </div>

                    {/* Arrow Down Split */}
                    <div className="flex gap-8 text-red-500/50">
                       <i className="ph-bold ph-arrow-down-left text-2xl"></i>
                       <i className="ph-bold ph-arrow-down-right text-2xl"></i>
                    </div>

                    {/* Step 3: Result (Lost) */}
                    <div className="flex justify-between w-full gap-4">
                       <div className="flex-1 bg-[#1A1A1A] rounded-lg p-3 border border-gray-800 text-center">
                          <div className="text-[10px] text-gray-500 uppercase">Khách hàng</div>
                          <div className="text-red-500 font-bold text-sm">RỜI ĐI</div>
                       </div>
                       <div className="flex-1 bg-[#1A1A1A] rounded-lg p-3 border border-gray-800 text-center">
                          <div className="text-[10px] text-gray-500 uppercase">Thu nhập</div>
                          <div className="text-gray-500 font-bold text-sm">0 VNĐ</div>
                       </div>
                    </div>
                 </div>

                 {/* Conclusion */}
                 <div className="text-center border-t border-red-900/30 pt-6">
                    <p className="text-gray-400 text-sm">
                       Tiền đến rồi lại đi vì không có <span className="text-white font-bold">KÊNH & NIỀM TIN</span> để giữ lại.
                    </p>
                 </div>
              </div>
           </div>

        </div>

        {/* BOTTOM: CONSEQUENCES (System Fallout) */}
        <div className="mt-16 bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50"></div>
           
           <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-gray-300 uppercase tracking-widest">Hệ quả của việc "Làm tự phát"</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "ph-warning", title: "Affiliate", desc: "Dễ bị cắt hoa hồng, phụ thuộc nền tảng." },
                { icon: "ph-skull", title: "Sản phẩm số", desc: "Chết yểu vì không ai biết tới dù sản phẩm tốt." },
                { icon: "ph-chart-bar", title: "Dịch vụ / Freelance", desc: "Cạnh tranh về giá, khách đòi hỏi nhiều nhưng trả ít." }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/50 border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors group">
                   <i className={`ph-fill ${item.icon} text-3xl text-gray-600 group-hover:text-red-500 mb-4 transition-colors`}></i>
                   <h4 className="text-white font-bold mb-2">{item.title}</h4>
                   <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
      <style>{`
         @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
         }
      `}</style>
    </section>
  );
};