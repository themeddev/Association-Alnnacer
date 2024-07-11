import { Link } from 'react-router-dom';
import donation from '../../images/donation.webp';
import INFO from '../../data/INFO';

const Donation = () => {
    return ( 
        <div
            className="font-Tajawal relative flex items-center justify-center w-[95%] h-screen sm:h-[400px] mx-auto bg-fixed bg-parallax bg-cover p-[10%] rounded-sm"
            style={{ backgroundImage: `url(${donation})` }}
        >
            <div className='w-full h-full bg-black absolute opacity-50 '></div>
            <div className='z-10 w-full flex items-center flex-col gap-8 tracking-wider'>
                <h5 className=' font-bold text-white text-lg md:text-xl transition-duration'> للتبرع للجمعية</h5>
                <div className='font-bold w-full flex flex-col sm:flex-row justify-center items-center gap-6'>
                    <div className='bg-white p-4 w-full sm:w-1/2 text-center rounded-sm '>RIB : {INFO.RIB} </div>
                    <div className='bg-white p-4 w-full sm:w-1/2 text-center rounded-sm'> او الحضور الى مقر الجمعية </div>
                </div>
                <Link to="/contact-us" className="link-full">
                    تواصل معنا         
                </Link>
            </div>

        </div>
     );
}
 
export default Donation;