export default class  Login {
    constructor(){
        this._box = document.createElement('div');
        this.form = document.createElement('form');
        this.loginInput = document.createElement('input');
        this.passInput = document.createElement('input');
        this.passInput.type ="password";
        this.loginButton = document.createElement('button');
        this.loginButton.innerText = "Login";
        this._box.append(this.form);
        this.form.append(this.loginInput);
        this.form.append(this.passInput);
        this.form.append(this.loginButton);


    }
    get html (){
        return this._box;
    }
    hide(){
this._box.hidden = true;
    }
    show(){
        this._box.hidden = false;

    }
}