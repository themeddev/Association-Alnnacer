import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
import {
    fetchActivities,
    selectAllActivities,
    selectActivitiesStatus,
    selectActivitiesError,
    selectHasMoreActivities,
    selectCurrentPage,
    resetActivities,
} from '../redux/activitiesSlice';

const ManageActivities = () => {
    const dispatch = useDispatch();
    const activities = useSelector(selectAllActivities);
    const status = useSelector(selectActivitiesStatus);
    const error = useSelector(selectActivitiesError);
    const hasMore = useSelector(selectHasMoreActivities);
    const currentPage = useSelector(selectCurrentPage);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);


    useEffect(() => {
        dispatch(resetActivities());
        dispatch(fetchActivities(currentPage));
      }, [dispatch]);
    
      const handleLoadMore = () => {
        if (hasMore && !isLoadingMore) {
          setIsLoadingMore(true);
          dispatch(fetchActivities(currentPage + 1)).then(() => {
            setIsLoadingMore(false);
          });
        }
    }

    return ( 
        <Card className="h-full w-full font-Tajawal p-4">
            <CardHeader floated={false} shadow={false} className="rounded-none mb-3">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Manage Activities
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about activities
                        </Typography>
                    </div>
                    <div className="flex w-full flex-col md:flex-row shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"  
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>  
                        <Button className="btn-primary" size="sm">
                            Add Activity
                        </Button> 
                    </div>
                </div>
            </CardHeader>

            <CardBody>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 font-Tajawal">
                            {activities.length !== 0 ? activities.map((act) => (
                                <tr key={act.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={act.image} alt={act.type} className="h-16 w-16 object-cover rounded" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Typography variant="h6" className="font-medium text-gray-900">{act.name}</Typography>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Typography variant="body2" className="text-gray-500">{act.type}</Typography>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Typography variant="body2" className="text-gray-500">{act.date}</Typography>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Typography variant="body2" className="text-gray-500">{act.location}</Typography>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <Button className="bg-orange-500 text-white">Edit</Button>
                                            <Button className="bg-red text-white">Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                                        No Activity Created yet
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {hasMore && (
                    <button 
                        className="link-full mt-4" 
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                    >
                        {isLoadingMore ? 'Loading...' : 'More'}
                    </button>
                )}
            </CardBody>
        </Card>
    );
}
 
export default ManageActivities;
