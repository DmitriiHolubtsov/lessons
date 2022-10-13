import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8u68mLjRH60Ytb8coDlzr2n9pjnMAu5xSZZbKQ39bYA'
    }
});