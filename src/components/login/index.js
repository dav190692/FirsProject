import { GlobalRules } from "../Row/globalRule";
export class Login extends GlobalRules {
  constructor() {
    super();
    this._box = super.creatdiv("firstloginBox");
    this.loginBox = super.creatdiv("secondloginBox");
    this.loginInput = super.creatInput("loginInput");
    this.passInput = super.creatInput("passInput");
    this.passInput.type = "password";
    this.loginButton = super.creatButton("loginButton", "Login");
    this.loginBox.append(this.loginInput);
    this.loginBox.append(this.passInput);
    this.loginBox.append(this.loginButton);
    this._box.append(this.loginBox);
  }
}
