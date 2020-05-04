import Todo from "./components/Todolist";
import { GlobalRules } from "./components/globalRule";
import Menu from "./components/Menu";
import Dispatcher from "./Dispatcher";
export class App extends GlobalRules {
  constructor() {
    super();
    this.rout = this.rout.bind(this);
this.hideAll = this.hideAll.bind(this);
    this.dispatcher = new Dispatcher();
    this.dispatcher.listeners = this.rout;
    this.menu = new Menu(this.dispatcher.listen);
    this.todo = new Todo();
    this._box = document.createElement('div');
    this._box.append(this.menu.html);
    this._box.append(this.todo.html);
    // console.log(menu.html);
  }
  rout(data){
    this.hideAll();
switch (data) {
  case "Login":
    // this.login.show();
    break;
  case "ToDo":
    this.todo.show();
    break;
  default:
    break;
}
  }
  hideAll(){
return this.todo.hide();
  }
}
