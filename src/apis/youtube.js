import axios from 'axios';

const KEY = 'AIzaSyDoAH92Mcr0YPt65K-cpk0F0XU_1-VpOok';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
});