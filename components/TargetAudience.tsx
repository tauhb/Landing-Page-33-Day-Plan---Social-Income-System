import React from 'react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-gray-50 dark:bg-[#0b0c10]">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white tracking-tight">
          Chương trình này dành cho:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6 text-lime-700 dark:text-primary">
              <i className="ph-fill ph-plant text-3xl"></i>
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-snug">
              Người mới – chưa có kênh – chưa rõ mô hình
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6 text-lime-700 dark:text-primary">
              <i className="ph-fill ph-pencil-simple-slash text-3xl"></i>
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-snug">
              Người đã làm content – nhưng chưa ra tiền
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6 text-lime-700 dark:text-primary">
              <i className="ph-fill ph-warning-octagon text-3xl"></i>
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-snug">
              Người kiếm tiền – nhưng phụ thuộc vào một nguồn
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6 text-lime-700 dark:text-primary">
              <i className="ph-fill ph-star text-3xl"></i>
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-snug">
              Người có kỹ năng, kinh nghiệm – nhưng chưa được trả đúng giá
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Nếu bạn thấy mình trong ít nhất một dòng trên, hãy đọc tiếp.
          </p>
        </div>
      </div>
    </section>
  );
};