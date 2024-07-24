import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function NavSide({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation(); // Get the current path
    const navigate = useNavigate(); // Navigate function

    const handleOpenSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        Cookies.remove('authToken'); // Remove the token from cookies
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="h-screen flex overflow-hidden bg-gray-200">
            <div
                className={`absolute flex flex-col justify-between bg-primary z-50 text-white w-64 min-h-screen overflow-y-auto transition-transform duration-300 ${
                    isSidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
                }`}
                id="sidebar"
            >
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <ul className="mt-4">
                        <li className="mb-2">
                            <Link 
                                to="/dashboard" 
                                className={`block px-3 py-2 rounded-md ${
                                    location.pathname === '/dashboard' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
                                }`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link 
                                to="activities" 
                                className={`block px-3 py-2 rounded-md ${
                                    location.pathname === '/dashboard/activities' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
                                }`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                Manage Activities
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link 
                                to="members" 
                                className={`block px-3 py-2 rounded-md ${
                                    location.pathname === '/dashboard/members' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
                                }`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                Manage Members
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                  <button
                    onClick={handleLogout}
                    className="mt-auto flex gap-2 items-center w-full  px-3 py-4 bg-black text-white"
                  >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#fff" stroke-width="2" stroke-linecap="round"></path> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#fff"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <div>Logout</div>
                  </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden w-full">
                <div className="bg-white shadow">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center py-4 px-[3%]">
                            <h1 className="text-xl font-semibold">Association Alnnacer</h1>
                            <button
                                className="text-gray-500 hover:text-gray-600"
                                id="open-sidebar"
                                onClick={handleOpenSidebar}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}