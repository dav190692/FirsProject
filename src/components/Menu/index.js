export default class Menu {
    constructor(listen) {
        this.clickMenuItem = this.clickMenuItem.bind(this);
        this.listen = listen;
        this._box = document.createElement('div');
        this.h1 = document.createElement('h1');
        this.h1.innerText = "MENU";
        this.todo = document.createElement('button');
        this.login = document.createElement('button');
        this.todo.innerText = "ToDo";
        this.login.innerText = "Login";
        this.todo.data_value = "ToDo";
        this.login.data_value = "Login";
        this._box.append(this.h1);
        this._box.append(this.todo);
        this._box.append(this.login);
        this.login.addEventListener("click", this.clickMenuItem);
        this.todo.addEventListener("click", this.clickMenuItem);

    }

    clickMenuItem(event) {
        this.listen(event.target.data_value);
        console.log(event.target);
    }

    get html() {
        return this._box;
    }
}