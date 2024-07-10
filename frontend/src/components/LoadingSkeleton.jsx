const LoadingSkeleton = () => {
    
    return ( 
        <div className="w-full md:w-[30%] bg-white shadow rounded overflow-hidden hover:shadow-primary transition-shadow duration-300">
            <div className="animate-pulse h-52 bg-gray-200"></div>
            <div className="p-4">
                <div className="h-4 bg-gray-200 mb-2"></div>
                <div className="h-8 bg-gray-200 mb-4"></div>
                <div className="h-12 bg-gray-200"></div>
            </div>
        </div>
     );
}
 
export default LoadingSkeleton;