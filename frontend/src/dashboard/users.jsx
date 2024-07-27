import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchUsers,
    selectAllUsers,
    selectUsersStatus,
    selectUsersError,
    resetUsers,
    deleteUser,
} from '../redux/usersSlice';
import TableSkeleton from "../components/tableSkeleton";
import DeleteModal from "../components/deleteModal";
// import AddUser from "./addUser";
// import UpdateUser from "./updateUser";

const ManageUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const status = useSelector(selectUsersStatus);
    const error = useSelector(selectUsersError);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [addUser, setAddUser] = useState(false);
    const [updateUser, setUpdateUser] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        dispatch(resetUsers());
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        setSelectedId(id);
        setIsModalVisible(true);
    };

    const confirmDelete = () => {
        dispatch(deleteUser(selectedId));
        setIsModalVisible(false);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const TableHead = [
        'Name',
        'Email',
        'Role',
        'Actions'
    ];

    const handleUpdate = (user) => {
        setUpdateUser(true);
        setSelectedUser(user);
    };

    // Filter users based on search query
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-full w-full p-4">
            <header className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                    <h5 className="h3">Manage Users</h5>
                    <p className="text-gray-600">Manage your user accounts here</p>
                </div>
                <div className="flex gap-2 md:w-max">
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-sm p-2 mb-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn-primary" onClick={() => setAddUser(true)}>
                        Add User
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
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                    {Array.from({ length: 6 }).map((_, index) => <TableSkeleton key={index} />)}
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">{error}</td>
                            </tr>
                        ) : filteredUsers.length !== 0 ? filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-gray-900">{user.name}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-gray-500">{user.email}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">{user.role}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2">
                                        <button 
                                            className="text-indigo-600 hover:text-indigo-900"
                                            onClick={() => handleUpdate(user)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-900"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No Users Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalVisible && <DeleteModal confirmDelete={confirmDelete} closeModal={closeModal} />}
            {/* {addUser && <AddUser isOpen={addUser} setAddUser={setAddUser} />}
            {updateUser && <UpdateUser isOpen={updateUser} setUpdateUser={setUpdateUser} user={selectedUser} />} */}
        </div>
    );
};

export default ManageUsers;
