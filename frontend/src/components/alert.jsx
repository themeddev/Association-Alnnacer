const Alert = ({ title, bg }) => {
    return ( 
        <div
            className={`flex flex-row justify-between items-center fixed top-8 right-4 mx-auto w-96 rounded-2xl ${bg} px-3 py-2 text-base text-white`}
        >
            <div className="mx-3">
                <h5 className="font-sans text-lg font-semibold leading-snug tracking-normal text-white">
                    {title}
                </h5>
            </div>
            <div
                className="w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
            >
                <div role="button" className="w-max rounded-lg p-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
                </div>
            </div>
        </div>
     );
}
 
export default Alert;