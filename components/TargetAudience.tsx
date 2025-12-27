
import React from 'react';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      title: "Người mới bắt đầu",
      sub: "THE NEWBIE",
      desc: "Chưa bao giờ xây kênh, chưa có ý tưởng, sợ lộ mặt và không biết bắt đầu từ đâu trong ma trận thông tin.",
      icon: "ph-plant",
      color: "text-green-400",
      bg: "bg-green-500/5",
      border: "hover:border-green-500/50"
    },
    {
      title: "Creator chưa ra tiền",
      sub: "THE INVISIBLE",
      desc: "Đã đăng bài, làm video nhưng view thấp hoặc có view nhưng không thể chuyển đổi thành dòng tiền thực tế.",
      icon: "ph-pencil-slash",
      color: "text-blue-400",
      bg: "bg-blue-500/5",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Chủ DN / Freelancer",
      sub: "THE BUSY PRO",
      desc: "Có chuyên môn giỏi nhưng quá bận rộn để viết lách. Cần một hệ thống AI tự động hóa 90% quy trình.",
      icon: "ph-briefcase",
      color: "text-purple-400",
      bg: "bg-purple-500/5",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Người làm văn phòng",
      sub: "SIDE-HUSTLER",
      desc: "Muốn tận dụng 30-60 phút rảnh rỗi mỗi ngày để xây dựng tài sản số và tạo dòng thu nhập thứ 2 bền vững.",
      icon: "ph-coins",
      color: "text-primary",
      bg: "bg-primary/5",
      border: "hover:border-primary/50"
    }
  ];

  return (
    <section className="w-full py-24 px-4 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded mb-6">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
              Bộ lọc học viên
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6">
            Chương trình này <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Dành cho ai?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">
            "Hãy tự xác nhận xem bạn có thuộc về một trong những nhóm này không trước khi chúng ta bắt đầu."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-gray-800 transition-all duration-500 ${item.border} hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center text-3xl ${item.color} border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                  <i className={`ph-fill ${item.icon}`}></i>
                </div>
                <span className="font-mono text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">{item.sub}</span>
              </div>
              
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {item.desc}
              </p>
              
              {/* Corner Accent */}
              <div className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.color}`}>
                <i className="ph-bold ph-check-circle text-2xl"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
             <p className="text-lg md:text-xl font-bold text-gray-300">
               Nếu bạn thấy mình trong <span className="text-white border-b-2 border-primary">ít nhất một</span> nhóm trên...
             </p>
             <p className="text-primary mt-2 font-black uppercase tracking-widest text-sm">
               👉 CHÚC MỪNG, BẠN ĐANG Ở ĐÚNG NƠI.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};
