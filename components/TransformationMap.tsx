import React, { useState, useRef, useEffect, useCallback } from 'react';

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
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isClick = useRef(true); // Ref để phân biệt Drag vs Click

  const requestRef = useRef<number>(null);
  const lastTimestamp = useRef<number>(0);

  const proofs: ProofItem[] = [
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cce889d3a15380025a.png", tag: "5.1M Lượt xem", platform: "FB: Hoàng Bá Tầu 01" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cce889d33f07800261.png", tag: "7.7 triệu lượt xem", platform: "FB: Nguyễn Thành" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cc42bb1c108e3b42be.png", tag: "59M lượt xem", platform: "Mẹo Làm Chủ AI" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24ccb62dd360b7e17579.png", tag: "Hồi sinh Fanpage", platform: "Rainmaker" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cce889d3352f800259.png", tag: "+5000 Theo dõi", platform: "FB: Hoàng Bá Tầu 02" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24ccb62dd390dee17578.png", tag: "22 triệu lượt xem", platform: "Page mới RMK" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cc42bb1c68513b42bc.png", tag: "23 triệu lượt xem", platform: "Thuý Nguyễn RMK" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cc6caf490e2d690b72.png", tag: "359 Leads / ngày", platform: "Lead mới" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cc835a58d094c0c2c8.jpg", tag: "100+ nhóm Zalo", platform: "Zalo Group" },
    { url: "https://storage.googleapis.com/msgsndr/nWwodtlNPVJ0Y1l4tpNb/media/694f24cce889d3658d800260.png", tag: "+149 cơ hội bán hàng", platform: "Hẹn lịch" },
  ];

  // Nhân bản dữ liệu để loop vô tận mượt hơn
  const extendedProofs = [...proofs, ...proofs, ...proofs];

  /* --- SCROLL ANIMATION LOGIC --- */
  const animate = (time: number) => {
    if (lastTimestamp.current !== undefined && containerRef.current) {
      if (!isDragging && !lightboxOpen) {
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
  }, [isDragging, velocity, lightboxOpen]);

  /* --- DRAG HANDLERS --- */
  const handleMouseDown = (e: React.MouseEvent) => {
    isClick.current = true; // Assume it's a click initially
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    setVelocity(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX);
    
    // Nếu di chuyển quá 5px thì coi như đang Drag, không phải Click
    if (Math.abs(walk) > 5) {
        isClick.current = false;
    }

    const walkMultiplied = walk * 1.8;
    const prevScrollLeft = containerRef.current.scrollLeft;
    containerRef.current.scrollLeft = scrollLeft - walkMultiplied;
    setVelocity(containerRef.current.scrollLeft - prevScrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  /* --- LIGHTBOX LOGIC --- */
  const openLightbox = (index: number) => {
    // Map index from extended array back to original proofs array
    const realIndex = index % proofs.length;
    setCurrentImageIndex(realIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % proofs.length);
  }, [proofs.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + proofs.length) % proofs.length);
  }, [proofs.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);


  // Render một khối ảnh Bento với hiệu ứng "Smart Fit & Blur Backdrop"
  const renderItem = (item: ProofItem, idx: number, height: string, width: string = "w-[260px] md:w-[320px]") => (
    <div 
        className={`${width} ${height} flex-shrink-0 group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#111] border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer`}
        onClick={() => {
            if (isClick.current) openLightbox(idx);
        }}
    >
      
      {/* Layer 1: Blurred Background (Ambient Fill) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={item.url} 
            className="w-full h-full object-cover blur-xl opacity-40 scale-125 group-hover:scale-150 transition-transform duration-700 will-change-transform" 
            alt=""
          />
          <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Layer 2: Main Image (Full Content Visible) */}
      <div className="absolute inset-0 z-10 p-3 flex items-center justify-center pointer-events-none">
          <img 
            src={item.url} 
            className="w-full h-full object-contain drop-shadow-2xl rounded-lg group-hover:scale-[1.02] transition-transform duration-500 will-change-transform" 
            alt={item.tag}
          />
      </div>

      {/* Layer 3: Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex justify-between items-center gap-2">
          <div className="bg-primary text-black text-[10px] font-black px-3 py-1.5 rounded shadow-lg uppercase tracking-wide truncate">
            {item.tag}
          </div>
          <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest bg-black/40 px-2 py-1 rounded border border-white/10 backdrop-blur-md truncate max-w-[120px]">
            {item.platform}
          </span>
        </div>
      </div>

      {/* Click Hint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-black/60 backdrop-blur-sm p-3 rounded-full border border-white/20">
             <i className="ph-fill ph-magnifying-glass-plus text-2xl text-white"></i>
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
          KẾT QUẢ <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">CỦA CHÚNG TÔI</span>
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
        {extendedProofs.map((item, idx) => {
          if (idx % 3 === 0) {
            return (
              <div key={idx} className="flex flex-col h-full">
                {renderItem(extendedProofs[idx], idx, "h-full", "w-[240px] md:w-[300px]")}
              </div>
            );
          } else if (idx % 3 === 1) {
            return (
              <div key={idx} className="flex flex-col gap-4 h-full">
                {renderItem(extendedProofs[idx], idx, "h-[217px]", "w-[280px] md:w-[380px]")}
                {extendedProofs[idx+1] && renderItem(extendedProofs[idx+1], idx + 1, "h-[217px]", "w-[280px] md:w-[380px]")}
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Manual Interaction Badge */}
      <div className="mt-12 flex justify-center">
         <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 text-gray-500 font-bold text-[10px] uppercase tracking-widest backdrop-blur-md">
            <i className="ph-fill ph-hand-grabbing animate-bounce text-primary"></i>
            <span>Click để xem full ảnh hoặc Kéo để lướt</span>
         </div>
      </div>

      {/* --- LIGHTBOX OVERLAY --- */}
      {lightboxOpen && (
        <div 
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
        >
            
            {/* Prev Button - Left Center */}
            <button 
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-50" 
                onClick={prevImage}
            >
                <i className="ph-bold ph-caret-left text-2xl"></i>
            </button>
            
            {/* Next Button - Right Center */}
            <button 
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-50" 
                onClick={nextImage}
            >
                <i className="ph-bold ph-caret-right text-2xl"></i>
            </button>

            {/* Main Content */}
            <div className="relative max-w-7xl w-full flex flex-col justify-center items-center" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={proofs[currentImageIndex].url} 
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-zoom-in" 
                    alt="Proof Full"
                />
                
                {/* Info Bar & Close Button Container */}
                <div className="mt-6 flex flex-col items-center gap-4">
                     <div className="flex flex-col items-center gap-2">
                        <div className="bg-primary text-black text-sm font-black px-4 py-2 rounded-full uppercase tracking-wide shadow-glow">
                            {proofs[currentImageIndex].tag}
                        </div>
                        <div className="text-gray-400 font-bold uppercase text-xs tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10">
                            {proofs[currentImageIndex].platform}
                        </div>
                        <div className="text-gray-600 text-[10px] mt-1">
                            Ảnh {currentImageIndex + 1} / {proofs.length}
                        </div>
                     </div>

                     {/* Moved Close Button Here */}
                     <button 
                        onClick={closeLightbox}
                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-500 border border-white/10 flex items-center justify-center text-white transition-all"
                        title="Đóng"
                     >
                        <i className="ph-bold ph-x text-xl"></i>
                     </button>
                </div>
            </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        
        @keyframes zoom-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in { animation: zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .shadow-glow { box-shadow: 0 0 20px rgba(212, 240, 119, 0.4); }
      `}</style>
    </section>
  );
};