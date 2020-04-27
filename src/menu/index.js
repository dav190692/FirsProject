import { GlobalRules } from "../components/Row/globalRule";
import { Login } from "../components/login";
import Todo from "../todolist";
export class Menu extends GlobalRules {
  constructor() {
    super();
    this.list = [];
    this._box = super.creatdiv("menuBox");
    this.h1Box = super.creatdiv("h1Box");
    this.h1 = document.createElement("h1");
    this.h1.innerText = "MENU";
    this.toolBarBox = super.creatdiv("toolBarBox");
    this.loginButton = super.creatButton("loginButton", "Login");
    this.loginButton.addEventListener("click", this.goToLogin);
    this.todoButton = super.creatButton("todoButton", "ToDO List");
    this.todoButton.addEventListener("click", this.goToDoList);

    this.goToLogin = this.goToLogin.bind(this);
    this.goToDoList = this.goToDoList.bind(this);
    this.h1Box.append(this.h1);
    this._box.append(this.h1Box);
    this.toolBarBox.append(this.loginButton);
    this.toolBarBox.append(this.todoButton);
    this._box.append(this.toolBarBox);
    console.log(this);

    // console.log(this.list);
  }

  goToLogin() {
    console.log(this);
    
    // console.log(this.loginButton);
    let login = new Login();
    // console.log(login);
  //  this.list.push(this.login);
    // this._box = this.render();

  }
  goToDoList() {
   

    let todo = new Todo();
    // console.log(todo);

    // this.list.push(todo);
    //     this.render();
  }

  
  render() {
    // console.log(this.list);
    this._box.innerHTML = "";

    this.list.forEach((item) => this._box.append(item.html));
    // console.log(this._box);
    // debugger;
    // return this._box;

    

  }
}
