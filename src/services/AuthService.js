import $api from "../http/indexHTTP"

export default class AuthService {

    static async login(login, password) {
        const dataSend = {
            "login" : login, 
            "password" : password
        };
        console.log(dataSend);
        return $api.post('/auth/login', dataSend)
            // .then((response) => {
            //     console.log(response);
            // });
    }

    static async registration(login, password) {
        return $api.post('/auth/registration', {login, password});
    }

    static async logout() {
        return $api.post('/auth/logout');
    }

};