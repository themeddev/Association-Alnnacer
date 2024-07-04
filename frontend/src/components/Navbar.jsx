import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const active = 'bg-primary md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-primary md:p-0 rounded';
  const notActive = 'text-textColor hover:bg-gray-100 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-primary md:p-0 rounded';

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = 50;
      setIsSticky(scrollPosition > stickyThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-20">
        <div
            className={`w-full mx-auto z-50 ${
            isSticky ? 'shadow-lg py-2' : 'py-5 '
            } transition-all duration-300 bg-white fixed top-0 z-10 items-center`}
        >
            <div className="container mx-auto flex flex-wrap items-center justify-between px-[4%] md:px-[10%]">
                <Link to="/" className="flex items-center h-10 ">
                    {isSticky ? (
                    <img src={logo} alt="logo" width={40} height={40} />
                    ) : (
                    <span className="headLogo">
                        جمعية النصر إيمي نكرزي
                    </span>
                    )}
                </Link>

                <button
                    data-collapse-toggle="mobile-menu-3"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${
                    isOpen ? 'rotate-90' : 'rotate-0'
                    } md:hidden transition-all duration-400 text-gray-400 hover:text-primary rounded-lg inline-flex items-center justify-center mx-3`}
                    aria-controls="mobile-menu-3"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                    <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </button>
                <div
                className={`${!isOpen ? 'hidden' : ''} md:flex justify-between items-center w-full md:w-auto md:order-1 `}
                id="mobile-menu-3"
                >
                    <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium z-20">
                        <li>
                        <Link
                            to="/"
                            className={path === '/' ? active : notActive} 
                            aria-current="page"
                            onClick={() => setIsOpen(false)}
                        >
                            الرئيسية
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/about-us"
                            className={path === '/about-us' ? active : notActive} 
                            onClick={() => setIsOpen(false)}
                        >
                            نبذة عنا
                        </Link>
                        </li>

                        <li>
                        <Link
                            to="/contact-us"
                            className={path === '/contact-us' ? active : notActive} 
                            onClick={() => setIsOpen(false)}
                        >
                            فضاء التواصل
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/activities"
                            className={path === '/activities' ? active : notActive} 
                            onClick={() => setIsOpen(false)}
                        >
                             أنشطة 
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
