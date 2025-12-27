
import React from 'react';

interface TheFinalCallProps {
  onCTA?: () => void;
}

export const TheFinalCall: React.FC<TheFinalCallProps> = ({ onCTA }) => {
  return (
    <section className="w-full py-24 px-4 bg-[#08090C] text-white overflow-hidden relative">
      {/* Background Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section 130: The Filter */}
        <div className="mb-24">
           <h2 className="text-center text-2xl font-bold text-gray-400 uppercase tracking-widest mb-12">
             Đây không phải lời mời dành cho tất cả
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-red-900/10 border border-red-900/30 rounded-2xl">
                 <div className="flex items-center gap-3 mb-6 text-red-500">
                    <i className="ph-fill ph-x-circle text-3xl"></i>
                    <h3 className="font-bold uppercase text-lg">Không dành cho</h3>
                 </div>
                 <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start gap-3"><span className="text-red-500 font-bold">x</span> Người chỉ muốn xem cho biết</li>
                    <li className="flex items-start gap-3"><span className="text-red-500 font-bold">x</span> Người không chịu làm</li>
                    <li className="flex items-start gap-3"><span className="text-red-500 font-bold">x</span> Người thích học nhưng không triển khai</li>
                 </ul>
              </div>

              <div className="p-8 bg-green-900/10 border border-green-900/30 rounded-2xl">
                 <div className="flex items-center gap-3 mb-6 text-green-500">
                    <i className="ph-fill ph-check-circle text-3xl"></i>
                    <h3 className="font-bold uppercase text-lg">Dành cho</h3>
                 </div>
                 <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i> Người muốn làm nghiêm túc</li>
                    <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i> Muốn có kênh thật & Thu nhập nền tảng</li>
                    <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i> Không muốn tiếp tục đi một mình</li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Section 131: Cost of Inaction */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
           <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
             "Nếu bạn tiếp tục như hiện tại... Rất có thể 6 tháng nữa, 1 năm nữa, bạn vẫn ở đúng vị trí này."
           </p>
           <p className="text-lg text-gray-500">
             Không phải vì bạn kém. <br/>
             <span className="text-white font-bold text-xl">Mà vì bạn vẫn đi một mình.</span>
           </p>
        </div>

        {/* Section 132 & 133: Final Invitation & CTA */}
        <div className="text-center">
           <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 leading-none">
             33 Ngày Đồng Hành
           </h2>
           <h3 className="text-xl md:text-2xl text-primary font-bold uppercase tracking-wide mb-8">
             Xây Kênh & Thương Hiệu Cá Nhân
           </h3>
           
           <div className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium mb-12">
              <span className="flex items-center gap-2"><i className="ph-fill ph-shield-check"></i> Không hứa giàu nhanh</span>
              <span className="flex items-center gap-2"><i className="ph-fill ph-shield-check"></i> Không vẽ bánh vẽ</span>
              <span className="flex items-center gap-2 text-white"><i className="ph-fill ph-star text-primary"></i> Chỉ tập trung Xây nền móng</span>
           </div>
           
           <p className="text-white font-bold text-lg mb-8 italic">
             Nếu bạn sẵn sàng làm thật – hãy ghi danh ngay bây giờ.
           </p>

           <div className="bg-white/5 border border-white/10 p-2 md:p-4 rounded-full inline-block">
              <button 
                onClick={onCTA}
                className="bg-primary hover:bg-primary-hover text-black font-black text-xl md:text-3xl px-12 py-6 rounded-full shadow-[0_0_50px_rgba(212,240,119,0.6)] transform hover:scale-105 transition-all duration-300 animate-pulse uppercase flex items-center gap-4 mx-auto"
              >
                 <span>👉 GIỮ CHỖ THAM GIA NGAY</span>
              </button>
           </div>
           
           <p className="mt-6 text-gray-500 text-sm font-bold uppercase tracking-widest">
             Số lượng giới hạn – Đóng đăng ký khi đủ 20 người cho lần mở cửa ghi danh này.
           </p>
        </div>

      </div>
    </section>
  );
};
