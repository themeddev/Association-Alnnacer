

const Inquiries = () => {

    const inquiries = [
        '+212-303403434',
        'alnancer@contact.com'
    ]

    return ( 

        <div className="w-full text-center mb-8">
            <h2 className="h3 mb-8">إذا كانت لديك أي استفسارات أو ترغب في المساهمة في أنشطتنا، لا تتردد في التواصل معنا عبر الطرق التالية:</h2>

            <div className='w-full flex flex-col md:flex-row justify-between items-center gap-4'>
                {inquiries.map((str,index) => (
                    <div 
                        key={index}
                        className='flex flex-row justify-between items-center w-full bg-white px-6 py-4 rounded-2xl'>
                        <h5 className='h5 grow'>{str}</h5>
                    </div>
                ))
                }
            </div>
        </div>
     );
}
 
export default Inquiries;