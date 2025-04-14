import { useState } from 'react';
import './App.css';

function App() {
  const [travelLogs, setTravelLogs] = useState([
    { id: 1, location: 'Paris', date: '2023-06-15', description: 'Visited the Eiffel Tower.' },
    { id: 2, location: 'Tokyo', date: '2023-07-20', description: 'Explored the cherry blossoms.' },
  ]);

  const [newLog, setNewLog] = useState({ location: '', date: '', description: '' });

  const handleAddLog = () => {
    if (!newLog.location || !newLog.date || !newLog.description) {
      alert('Please fill out all fields.');
      return;
    }
    const newLogEntry = { id: travelLogs.length + 1, ...newLog };
    setTravelLogs([...travelLogs, newLogEntry]);
    setNewLog({ location: '', date: '', description: '' });
  };

  return (
    <div className="App">
      <header>
        <h1>Travel Log</h1>
      </header>

      {/* Add Travel Log Form */}
      <div className="add-log-form">
        <h2>Add a New Travel Log</h2>
        <input
          type="text"
          placeholder="Location"
          value={newLog.location}
          onChange={(e) => setNewLog({ ...newLog, location: e.target.value })}
        />
        <input
          type="date"
          value={newLog.date}
          onChange={(e) => setNewLog({ ...newLog, date: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newLog.description}
          onChange={(e) => setNewLog({ ...newLog, description: e.target.value })}
        />
        <button onClick={handleAddLog}>Add Log</button>
      </div>

      {/* Display Travel Logs */}
      <div className="travel-logs">
        <h2>Your Travel Logs</h2>
        {travelLogs.length === 0 ? (
          <p>No travel logs available. Add one above!</p>
        ) : (
          travelLogs.map((log) => (
            <div key={log.id} className="travel-log">
              <h3>{log.location}</h3>
              <p>{log.date}</p>
              <p>{log.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
