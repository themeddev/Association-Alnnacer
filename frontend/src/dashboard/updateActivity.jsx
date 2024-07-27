import axios from 'axios';
import { useEffect, useState } from 'react';

const HOST = import.meta.env.VITE_APP_BACKEND_HOST || "http://127.0.0.1:8000";

const UpdateActivity = ({ isOpen, setUpdateActivity, activity }) => {
  const [image, setImage] = useState(null);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    if (activity) {
      setType(activity.type_id || '');
      setName(activity.name || '');
      setDescription(activity.description || '');
      setLocation(activity.location || '');
      setDate(activity.date || '');
    }
  }, [activity]);

  useEffect(() => {
    fetch(`${HOST}/api/activityTypes`)
      .then((res) => res.json())
      .then((data) => setTypes(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activityData = new FormData();

    if (image) {
      activityData.append('image', image);
    }

    activityData.append('type_id', type.toString());
    activityData.append('name', name);
    activityData.append('location', location);
    activityData.append('description', description);
    activityData.append('date', date);

    try {
      const response = await axios.put(`${HOST}/api/activities/${activity.id}`, activityData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        setUpdateActivity(false);
        window.location.reload();
      } else {
        console.error('Failed to update activity');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex overflow-auto items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full">
        <h2 className="text-xl font-bold mb-4">Update Activity</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="image" className="mb-1 text-sm font-medium text-gray-700">Upload Image</label>
            <input id="image" 
              onChange={(e) => setImage(e.target.files[0])} 
              accept="image/*" 
              type="file" 
              className="mt-1 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-1 file:px-2 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm">Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border rounded-md p-2 w-full mt-1 focus:outline-primary"
              required
            >
              <option value="">Select type</option>
              {types.map((type) => (
                <option
                  className='px-4 py-3 hover:bg-primary' 
                  key={type.id} value={type.id}
                  >{type.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md p-2 w-full mt-1 focus:outline-primary"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-md p-2 w-full mt-1 focus:outline-primary"
              required
            />
          </div>
          <div className='flex flex-row gap-2'>
            <div className="flex flex-col w-1/2">
              <label className="text-gray-700 text-sm">Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border rounded-md p-2 w-full mt-1 focus:outline-primary"
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-gray-700 text-sm">Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border rounded-md p-2 w-full mt-1 focus:outline-primary"
                required
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-3 rounded text-sm"
              onClick={() => setUpdateActivity(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue text-white font-bold py-2 px-3 rounded text-sm"
            >
              Update Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateActivity;