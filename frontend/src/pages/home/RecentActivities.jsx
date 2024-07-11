import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRecentActivities,
  selectRecentActivities,
  selectActivitiesStatus,
  selectActivitiesError,
} from '../../redux/activitiesSlice';

import LoadingSkeleton from '../../components/LoadingSkeleton';

const RecentActivities = () => {
  const dispatch = useDispatch();
  const recentActivities = useSelector(selectRecentActivities);
  const status = useSelector(selectActivitiesStatus);
  const error = useSelector(selectActivitiesError);

  useEffect(() => {
    dispatch(fetchRecentActivities());
  }, [dispatch]);

  return (
    <div className="w-[95%] my-6 font-Tajawal mb-2 mx-auto">
      <h2 className="h2 mb-5 text-center">أبرز الأنشطة</h2>

      <div className="flex flex-col md:flex-row flex-wrap gap-4 my-6 justify-between">
        {status === 'loading' ? (
          Array.from({ length: 3 }).map((_, index) => <LoadingSkeleton key={index} />)
        ) : (
          recentActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white w-full md:w-[30%] shadow rounded overflow-hidden hover:shadow-primary transition-shadow duration-300"
              dir="rtl"
            >
              {act.image && (
                <img
                  src={act.image}
                  className="object-cover h-52 w-full rounded-t hover:scale-105 transition-scale duration-300"
                  alt={act.title}
                />
              )}
              <div className="p-4">
                <span className="block text-slate-400 font-semibold text-sm">{act.name}</span>
                <h3 className="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                  <p className="text-ellipsis overflow-hidden h-20 line-clamp-3">{act.description}</p>
                </h3>
                <div className="mt-4">
                  <Link to={`/activities/${act.id}`} className="underline">
                    اقرأ المزيد
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center">
        <Link to="/activities" className="link-full">
          أنشطة أخرى
        </Link>
      </div>
    </div>
  );
};

export default RecentActivities;
