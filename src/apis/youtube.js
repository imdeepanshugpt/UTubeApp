import axios from 'axios';
const KEY = 'AIzaSyCRXIu7JDvwQrgDSZH9OmRk56fEjMCJ6sM';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 20,
            key: KEY
        }
    }
)