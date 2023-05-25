import $api from "../http/indexHTTP"

export default class AuthService {
    
    static async logout() {
        return $api.post('/auth/logout');
    }

};