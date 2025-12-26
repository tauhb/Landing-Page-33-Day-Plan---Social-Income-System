import React from 'react';

export const TheEpiphany: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-black text-white border-y border-white/10 relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
             Nội Dung = <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Tài Sản</span>
           </h2>
           <p className="text-xl md:text-2xl text-gray-400 font-serif italic">
             "Đừng gọi là đăng bài. Hãy gọi là <span className="text-white not-italic font-bold">tích luỹ bất động sản số</span>."
           </p>
        </div>

        {/* The Digital Real Estate Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           
           {/* Left: The Concept */}
           <div className="space-y-8">
              <div className="flex gap-6">
                 <div className="flex-col items-center hidden md:flex">
                    <div className="w-px h-full bg-gray-800 relative">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full"></div>
                    </div>
                 </div>
                 <div className="space-y-12">
                    <div className="relative group">
                       <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Lãi kép (Compound Interest)</h3>
                       <p className="text-gray-400">Một bài viết bạn đăng hôm nay vẫn có thể mang về khách hàng vào năm sau. Nó làm việc 24/7/365.</p>
                    </div>
                    <div className="relative group">
                       <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Không tốn chi phí kho bãi</h3>
                       <p className="text-gray-400">Mặt bằng miễn phí trên Internet. Bạn không tốn tiền thuê, chỉ tốn công xây.</p>
                    </div>
                    <div className="relative group">
                       <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Định giá tăng dần</h3>
                       <p className="text-gray-400">Kênh càng lâu đời, thương hiệu càng lớn, giá trị mỗi bài viết càng cao.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: The Visual Card (Portfolio Dashboard) */}
           <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8 overflow-hidden shadow-2xl">
                 
                 {/* Header Card */}
                 <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                          <i className="ph-fill ph-chart-line-up text-xl"></i>
                       </div>
                       <div>
                          <div className="font-bold text-white uppercase text-sm">Portfolio Giá Trị</div>
                          <div className="text-xs text-green-500 font-mono">+12.5% Tuần này</div>
                       </div>
                    </div>
                    <div className="text-right">
                       <div className="text-xs text-gray-500 uppercase">Tổng giá trị</div>
                       <div className="text-xl font-mono font-bold text-white">$ VO_GIA</div>
                    </div>
                 </div>

                 {/* The Asset List */}
                 <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-gray-800 group/item hover:border-yellow-500/50 transition-colors cursor-default">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-800 rounded overflow-hidden relative">
                             <div className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center">
                                <i className="ph-fill ph-play-circle text-yellow-500"></i>
                             </div>
                          </div>
                          <div>
                             <div className="font-bold text-white text-sm">Video hướng dẫn...</div>
                             <div className="text-xs text-gray-500">Đăng 3 tháng trước</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-green-500 font-bold text-sm">+5 Leads</div>
                          <div className="text-xs text-gray-600">Hôm nay</div>
                       </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-gray-800 group/item hover:border-yellow-500/50 transition-colors cursor-default">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-800 rounded overflow-hidden relative">
                             <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                                <i className="ph-fill ph-article text-blue-500"></i>
                             </div>
                          </div>
                          <div>
                             <div className="font-bold text-white text-sm">Bài viết tâm sự...</div>
                             <div className="text-xs text-gray-500">Đăng 1 năm trước</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-green-500 font-bold text-sm">+2 Khách</div>
                          <div className="text-xs text-gray-600">Hôm nay</div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-8 pt-4 text-center border-t border-gray-800">
                    <p className="text-sm text-gray-400">
                       <i className="ph-fill ph-info mr-1 text-yellow-500"></i>
                       Bạn đang ngủ, nhưng nội dung vẫn đang làm việc.
                    </p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};