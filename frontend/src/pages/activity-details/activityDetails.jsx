import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import logo from '../../images/logo.png'
import INFO from '../../data/INFO';

import {
    selectActivityById,
    selectActivitiesStatus,
    selectActivitiesError,
    fetchActivityById,
} from '../../redux/activitiesSlice';
import LoadingSkeleton from "../../components/LoadingSkeleton";

const ActivityDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const activity = useSelector(selectActivityById);
    const status = useSelector(selectActivitiesStatus);
    const error = useSelector(selectActivitiesError);

    useEffect(() => {
        dispatch(fetchActivityById(parseInt(id)));
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="w-full"><LoadingSkeleton width={'100%'} /></div>;
    }

    if (status === 'failed') {
        return  <div className="h-screen w-full">
                    <div className="text-xl text-red-600">Error: {error}</div>
                </div>;
    }

    if (!activity) {
        return <div className="h-screen w-full">
                    <div className="text-xl">Activity not found</div>
                </div>;
    }

    return (
        <div className="w-full bg-white rounded-2xl shadow-sm font-Tajawal" dir="rtl">
            <div className="p-3 w-full h-72 md:h-96">
                <img className="w-full h-full rounded-xl object-cover " src={activity.image} alt={activity.name} />
            </div>
            <div className="px-5 py-3">
                <div className="flex w-[100px] justify-around items-center gap-2 mb-3 px-3 py-1 text-primary bg-bodyBgColor rounded-md">
                    <div className="bg-primary w-[10px] h-[10px] rounded-full"></div>
                    <div>{activity.type}</div>
                </div>
                <h2 className="h2 mb-3">{activity.name}</h2>
                <figcaption class="flex items-center space-x-4 gap-4 mb-3">
                    <img src={logo} alt="logo" class="flex-none w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async"/>
                    <div class="flex-auto">
                        <div class="text-base text-slate-900 font-semibold">
                            {INFO.name.ar}
                        </div>
                        <div class="text-sm">
                            {activity.location + ' - ' + activity.date}
                        </div>
                    </div>
                </figcaption>
                <p className="text-justify">{activity.description}</p>
            </div>
        </div>
    );
}

export default ActivityDetails;
