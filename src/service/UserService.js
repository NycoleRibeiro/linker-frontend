import ApiClient from './ApiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class UserService {

    static instance = null;

    static getInstance() {
        if (this.instance === null) {
            this.instance = new UserService();
        }
        return this.instance;
    }

    constructor() {
        this.http = ApiClient.getInstance();
    }

    async fromLocalStorage() {
        const user = await AsyncStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    async saveLocalStorage(user) {
        if (!Array.isArray(user.photos)){
            user.photos = [user.photo];
        }
        return await AsyncStorage.setItem('user', JSON.stringify(user));
    }

    async updateUser(user) {
        const userToPost = { ...user }
        const { sub } = await this.fromLocalStorage();
        await AsyncStorage.setItem('user', JSON.stringify({ sub, ...userToPost }));

        console.log('>>> EDIT USER', JSON.stringify(userToPost, null, 4));

        for (const arrayProperty of ["interests", "hardSkills", "softSkills", "images"]) {
            if (userToPost[arrayProperty] && Array.isArray(userToPost[arrayProperty])) {
                userToPost[arrayProperty] = userToPost[arrayProperty].join(',');
            }
        }
        return await this.http.put(`/developers/${sub}`, userToPost);
    }

    async saveUser(user) {
        const userToPost = { ...user }
        if (!Array.isArray(userToPost.photos)){
            userToPost.photos = [userToPost.photo];
        }
        const { sub } = await this.fromLocalStorage();
        await AsyncStorage.setItem('user', JSON.stringify({ sub, ...userToPost }));
        for (const arrayProperty of ["interests", "hardSkills", "softSkills", "images"]) {
            if (userToPost[arrayProperty] && Array.isArray(userToPost[arrayProperty])) {
                userToPost[arrayProperty] = userToPost[arrayProperty].join(',');
            }
        }
        return await this.http.post('/developers', userToPost);
    }

}
