import { useEffect, useState } from 'react';
const HOST = import.meta.env.VITE_APP_BACKEND_HOST || "http://127.0.0.1:8000";

const AddActivity = ({ isOpen, setAddActivity }) => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [types, setTypes] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const activityData = new FormData();
        activityData.append('image', image);
        activityData.append('type_id', type);
        activityData.append('name', name);
        activityData.append('description', description);
        activityData.append('location', location);
        activityData.append('date', date);

        try {
            const response = await fetch(`${HOST}/api/activities`, {
                method: 'POST',
                body: activityData,
            });
            
            if (response.ok) {
                setAddActivity(false);
            } else {
                console.error('Failed to add activity');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    useEffect(() => {
        fetch(`${HOST}/api/activityTypes`)
            .then((res) => res.json())
            .then((data) => setTypes(data));
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex overflow-auto items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-4 md:mx-auto">
                <h2 className="text-2xl font-bold mb-4">Add New Activity</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col items-center space-y-4">
                        <label className="w-full">
                            <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-400">
                                {!imagePreview ? (
                                    <div className="flex flex-col items-center space-y-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span className="text-gray-600">Drop files to attach, or <span className="text-blue-600 underline">browse</span></span>
                                    </div>
                                ) : (
                                    <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-md" />
                                )}
                            </div>
                            <input type="file" name="file_upload" className="hidden" accept="image/png, image/jpeg" onChange={handleImageChange} required />
                        </label>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <label className="text-gray-700">Type:</label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="border rounded-md p-2 w-full mt-2"
                                required
                            >
                                <option value="">Select type</option>
                                {types.map((type) => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700">Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border rounded-md p-2 w-full mt-2"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700">Description:</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border rounded-md p-2 w-full mt-2"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700">Location:</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="border rounded-md p-2 w-full mt-2"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700">Date:</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="border rounded-md p-2 w-full mt-2"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                            onClick={() => setAddActivity(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue hover:opacity-95 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Activity
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddActivity;