import React from 'react';

export const TheSoloTrap: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "HƯNG PHẤN",
      sub: "GIAI ĐOẠN TỰ HỌC",
      desc: '"Tìm tài liệu Free, xem Youtube, lưu hàng tá video về máy."',
      icon: "ph-books",
      color: "text-blue-300",
      borderColor: "border-blue-900/50",
      bgGradient: "from-blue-900/10 to-transparent",
      shadow: "shadow-blue-900/20",
      iconBg: "bg-blue-900/20"
    },
    {
      step: "02",
      title: "ẢO TƯỞNG",
      sub: "GIAI ĐOẠN BIẾT NHIỀU",
      desc: '"Cái gì cũng biết. Lý thuyết đầy đầu. Tự tin 100%."',
      icon: "ph-lightbulb",
      color: "text-blue-500",
      borderColor: "border-blue-700/50",
      bgGradient: "from-blue-800/10 to-transparent",
      shadow: "shadow-blue-700/20",
      iconBg: "bg-blue-800/20"
    },
    {
      step: "03",
      title: "VA CHẠM",
      sub: "GIAI ĐOẠN TỰ LÀM",
      desc: '"Bắt tay vào làm. Lỗi tùm lum. Không ai sửa. Bí ý tưởng."',
      icon: "ph-wrench",
      color: "text-yellow-500",
      borderColor: "border-yellow-700/50",
      bgGradient: "from-yellow-900/10 to-transparent",
      shadow: "shadow-yellow-700/20",
      iconBg: "bg-yellow-900/20"
    },
    {
      step: "04",
      title: "KHỦNG HOẢNG",
      sub: "GIAI ĐOẠN CHÁN NẢN",
      desc: '"Làm mãi không lên view. Nghi ngờ bản thân. Mất phương hướng."',
      icon: "ph-battery-warning",
      color: "text-orange-500",
      borderColor: "border-orange-700/50",
      bgGradient: "from-orange-900/10 to-transparent",
      shadow: "shadow-orange-700/20",
      iconBg: "bg-orange-900/20"
    },
    {
      step: "05",
      title: "NGÕ CỤT",
      sub: "GIAI ĐOẠN BỎ CUỘC",
      desc: '"Quay lại vạch xuất phát. Mất 6 tháng vô ích."',
      icon: "ph-skull",
      color: "text-red-500",
      borderColor: "border-red-600",
      bgGradient: "from-red-900/20 to-transparent",
      shadow: "shadow-red-900/40",
      iconBg: "bg-red-900/30"
    }
  ];

  return (
    <section className="w-full py-24 px-4 bg-black border-t border-gray-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gray-500 uppercase tracking-widest font-bold text-sm mb-4">
            CẢNH BÁO: CON ĐƯỜNG MÒN 99% NGƯỜI MỚI ĐỀU ĐI
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
            CÁI BẪY CỦA VIỆC <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 decoration-red-600 underline decoration-4 underline-offset-8">"TỰ MÀY MÒ"</span>
          </h2>
        </div>

        {/* The 5 Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 mb-20">
          
          {steps.map((item, idx) => (
            <div key={idx} className="relative group h-full">
              
              {/* Connector Arrow (Desktop: Right, Mobile: Down) */}
              {idx < steps.length - 1 && (
                 <>
                   {/* Desktop Arrow */}
                   <div className="hidden md:flex absolute top-1/2 -right-6 z-20 text-gray-600 transform -translate-y-1/2 justify-center w-8">
                      <i className="ph-fill ph-caret-right text-xl"></i>
                   </div>
                   {/* Mobile Arrow */}
                   <div className="md:hidden absolute -bottom-6 left-1/2 z-20 text-gray-600 transform -translate-x-1/2 h-8 flex items-center">
                      <i className="ph-fill ph-caret-down text-xl"></i>
                   </div>
                 </>
              )}

              {/* Card */}
              <div className={`
                h-full relative z-10 p-6 rounded-xl border ${item.borderColor} bg-gradient-to-b ${item.bgGradient} bg-[#0A0A0A]
                flex flex-col items-center text-center transition-all duration-300 shadow-lg ${item.shadow}
                hover:-translate-y-2
              `}>
                
                {/* Icon */}
                <div className={`
                  w-14 h-14 rounded-full flex items-center justify-center 
                  text-2xl font-black mb-6 ${item.iconBg} ${item.color}
                `}>
                  <i className={`ph-fill ${item.icon}`}></i>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-black uppercase mb-1 ${item.color} leading-none`}>
                  {item.title}
                </h3>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-6">
                  {item.sub}
                </p>
                
                {/* Divider */}
                <div className="w-full h-px bg-gray-800 mb-6"></div>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Bottom Warning Box */}
        <div className="max-w-4xl mx-auto">
           <div className="relative bg-[#080808] border border-gray-800 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
              {/* Subtle Red Glow */}
              <div className="absolute inset-0 bg-red-900/5 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-6">
                 {/* Exclamation Icon */}
                 <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(220,38,38,0.4)] animate-pulse">
                    <i className="ph-bold ph-warning"></i>
                 </div>
                 
                 <h3 className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed max-w-2xl">
                   "Cái bạn thiếu không phải Kiến thức Free trên mạng.<br/>
                   Cái bạn thiếu là <span className="text-white font-black uppercase">Môi trường</span> & <span className="text-white font-black uppercase">Người dẫn đường</span> sửa sai cho bạn."
                 </h3>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};