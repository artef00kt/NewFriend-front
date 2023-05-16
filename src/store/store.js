import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService.js";
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

    async login(login, password) {
        try {
            const response = await AuthService.login(login, password);
            //console.log(response);
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
        }
    }

    async registration(login, password) {
        try {
            const response = await AuthService.registration(login, password);
            console.log(response);
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
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
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
            const response = await axios.get(`${API_URL}/auth/showUserInfo`, {
                withCredentials: true,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            })
            console.log(response);

        }
        catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}