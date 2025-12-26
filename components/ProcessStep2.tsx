import React from 'react';

export const ProcessStep2: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-white dark:bg-[#0b0c10]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Step 2 */}
        <div className="flex items-center gap-4 mb-16">
           <div className="w-16 h-16 rounded-2xl bg-primary text-black flex items-center justify-center text-3xl font-black shadow-lg">#2</div>
           <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase">Viết với AI</h3>
              <p className="text-gray-500 font-medium">Bạn không cần giỏi viết, chỉ cần công thức tốt.</p>
           </div>
        </div>

        {/* Section 80: Formulas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
           {[
             { name: "VIRAL 1000X™", icon: "ph-rocket-launch", color: "text-purple-500" },
             { name: "P.A.S", icon: "ph-warning", color: "text-red-500" },
             { name: "A.I.D.A", icon: "ph-megaphone", color: "text-blue-500" },
             { name: "K.Q.K.H", icon: "ph-check-circle", color: "text-green-500" },
             { name: "Case Study", icon: "ph-book-bookmark", color: "text-orange-500" },
           ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-primary transition-colors cursor-default group shadow-sm">
                 <i className={`ph-fill ${item.icon} text-3xl ${item.color} mb-3 group-hover:scale-110 transition-transform`}></i>
                 <span className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base text-center">{item.name}</span>
              </div>
           ))}
        </div>

        {/* Section 81 & 83: Custom Tone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
           <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                 <i className="ph-fill ph-robot text-gray-400"></i>
                 Cách cũ: AI Robot
              </h4>
              <div className="space-y-4">
                 <div className="p-4 bg-white dark:bg-black rounded-xl text-gray-500 text-sm italic">
                    "Chào mọi người! Hôm nay tôi rất vui được chia sẻ về chủ đề này. Nó thực sự rất quan trọng..."
                 </div>
                 <div className="flex items-center gap-2 text-red-500 text-sm font-bold">
                    <i className="ph-bold ph-x"></i> Chung chung
                 </div>
                 <div className="flex items-center gap-2 text-red-500 text-sm font-bold">
                    <i className="ph-bold ph-x"></i> Vô hồn
                 </div>
                 <div className="flex items-center gap-2 text-red-500 text-sm font-bold">
                    <i className="ph-bold ph-x"></i> Ai cũng viết được
                 </div>
              </div>
           </div>

           <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-black text-xs font-bold rounded-bl-xl rounded-tr-xl">NEW</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                 <i className="ph-fill ph-magic-wand text-primary"></i>
                 Cách mới: Custom Tone
              </h4>
              <div className="space-y-4">
                 <div className="p-4 bg-white dark:bg-black rounded-xl text-gray-800 dark:text-gray-200 text-sm font-medium border-l-4 border-primary shadow-sm">
                    "Đừng nghe mấy lời khuyên sáo rỗng nữa. Đây là sự thật trần trụi mà 99% người mới đều né tránh..."
                 </div>
                 <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-bold">
                    <i className="ph-bold ph-check"></i> Cá tính riêng
                 </div>
                 <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-bold">
                    <i className="ph-bold ph-check"></i> Đúng Insight
                 </div>
                 <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-bold">
                    <i className="ph-bold ph-check"></i> Không thể sao chép
                 </div>
              </div>
           </div>
        </div>

        {/* Section 82: Template Tease */}
        <div className="text-center p-8 bg-black rounded-2xl border border-gray-800 relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
           <p className="text-gray-400 uppercase tracking-widest text-sm mb-2 relative z-10">Tài nguyên độc quyền</p>
           <h3 className="text-2xl font-bold text-white mb-4 relative z-10">TEMPLATE: VIRAL 100X</h3>
           <button className="px-6 py-2 bg-gray-800 text-gray-400 rounded border border-gray-700 cursor-not-allowed opacity-80 text-sm">
              <i className="ph-bold ph-lock-key mr-2"></i>
              Chỉ dành cho học viên
           </button>
        </div>

      </div>
    </section>
  );
};