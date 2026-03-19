import axios from 'axios';

const API_KEY = '55096474-b1fd7eaea0590dea563cfdba0'; 
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  
  return axios.get(BASE_URL, { params: searchParams })
    .then(response => response.data) 
    .catch(err => {
        console.error("Error:", err);
        throw err;
    });
}

