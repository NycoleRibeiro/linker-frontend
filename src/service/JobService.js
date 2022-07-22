import ApiClient from './ApiClient';
import UserService from './UserService';

class JobService {

    static instance = null;
    userService = UserService.getInstance();

    static getInstance() {
        if (this.instance === null) {
            this.instance = new JobService();
        }
        return this.instance;
    }


    normalized(job) {
        const tempJob = { ...job};
        for (const arrayProperty of ["areas", "requirements", "optionals", "categories"]) {
            if (tempJob[arrayProperty] && Array.isArray(tempJob[arrayProperty])) {
                tempJob[arrayProperty] = tempJob[arrayProperty].join(',');
            }
        }
        return tempJob;
    }


    constructor() {
        this.http = ApiClient.getInstance();
    }

    async all() {
        const response = await this.http.get('/jobs');
        return response.data._embedded.jobs;
    }

    async saveJob(job) {
        return await this.http.post('/jobs', this.normalized(job));
    }

}

export default JobService;
