import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID S14Ijm5PjPS0HQp44e_ddP3UW40PsvCo7s2McSXMJSs',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;