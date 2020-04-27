// import Todo from "./todolist";
import { GlobalRules } from "./components/Row/globalRule";
import { Menu } from "../src/menu";
export class App extends GlobalRules {
  constructor() {
    super();
    // const todo = new Todo();
const menu = new Menu;
    // this._box = todo.html;
    this._box = menu.html;
    // console.log(menu.html);

  }
}
