import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchActivities,
    selectAllActivities,
    selectActivitiesStatus,
    selectActivitiesError,
    selectHasMoreActivities,
    selectCurrentPage,
    resetActivities,
    deleteActivity,
} from '../redux/activitiesSlice';
import TableSkeleton from "../components/tableSkeleton";
import DeleteModal from "../components/deleteModal";
import AddActivity from "./AddActivity";
import UpdateActivity from "./updateActivity";

const ManageActivities = () => {
    const dispatch = useDispatch();
    const activities = useSelector(selectAllActivities);
    const status = useSelector(selectActivitiesStatus);
    const error = useSelector(selectActivitiesError);
    const hasMore = useSelector(selectHasMoreActivities);
    const currentPage = useSelector(selectCurrentPage);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [addActivity, setAddActivity] = useState(false);
    const [updateActivity, setUpdateActivity] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState({});
    const [showAlert, setShowAlert] = useState(false);

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

    const handleDelete = (id) => {
        setSelectedId(id);
        setIsModalVisible(true);
    };

    const confirmDelete = () => {
        dispatch(deleteActivity(selectedId));
        setIsModalVisible(false);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const TableHead = [
        'Image',
        'Name',
        'Type',
        'Date',
        'Location',
        'Actions'
    ];

    const handleUpdate = (act) => {
        setUpdateActivity(true);
        setSelectedActivity(act);
    };

    // Filter activities based on search query
    const filteredActivities = activities.filter(activity => 
        activity.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-full w-full p-4">
            <header className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                    <h5 className="h3">Manage Activities</h5>
                    <p className="text-gray-600">These are details about activities</p>
                </div>
                <div className="flex gap-2 md:w-max">
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-sm p-2 mb-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn-primary" onClick={() => setAddActivity(true)}>
                        Add Activity
                    </button>
                </div>
            </header>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {TableHead.map((th, index) => (
                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{th}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {status === 'loading' ? (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                    {Array.from({ length: 6 }).map((_, index) => <TableSkeleton key={index} />)}
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">{error}</td>
                            </tr>
                        ) : filteredActivities.length !== 0 ? filteredActivities.map((act) => (
                            <tr key={act.id}>
                                <td className="px-6 py-4">
                                    <img src={act.image} alt={act.type} className="h-16 w-16 object-cover rounded" />
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-gray-900">{act.name}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{act.activity_type.name}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-gray-500">{act.date}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-gray-500">{act.location}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2">
                                        <button 
                                            className="text-indigo-600 hover:text-indigo-900"
                                            onClick={() => handleUpdate(act)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red"
                                            onClick={() => handleDelete(act.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No Activity Created yet</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {hasMore && (
                <button 
                    className="mt-4 btn-primary-full"
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                >
                    {isLoadingMore ? 'Loading...' : 'More'}
                </button>
            )}

            {isModalVisible && <DeleteModal confirmDelete={confirmDelete} closeModal={closeModal} />}
            {addActivity && <AddActivity isOpen={addActivity} setAddActivity={setAddActivity} />}
            {updateActivity && <UpdateActivity isOpen={updateActivity} setUpdateActivity={setUpdateActivity} activity={selectedActivity} />}
        </div>
    );
};

export default ManageActivities;