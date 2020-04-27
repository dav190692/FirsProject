import { GlobalRules } from "./globalRule";
export default class Row extends GlobalRules {
  constructor(value, removeCallBack) {
    super();
    this.value = value;
    this.remove = this.remove.bind(this, removeCallBack);
    this.edit = this.edit.bind(this);

    this._box = super.creatdiv("boxFirst");
    this.rowbox = super.creatdiv("rowbox");
    this.paragraf = document.createElement("p");
    this.paragraf.innerText = this.value;

    this.removeButton = super.creatButton("removeButton", "Remove");
    this.removeButton.addEventListener("click", this.remove);

    this.editButton = super.creatButton("editButton", "Edit");
    // this.editButton.addEventListener("click", this.edit);

    this.editbox = super.creatdiv("editbox");
    this.editInput = super.creatInput("editInput");
    this.editInputButton = super.creatButton(
      "editInputButton",
      "ADD EDIT TEXT"
    );

    this._box.append(this.rowbox);
    this.rowbox.append(this.paragraf);
    this.rowbox.append(this.removeButton);
    this.rowbox.append(this.editButton);
    this.editbox.append(this.editInput);
    this.editbox.append(this.editInputButton);
    this.rowbox.append(this.editbox);
    this._isdeleted = false;
  }

  remove(removeCallBack) {
    this._isdeleted = true;
    this._box.remove();

    try {
      removeCallBack();
    } catch (err) {
      console.log(err.value);
    }
  }

  edit() {}

  get isdeleted() {
    return this._isdeleted;
  }
}
