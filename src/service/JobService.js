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

    async explore() {
        const response = await this.http.get('/explore/jobs');
        return response.data;
    }

    async loadCompanyInfo(job){
        const response = await this.http.get(job._links.company.href);
        return response.data;
    }

    async saveJob(job) {
        const { questions, ...jobPayload } = job;
        const promises = [];
        const jobProimse = this.http.post('/jobs', this.normalized(job));
        promises.push(jobProimse);
        for(const question of questions){
            const questionPayload = {
                ...question,
                job: await jobProimse.then(res => res.data._links.self.href)
            };
            const questionPromise = this.http.post('/questions', questionPayload);
            promises.push(questionPromise);
        }

        return await Promise.all(promises);
    }

}

export default JobService;
