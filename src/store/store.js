import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService.js";
import UserService from "../services/UserService.js";
import AdminService from "../services/AdminService.js";

import axios from 'axios';
import { API_URL } from "../http/indexHTTP.js";


export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(flag) {
        this.isAuth = flag;
    }

    setUser(user) {
        this.user = user;
    }

    ///////////////////////////
    ////// AUTHORIZATION //////
    ///////////////////////////


    async login(login, password) {
        try {
            const dataSend = {
                "login" : login, 
                "password" : password
            };

            const response = await axios.post(`${API_URL}/auth/login`, dataSend);

            localStorage.setItem('access_token', response.data["access_token"]);
            localStorage.setItem('refresh_token', response.data["refresh_token"]);

            this.setAuth(true);
            this.setUser({
                "login" : response.data["login"], 
                "role" : response.data["authority"]
            });
        }
        catch (e) {
            console.log(e.response?.data?.message);
            return e.response.status;
        }
    }

    async registration(login, password) {
        try {
            const dataSend = {
                "login" : login, 
                "password" : password
            };

            const response = await axios.post(`${API_URL}/auth/registration`, dataSend);

            localStorage.setItem('access_token', response.data["access_token"]);
            localStorage.setItem('refresh_token', response.data["refresh_token"]);

            this.setAuth(true);
            this.setUser({
                "login" : response.data["login"], 
                "role" : response.data["authority"]
            });
        }
        catch (e) {
            console.log(e.response?.data?.message);
            return e.response.status;
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            // const response = await axios.post(`${API_URL}/auth/logout`);
            // //const response = await AuthService.logout();
            console.log(response);

            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            this.setAuth(false);
            this.setUser({});
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const header = {
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            };

            const response = await axios.get(`${API_URL}/auth/userInfo`, {
                headers: header
            })

            //console.log(response);
            this.setAuth(true);
            this.setUser({
                "login" : response.data["login"], 
                "role" : response.data["role"]
            });
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async getUserData() {
        try {
            const response = await UserService.fetchUserData();
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }


    //////////////////
    ////// CHAT //////
    //////////////////


    async getUsers() {
        try {
            const response = await UserService.fetchChatUsers();
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async getUsersEmpty() {
        try {
            const response = await UserService.fetchChatUsersEmpty();
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async getMessages(user) {
        try {
            const response = await UserService.fetchMessages(user);
            return response.data
        }
        catch(e) {
            console.log(e.response?.data?.message);
        }
    }

    async sendMessage(recipient, text) {
        try {
            const dataSend = {
                "sender" : this.user.login, 
                "recipient" : recipient,
                "text" : text,
            };
            const response = await UserService.fetchNewMessage(dataSend);
            console.log(response);
        }
        catch(e) {
            console.log(e.response?.data?.message);
        }
    }


    //////////////////////
    ////// NEW USER //////
    //////////////////////

    async sendUserData(data) {
        try {
            const response = await UserService.fetchNewUserData(data);
            console.log(response);
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    ///////////////////////////////
    ////// ADMIN VERFICATION //////
    ///////////////////////////////

    async getVerificationsUsersList() {
        try {
            const response = await AdminService.fetchVerificationsUsersList();
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async setVerifyUser(user) {
        try {
            const response = await AdminService.fetchVerifyUser(user);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async setNoVerifyUser(user) {
        try {
            const response = await AdminService.fetchNoVerifyUser(user);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    //////////////////////////////
    ////// ADMIN COMPLAINTS //////
    //////////////////////////////

    async getComplaintsUsersList() {
        try {
            const response = await AdminService.fetchComplaintsUsersList();
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async setBanUser(id) {
        try {
            const response = await AdminService.fetchBanUser(id);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async setNoBanUser(id) {
        try {
            const response = await AdminService.fetchNoBanUser(id);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    /////////////////////////
    ////// FIND FRIEND //////
    /////////////////////////

    async getFindFriend() {
        try {
            const response = await UserService.fetchFindFriend();
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async patchInviteToFriend(login) {
        try {
            const response = await UserService.fetchInviteToFriend(login);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async sendComplain(data) {
        try {
            const response = await UserService.fetchSendComplain(data);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    ///////////////////////////////////
    ////// ADD OR NO ADD FRIENDS //////
    ///////////////////////////////////

    async getInvitesList() {
        try {
            const response = await UserService.fetchInvites();
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async setAcceptToInvite(login) {
        try {
            const response = await UserService.fetchAcceptFriendInvite(login);
            //console.log(response.data);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async setDenyToInvite(login) {
        try {
            const response = await UserService.fetchDenyFriendInvite(login);
            //console.log(response.data);
            return response.data;
        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}