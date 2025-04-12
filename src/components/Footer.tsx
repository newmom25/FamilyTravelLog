import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} Travel Log App. All rights reserved.</p>
            <p>
                <a href="/about" className="text-blue-400 hover:underline">About</a> | 
                <a href="/contact" className="text-blue-400 hover:underline"> Contact</a>
            </p>
        </footer>
    );
};

export default Footer;