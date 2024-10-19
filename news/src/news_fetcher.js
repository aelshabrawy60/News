// dataFetcher.js

import axios from 'axios';

const api_key = '612d4d7c37434d3bbc5935ee0e21a10c'

// Utility function to fetch data from a given URL
export const fetchData = async (keyword) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${api_key}`); // Use Axios to fetch data
        return response.data; // Return the fetched data
    } catch (error) {
        // Check if the error has a response from the server
        if (error.response) {
            throw new Error(`Error: ${error.response.status} - ${error.response.data}`);
        }
        throw new Error(`Error: ${error.message}`);
    }
};
