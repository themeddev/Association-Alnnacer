
const users = {
    newPost: 2,
    totalPost: 21,
    availablePosts: 342,
};

const activities = [
    { type: 'User Registration', description: 'A new Admin registered.' },
    { type: 'New Post', description: 'A new Post was created.' },
    { type: 'Post Updated', description: 'Post details were updated.' },
]

export const Dashboard = () => {
    return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Alnnacer Dashboard Content</h1>
                <p className="mt-2">Only for admin & content creators</p>

                <div className="mt-4">
                    <div className="flex flex-wrap -mx-6">
                        {/* New Users Card */}
                        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                    <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="mx-5">
                                    <h4 className="text-2xl font-semibold text-gray-700">{users.new}</h4>
                                    <div className="text-gray-500">New Users</div>
                                </div>
                            </div>
                        </div>

                        {/* Total Orders Card */}
                        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                    <svg class="w-8 h-8 text-white" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#fff" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className="mx-5">
                                    <h4 className="text-2xl font-semibold text-gray-700">{users.totalPost}</h4>
                                    <div className="text-gray-500">Total Posts</div>
                                </div>
                            </div>
                        </div>

                        {/* Available Products Card */}
                        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                                    <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                    </svg>
                                </div>
                                <div className="mx-5">
                                    <h4 className="text-2xl font-semibold text-gray-700">{users.availablePosts}</h4>                                  
                                    <div className="text-gray-500">Available Posts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activities Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold">Recent Activities</h2>
                    <ul className="mt-4 space-y-2">
                        {activities.map((activity, index) => (
                            <li key={index} className="p-4 bg-white shadow rounded-md">
                                <strong>{activity.type}:</strong> {activity.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    );
};