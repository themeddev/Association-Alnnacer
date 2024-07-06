import img4 from '../../images/img4.jpg';

const OurMission = () => {
  return (
    <div className="w-full my-6">
      <div className="bg-white text-center font-Tajawal w-[95%] min-h-[300px] p-6 rounded-xl mb-2 mx-auto shadow">
        <h2 className="h2 pb-6">مهمتنا</h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <ul className="list-disc text-right text-subTextColor text-sm md:text-xl space-y-4 m-4" dir='rtl'>
                <p>
                  نؤمن في جمعية إيمي نكرزي التنموية بضرورة النهوض بمنطقتنا الحبيبة وتحويلها إلى مكان أفضل للحياة من خلال تنفيذ مشاريع تنموية مستدامة تشمل:
                </p>
                <li>
                  <span className='h5'>تحسين البنية التحتية : </span> نسعى جاهدين لتحسين الطرق والمرافق العامة لضمان بيئة معيشية آمنة ومريحة لسكان إيمي نكرزي.
                </li>
                <li>
                <span className='h5'> الحفاظ على البيئة : </span> نحرص على تنظيم حملات تنظيف منتظمة وزراعة الأشجار لتعزيز الوعي البيئي والحفاظ على الموارد الطبيعية لمنطقتنا.
                </li>
                <li>
                <span className='h5'>التعليم والتوعية : </span> نقدم برامج تعليمية وورش عمل توعوية لزيادة وعي المجتمع بأهمية الحفاظ على البيئة وصون الموارد الطبيعية.
                </li>
                <li>
                <span className='h5'>دعم وتمكين المرأة : </span> نعمل على تمكين المرأة في إيمي نكرزي من خلال توفير فرص العمل والتدريب وبناء القدرات، مما يساهم في تنمية المجتمع ككل.
                </li>
                <li>
                <span className='h5'>رعاية الشباب : </span> نولي اهتمامًا خاصًا برعاية الشباب وتوفير فرص لهم للتطوير والتعلم واكتساب المهارات اللازمة للمشاركة بفعالية في بناء مستقبل إيمي نكرزي.
                </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 h-[300px] md:h-[400px] lg:h-[400px]">
            <img src={img4} alt="our mission" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
