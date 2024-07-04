import { Link } from 'react-router-dom';
import hero from '../../images/hero.jpg';

const HeroSection = () => {
  return (
    <div className="w-full h-[500px] md:h-[700px] lg:h-[700px]">
      <div
        className="w-full h-full relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${hero})`,
          objectFit: 'cover',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <span className="bg-black absolute top-0 right-0 w-full h-full opacity-50"></span>
        <div className="relative z-10 text-center p-[5%] md:p-[10%]">
          <h1 className="font-Tajawal font-bold text-white text-2xl md:text-4xl lg:text-6xl transition-duration mb-4 md:mb-6">
            جمعية النصر إيمي نكرزي
          </h1>
          <p className="font-Tajawal font-medium text-white text-xl md:text-2xl lg:text-3xl transition-duration mb-4">
            جمعية محلية تهدف إلى تطوير منطقة إيمي نكرزي والحفاظ على البيئة من خلال مشاريع تنموية ومستدامة
          </p>
          <Link
            to="/about"
            className="btn-primary"
          >
            معرفة المزيد
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
