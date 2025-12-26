import React, { useState } from 'react';

interface Milestone {
  id: number;
  x: number;
  y: number;
  label: string;
  subLabel: string;
  date: string;
  color: string;
  image: string;
  stats: string;
}

export const TheComeback: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<Milestone | null>(null);

  const handleNodeClick = (milestone: Milestone) => {
    if (selectedNode?.id === milestone.id) {
      setSelectedNode(null); // Toggle off if clicking the same node
    } else {
      setSelectedNode(milestone);
    }
  };

  // Data points for the chart (ViewBox 0 0 800 400)
  const milestones: Milestone[] = [
    { 
      id: 1, 
      x: 50, y: 100, 
      label: "KHỞI ĐẦU", 
      subLabel: "17M Views",
      date: "Tháng 1",
      color: "#60A5FA", // Blue
      image: "https://picsum.photos/400/300?random=1",
      stats: "Tiếp cận tự nhiên cao"
    },
    { 
      id: 2, 
      x: 250, y: 320, 
      label: "BIẾN CỐ", 
      subLabel: "Bị Hạn Chế",
      date: "Tháng 2",
      color: "#EF4444", // Red
      image: "https://picsum.photos/400/300?random=2",
      stats: "Mất traffic, doanh thu = 0"
    },
    { 
      id: 3, 
      x: 450, y: 200, 
      label: "CHIẾN LƯỢC MỚI", 
      subLabel: "System 100X",
      date: "Giữa T2",
      color: "#FBBF24", // Yellow
      image: "https://picsum.photos/400/300?random=3",
      stats: "Triển khai tự động hoá"
    },
    { 
      id: 4, 
      x: 750, y: 50, 
      label: "VIRAL BỀN VỮNG", 
      subLabel: "Kỷ lục mới",
      date: "Tháng 3",
      color: "#D4F077", // Primary
      image: "https://picsum.photos/400/300?random=4",
      stats: "+200% Tăng trưởng"
    }
  ];

  return (
    <section className="w-full py-24 px-4 bg-[#0F1115] text-white border-t border-gray-800 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-xs uppercase tracking-widest mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Live Proof
           </div>
           <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
             Sự trở lại <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Mạnh mẽ hơn</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             "Nhấp vào các điểm trên biểu đồ để xem bằng chứng thực tế."
           </p>
        </div>

        {/* MAIN DASHBOARD UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* LEFT PANEL (8 Cols) - The Interactive Chart */}
           <div className="lg:col-span-8 bg-[#1A1D24] border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col h-[500px] relative group overflow-hidden">
              
              <div className="flex justify-between items-center mb-6 relative z-20">
                  <div>
                    <h3 className="font-bold text-gray-200 uppercase tracking-wider text-sm">Biểu đồ hiệu suất</h3>
                    <div className="text-xs text-gray-500 mt-1">Dữ liệu từ hệ thống Analytics</div>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-red-500"></span>
                     <span className="text-[10px] text-gray-500 uppercase">Khủng hoảng</span>
                     <span className="w-2 h-2 rounded-full bg-primary ml-2"></span>
                     <span className="text-[10px] text-gray-500 uppercase">Tăng trưởng</span>
                  </div>
              </div>
              
              {/* Chart Container */}
              <div 
                className="flex-1 relative w-full rounded-2xl border border-gray-800/50 bg-black/40"
                onClick={() => setSelectedNode(null)} // Click background to close
              >
                 
                 {/* 1. Grid Background */}
                 <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none p-8">
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                    <div className="w-full h-px bg-white"></div>
                 </div>

                 {/* 2. Interactive SVG Layer */}
                 <svg className="absolute inset-0 w-full h-full p-8 overflow-visible" viewBox="0 0 800 400" preserveAspectRatio="none">
                    <defs>
                       <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#60A5FA" />
                          <stop offset="30%" stopColor="#EF4444" />
                          <stop offset="60%" stopColor="#FBBF24" />
                          <stop offset="100%" stopColor="#D4F077" />
                       </linearGradient>
                       <filter id="glowEffect">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* The Path */}
                    <path 
                       d={`M ${milestones[0].x} ${milestones[0].y} L ${milestones[1].x} ${milestones[1].y} L ${milestones[2].x} ${milestones[2].y} L ${milestones[3].x} ${milestones[3].y}`} 
                       fill="none" 
                       stroke="url(#chartGradient)" 
                       strokeWidth="4" 
                       strokeLinecap="round" 
                       strokeLinejoin="round"
                       filter="url(#glowEffect)"
                       className="drop-shadow-2xl"
                    />

                    {/* Nodes & Labels */}
                    {milestones.map((m) => {
                       const isSelected = selectedNode?.id === m.id;
                       return (
                          <g 
                            key={m.id} 
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent chart background click
                                handleNodeClick(m);
                            }}
                            className="cursor-pointer transition-all duration-300 group/node"
                            style={{ opacity: selectedNode && !isSelected ? 0.3 : 1 }}
                          >
                             {/* Pulsing Effect */}
                             <circle cx={m.x} cy={m.y} r="15" fill={m.color} opacity="0.2">
                                <animate attributeName="r" from="15" to="30" dur="1.5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" repeatCount="indefinite" />
                             </circle>
                             
                             {/* The Dot */}
                             <circle cx={m.x} cy={m.y} r="8" fill={m.color} stroke="#1A1D24" strokeWidth="3" className={`transition-transform duration-300 origin-center ${isSelected ? 'scale-150' : 'group-hover/node:scale-125'}`} />
                             
                             {/* The Label Group (Clickable Area) */}
                             <foreignObject x={m.x - 60} y={m.y + 15} width="120" height="60">
                                <div className="flex flex-col items-center text-center">
                                   <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm transition-all duration-300 ${isSelected ? 'bg-white text-black scale-110' : 'bg-black/50 text-gray-300 group-hover/node:text-white'}`} style={{ border: `1px solid ${m.color}` }}>
                                      {m.label}
                                   </span>
                                   <span className="text-[10px] text-gray-500 font-mono mt-1 bg-black/80 px-1 rounded">{m.date}</span>
                                </div>
                             </foreignObject>
                          </g>
                       );
                    })}
                 </svg>

                 {/* 3. Evidence Overlay Popup (Absolute Positioned based on Logic) */}
                 <div 
                    className={`
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[90%] md:w-[400px] bg-black/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 shadow-2xl z-50
                        transition-all duration-300 transform origin-center
                        ${selectedNode ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
                    `}
                    onClick={(e) => e.stopPropagation()} // Prevent clicking inside popup from closing it
                 >
                    {selectedNode && (
                       <div className="flex flex-col gap-3">
                          <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: selectedNode.color}}></div>
                                <span className="text-sm font-bold text-white uppercase">{selectedNode.subLabel}</span>
                             </div>
                             <div className="flex items-center gap-3">
                                <span className="text-xs text-gray-500 font-mono hidden sm:inline">BẰNG CHỨNG</span>
                                {/* Close Button */}
                                <button 
                                    onClick={() => setSelectedNode(null)}
                                    className="w-6 h-6 rounded-full bg-gray-800 hover:bg-white hover:text-black flex items-center justify-center transition-colors"
                                >
                                    <i className="ph-bold ph-x text-xs"></i>
                                </button>
                             </div>
                          </div>
                          
                          <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
                             <img src={selectedNode.image} alt="Evidence" className="w-full h-full object-cover opacity-90" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                             <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                                <span className="text-xs font-bold text-white">{selectedNode.stats}</span>
                             </div>
                          </div>
                          
                          <div className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
                             Dữ liệu tại thời điểm {selectedNode.date}
                          </div>
                       </div>
                    )}
                 </div>

                 {/* Default Text when no selection */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none transition-opacity duration-300 ${selectedNode ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 animate-pulse">
                       <p className="text-xs text-gray-400 uppercase tracking-widest">
                          <i className="ph-fill ph-hand-tap mr-2"></i>
                          Nhấp vào các điểm để xem chi tiết
                       </p>
                    </div>
                 </div>

              </div>
           </div>

           {/* RIGHT PANEL (4 Cols) - Stats & Feed */}
           <div className="lg:col-span-4 flex flex-col gap-4 h-[500px]">
              
              {/* Stat Card 1: Time */}
              <div className="bg-[#1A1D24] p-6 rounded-3xl border border-gray-800 hover:border-gray-600 transition-colors">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Thời gian phục hồi</span>
                    <i className="ph-fill ph-clock-clockwise text-gray-600"></i>
                 </div>
                 <div className="text-4xl font-black text-white">7 NGÀY</div>
                 <div className="text-green-500 text-xs font-bold mt-2 flex items-center gap-1">
                    <i className="ph-bold ph-trend-up"></i> Nhanh kỷ lục
                 </div>
              </div>

              {/* Stat Card 2: Status */}
              <div className="bg-[#1A1D24] p-6 rounded-3xl border border-gray-800 hover:border-green-500/30 transition-colors group">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Trạng thái kênh</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 </div>
                 <div className="text-4xl font-black text-green-400 group-hover:text-green-300 transition-colors">XANH</div>
                 <div className="text-gray-400 text-xs font-bold mt-2">Không vi phạm</div>
              </div>

              {/* Feed: Notifications */}
              <div className="flex-1 bg-[#1A1D24] rounded-3xl border border-gray-800 p-4 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#1A1D24] to-transparent z-10"></div>
                 <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#1A1D24] to-transparent z-10"></div>
                 
                 <div className="space-y-3 pt-2">
                    {/* Notif 1 */}
                    <div className="bg-black/40 p-3 rounded-xl border border-gray-700/50 flex items-center gap-3 animate-slide-in-right opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs"><i className="ph-fill ph-thumbs-up"></i></div>
                        <div>
                           <div className="text-xs font-bold text-white">+15.2K lượt thích</div>
                           <div className="text-[10px] text-gray-500">24 giờ qua</div>
                        </div>
                    </div>
                    {/* Notif 2 */}
                    <div className="bg-black/40 p-3 rounded-xl border border-gray-700/50 flex items-center gap-3 animate-slide-in-right opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs"><i className="ph-fill ph-share-network"></i></div>
                        <div>
                           <div className="text-xs font-bold text-white">342 Chia sẻ mới</div>
                           <div className="text-[10px] text-gray-500">Nội dung Viral</div>
                        </div>
                    </div>
                    {/* Notif 3 */}
                    <div className="bg-black/40 p-3 rounded-xl border border-gray-700/50 flex items-center gap-3 animate-slide-in-right opacity-0" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs"><i className="ph-fill ph-trend-up"></i></div>
                        <div>
                           <div className="text-xs font-bold text-white">Top Xu Hướng</div>
                           <div className="text-[10px] text-gray-500">Đang thịnh hành</div>
                        </div>
                    </div>
                 </div>
              </div>

           </div>

        </div>
        
        <div className="mt-16 text-center">
            <p className="text-lg md:text-xl text-gray-400 italic">
               "Khi thấy kết quả này lặp lại liên tục, tôi biết mình đã tìm ra công thức."
            </p>
            <div className="mt-8 flex justify-center">
               <i className="ph-bold ph-arrow-down text-3xl text-primary animate-bounce"></i>
            </div>
        </div>

      </div>
      <style>{`
         @keyframes slide-in-right {
            0% { transform: translateX(20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
         }
         .animate-slide-in-right {
            animation: slide-in-right 0.5s ease-out forwards;
         }
      `}</style>
    </section>
  );
};