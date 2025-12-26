import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center pt-10 pb-20">
      
      {/* 1. Base Grid Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{
            backgroundImage: `
                linear-gradient(to right, #F59E0B 2px, transparent 2px),
                linear-gradient(to bottom, #F59E0B 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
        }}
      ></div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4F077] to-transparent top-[20%] animate-beam-h-fast opacity-30"></div>
         <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent top-[60%] animate-beam-h-slow opacity-30"></div>
         <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent top-[85%] animate-beam-h-medium opacity-20"></div>

         <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4F077] to-transparent left-[15%] animate-beam-v-fast opacity-30"></div>
         <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent left-[70%] animate-beam-v-slow opacity-30"></div>
         <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent left-[40%] animate-beam-v-medium opacity-20"></div>
      </div>

      <div className="absolute inset-0 z-1 bg-black/90"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
      
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-[5%] left-[5%] md:left-[10%] w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border border-primary/30 bg-primary/5 shadow-[0_0_30px_rgba(212,240,119,0.2)] animate-float-slow">
              <i className="ph-fill ph-shield-check text-3xl text-primary"></i>
           </div>
           <div className="absolute bottom-[20%] right-[5%] md:right-[10%] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-green-500/30 bg-green-500/5 shadow-[0_0_30px_rgba(74,222,128,0.2)] animate-float-medium">
              <i className="ph-fill ph-currency-dollar text-2xl text-green-500"></i>
           </div>
        </div>

        <div className="mb-10">
          <span className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(212,240,119,0.3)]">
            Hệ Thống Thu Nhập Mạng Xã Hội
          </span>
        </div>
        
        <div className="flex flex-col items-center gap-0 mb-12 select-none relative">
          <h1 className="text-[12rem] md:text-[18rem] font-black tracking-tight leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/5 drop-shadow-none pt-4">
             33
          </h1>

          <div className="relative -mt-6 md:-mt-10 z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-7xl font-black tracking-normal uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)] filter leading-[1.15] py-2">
                 NGÀY ĐỒNG HÀNH
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mt-4">
                 <h3 className="text-4xl md:text-6xl font-extrabold tracking-normal uppercase text-primary drop-shadow-[0_0_25px_rgba(212,240,119,0.4)] leading-[1.2] py-1">
                    Xây Kênh
                 </h3>
                 <span className="hidden md:block text-4xl text-gray-600">&</span>
                 <h3 className="text-4xl md:text-6xl font-extrabold tracking-normal uppercase text-green-400 drop-shadow-[0_0_25px_rgba(74,222,128,0.4)] leading-[1.2] py-1">
                    Thương Hiệu
                 </h3>
              </div>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 text-gray-300">
          Chúng tôi soi sáng con đường từ <span className="text-white font-bold">Con số 0</span> đến <span className="text-primary font-bold">Thành thạo</span>. 
          Biến mạng xã hội thành tài sản sinh lời thực sự.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-20">
          <button className="relative group flex items-center justify-center gap-3 font-bold text-lg px-10 py-5 rounded-full bg-primary text-black shadow-[0_0_30px_rgba(212,240,119,0.5)] hover:shadow-[0_0_50px_rgba(212,240,119,0.8)] hover:scale-105 transition-all duration-300">
            <span>Đăng Ký Ngay</span>
            <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
          
          <button className="flex items-center justify-center gap-3 font-bold text-lg px-10 py-5 rounded-full border border-gray-700 text-gray-300 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300">
            <span>Tìm Hiểu Thêm</span>
          </button>
        </div>

      </div>

      <style>{`
        @keyframes float-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }

        @keyframes beam-h {
            0% { left: -100%; opacity: 0; }
            10% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { left: 100%; opacity: 0; }
        }
        .animate-beam-h-fast { animation: beam-h 3s linear infinite; animation-delay: 0s; }
        .animate-beam-h-slow { animation: beam-h 7s linear infinite; animation-delay: 2s; }
        .animate-beam-h-medium { animation: beam-h 5s linear infinite; animation-delay: 1s; }

        @keyframes beam-v {
            0% { top: -100%; opacity: 0; }
            10% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-beam-v-fast { animation: beam-v 4s linear infinite; animation-delay: 1.5s; }
        .animate-beam-v-slow { animation: beam-v 8s linear infinite; animation-delay: 0.5s; }
        .animate-beam-v-medium { animation: beam-v 6s linear infinite; animation-delay: 3s; }
      `}</style>
    </section>
  );
};