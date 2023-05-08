import $api from "../http/indexHTTP"

export default class AuthService {

    static async login(login, password) {
        return $api.post('/auth/login', {"login":login, "password":password})
            .then((response) => {
                console.log(response);
            });
    }

    static async registration(login, password) {
        return $api.post('/auth/registration', {login, password});
    }

    static async logout() {
        return $api.post('/auth/logout');
    }

};