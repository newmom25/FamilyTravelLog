import React from 'react';

interface LogEntryProps {
    location: string;
    date: string;
    description: string;
}

const LogEntry: React.FC<LogEntryProps> = ({ location, date, description }) => {
    return (
        <div className="log-entry">
            <h2 className="location">{location}</h2>
            <p className="date">{date}</p>
            <p className="description">{description}</p>
        </div>
    );
};

export default LogEntry;