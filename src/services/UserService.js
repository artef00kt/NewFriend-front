import $api from "../http/indexHTTP"

export default class UserService {

    static fetchUsers() {
        return $api.get('/users');
    }

};