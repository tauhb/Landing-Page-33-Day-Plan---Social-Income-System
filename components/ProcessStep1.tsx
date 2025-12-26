import React from 'react';

export const ProcessStep1: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Section 76: Intro */}
        <div className="text-center mb-20">
           <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest mb-6 border border-primary/20">
             The Blueprint
           </span>
           <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase mb-6 leading-tight">
             Quy trình <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">100X CONTENT</span>
           </h2>
           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
             Đây không phải là "mẹo vặt". <br/>
             Đây là một <span className="text-gray-900 dark:text-white font-bold">hệ thống sản xuất nội dung</span> có thể Lặp lại – Nhân bản – Tự động hóa.
           </p>
        </div>

        {/* Section 77: Step 1 */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl font-black shadow-lg">#1</div>
              <div>
                 <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase">Tìm ý tưởng</h3>
                 <p className="text-gray-500 font-medium">Đừng bao giờ bắt đầu từ trang giấy trắng.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Prompt Method */}
              <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800 shadow-2xl relative overflow-hidden group">
                 <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-gray-500 font-mono">AI_Generator.exe</span>
                 </div>
                 <div className="font-mono text-sm text-gray-300 space-y-4">
                    <p className="text-green-400">$ prompt: "Giúp tôi liệt kê 1 ý tưởng Viral cho 3 trụ cột: Phát triển bản thân, Xây dựng đội ngũ, Bán hàng..."</p>
                    <div className="pl-4 border-l-2 border-gray-700 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                       <p>Analysis complete...</p>
                       <p>Generating ideas...</p>
                       <p className="text-white">Output Table: [Idea 1, Idea 2, Idea 3...]</p>
                    </div>
                 </div>
                 <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-600 uppercase">Cách #1: Dùng AI</div>
              </div>

              {/* Curation Method */}
              <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col justify-center">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                       <i className="ph-fill ph-magnifying-glass text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Sưu tầm & Tái sử dụng</h4>
                 </div>
                 <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Tại sao phải nghĩ mới khi bạn có thể "đứng trên vai người khổng lồ"?
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                       <i className="ph-fill ph-check text-green-500"></i> Tìm content đã win (chiến thắng)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                       <i className="ph-fill ph-check text-green-500"></i> Lọc theo 3 trụ cột nội dung
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                       <i className="ph-fill ph-check text-green-500"></i> Biến tấu thành của mình
                    </li>
                 </ul>
                 <div className="mt-auto text-right text-xs font-bold text-gray-400 uppercase">Cách #2: Curate</div>
              </div>
           </div>
        </div>

        {/* Section 78: 1 -> 27 Multiplication */}
        <div className="mb-24 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
           
           <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-16 text-center border border-gray-800 relative z-10 overflow-hidden">
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase mb-12">
                Từ <span className="text-primary">01 Ý tưởng</span> <i className="ph-bold ph-arrow-right mx-2 text-gray-500"></i> <span className="text-primary">27 Nội dung</span>
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                 {/* Node 1 */}
                 <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10">
                       <i className="ph-fill ph-lightbulb text-4xl text-yellow-500"></i>
                    </div>
                    <span className="mt-4 text-gray-400 font-bold uppercase text-sm">1 Ý tưởng gốc</span>
                 </div>

                 {/* Connectors */}
                 <div className="hidden md:flex flex-1 h-px bg-gradient-to-r from-gray-500 via-primary to-gray-500 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4 text-primary font-black text-xl">X27</div>
                 </div>
                 <i className="ph-bold ph-arrow-down text-3xl text-primary md:hidden"></i>

                 {/* Node 27 */}
                 <div className="grid grid-cols-3 gap-2 animate-pulse">
                    {[...Array(9)].map((_, i) => (
                       <div key={i} className="w-4 h-6 bg-primary rounded-sm opacity-80"></div>
                    ))}
                 </div>
              </div>
              
              <p className="mt-12 text-gray-400 text-lg">
                Đây là điểm khiến hệ thống này <span className="text-white font-bold underline">khác hoàn toàn</span> cách làm thủ công.
              </p>
           </div>
        </div>

        {/* Section 79: Internal Tool */}
        <div className="flex flex-col items-center">
           <p className="text-sm font-bold text-gray-500 uppercase mb-4">Công cụ nội bộ được sử dụng</p>
           <div className="px-8 py-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-green-600 flex items-center justify-center text-black font-black text-xl">
                 C
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">CONTENT<span className="font-light">FLOW</span></span>
           </div>
        </div>

      </div>
    </section>
  );
};