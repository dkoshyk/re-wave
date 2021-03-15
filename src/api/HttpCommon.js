import axios from "axios";

export function InitAxios() {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-type": "application/json"
        },
    });

    axios.defaults.baseURL = baseUrl;

    // axios.interceptors.request.use(
    //     config => {
    //         const token = localStorage.getItem('token');
    //         if (token) {
    //             config.headers['Authorization'] = 'Bearer ' + token;
    //         }

    //         return config;
    //     },
    //     error => {
    //         Promise.reject(error)
    //     });

    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(token);
    }

    console.log('axios', axios.defaults);
}