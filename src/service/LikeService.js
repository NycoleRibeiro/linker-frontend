import ApiClient from './ApiClient';
import UserService from './UserService';

class LikeService {

    static instance = null;
    userService = UserService.getInstance();

    static getInstance() {
        if (this.instance === null) {
            this.instance = new LikeService();
        }
        return this.instance;
    }

    constructor() {
        this.http = ApiClient.getInstance();
    }

    async like(prefix, job) {
        return await this.http.get('/'+prefix+'/like/' + job.id );
    }

}

export default LikeService;
