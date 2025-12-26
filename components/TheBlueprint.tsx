import React from 'react';

export const TheBlueprint: React.FC = () => {
  const gurus = ["Alex Hormozi", "Ali Abdaal", "Jenna Kutcher", "Marie Forleo", "Pat Flynn"];

  return (
    <section className="w-full pt-24 pb-8 px-4 bg-background-light dark:bg-background-dark border-b border-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Tôi quyết định <span className="text-primary-hover underline decoration-4 underline-offset-4">làm nghiêm túc</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tôi dừng việc đoán mò. Tôi dành hàng trăm giờ để nghiên cứu (Case Study) những người thành công nhất trên internet...
          </p>
        </div>

        {/* Gurus Ticker */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {gurus.map((guru, idx) => (
             <span key={idx} className="text-lg md:text-2xl font-black text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
               {guru}
             </span>
           ))}
        </div>

        {/* Bridge Text */}
        <div className="text-center max-w-3xl mx-auto">
           <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium mb-4">
             Và tôi nhận ra một điểm chung kỳ lạ.
           </p>
           <div className="p-6 bg-white dark:bg-surface-dark border-l-4 border-primary rounded-r-xl shadow-lg">
             <p className="text-xl md:text-2xl font-serif italic text-gray-600 dark:text-gray-300">
               "Họ không bán hàng ngay lập tức. Họ không chạy theo trend nhất thời.<br/>
               Họ đều âm thầm xây dựng theo đúng <span className="text-gray-900 dark:text-white font-bold not-italic">01 CÔNG THỨC DUY NHẤT</span>..."
             </p>
           </div>
           
           <div className="mt-8 flex flex-col items-center justify-center">
              <div className="h-12 w-0.5 bg-gradient-to-b from-gray-300 to-primary"></div>
              <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-[0_0_20px_rgba(212,240,119,1)]"></div>
           </div>
        </div>
      </div>
    </section>
  );
};