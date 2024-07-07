import React, { useState } from 'react';
import '../../assets/FAQ.css'; // Make sure to create and import this CSS file

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "ما هو هدف الجمعية؟",
      answer: "نهدف إلى خدمة منطقتنا والسهر على جعلها أفضل عن طريق التنمية وتنفيذ أنشطة تنموية وبيئية.",
    },
    {
      question: "ما هي الأنشطة التنموية التي تقومون بها؟",
      answer: "نقوم بتحسين البنية التحتية، تنظيم حملات تنظيف وزراعة الأشجار، وتقديم برامج تعليمية وورش عمل.",
    },
    {
      question: "كيف يمكنني المساهمة في أنشطة الجمعية؟",
      answer: "يمكنك المساهمة عن طريق التطوع في الأنشطة المختلفة أو تقديم الدعم المالي للمشاريع التنموية.",
    },
    {
      question: "أين تقع الجمعية؟",
      answer: "نحن نقع في منطقة إمي نكرزي، جماعة ثلاث نيعقوب، إقليم الحوز، مراكش.",
    },
  ];

  return (
    <div className="font-Tajawal bg-[#F2F4FF] min-h-screen" dir='rtl'>
      <section className="max-w-5xl mx-auto py-6 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-4 px-7">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">الأسئلة الشائعة</h2>
          <p className="text-lg font-medium text-slate-700/70">
            نحن جمعية النصر إمي نكرزي، نقع في منطقة إمي نكرزي جماعة ثلاث نيعقوب إقليم الحوز مراكش، 
            نسعى إلى خدمة منطقتنا والسهر على جعلها أفضل عن طريق التنمية وعمل أنشطة تنموية وبيئية.
          </p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            {faqs.map((faq, index) => (
              <div className={`border-b border-[#0A071B]/10 ${index === faqs.length - 1 ? '' : 'border-b'}`} key={index}>
                <button
                  className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-start text-lg font-bold text-slate-800 focus:outline-none p-5"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className={`mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675] ${openFAQ === index ? 'rotate-180' : ''}`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
                <div
                  className={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ${openFAQ === index ? 'block' : 'hidden'}`}
                  style={{ maxHeight: openFAQ === index ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
