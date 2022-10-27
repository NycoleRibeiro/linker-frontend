import ApiClient from './ApiClient';

class DevService {

    static instance = null;

    static getInstance() {
        if (this.instance === null) {
            this.instance = new DevService();
        }
        return this.instance;
    }

    constructor() {
        this.http = ApiClient.getInstance();
    }

    async all() {
        // TODO: implementar no backend
        const response = await this.http.get('/devs');
        return response.data._embedded.jobs;
    }

    async explore() {
        const response = await this.http.get('/explore/devs');
        return response.data;
    }

}

export default DevService;
