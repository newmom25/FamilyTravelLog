import React from 'react';

const About: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">About This Application</h1>
            <p className="mt-2">
                This travel log application allows users to document their travels, 
                keep track of their experiences, and share their adventures with others. 
                Users can add, view, and delete travel log entries, making it easy to 
                maintain a record of their journeys.
            </p>
            <h2 className="mt-4 text-xl font-semibold">Features</h2>
            <ul className="list-disc list-inside mt-2">
                <li>Add new travel log entries</li>
                <li>View a summary of past travels</li>
                <li>Delete entries as needed</li>
            </ul>
            <h2 className="mt-4 text-xl font-semibold">Technologies Used</h2>
            <p className="mt-2">
                This application is built using React and TypeScript, with Tailwind CSS for styling.
            </p>
        </div>
    );
};

export default About;