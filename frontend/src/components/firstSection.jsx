import { useEffect, useState } from 'react';
import hero from '../images/hero.webp';
import { useLocation } from 'react-router-dom';

const FirstSection = () => {
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const path = location.pathname.endsWith('/') 
            ? location.pathname.slice(0, -1) 
            : location.pathname;

        if (path.startsWith('/about-us')) {
            setTitle('نبذة عنا ');
            setBody('نؤمن بأهمية التعاون والمشاركة المجتمعية لبناء مستقبل أفضل لمنطقتنا. يسعدنا أن نرحب بالمتطوعين والداعمين الذين يشاركوننا رؤيتنا لتنمية إمي نكرزي.');
        } else if (path.startsWith('/contact-us')) {
            setTitle('يسرنا تواصلك معنا');
            setBody('');
        } else if (path.startsWith('/activities')) {
            setTitle('أنشطة الجمعية');
            setBody('');
        } else {
            setTitle('الرئيسية');
            setBody('أهلاً وسهلاً بك في موقع الجمعية');
        }
    }, [location.pathname]);

    return (
        <div className="w-full h-[400px] md:h-[300px] lg:h-[300px] mb-4" dir='rtl'>
            <div
                className="w-full h-full relative flex justify-center items-center rounded-b-3xl overflow-hidden"
                style={{
                    backgroundImage: `url(${hero})`,
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <span className="bg-black absolute top-0 right-0 w-full h-full opacity-50 rounded-b-3xl"></span>
                <div 
                    className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#4D6BFF] to-transparent"
                    style={{
                        opacity: 0.7,
                    }}
                ></div>
                <div className="w-full z-10 text-center flex flex-col md:flex-row justify-around items-center p-[5%]">
                    <h1 className="font-Tajawal md:w-1/2 w-full font-bold text-white text-2xl md:text-3xl lg:text-4xl transition-duration mb-4 md:mb-0">
                        {title}
                    </h1>
                    <p className="font-Tajawal md:w-1/2 w-full font-light text-white text-lg md:text-xl lg:text-2xl transition-duration mb-4 md:mb-0">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;