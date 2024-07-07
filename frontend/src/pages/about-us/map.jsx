const Map = () => {
    return ( 
        <div className="w-full flex flex-col lg:flex-row items-center h-96 bg-white mb-10 rounded-2xl" dir="rtl">
            <div className="w-full lg:w-1/2 p-10">
                <h5 className="text-xl font-bold mb-2">موقعنا على الخريطة</h5>
                <p>إجوكاك، مراكش، المغرب</p>
            </div>
            <div className="w-full lg:w-1/2 h-full">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54719.16597642522!2d-8.232103950044575!3d30.999830653414598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb0407487cfe761%3A0x217365945b208ffb!2z2KXZhdmKINmG2YPYsdiy2Yo!5e0!3m2!1sen!2sma!4v1720310234598!5m2!1sen!2sma" 
                    allowFullScreen="" 
                    className="w-full h-full rounded-2xl"
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Map;
