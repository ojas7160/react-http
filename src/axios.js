import axios from 'axios';

// these instances can be override in defaults instances
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'Auth Token From Instance';

// now we can handle interceptors for particular axios instances
// instance.interceptors.request...

// now this particular instance can be used in any specific file like in Blog.js file
export default instance;