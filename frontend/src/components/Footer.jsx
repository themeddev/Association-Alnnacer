import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="font-Tajawal bg-primary w-full text-white" dir='rtl'>
      <div className="mx-auto flex flex-wrap justify-between p-8">
        {/* Colonne 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          <h2 className="text-xl font-bold mb-4">الصفحات</h2>
          <ul>
            <li><Link to="/contact-us" className="block hover:text-gray-300">فضاء التواصل</Link></li>
            <li><Link to="/about-us" className="block hover:text-gray-300">نبذة عنا</Link></li>
            <li><Link to="/activities" className="block hover:text-gray-300"> أنشطة الجمعية</Link></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          <h2 className="text-xl font-bold mb-4">للتواصل معنا</h2>
          <ul>
            <li className="block hover:text-gray-300" dir='ltr'>+212-735234222</li>
            <li className="block hover:text-gray-300" dir='ltr'>+212-735234222</li>
            <li><a href="mailto:alnnacer@gmail.com" className="block hover:text-gray-300" dir='ltr'>alnancer@contact.com</a></li>
          </ul>
        </div>

        {/* Colonne 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          <h2 className="text-xl font-bold mb-4">شبكات التواصل</h2>
          <ul>
            <li className="flex align-items">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook mt-1" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              <a href="https://www.facebook.com/a.a.iminougarzi?mibextid=ZbWKwL" className="block hover:text-gray-300 mr-2" target='blank'>Facebook</a>

            </li>
            <li className="flex align-items">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" className="bi bi-whatsapp mt-1" viewBox="0 0 50 50">
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
            </svg>
              <a href="https://www.facebook.com/a.a.iminougarzi?mibextid=ZbWKwL" className="block hover:text-gray-300 mr-2" target='blank'>Whatsapp</a>
            </li>
            <li className="flex align-items">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram mt-1" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <a href="https://www.instagram.com/association.annacer?igsh=MWZjcWtsOWJnbzZybA== " className="block hover:text-gray-300 mr-2" target='blank'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-black p-5 ">
        <p className='text-white text-sm mb-0'>&copy; النصر 2024. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
