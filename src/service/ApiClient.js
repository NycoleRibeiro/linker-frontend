import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiClient {

    static instance = null;

    static getInstance() {
        if (this.instance === null) {
            this.instance = new ApiClient();
        }
        return this.instance;
    }

    static async ping() {
        return await this.getInstance().client.get('/');
    }

    constructor() {
        this.client = axios.create({
            baseURL: 'https://a236-2804-60-1f7-2300-fb51-1e1e-19e8-89ee.sa.ngrok.io',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        AsyncStorage.getItem('token')
            .then(token => {
                if (token) this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }).catch(console.log);
    }

    static setAuthorizationToken(token) {
        this.getInstance().client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    async get(url, params) {
        return await this.client.get(url, params);
    }

    async post(url, data) {
        return await this.client.post(url, data);
    }

    async put(url, data) {
        return await this.client.put(url, data);
    }

    async delete(url) {
        return await this.client.delete(url);
    }
}

export default ApiClient;
