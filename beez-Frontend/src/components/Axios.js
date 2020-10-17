import axios from 'axios';

const store = JSON.parse(localStorage.getItem('login'));
axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.headers.common = {
    'Authorization': `bearer ${store.token}`,
    'content-type': 'application/json',
        'Accept': 'application/json',
}
export default axios;
