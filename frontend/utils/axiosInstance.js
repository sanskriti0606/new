import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://aa-rho-rust.vercel.app/'
});

// Export the axios instance for making HTTP requests
export default axiosInstance;
