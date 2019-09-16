import axios from 'axios';

const API_HOST = !process.browser ? process.env.API_HOST : '';
const API_URL = process.env.API_URL ? process.env.API_URL : '/api/v1/';

class Api {
    baseUrl = API_HOST + API_URL;

    constructor(baseUrl) {
        this.axios = axios.create({
            baseURL: baseUrl || this.baseUrl,
        });
    }
}

let api = new Api();

export default api;