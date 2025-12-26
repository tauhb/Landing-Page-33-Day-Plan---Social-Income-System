import React from 'react';

export const TheSolutionFoundation: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-white dark:bg-[#0b0c10] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
           <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">Tư duy sai lầm phổ biến</span>
           <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase mb-6 leading-tight">
             Sự thật <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Quan trọng</span>
           </h2>
           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
             Hầu hết mọi người thất bại vì họ cố gắng "xây mái nhà" trước khi "đổ móng".
           </p>
        </div>

        {/* The Comparison Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
           
           {/* The Wrong Way (Sand/Unstable) */}
           <div className="group relative bg-gray-50 dark:bg-[#151515] rounded-3xl p-8 border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center opacity-80 hover:opacity-100 transition-all duration-300">
              <div className="absolute top-4 right-4 text-red-500 opacity-20 group-hover:opacity-100 transition-opacity">
                 <i className="ph-fill ph-warning-octagon text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-500 mb-12 uppercase tracking-widest">Cách làm cũ (Rủi ro)</h3>
              
              {/* Visual Stack - Unstable / Falling */}
              <div className="flex flex-col-reverse items-center gap-1 w-full max-w-[200px] mb-8 relative hover:scale-105 transition-transform duration-500 cursor-help">
                 
                 {/* Top Block - Heavy */}
                 <div className="w-full h-16 bg-red-500 rounded-lg text-white font-bold flex items-center justify-center shadow-xl transform rotate-6 origin-bottom-right z-30 group-hover:rotate-12 transition-transform duration-500">
                    <span className="drop-shadow-md">KIẾM TIỀN</span>
                 </div>
                 
                 {/* Middle Block - Shaky */}
                 <div className="w-[80%] h-14 bg-red-400 rounded-lg text-white font-bold flex items-center justify-center opacity-90 transform -rotate-3 z-20 group-hover:-rotate-6 transition-transform duration-500">
                    <span>Sản Phẩm</span>
                 </div>
                 
                 {/* Bottom Block - Weak */}
                 <div className="w-[40%] h-12 bg-gray-300 dark:bg-gray-700 rounded-lg text-gray-500 font-bold flex items-center justify-center text-xs border-2 border-dashed border-red-500 z-10">
                    Khách???
                 </div>
                 
                 {/* Shadow */}
                 <div className="absolute -bottom-8 w-full h-4 bg-black/20 blur-md rounded-full"></div>
              </div>

              <div className="mt-auto">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                   Bạn chọn mô hình kiếm tiền trước (Affiliate, Dropship...), sau đó mới vất vả đi tìm người mua. <br/>
                   <span className="text-red-500 font-bold mt-2 block">👉 Cạnh tranh về giá, không có lòng trung thành.</span>
                </p>
              </div>
           </div>

           {/* The Right Way (Rock/Solid) */}
           <div className="group relative bg-white dark:bg-surface-dark rounded-3xl p-8 border-2 border-primary shadow-2xl flex flex-col items-center text-center transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-primary text-black text-xs font-black px-4 py-1 rounded-bl-xl uppercase">
                 The Blueprint
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-12 uppercase tracking-widest mt-2">Cách làm đúng (Bền vững)</h3>
              
              {/* Visual Stack - Stable / Pyramid */}
              <div className="flex flex-col-reverse items-center gap-2 w-full max-w-[280px] mb-8 relative">
                 
                 {/* The Foundation */}
                 <div className="w-full py-6 bg-gradient-to-r from-primary to-green-500 rounded-lg text-black font-black text-xl flex items-center justify-center shadow-[0_0_30px_rgba(212,240,119,0.4)] relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    <span className="relative z-10">KÊNH & THƯƠNG HIỆU</span>
                 </div>
                 
                 {/* The Arrow Connector */}
                 <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-700 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                 </div>
                 
                 {/* The Result Layers */}
                 <div className="w-full grid grid-cols-3 gap-2">
                    <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-500">Affiliate</div>
                    <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-500">Booking</div>
                    <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-500">Bán hàng</div>
                 </div>
              </div>

              <div className="mt-auto">
                <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                   Xây dựng tệp khán giả tin tưởng bạn trước. <br/>
                   Sau đó bán gì cũng được. <span className="text-primary-hover font-black mt-2 block">👉 Khách hàng tự tìm đến bạn.</span>
                </p>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};