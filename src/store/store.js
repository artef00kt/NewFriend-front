import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService.js";


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
            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
        }
        catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(login, password) {
        try {
            const response = await AuthService.registration(login, password);
            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
        }
        catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        }
        catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}