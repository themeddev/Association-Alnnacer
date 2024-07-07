import spanIcon from '../../images/span.icon.svg';


const Abouts = () => {

    const Abouts = [
        {
            id: 1,
            title: 'أهداف الجمعية',
            body: {
                title : 'تعمل جمعية النصر إيمي نكرزي على تحقيق عدة أهداف، بما في ذلك:',
                li : [
                    'حماية التنوع البيولوجي والمحافظة على النظم البيئية المتنوعة في المنطقة.',
                    'تعزيز الوعي بأهمية الحفاظ على البيئة والتراث الطبيعي.',
                    'تشجيع الزراعة المستدامة والاستدامة البيئية في المنطقة.',
                    'تنظيم فعاليات وورش عمل للتوعية البيئية وتدريب الشباب والمجتمع المحلي.'
                ]
            }
        },
        {
            id: 2,
            title: 'التحديات التي تواجه الجمعية',
            body: {
                title : 'رغم تحقيق الجمعية لعدة إنجازات، إلا أنها تواجه التحديات التالية:',
                li : [
                    'نقص التمويل والموارد المالية لتنفيذ المشاريع البيئية والتنموية.',
                    'قلة الوعي البيئي والتحديات الثقافية في المجتمع.',
                    'تغيرات المناخ وتأثيرها على البيئة المحلية.'
                ]
            }
        }
    ];

    const ourStrategy = [
        'قيادة محلية',
        'خبرة فنية',
        'تقوية المجتمع المدني'
    ];

    const tankies = {
        title: 'رسالة شكر',
        body: 'نود أن نعبر عن شكرنا العميق لكل من ساهم في دعم الجمعية. نحن نقدر تعاونكم ومشاركتكم في جهودنا لحماية البيئة وتحقيق التنمية المستدامة. ندعوكم جميعًا للانضمام إلينا في جهودنا لحماية البيئة وتحقيق التنمية المستدامة. سواء كنتم طلابًا، أكاديميين، أو مجرد أفراد مهتمين بالبيئة، فلديكم الفرصة للمساهمة وتحقيق التغيير الإيجابي. يمكنكم الانضمام إلى فريقنا أو المشاركة في فعالياتنا وورش العمل. سوف تجدون المزيد من المعلومات على موقعنا الإلكتروني.في الختام، نحن نؤمن بأن حماية البيئة وتحقيق التنمية المستدامة هي مسؤولية الجميع. من خلال جهودنا المشتركة وتعاوننا، يمكننا بناء مستقبل أفضل لنا والأجيال القادمة. دعونا نعمل معًا للحفاظ على البيئة وتحقيق التنمية المستدامة.'
    }


    return ( 
    <div className='mb-8'>
        <div className="flex flex-col md:flex-row gap-4 mb-4" dir="rtl">
            {
            Abouts.map( (about) => (
                <div 
                    className="w-full md:w-1/2 h-auto md:min-h-[400px] items-center gap-4 bg-white p-10 rounded-2xl mb-4 text-justify"
                    key={about.id}
                >
                    <h3 className="h3 mb-6"> {about.title} </h3>
                    <p> 
                        {about.body.title} 
                        <ul className="list-disc p-4">
                            {about.body.li.map(li => (
                                <li> {li} </li>
                            ))}
                        </ul>
                    </p>
                </div>
            ))
            }
        </div>

        <div className="w-full text-center mb-8">
            <h2 className="h2 mb-8">استراتيجيتنا</h2>

            <div className='w-full flex flex-col md:flex-row justify-between items-center gap-4'>
                {ourStrategy.map((str,index) => (
                    <div 
                        key={index}
                        className='flex flex-row justify-between items-center w-full bg-white px-6 py-4 rounded-2xl'>
                        <img src={spanIcon} alt="icon" />
                        <h5 className='h5 grow'>{str}</h5>
                    </div>
                ))
                }
            </div>
        </div>

        <div className="w-full text-justify gap-4 bg-white p-10 rounded-2xl" dir="rtl">
            <h3 className="h3 mb-6 text-center"> {tankies.title} </h3>
            <p> 
                {tankies.body} 
            </p>
        </div>

    </div>
     );
}
 
export default Abouts;