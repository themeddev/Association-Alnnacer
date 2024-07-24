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
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Update Activity</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="border rounded-md p-2 w-full mt-2"
            />
          </div>
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
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
              onClick={() => setUpdateActivity(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue hover:opacity-95 text-white font-bold py-2 px-4 rounded"
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