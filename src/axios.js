import axios from 'axios'
import router from './router'

export default function setup () {
    axios.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        config.url = `${process.env.VUE_APP_BACKEND_URL}${config.url}`
        if(token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });

    axios.interceptors.response.use(
        response => {
          return response;
        },
        async (err) => {
            // console.log('intercep', err.response)
            if (err.response.status === 403 )router.push('/forbidden')
            if (err.response.status === 401) {
                localStorage.clear()
                router.push('/login')
            }
        })
}