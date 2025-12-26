import React from 'react';

export const TheStruggleStory: React.FC = () => {
  const attempts = [
    "Nhập mã Captcha", "Hàng Trung Quốc", "Bán áo thun POD",
    "Amazon FBA", "Dropshipping", "Affiliate Marketing",
    "Website Adsense", "Youtube", "Sàn TMĐT"
  ];

  return (
    <section className="w-full py-24 px-4 bg-black text-white border-t border-gray-900 relative overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")'}}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-400 font-serif italic mb-6">
            "Đây không phải câu chuyện thành công màu hồng.<br/>
            Đây là một chuỗi <span className="text-white">Thử – Sai – Trả giá – Bế tắc</span>."
          </p>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-4 uppercase tracking-widest">Xuất phát điểm thật</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Tôi từ một sinh viên nghiện game... <br/>
              Gia đình vất vả, không có điều kiện...
            </p>
          </div>
          <div className="flex justify-center items-center">
             <div className="p-8 bg-gray-900/80 rounded-3xl border border-gray-800 shadow-2xl flex flex-col items-center gap-4 transform rotate-2 hover:rotate-0 transition-all duration-300">
                <i className="ph-duotone ph-game-controller text-7xl text-gray-300"></i>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Gamer Student</span>
             </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black uppercase mb-8 text-white">
            Tôi đã thử <span className="text-gray-500">gần như mọi cách</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {attempts.map((item, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded text-gray-500 line-through decoration-red-500/50 decoration-2 hover:text-gray-300 hover:border-gray-600 transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-16 w-px bg-gradient-to-b from-gray-800 to-red-600"></div>
          <div className="mt-4 px-6 py-3 border border-red-900/50 bg-red-900/10 text-red-500 font-bold uppercase tracking-wider rounded">
            Kết quả: Không đột phá
          </div>
        </div>
      </div>
    </section>
  );
};