import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000,
  headers: {
    'X-AUTH-TOKEN': localStorage.getItem('accessToken') || '',
  },
});

export default instance;
