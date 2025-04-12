import axios from 'axios';

const API_URL = 'https://api.example.com/travel-logs';

export const getLogs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching travel logs');
    }
};

export const addLog = async (logEntry) => {
    try {
        const response = await axios.post(API_URL, logEntry);
        return response.data;
    } catch (error) {
        throw new Error('Error adding travel log');
    }
};

export const deleteLog = async (logId) => {
    try {
        await axios.delete(`${API_URL}/${logId}`);
    } catch (error) {
        throw new Error('Error deleting travel log');
    }
};