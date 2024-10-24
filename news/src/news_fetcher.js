// newsApi.js
import axios from 'axios';

const apiKey = '612d4d7c37434d3bbc5935ee0e21a10c';

export const fetchData =  async (query) =>{
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data.articles; // Return the articles from the response
    } catch (error) {
        console.error('Error fetching news:', error);
        return []; // Return an empty array in case of an error
    }
}


