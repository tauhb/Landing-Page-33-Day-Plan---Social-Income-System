import React from 'react';

export const TheDay33Vision: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-[#0b0c10] to-black text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
             Hãy hình dung <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Sau 33 Ngày tới...</span>
           </h2>
        </div>

        {/* Glassmorphism Checklist Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
           {/* Decorative corner accents */}
           <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl"></div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                "Có hệ thống nội dung tự động chạy mỗi tuần",
                "Không còn cảnh 'bí ý tưởng' mỗi sáng",
                "Thương hiệu chuyên nghiệp dù không lộ mặt",
                "Khách hàng tiềm năng chủ động inbox",
                "Không cần đốt tiền chạy quảng cáo",
                "Không cần viết bài thủ công mệt mỏi",
                "Làm việc nhẹ nhàng hơn, hiệu quả hơn",
                "Kết quả gấp nhiều lần cách làm cũ"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
                      <i className="ph-bold ph-check text-sm"></i>
                   </div>
                   <span className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
           </div>

           <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold animate-pulse">
                 <i className="ph-fill ph-device-mobile"></i>
                 <span>Chỉ với điện thoại & Thời gian rảnh</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};