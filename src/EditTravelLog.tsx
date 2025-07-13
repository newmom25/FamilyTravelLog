import React, { useState, useEffect } from 'react';

interface TravelLog {
  id: number;
  location: string;
  date: string;
  description: string;
}

interface EditTravelLogProps {
  log: TravelLog;
  onSave: (log: TravelLog) => void;
  onCancel: () => void;
}

const EditTravelLog: React.FC<EditTravelLogProps> = ({ log, onSave, onCancel }) => {
  const [editedLog, setEditedLog] = useState(log);

  useEffect(() => {
    setEditedLog(log);
  }, [log]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editedLog.location || !editedLog.date || !editedLog.description) {
      alert('Please fill out all fields.');
      return;
    }
    onSave(editedLog);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Edit Travel Log</h2>
      <div className="mb-2">
        <label className="block mb-1">Location</label>
        <input
          type="text"
          value={editedLog.location}
          onChange={(e) => setEditedLog({ ...editedLog, location: e.target.value })}
          className="border p-2 w-full"
          placeholder="Enter location"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Date</label>
        <input
          type="date"
          value={editedLog.date}
          onChange={(e) => setEditedLog({ ...editedLog, date: e.target.value })}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description</label>
        <textarea
          value={editedLog.description}
          onChange={(e) => setEditedLog({ ...editedLog, description: e.target.value })}
          className="border p-2 w-full"
          placeholder="Enter description"
          required
        />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTravelLog;