import React, { useRef } from 'react';

export const RealCaseStudies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cases = [
    { name: "Vũ Mạnh Cầm", role: "Huấn luyện Spa", image: "https://picsum.photos/400/500?random=10" },
    { name: "Phan Thanh Dũng", role: "Huấn luyện Diễn đạt", image: "https://picsum.photos/400/500?random=11" },
    { name: "Lê Thị Tuyết", role: "Giáo viên Mầm non", image: "https://picsum.photos/400/500?random=12" },
    { name: "Nguyễn Đình Thiết", role: "Cải thiện trí nhớ", image: "https://picsum.photos/400/500?random=13" },
    { name: "Lê Kim Sang", role: "Thương hiệu Cá nhân", image: "https://picsum.photos/400/500?random=14" },
    { name: "Anna Nguyễn", role: "Trải nghiệm Khách hàng", image: "https://picsum.photos/400/500?random=15" },
    { name: "Đức Trọng", role: "Kinh doanh Online", image: "https://picsum.photos/400/500?random=16" },
    { name: "Kim Thành", role: "Chuyên gia nuôi dạy con", image: "https://picsum.photos/400/500?random=17" },
    { name: "Đặng Trọng Khang", role: "Chuyên gia chứng khoán", image: "https://picsum.photos/400/500?random=18" },
    { name: "Phan Vui", role: "Dược sĩ", image: "https://picsum.photos/400/500?random=19" },
    { name: "Nguyễn Quang Khải", role: "Kinh doanh trend", image: "https://picsum.photos/400/500?random=20" },
    { name: "Nguyễn Thành Quốc", role: "Đào tạo thuyết trình", image: "https://picsum.photos/400/500?random=21" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Width of card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-hover font-bold text-xs uppercase tracking-widest mb-6">
            Case Study Thực tế
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-6 leading-tight">
            Không phải lý thuyết <br/>
            <span className="text-gray-500">Mà là người thật</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Dưới đây không phải ví dụ truyền cảm hứng, mà là những người thật – lĩnh vực thật – kết quả thật.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 duration-300"
          >
            <i className="ph-bold ph-caret-left text-xl"></i>
          </button>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 duration-300"
          >
            <i className="ph-bold ph-caret-right text-xl"></i>
          </button>

          {/* Scroll Area */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cases.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[280px] md:w-[320px] snap-center">
                <div className="group relative h-[420px] rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800">
                  {/* Image Background */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-1 bg-primary mb-4 rounded-full"></div>
                    <h4 className="text-2xl font-bold text-white mb-1 leading-tight">{item.name}</h4>
                    <p className="text-gray-300 font-medium text-sm uppercase tracking-wide opacity-90">{item.role}</p>
                    
                    <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span>Xem kết quả</span>
                      <i className="ph-bold ph-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* End spacer */}
            <div className="w-4 flex-shrink-0"></div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300 italic">
            "Điểm chung không phải ngành nghề.<br/>
            Điểm chung là <span className="font-bold text-primary-hover not-italic">Có kênh – Có niềm tin – Có hệ thống</span>."
          </p>
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