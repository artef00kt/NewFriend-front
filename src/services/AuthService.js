import $api from "../http/indexHTTP"

export default class AuthService {

    static async login(login, password) {
        const dataSend = {
            "login" : login, 
            "password" : password
        };

        return $api.post('/auth/login', dataSend);
    }

    static async registration(login, password) {
        const dataSend = {
            "login" : login, 
            "password" : password
        };

        return $api.post('/auth/registration', dataSend);
    }

    static async logout() {
        return $api.post('/auth/logout');
    }

};