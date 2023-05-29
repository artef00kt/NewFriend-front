import $api from "../http/indexHTTP"

export default class UserService {

    static fetchUserData() {
        return $api.get('/Me/myData');
    }

    ////// CHAT //////
    static fetchChatUsers() {
        return $api.get('/messenger');
    }

    static fetchChatUsersEmpty() {
        return $api.get('/messenger/empty');
    }

    static fetchMessages(user) {
        return $api.get('/messenger/' + user);
    }

    static fetchNewMessage(data) {
        return $api.put('/messenger', data);
    }

    ////// EDIT PROFILE //////
    static fetchNewUserData(data) {
        return $api.post('/Me/create', data);
    }


    ////// NEW FRIEND ///////
    static fetchFindFriend() {
        return $api.get('/findFriends');
    }

    static fetchInviteToFriend(login) {
        return $api.patch('/findFriends/send/' + login);
    }

    static fetchSendComplain(data) {
        return $api.post('/findFriends/complain', data);
    }

    ////// FRIEND REQUESTS //////
    static fetchInvites() {
        return $api.get('/friends/invites');
    }

    static fetchAcceptFriendInvite(login) {
        return $api.patch('/friends/invites/' + login);
    }

    static fetchDenyFriendInvite(login) {
        return $api.patch('/friends/invites/cancel/' + login);
    }
};