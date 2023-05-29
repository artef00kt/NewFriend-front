import $api from "../http/indexHTTP"

export default class AdminService {

    // verifications

    static fetchVerificationsUsersList() {
        return $api.get('/admin/verifications');
    }

    static fetchVerifyUser(user) {
        return $api.patch('admin/verifications/' + user);
    }

    static fetchNoVerifyUser(user) {
        return $api.patch('admin/verifications/delete/' + user);
    }

    // complains

    static fetchComplaintsUsersList() {
        return $api.get('admin/complaints');
    }

    static fetchBanUser(id) {
        return $api.patch('admin/complaints/ban/' + id);
    }

    static fetchNoBanUser(id) {
        return $api.patch('admin/complaints/unban/' + id);
    }
};