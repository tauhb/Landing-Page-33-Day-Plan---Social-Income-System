import React from 'react';

export const PlatformAndAI: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gray-50 dark:bg-[#0f1115]">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* BLOCK 1: THE MAGNET (Khi bạn có kênh đúng) */}
        <div className="relative">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase leading-tight mb-6">
                 Khi bạn có một <br/>
                 <span className="text-blue-600 dark:text-blue-500 drop-shadow-lg">Kênh đúng</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                 Bạn chuyển từ trạng thái <span className="line-through decoration-red-500 text-gray-500">đi săn</span> sang trạng thái <span className="font-bold text-gray-900 dark:text-white">thu hút</span>.
              </p>
           </div>

           {/* The Magnet Visual */}
           <div className="relative w-full max-w-4xl mx-auto aspect-video md:aspect-[2/1] bg-white dark:bg-[#050505] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              
              {/* Center Core: The Channel */}
              <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.5)] animate-pulse">
                 <div className="text-center">
                    <i className="ph-fill ph-broadcast text-4xl text-blue-500 mb-1"></i>
                    <div className="text-xs font-black uppercase tracking-widest text-white dark:text-black">YOUR<br/>CHANNEL</div>
                 </div>
                 {/* Magnetic Waves */}
                 <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[ping_3s_linear_infinite]"></div>
                 <div className="absolute inset-[-20px] border-2 border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite_1s]"></div>
              </div>

              {/* Orbiting Items being pulled in */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                 {/* Item 1: Money */}
                 <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col items-center gap-2 animate-float-fast">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 border border-green-200 dark:border-green-800">
                       <i className="ph-fill ph-money text-2xl"></i>
                    </div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent"></div>
                 </div>
                 
                 {/* Item 2: Opportunities */}
                 <div className="absolute top-[20%] right-[20%] flex flex-col items-center gap-2 animate-float-slow">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 border border-purple-200 dark:border-purple-800">
                       <i className="ph-fill ph-handshake text-2xl"></i>
                    </div>
                 </div>

                 {/* Item 3: Freedom */}
                 <div className="absolute bottom-[20%] right-[15%] flex flex-col items-center gap-2 animate-float-medium">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 border border-orange-200 dark:border-orange-800">
                       <i className="ph-fill ph-airplane-tilt text-2xl"></i>
                    </div>
                 </div>

                 {/* Force Lines pointing to center */}
                 <div className="absolute top-1/2 left-[20%] w-[100px] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                 <div className="absolute top-[30%] right-[30%] w-[100px] h-px bg-gradient-to-l from-transparent via-blue-500/50 to-transparent rotate-45"></div>
                 <div className="absolute bottom-[30%] right-[25%] w-[100px] h-px bg-gradient-to-l from-transparent via-blue-500/50 to-transparent -rotate-45"></div>
              </div>
           </div>
        </div>

        {/* BLOCK 2: THE AI LEVER (AI khiến mọi thứ dễ hơn) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary-hover font-bold text-xs uppercase tracking-widest mb-6">
                 <i className="ph-bold ph-lightning"></i> New Technology
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase leading-tight mb-6">
                 AI khiến mọi thứ <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Dễ hơn bao giờ hết</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                 Ngày xưa, để xây kênh bạn cần cả một ekip: Editor, Writer, Designer. <br/>
                 Ngày nay, bạn chỉ cần <strong>1 chiếc điện thoại + AI</strong>.
              </p>
              
              <ul className="space-y-4">
                 <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                       <i className="ph-bold ph-check"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Không cần lộ mặt (Faceless)</span>
                 </li>
                 <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                       <i className="ph-bold ph-check"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Không cần giỏi viết lách</span>
                 </li>
                 <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                       <i className="ph-bold ph-check"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Không cần biết thiết kế</span>
                 </li>
              </ul>
           </div>

           {/* The Visual Comparison Card */}
           <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-3xl p-2 shadow-2xl">
              <div className="bg-gray-100 dark:bg-[#151515] rounded-2xl p-6 md:p-8">
                 
                 {/* Before */}
                 <div className="flex items-center justify-between mb-8 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-gray-300 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                          <i className="ph-fill ph-user text-2xl text-gray-500"></i>
                       </div>
                       <div>
                          <div className="font-bold text-gray-700 dark:text-gray-300">Cách cũ</div>
                          <div className="text-xs text-gray-500">Thủ công 100%</div>
                       </div>
                    </div>
                    <div className="text-right">
                       <div className="font-mono text-gray-500">4 Giờ/Bài</div>
                       <div className="w-24 h-1 bg-gray-300 rounded-full mt-2">
                          <div className="w-[10%] h-full bg-gray-500 rounded-full"></div>
                       </div>
                    </div>
                 </div>

                 {/* Divider */}
                 <div className="w-full h-px bg-gray-300 dark:bg-gray-800 mb-8 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 dark:bg-[#151515] px-4 text-xs font-bold text-gray-400 uppercase">
                       VS
                    </div>
                 </div>

                 {/* After (AI) */}
                 <div className="flex items-center justify-between relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-lg group-hover:bg-primary/10 transition-colors"></div>
                    
                    <div className="relative flex items-center gap-4">
                       <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                          <i className="ph-fill ph-robot text-2xl text-black"></i>
                       </div>
                       <div>
                          <div className="font-bold text-gray-900 dark:text-white">Dùng Hệ Thống AI</div>
                          <div className="text-xs text-primary-hover font-bold">Tự động hoá 90%</div>
                       </div>
                    </div>
                    <div className="relative text-right">
                       <div className="font-mono text-gray-900 dark:text-white font-bold text-lg">15 Phút/Bài</div>
                       <div className="w-24 h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                          <div className="w-full h-full bg-primary rounded-full shadow-[0_0_10px_rgba(212,240,119,1)] animate-pulse"></div>
                       </div>
                    </div>
                 </div>

                 {/* AI Output Preview */}
                 <div className="mt-8 p-4 bg-black rounded-xl border border-gray-800 font-mono text-xs text-green-400">
                    <div className="flex items-center gap-2 mb-2 border-b border-gray-800 pb-2">
                       <div className="w-2 h-2 rounded-full bg-red-500"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       <span className="text-gray-500 ml-auto">ai_process.exe</span>
                    </div>
                    <p>> Analyzing Trends... Done.</p>
                    <p>> Writing Hook... Done.</p>
                    <p>> Generating Images... Done.</p>
                    <p className="text-white animate-pulse">> Ready to Publish!</p>
                 </div>

              </div>
           </div>
        </div>

      </div>
      <style>{`
        @keyframes float-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-10px); }
        }
        @keyframes float-fast {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-5px); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};