import { makeAutoObservable } from "mobx";

class Auth {
  isAuth = JSON.parse(localStorage.getItem("isAuth"));
  constructor() {
    makeAutoObservable(this);
  }
  changeAuth() {
    this.isAuth = !this.isAuth;
  }
}
const auth = new Auth();

export { auth };
