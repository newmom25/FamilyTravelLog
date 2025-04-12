import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogEntry from '../components/LogEntry';

const Home: React.FC = () => {
    const travelLogs = [
        { id: 1, location: 'Paris', date: '2023-06-15', description: 'Visited the Eiffel Tower.' },
        { id: 2, location: 'Tokyo', date: '2023-07-20', description: 'Explored the cherry blossoms.' },
        { id: 3, location: 'New York', date: '2023-08-10', description: 'Saw a Broadway show.' },
    ];

    return (
        <div>
            <Header />
            <main className="p-4">
                <h1 className="text-2xl font-bold">Travel Log</h1>
                <div className="mt-4">
                    {travelLogs.map(log => (
                        <LogEntry key={log.id} location={log.location} date={log.date} description={log.description} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;