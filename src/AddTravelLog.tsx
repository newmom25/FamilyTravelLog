import React, { useState } from 'react';

interface AddTravelLogProps {
  onAdd: (log: { location: string; date: string; description: string }) => void;
}

const AddTravelLog: React.FC<AddTravelLogProps> = ({ onAdd }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !date || !description) {
      alert('Please fill out all fields.');
      return;
    }
    onAdd({ location, date, description });
    setLocation('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Add Travel Log</h2>
      <div className="mb-2">
        <label className="block mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter location"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter description"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Log
      </button>
    </form>
  );
};

export default AddTravelLog;