import React, { useRef } from 'react';

export const FacebookStrategy: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full py-24 px-4 bg-[#050608] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Content Box */}
        <div className="bg-[#0A0B0E] rounded-[40px] border border-white/5 p-8 md:p-16 relative overflow-hidden shadow-2xl">
            
            {/* 1. Header Badge & Title */}
            <div className="flex flex-col items-center mb-16 relative z-10">
                <div className="bg-[#FF3B30] text-white px-6 py-2 rounded-full font-black uppercase tracking-wider text-sm mb-8 shadow-[0_0_20px_rgba(255,59,48,0.4)] hover:scale-105 transition-transform">
                    Phát hiện quan trọng
                </div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-center leading-none">
                    Bài Viết <span className="text-[#4ADE80] mx-2">&gt;</span> Video
                </h2>
            </div>

            {/* 2. Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
                {/* Video Card (Negative) */}
                <div className="bg-[#0F1012] border border-white/5 rounded-3xl p-8 md:p-12 relative group hover:border-red-900/50 transition-colors">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-black text-gray-500 uppercase tracking-widest">Video</h3>
                        <div className="w-6 h-6 flex items-center justify-center text-red-500">
                             <i className="ph-bold ph-x text-2xl"></i>
                        </div>
                    </div>
                    <ul className="space-y-6">
                        {[
                            "Cần thiết bị quay, mic, đèn",
                            "Cần kỹ năng edit phức tạp",
                            "Tốn 4-5 tiếng/video",
                            "Dễ bị lướt qua nếu 3s đầu chán"
                        ].map((item, i) => (
                            <li key={i} className="text-gray-500 font-medium text-lg flex items-start gap-4">
                                <span className="text-gray-700 mt-1">-</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Text Card (Positive) */}
                <div className="bg-[#15161A] border border-[#4ADE80]/20 rounded-3xl p-8 md:p-12 relative group shadow-[0_0_60px_rgba(74,222,128,0.05)] hover:border-[#4ADE80]/50 transition-colors">
                    {/* Subtle Green Glow Top */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ADE80]/5 blur-[80px] rounded-full pointer-events-none"></div>
                    
                    <div className="flex justify-between items-center mb-8 relative z-10">
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest">Text (Bài Viết)</h3>
                        <div className="w-6 h-6 flex items-center justify-center text-[#4ADE80]">
                             <i className="ph-bold ph-check text-2xl"></i>
                        </div>
                    </div>
                    <ul className="space-y-6 relative z-10">
                        {[
                            "Chỉ cần điện thoại",
                            "AI viết hộ 90%",
                            "Tốn 15-30 phút/bài",
                            "Người đọc có xu hướng mua hàng cao hơn"
                        ].map((item, i) => (
                            <li key={i} className="text-white font-medium text-lg flex items-start gap-4">
                                <span className="text-[#4ADE80] font-bold mt-1">+</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/5 mb-16"></div>

            {/* 3. Evidence Slider */}
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-10 px-2">
                    <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Bằng chứng số liệu</h3>
                    <div className="flex gap-3">
                        <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-[#1F2128] hover:bg-[#2A2D35] border border-white/5 hover:border-white/20 flex items-center justify-center text-white transition-all">
                            <i className="ph-bold ph-caret-left"></i>
                        </button>
                        <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-[#1F2128] hover:bg-[#2A2D35] border border-white/5 hover:border-white/20 flex items-center justify-center text-white transition-all">
                            <i className="ph-bold ph-caret-right"></i>
                        </button>
                    </div>
                </div>

                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory px-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                     {[
                        { title: "Tiếp cận tự nhiên", img: "https://picsum.photos/400/600?random=100" },
                        { title: "Tương tác thật", img: "https://picsum.photos/400/600?random=101" },
                        { title: "Viral Text", img: "https://picsum.photos/400/600?random=102" },
                        { title: "Đơn hàng về", img: "https://picsum.photos/400/600?random=103" },
                        { title: "Affiliate Income", img: "https://picsum.photos/400/600?random=104" },
                     ].map((item, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[260px] md:w-[300px] snap-center">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-white/10 hover:border-white/30 transition-colors">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                                    <div className="bg-[#EAEAEA] text-black px-4 py-1.5 rounded font-bold text-sm shadow-lg">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))}
                </div>
            </div>

            {/* Footer Text */}
            <div className="mt-8 text-center">
                <p className="text-xl text-gray-400 font-medium">
                    Thuật toán đang ưu tiên nội dung có chiều sâu.<br/>
                    <span className="text-white font-bold">Đây là cơ hội của bạn.</span>
                </p>
            </div>

        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
};