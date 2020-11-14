import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://taskb4-icecreambuilder.firebaseio.com/'
});

export default instance;