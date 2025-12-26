import React from 'react';

export const OldModelAnalysis: React.FC = () => {
  const reasons = [
    { title: "Bão Hoà", icon: "ph-users-three", desc: "Cạnh tranh quá lớn, biên lợi nhuận thấp." },
    { title: "Phụ Thuộc", icon: "ph-link-break", desc: "Thuật toán đổi là mất traffic, mất kênh." },
    { title: "Rủi Ro Cao", icon: "ph-warning", desc: "Nhập hàng, tồn kho, hoàn hàng." },
    { title: "Kỹ Năng Khó", icon: "ph-brain", desc: "SEO, Ads, Vận hành, Logistics..." },
    { title: "No Brand", icon: "ph-tag", desc: "Không niềm tin, cạnh tranh bằng giá rẻ." },
  ];

  return (
    <section className="w-full py-24 px-4 bg-[#0f1115] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold uppercase tracking-widest mb-2">Thật không may</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            Các mô hình cũ <br/>
            <span className="text-gray-600">Đã hết cửa cho người mới</span>
          </h2>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
              <i className={`ph-fill ${reason.icon} text-4xl text-gray-600 group-hover:text-red-500 mb-4 transition-colors`}></i>
              <h3 className="font-bold text-lg mb-2 text-gray-200">{reason.title}</h3>
              <p className="text-sm text-gray-500">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};