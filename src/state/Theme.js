import { action, makeObservable, observable, autorun } from "mobx";

class Theme {
  colorScheme = "light";

  constructor() {
    makeObservable(this, {
      colorScheme: observable,
      changeTheme: action.bound,
    });
  }

  changeTheme() {
    this.colorScheme = this.colorScheme === "light" ? "dark" : "light";
  }
}

const theme = new Theme();

export { theme };
