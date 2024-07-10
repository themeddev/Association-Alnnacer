import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchActivities,
  selectAllActivities,
  selectActivitiesStatus,
  selectActivitiesError,
  selectHasMoreActivities,
  selectCurrentPage,
  resetActivities,
} from '../../redux/activitiesSlice';

import LoadingSkeleton from '../../components/LoadingSkeleton';
import NoData from '../../components/no-data';

const ShowActivities = () => {
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
  };

  const filteredActivities = activities.filter(act =>
    act.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderActivities = () => {
    if (status === 'loading' && activities.length === 0) {
      return Array.from({ length: 6 }).map((_, index) => <LoadingSkeleton key={index} />);
    } else if (status === 'failed') {
      return <p>Failed to fetch activities. Please try again later.</p>;
    } else {
      return (filteredActivities.length > 0) ? filteredActivities.map((act) => (
        <div
          key={act.id}
          className="bg-white w-full md:w-[30%] shadow rounded overflow-hidden hover:shadow-primary transition-shadow duration-300"
          dir="rtl"
        >
          <img
            src={act.image}
            className="object-cover h-52 md:h-36 w-full rounded-t hover:scale-105 transition-scale duration-300"
            alt={act.name}
          />
          <div className="p-4">
            <div className='flex justify-between text-sm border-b border-slate-300'>
              <span className="block text-slate-400 pb-3 font-semibold">{act.name}</span>
              <span className="block text-slate-400 pb-3 font-light">{act.date}</span>
            </div>
            <div className="mt-4">
              <Link to={`/activities/${act.id}`} className="
              link-underline">
                اقرأ المزيد
              </Link>
            </div>
          </div>
        </div>
      )) : (
        <NoData />
      );
    }
  };

  return (
    <div className="w-full mb-8 font-Tajawal" dir='rtl'>
      <div className="flex justify-between items-center flex-col md:flex-row">
        <h2 className="h2 mb-4 md:mb-0">أنشطة الجمعية</h2>
        <div className="relative w-full md:w-auto" dir='ltr'>
          <input 
            className="appearance-none shadow-sm hover:shadow-primary pl-10 transition-shadow rounded w-full py-2 px-3 text-gray-800 leading-tight outline-none" 
            id="searchQuery" 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <div className="absolute right-0 inset-y-0 flex items-center" onClick={() => setSearchQuery('')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
          <div className="absolute left-0 inset-y-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-4 my-6 justify-between">
        {renderActivities()}
      </div>

      {hasMore && (
        <div className="mt-4 w-full text-center">
          <button 
            className="link-full" 
            onClick={handleLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? 'جاري التحميل...' : 'المزيد'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowActivities;
