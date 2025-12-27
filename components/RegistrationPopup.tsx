
import React, { useEffect, useState } from 'react';

interface RegistrationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationPopup: React.FC<RegistrationPopupProps> = ({ isOpen, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setProgress(95), 100);

      // Logic UTM
      const ghlContainer = document.getElementById('ghl-form-wrapper');
      if (ghlContainer) {
        const iframe = ghlContainer.querySelector('iframe');
        if (iframe) {
          try {
            const currentUrl = new URL(window.location.href);
            const iframeUrl = new URL(iframe.src);
            currentUrl.searchParams.forEach((value, key) => {
              if (key.startsWith('utm_')) {
                iframeUrl.searchParams.set(key, value);
              }
            });
            iframe.src = iframeUrl.toString();
          } catch (e) {
            console.error("UTM forwarding failed", e);
          }
        }
      }

      setIsLoaded(true);
      return () => {
        document.body.style.overflow = 'unset';
        clearTimeout(timer);
        setProgress(0);
      };
    } else {
      setIsLoaded(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const topOffers = [
    { name: "33 Ngày Đồng Hành Trực Tiếp", value: "25.000.000đ" },
    { name: "Phần mềm ContentFlow (Bản Pro)", value: "5.000.000đ" },
    { name: "Thư viện 100+ Viral Posts mẫu", value: "3.000.000đ" },
    { name: "Hỗ trợ 1:1 trong 100 ngày", value: "10.000.000đ" },
  ];

  const stepsAfter = [
    { icon: "ph-envelope-open", title: "Xác nhận Email", desc: "Nhận vé mời và lịch Zoom" },
    { icon: "ph-users-three", title: "Vào nhóm Zalo", desc: "Kết nối Mentor hỗ trợ 1:1" },
    { icon: "ph-key", title: "Cấp tài khoản", desc: "Kích hoạt ContentFlow AI" },
  ];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Popup Container */}
      <div 
        className={`relative w-full max-w-6xl bg-white rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 transform flex flex-col md:h-auto max-h-[95vh] ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] w-10 h-10 rounded-full bg-gray-100/80 text-gray-500 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm backdrop-blur"
        >
          <i className="ph ph-x text-xl"></i>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-10 h-full overflow-y-auto lg:overflow-hidden custom-scrollbar">
          
          {/* LEFT SIDE: Offer Stack (HIDDEN ON MOBILE) */}
          <div className="hidden lg:flex lg:col-span-4 bg-[#0A0A0A] p-8 md:p-12 flex-col justify-between relative overflow-hidden text-white border-r border-white/5 min-h-[500px]">
             <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Xác nhận quyền lợi</span>
                </div>

                <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight mb-8">
                  BẠN CHỈ CÒN <br/>
                  <span className="text-primary">1 BƯỚC CUỐI</span>
                </h2>
                
                <div className="space-y-5 mb-10">
                   {topOffers.map((item, i) => (
                     <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                           <i className="ph-fill ph-check-circle text-primary text-xl"></i>
                           <span className="text-xs font-bold uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-600 line-through">{item.value}</span>
                     </div>
                   ))}
                   <div className="flex items-center gap-3 pl-1">
                      <i className="ph-bold ph-plus text-primary text-sm"></i>
                      <span className="text-[11px] font-black uppercase text-gray-400 italic">Và nhiều quà tặng khác...</span>
                   </div>
                </div>

                <div className="p-6 bg-primary/10 border border-primary/30 rounded-2xl relative overflow-hidden">
                   <div className="relative z-10 text-center">
                      <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Đã áp dụng mã ưu đãi</div>
                      <div className="text-3xl font-black text-white leading-none mb-3">HỌC PHÍ: 0đ</div>
                      <div className="text-[11px] font-bold text-gray-400 border-t border-white/10 pt-3">
                         Chỉ đóng phụ phí tổ chức vận hành: <br/>
                         <span className="text-primary text-lg font-black tracking-tight">1.950.000đ</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="relative z-10 pt-8 opacity-40">
                <p className="text-[9px] text-gray-500 uppercase font-black tracking-[0.2em] leading-relaxed">
                   * Ưu đãi dành cho 20 người ghi danh sớm nhất.
                </p>
             </div>
          </div>

          {/* RIGHT SIDE: Form & Next Steps */}
          <div className="col-span-1 lg:col-span-6 flex flex-col bg-white overflow-hidden">
             
             {/* Progress Bar */}
             <div className="w-full bg-gray-50 border-b border-gray-100 p-5">
                <div className="max-w-md mx-auto lg:mx-0">
                   <div className="flex justify-between items-end mb-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-primary-hover">Tiến trình đăng ký</span>
                      <span className="text-[9px] font-black text-gray-400">GẦN HOÀN TẤT</span>
                   </div>
                   <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-hover shadow-[0_0_10px_rgba(212,240,119,1)] transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                   </div>
                </div>
             </div>

             {/* Content Area - No internal vertical scroll here to satisfy request */}
             <div className="flex-1 flex flex-col p-6 md:p-10 overflow-hidden">
                
                {/* Form Container - Fixed height, NO scrolling */}
                <div className="relative w-full h-[480px] overflow-hidden mb-8">
                    <div 
                      id="ghl-form-wrapper"
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{
                        __html: `
                          <iframe
                              src="https://link.funnel.vn/widget/form/IjicTot0zKoG0lc2x9qi"
                              style="width:100%;height:480px;border:none;border-radius:0px;overflow:hidden;"
                              id="inline-IjicTot0zKoG0lc2x9qi" 
                              data-layout="{'id':'INLINE'}"
                              data-trigger-type="alwaysShow"
                              data-form-name="Order 33 Day - Social Income System"
                              data-height="480"
                              data-layout-iframe-id="inline-IjicTot0zKoG0lc2x9qi"
                              data-form-id="IjicTot0zKoG0lc2x9qi"
                              title="Order 33 Day - Social Income System"
                              scrolling="no"
                          ></iframe>
                          <script src="https://link.funnel.vn/js/form_embed.js"></script>
                        `
                      }}
                    />
                </div>

                {/* Next Steps (HIDDEN ON MOBILE) */}
                <div className="hidden lg:block border-t border-gray-100 pt-8 mt-auto">
                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">Điều gì xảy ra sau khi bạn bấm nút?</h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {stepsAfter.map((step, i) => (
                         <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                               <i className={`ph-bold ${step.icon} text-gray-400 group-hover:text-primary-hover`}></i>
                            </div>
                            <h5 className="text-[11px] font-black text-black uppercase mb-1">{step.title}</h5>
                            <p className="text-[10px] text-gray-500 leading-tight">{step.desc}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        #ghl-form-wrapper iframe {
           overflow: hidden !important;
        }
      `}</style>
    </div>
  );
};
