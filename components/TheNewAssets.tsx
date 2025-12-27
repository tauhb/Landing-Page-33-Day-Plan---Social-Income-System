import React from 'react';

export const TheNewAssets: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#08090C] border-t border-gray-800 relative overflow-hidden">
      {/* Background Wealth Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #D4F077 1px, transparent 0)', backgroundSize: '40px 40px'}}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-900/20 border border-yellow-600/30 rounded-full mb-6">
              <i className="ph-fill ph-crown text-yellow-500"></i>
              <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Tư duy làm giàu mới</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 leading-tight">
             Kênh mạng xã hội <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">= Tài Sản Mới</span>
           </h2>
           <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
             Quên Bất động sản hay Chứng khoán đi. Đây là loại tài sản bạn có thể <span className="text-white font-bold">xây dựng từ số 0</span> với rủi ro thấp nhất.
           </p>
        </div>

        {/* The 4 Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           
           {/* Asset 1: Content */}
           <div className="group relative bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                 <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    <i className="ph-fill ph-files text-2xl text-gray-400 group-hover:text-black"></i>
                 </div>
                 <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase font-mono">Loại tài sản</div>
                    <div className="text-white font-bold uppercase">Nội Dung (Content)</div>
                 </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                 Không phải là bài đăng tiêu khiển. Mỗi video/bài viết là một <span className="text-yellow-500">cỗ máy bán hàng</span> làm việc 24/7 không biết mệt.
              </p>
           </div>

           {/* Asset 2: View */}
           <div className="group relative bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                 <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <i className="ph-fill ph-eye text-2xl text-gray-400 group-hover:text-white"></i>
                 </div>
                 <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase font-mono">Loại tài sản</div>
                    <div className="text-white font-bold uppercase">Lượt Xem (Views)</div>
                 </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                 Thay vì trả tiền thuê mặt bằng ngoài phố, View chính là <span className="text-blue-500">Lưu lượng khách hàng</span> đi qua cửa hàng online của bạn.
              </p>
           </div>

           {/* Asset 3: Trust */}
           <div className="group relative bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                 <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-colors">
                    <i className="ph-fill ph-shield-check text-2xl text-gray-400 group-hover:text-black"></i>
                 </div>
                 <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase font-mono">Loại tài sản</div>
                    <div className="text-white font-bold uppercase">Niềm Tin (Trust)</div>
                 </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                 Tài sản vô hình nhưng đắt giá nhất. Niềm tin càng cao, <span className="text-green-500">tỷ lệ chốt đơn</span> càng lớn mà không cần xử lý từ chối.
              </p>
           </div>

           {/* Asset 4: Follower */}
           <div className="group relative bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                 <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <i className="ph-fill ph-users-three text-2xl text-gray-400 group-hover:text-white"></i>
                 </div>
                 <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase font-mono">Loại tài sản</div>
                    <div className="text-white font-bold uppercase">Người Theo Dõi (Fans)</div>
                 </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                 Họ không chỉ là con số. Họ là <span className="text-purple-500">Khách hàng trọn đời</span>. Bạn sở hữu tệp này, không phụ thuộc vào quảng cáo.
              </p>
           </div>

        </div>

        {/* The Conclusion Flow */}
        <div className="relative">
           {/* Flow Lines */}
           <div className="absolute left-1/2 -top-12 h-12 w-0.5 bg-gradient-to-b from-transparent to-yellow-600 hidden md:block"></div>
           
           <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-600/20 border border-yellow-600/50 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                 <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase">
                       Khai thác <span className="text-yellow-500">Dòng tiền</span>
                    </h3>
                 </div>
                 
                 <i className="ph-bold ph-arrow-right text-3xl text-yellow-600 hidden md:block"></i>
                 
                 <div className="text-right">
                    <div className="flex items-center gap-2 text-white font-black text-2xl md:text-4xl">
                       <i className="ph-fill ph-currency-dollar text-yellow-500"></i>
                       <span>THU NHẬP THỤ ĐỘNG</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};