import $api from "../http/indexHTTP"

export default class UserService {

    static fetchUsers() {
        return $api.get('/users');
    }

    static fetchChatUsers() {
        return $api.get('/messenger');
    }

    static fetchMessages(user) {
        return $api.get('/messenger/' + user);
    }

    static fetchNewMessage(data) {
        return $api.put('/messenger', data);
    }
};