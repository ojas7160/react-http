import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'; // now in axios.js file
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'; // for all the requests
axios.defaults.headers.post['Content-Type'] = 'application/json'; // for any particular request like post req

axios.interceptors.request.use(request => {
  console.log(request)
  // To edit headers in all request
  return request;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  return response;
}, err => {
  return Promise.reject(err);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
