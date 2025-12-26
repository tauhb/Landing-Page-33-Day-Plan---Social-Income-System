import React, { useState, useEffect } from 'react';

export const IntegratedSystemFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Phễu hứng ý tưởng",
      desc: "Hệ thống tự động quét và nạp nguyên liệu ý tưởng từ thị trường. Bạn không bao giờ phải ngồi cắn bút suy nghĩ.",
      icon: "ph-funnel",
      color: "text-cyan-400",
      activeBorder: "border-cyan-500",
      activeShadow: "shadow-[0_0_40px_rgba(34,211,238,0.4)]",
      gradient: "from-cyan-500/20 to-transparent"
    },
    {
      id: 2,
      title: "Tạo & Nhân bản",
      desc: "AI 'buồng đốt' xử lý 1 ý tưởng gốc thành hàng chục kịch bản content khác nhau chỉ trong vài giây.",
      icon: "ph-copy",
      color: "text-purple-400",
      activeBorder: "border-purple-500",
      activeShadow: "shadow-[0_0_40px_rgba(192,132,252,0.4)]",
      gradient: "from-purple-500/20 to-transparent"
    },
    {
      id: 3,
      title: "Sản xuất hàng loạt",
      desc: "Tự động đóng gói nội dung thành Hình ảnh, Carousel hoặc Video ngắn chuẩn format nền tảng.",
      icon: "ph-film-strip",
      color: "text-blue-400",
      activeBorder: "border-blue-500",
      activeShadow: "shadow-[0_0_40px_rgba(96,165,250,0.4)]",
      gradient: "from-blue-500/20 to-transparent"
    },
    {
      id: 4,
      title: "Xuất hiện đa kênh",
      desc: "Phân phối nội dung đồng loạt lên Facebook, Reels, Instagram... để phủ sóng thương hiệu.",
      icon: "ph-share-network",
      color: "text-orange-400",
      activeBorder: "border-orange-500",
      activeShadow: "shadow-[0_0_40px_rgba(251,146,60,0.4)]",
      gradient: "from-orange-500/20 to-transparent"
    },
    {
      id: 5,
      title: "Tự động hoá",
      desc: "Thiết lập một lần, hệ thống tự chạy 24/7. Lên lịch, đăng bài và điều hướng khách hàng.",
      icon: "ph-gear-six",
      color: "text-red-400",
      activeBorder: "border-red-500",
      activeShadow: "shadow-[0_0_40px_rgba(248,113,113,0.4)]",
      gradient: "from-red-500/20 to-transparent"
    },
    {
      id: 6,
      title: "Tận hưởng thành quả",
      desc: "Dòng tiền và Khách hàng tự động đổ về. Bạn có sự tự do trong khi hệ thống vẫn làm việc.",
      icon: "ph-trophy",
      color: "text-[#D4F077]",
      activeBorder: "border-[#D4F077]",
      activeShadow: "shadow-[0_0_100px_rgba(212,240,119,0.8)]",
      gradient: "from-[#D4F077]/30 to-transparent",
      isFinal: true
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-black overflow-hidden font-sans border-t border-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gray-700"></span>
            CÁCH THỨC HOẠT ĐỘNG
            <span className="w-8 h-px bg-gray-700"></span>
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            CỖ MÁY <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">NỘI DUNG 100X</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-900 -z-10 -translate-y-1/2"></div>
            <div className="hidden lg:block absolute left-1/3 top-0 h-full w-1 bg-gray-900 -z-10 -translate-x-1/2"></div>
            <div className="hidden lg:block absolute right-1/3 top-0 h-full w-1 bg-gray-900 -z-10 translate-x-1/2"></div>

            {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isFinal = step.isFinal;
                
                return (
                    <div 
                        key={index}
                        className={`
                            relative rounded-[2rem] p-8 border-2 transition-all duration-500 overflow-hidden group h-full flex flex-col
                            ${isActive 
                                ? `${step.activeBorder} bg-[#0A0A0A] z-10 scale-[1.02] ${step.activeShadow}` 
                                : 'border-gray-800 bg-[#050505] hover:border-gray-700'
                            }
                        `}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent opacity-100 transition-opacity duration-500`}></div>
                        <div className={`
                            absolute inset-0 bg-gradient-to-br ${step.gradient} transition-opacity duration-300
                            ${isActive ? 'opacity-100' : 'opacity-0'}
                        `}></div>

                        {isActive && !isFinal && (
                            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                                <div className={`absolute top-0 left-0 w-full h-[300%] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full animate-[scan-vertical_1.5s_linear_forwards]`}></div>
                            </div>
                        )}

                        {isActive && isFinal && (
                             <>
                                <div className="absolute inset-0 bg-[#D4F077] opacity-20 animate-pulse"></div>
                                <div className="absolute -inset-1 bg-[#D4F077]/30 blur-2xl animate-pulse"></div>
                                <div className="absolute top-4 right-4 text-white animate-ping">✦</div>
                             </>
                        )}

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`
                                    w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border
                                    ${isActive 
                                        ? `bg-black/50 ${step.color} border-white/20 shadow-inner` 
                                        : 'bg-gray-900 text-gray-500 border-gray-800'
                                    }
                                    transition-all duration-300
                                `}>
                                    <i className={`ph-fill ${step.icon}`}></i>
                                </div>
                                <div className={`font-mono text-xl font-black ${isActive ? step.color : 'text-gray-800'}`}>
                                    0{step.id}
                                </div>
                            </div>

                            <h3 className={`text-2xl font-black uppercase mb-3 ${isActive ? 'text-white' : 'text-gray-300'} transition-colors duration-300`}>
                                {step.title}
                            </h3>
                            <p className={`${isActive ? 'text-gray-300' : 'text-gray-500'} text-sm leading-relaxed font-medium transition-colors duration-300`}>
                                {step.desc}
                            </p>

                            <div className="mt-auto pt-8">
                                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${step.color.replace('text-', 'bg-')} transition-all duration-500 ease-out ${isActive ? 'w-full shadow-[0_0_10px_currentColor]' : 'w-0'}`}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                     <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? step.color : 'text-gray-700'}`}>
                                        {isActive ? (isFinal ? 'HOÀN THÀNH' : 'ĐANG XỬ LÝ...') : 'CHẾ ĐỘ CHỜ'}
                                    </span>
                                    {isActive && <i className={`ph-bold ph-lightning ${step.color} animate-pulse`}></i>}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        
        <style>{`
            @keyframes scan-vertical {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
        `}</style>
      </div>
    </section>
  );
};