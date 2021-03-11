// Import
import axios from 'axios';

// Create
const service = axios.create({
  baseURL: '',
});

// Request Interceptor
service.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// Response Interceptor
service.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // All response error
      console.log('error.response', error.response);

      // Backend error
      if (error.response.status === 500) {
        console.log('response 500');
      }

      // 404
      if (error.response.status == 404) {
        console.log('response 404');
      }
    }

    return Promise.reject(error);
  },
);

// Export axios
export default service;
