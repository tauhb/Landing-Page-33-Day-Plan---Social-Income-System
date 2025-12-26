import React from 'react';

export const Instructor: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[#050505] overflow-hidden text-white border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 relative group cursor-crosshair">
            <div className="absolute -left-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent hidden lg:block"></div>
            <div className="absolute -left-4 top-10 w-2 h-px bg-primary/50 hidden lg:block"></div>
            <div className="absolute -left-4 bottom-10 w-2 h-px bg-primary/50 hidden lg:block"></div>

            <div className="relative z-10 aspect-[3/4] rounded-sm overflow-hidden border border-white/10 bg-[#111]">
               <img 
                 src="https://picsum.photos/600/800?random=1" 
                 alt="Hoàng Bá Tàu"
                 className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-[20%] w-full -translate-y-full animate-radar-scan pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end mix-blend-difference z-20 pointer-events-none">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-mono tracking-widest uppercase text-white">Định danh</span>
                     <span className="text-xl font-bold font-mono tracking-tighter text-white">HBT_KIẾN_TRÚC_SƯ</span>
                  </div>
                  <i className="ph-fill ph-qr-code text-2xl text-white opacity-80"></i>
               </div>
            </div>
            <div className="absolute -inset-1 bg-primary/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <div className="lg:col-span-7 relative z-10">
            <div className="mb-10">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-primary"></div>
                  <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">Người hướng dẫn</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 leading-[0.9] mb-6">
                 Hoàng Bá Tàu
               </h2>
               <p className="text-xl md:text-2xl text-gray-400 font-light">
                 Kiến trúc sư của <span className="text-white font-bold">Hệ Thống Thu Nhập Mạng Xã Hội</span>
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group/card">
                  <div className="flex items-center gap-3 mb-2 text-gray-400 group-hover/card:text-primary transition-colors">
                     <i className="ph-fill ph-hourglass-high text-xl"></i>
                     <span className="text-xs font-bold uppercase tracking-wider">Kinh nghiệm</span>
                  </div>
                  <div className="text-3xl font-bold text-white">7+ Năm</div>
                  <div className="text-xs text-gray-500 mt-1">Thực chiến xây hệ thống</div>
               </div>

               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group/card">
                  <div className="flex items-center gap-3 mb-2 text-gray-400 group-hover/card:text-primary transition-colors">
                     <i className="ph-fill ph-strategy text-xl"></i>
                     <span className="text-xs font-bold uppercase tracking-wider">Phương pháp</span>
                  </div>
                  <div className="text-3xl font-bold text-white">Hệ thống</div>
                  <div className="text-xs text-gray-500 mt-1">Tư duy hệ thống hoá</div>
               </div>

               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group/card">
                  <div className="flex items-center gap-3 mb-2 text-gray-400 group-hover/card:text-primary transition-colors">
                     <i className="ph-fill ph-users text-xl"></i>
                     <span className="text-xs font-bold uppercase tracking-wider">Tầm ảnh hưởng</span>
                  </div>
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-xs text-gray-500 mt-1">Học viên thành công</div>
               </div>
            </div>

            <div className="space-y-8">
               <div className="border-l-2 border-primary/30 pl-6">
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Tôi không phải là một "Guru" dạy làm giàu. Tôi là một <span className="text-white font-bold">người thực hành (Practitioner)</span>.
                    <br/><br/>
                    Những gì tôi chia sẻ không đến từ sách vở lý thuyết, mà đến từ hàng nghìn giờ thử sai, đốt tiền vào quảng cáo, và những lần xây đi đập lại các hệ thống kinh doanh.
                  </p>
               </div>

               <blockquote className="relative p-8 bg-white/5 rounded-r-2xl rounded-bl-2xl border-l border-white/10">
                  <i className="ph-fill ph-quotes text-4xl text-white/10 absolute top-4 left-4"></i>
                  <p className="relative z-10 font-serif italic text-2xl md:text-3xl text-gray-300 leading-relaxed">
                    "Tôi không dạy bạn cách làm giàu nhanh. Tôi đưa cho bạn tấm bản đồ để không bị lạc lối giữa ma trận thông tin."
                  </p>
               </blockquote>
            </div>

            <div className="mt-12 flex items-center gap-4 group/sig w-fit">
               <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">Ký tên bởi</div>
               <div className="w-48 h-16 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full stroke-white fill-none stroke-2" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                     <path 
                        d="M10,50 C30,40 40,20 50,40 C60,60 70,30 80,40 C90,50 100,20 110,40 C120,60 130,30 140,40 C150,50 160,30 180,50"
                        className="group-hover/sig:animate-draw-path"
                        strokeDasharray="300"
                        strokeDashoffset="0"
                     />
                     <path d="M20,60 L180,55" stroke="#D4F077" strokeWidth="3" className="opacity-50" />
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes radar-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-radar-scan { animation: radar-scan 3s linear infinite; }
        @keyframes draw-path {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        .group-hover\/sig\:animate-draw-path { animation: draw-path 1.5s ease-out forwards; }
      `}</style>
    </section>
  );
};