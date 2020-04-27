import Row from "../components/Row";
import { GlobalRules } from "../components/Row/globalRule";

export default class Todo extends GlobalRules {
  constructor() {
    super();
    this.removeFromList = this.removeFromList.bind(this);
    this.addRow = this.addRow.bind(this);
    this.list = [];
    this._box = super.creatdiv("box");
    this.listBox = super.creatdiv("listBox");
    this.todoBox = super.creatdiv("todoBox");
    this.todoInput = super.creatInput("todoInput");
    this.todoAddButton = super.creatButton("todoAddButton", "Add");
    this.todoAddButton.addEventListener("click", this.addRow);
    this.todoBox.append(this.todoInput);
    this.todoBox.append(this.todoAddButton);
    this.listBox.append(this.todoBox);
    this._box.append(this.listBox);
  }
  removeFromList() {
    this.list = this.list.filter((item) => item.isdeleted === false);
    this.render();
  }
  addRow() {
    let value = this.todoInput.value;
    if (!value) {
      alert("write text");
    } else {
      let row = new Row(value, this.removeFromList);
      console.log(row);
      this.list.push(row);
      this.render();
      console.log(this.list);
    }
  }

  render() {
    this.list.forEach((item) => this.listBox.append(item.html));
  }
}
