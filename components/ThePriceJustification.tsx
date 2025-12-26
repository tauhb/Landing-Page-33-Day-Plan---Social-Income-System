import React from 'react';

export const ThePriceJustification: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Section 121: The "If All This Did" Questions */}
        <div className="mb-24 space-y-8">
           <h2 className="text-center text-3xl font-black uppercase text-gray-900 dark:text-white mb-12">
             Hãy tự hỏi...
           </h2>

           {/* Card 1 */}
           <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border-l-4 border-primary shadow-lg hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Nếu tất cả điều này giúp bạn...
              </h3>
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                 <li className="flex items-center gap-2"><i className="ph-fill ph-check text-green-500"></i> Xây kênh thương hiệu cá nhân nhanh chóng</li>
                 <li className="flex items-center gap-2"><i className="ph-fill ph-check text-green-500"></i> Không cần giỏi viết, không cần quay video</li>
              </ul>
              <p className="font-bold text-lg md:text-xl text-gray-900 dark:text-white italic">
                👉 Thì nó có xứng đáng với giá trị <span className="text-primary-hover not-italic decoration-2 underline">41.000.000 VNĐ</span> không?
              </p>
           </div>

           {/* Card 2 */}
           <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border-l-4 border-primary shadow-lg hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Nếu tất cả điều này giúp bạn...
              </h3>
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                 <li className="flex items-center gap-2"><i className="ph-fill ph-check text-green-500"></i> Khởi đầu đúng hướng, không mò mẫm</li>
                 <li className="flex items-center gap-2"><i className="ph-fill ph-check text-green-500"></i> Không mất thêm 6–12 tháng thử sai vô ích</li>
              </ul>
              <p className="font-bold text-lg md:text-xl text-gray-900 dark:text-white italic">
                👉 Thì nó có xứng đáng không?
              </p>
           </div>

           {/* Card 3 */}
           <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border-l-4 border-primary shadow-lg hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Nếu tất cả điều này giúp bạn...
              </h3>
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                 <li className="flex items-center gap-2"><i className="ph-fill ph-check text-green-500"></i> Tạo ra khách hàng chất lượng & Thu nhập lớn</li>
                 <li className="flex items-center gap-2"><i className="ph-fill ph-check text-green-500"></i> Làm việc ở bất cứ đâu, bất cứ khi nào</li>
              </ul>
              <p className="font-bold text-lg md:text-xl text-gray-900 dark:text-white italic">
                👉 Thì nó có xứng đáng không?
              </p>
           </div>
        </div>

        {/* Section 122: The Two Choices */}
        <div className="mb-24">
           <h2 className="text-center text-3xl md:text-4xl font-black uppercase text-gray-900 dark:text-white mb-12">
             Tôi có 2 lựa chọn...
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Choice 1 */}
              <div className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 opacity-60 hover:opacity-100 transition-opacity">
                 <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Lựa chọn #1</div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bán Combo giá cao</h3>
                 <p className="text-gray-600 dark:text-gray-400">
                   Chỉ phục vụ nhóm nhỏ. Những người rất khao khát và có điều kiện tài chính tốt.
                 </p>
              </div>

              {/* Choice 2 */}
              <div className="p-8 rounded-3xl bg-primary/10 border-2 border-primary relative overflow-hidden transform md:scale-105">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 blur-2xl rounded-full"></div>
                 <div className="text-sm font-bold uppercase tracking-widest text-primary-hover mb-4">Lựa chọn #2 (Tôi chọn cái này)</div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase">
                   Miễn phí đào tạo
                 </h3>
                 <p className="text-gray-600 dark:text-gray-300 font-medium">
                   Để giúp thật nhiều người. Những người thực sự khao khát và đang cần kỹ năng này nhất.
                 </p>
                 <div className="mt-6 flex justify-end">
                    <i className="ph-fill ph-check-circle text-4xl text-primary"></i>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 123: True Value */}
        <div className="text-center bg-gray-900 dark:bg-black text-white p-10 rounded-3xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white to-primary"></div>
           
           <p className="text-gray-400 uppercase tracking-widest mb-4 font-bold">Giá trị thực tế</p>
           <h2 className="text-4xl md:text-5xl font-black mb-8">41.000.000 VNĐ</h2>
           
           <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
             Nhưng bởi vì bạn đã ở lại đến cuối. Bạn đã học cùng tôi. Và tôi muốn giúp được càng nhiều người càng tốt.
           </p>
           
           <div className="inline-block px-8 py-4 border-2 border-primary rounded-xl bg-primary/10 backdrop-blur-sm">
              <span className="text-xl md:text-2xl font-black text-primary uppercase">
                 Tôi quyết định: MIỄN PHÍ HỌC PHÍ
              </span>
           </div>
        </div>

      </div>
    </section>
  );
};