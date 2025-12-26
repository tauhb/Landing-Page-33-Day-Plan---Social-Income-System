import React, { useState, useRef, useEffect } from 'react';

interface ProofItem {
  url: string;
  tag: string;
  platform: string;
}

export const TransformationMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const requestRef = useRef<number>(null);
  const lastTimestamp = useRef<number>(0);

  const proofs: ProofItem[] = [
    { url: "https://picsum.photos/600/1000?random=1", tag: "1.2M Lượt xem", platform: "TikTok" },
    { url: "https://picsum.photos/600/600?random=2", tag: "Inbox nổ đơn", platform: "Messenger" },
    { url: "https://picsum.photos/800/500?random=3", tag: "Kênh Ẩn Danh", platform: "Reels" },
    { url: "https://picsum.photos/600/900?random=4", tag: "Viral sau 3 ngày", platform: "Facebook" },
    { url: "https://picsum.photos/500/500?random=5", tag: "+5000 Theo dõi", platform: "TikTok" },
    { url: "https://picsum.photos/700/400?random=6", tag: "Hoa hồng về", platform: "Affiliate" },
    { url: "https://picsum.photos/600/1100?random=7", tag: "800K Tiếp cận", platform: "Instagram" },
    { url: "https://picsum.photos/600/600?random=8", tag: "Đơn hàng mới", platform: "Shop" },
    { url: "https://picsum.photos/600/800?random=9", tag: "100 Triệu Doanh thu", platform: "Reels" },
    { url: "https://picsum.photos/600/600?random=10", tag: "Xây kênh 0đ", platform: "Facebook" },
  ];

  // Nhân bản dữ liệu để loop vô tận mượt hơn
  const extendedProofs = [...proofs, ...proofs, ...proofs];

  const animate = (time: number) => {
    if (lastTimestamp.current !== undefined && containerRef.current) {
      if (!isDragging) {
        const drift = 0.6; // Tốc độ trôi tự động
        containerRef.current.scrollLeft += velocity + drift;
        setVelocity(prev => prev * 0.95); // Giảm dần vận tốc (ma sát)

        const maxScroll = containerRef.current.scrollWidth / 2;
        if (containerRef.current.scrollLeft >= maxScroll) {
          containerRef.current.scrollLeft -= maxScroll;
        }
      }
    }
    lastTimestamp.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isDragging, velocity]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    setVelocity(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    const prevScrollLeft = containerRef.current.scrollLeft;
    containerRef.current.scrollLeft = scrollLeft - walk;
    setVelocity(containerRef.current.scrollLeft - prevScrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Render một khối ảnh Bento
  const renderItem = (item: ProofItem, height: string, width: string = "w-[260px] md:w-[320px]") => (
    <div className={`${width} ${height} flex-shrink-0 group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#111] border border-white/5 hover:border-primary/40 transition-all duration-500`}>
      <img 
        src={item.url} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end">
          <div className="bg-primary text-black text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase">
            {item.tag}
          </div>
          <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">{item.platform}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden select-none border-t border-white/5">
      {/* Dark Vignette Edges */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
        <p className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Hãy cùng xem những con số</p>
        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.15] py-2">
          KẾT QUẢ <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">THỰC TẾ</span>
        </h2>
      </div>

      {/* THE 450PX FIXED BENTO STREAM */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`
          flex gap-4 md:gap-6 px-10 h-[450px] cursor-grab active:cursor-grabbing overflow-x-hidden transition-transform duration-300
          ${isDragging ? 'scale-[0.99]' : 'scale-100'}
        `}
        style={{ scrollBehavior: 'auto', touchAction: 'pan-y' }}
      >
        {/* Logic sắp xếp cột để vừa 450px */}
        {extendedProofs.map((item, idx) => {
          // Quy tắc: Cột 1 (Dọc 1 cái), Cột 2 (Ngang 2 cái chồng nhau), Cột 3 (Dọc 1 cái), ...
          if (idx % 3 === 0) {
            // Cột 1 cái TALL (450px)
            return (
              <div key={idx} className="flex flex-col h-full">
                {renderItem(extendedProofs[idx], "h-full", "w-[240px] md:w-[300px]")}
              </div>
            );
          } else if (idx % 3 === 1) {
            // Cột 2 cái chồng lên nhau (217px + 16px gap + 217px = 450px)
            return (
              <div key={idx} className="flex flex-col gap-4 h-full">
                {renderItem(extendedProofs[idx], "h-[217px]", "w-[280px] md:w-[380px]")}
                {extendedProofs[idx+1] && renderItem(extendedProofs[idx+1], "h-[217px]", "w-[280px] md:w-[380px]")}
              </div>
            );
          }
          return null; // Bỏ qua index đã được render trong khối cặp
        })}
      </div>

      {/* Manual Interaction Badge */}
      <div className="mt-12 flex justify-center">
         <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 text-gray-500 font-bold text-[10px] uppercase tracking-widest backdrop-blur-md">
            <i className="ph-fill ph-hand-grabbing animate-bounce text-primary"></i>
            <span>Giữ và kéo để lướt nhanh bằng chứng</span>
         </div>
      </div>
    </section>
  );
};