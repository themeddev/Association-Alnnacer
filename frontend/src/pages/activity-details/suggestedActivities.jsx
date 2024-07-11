import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRecentActivities,
  selectRecentActivities,
  selectActivitiesStatus,
  selectActivitiesError,
} from '../../redux/activitiesSlice';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { useEffect } from 'react';

const SuggestedActivities = () => {
    const dispatch = useDispatch();
    const recentActivities = useSelector(selectRecentActivities);
    const status = useSelector(selectActivitiesStatus);
    const error = useSelector(selectActivitiesError);

    useEffect(() => {
        dispatch(fetchRecentActivities());
    }, [dispatch]);

    if (status === 'loading') {
        return (
            <div className='w-1/2'>
                <LoadingSkeleton width={'100%'} />
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className='w-1/2 text-red-500'>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white w-full md:w-1/2 rounded-2xl shadow-sm p-10" dir='rtl'>
            <h3 className='h3 mb-6'>آخر الأنشطة</h3>
            {recentActivities.map((act) => (
                <div key={act.id} className="flex flex-row md:flex-col lg:flex-row mb-3 pb-3 items-center md:items-start lg:items-center">
                    <Link to={`/activities/${act.id}`} className="inline-block ml-3">
                        <div 
                            className="w-20 h-20 bg-cover bg-center rounded-xl" 
                            style={{backgroundImage: `url(${act.image})`}} 
                            aria-label={`صورة ${act.name}`}
                        ></div>
                    </Link>
                    <div>
                        <Link 
                            to={`/activities/${act.id}`} 
                            className="text-gray-900 font-medium hover:text-indigo-600 link-underline leading-none mb-4"
                        >
                            {act.name}
                        </Link>
                        <p className="text-gray-600 text-xs">{act.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SuggestedActivities;
