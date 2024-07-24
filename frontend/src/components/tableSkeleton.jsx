const TableSkeleton = () => {
    return ( 
        <div role="status" className="space-y-4 w-full divide-gray-200 animate-pulse mb-2">
            <div className="flex justify-between items-center">
                <div className="h-16 w-16 bg-gray-300 rounded"></div>
                <div className="w-96 h-2 bg-gray-200 rounded mx-auto"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
     );
}
 
export default TableSkeleton;