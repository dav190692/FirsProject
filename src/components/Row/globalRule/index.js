export class GlobalRules {
  creatdiv(valuee) {
    this.creatdiv = document.createElement("div");
    this.creatdiv.classname = valuee;
    // this.creatdiv.id = idValuee;
    return this.creatdiv;
  }
  creatButton(valuee, buttonName) {
    this.creatButton = document.createElement("button");
    this.creatButton.classname = valuee;
    // this.creatButton.id = valuee;
    this.creatButton.innerText = buttonName;
    return this.creatButton;
  }
  creatInput(valuee) {
    this.creatInput = document.createElement("input");
    this.creatInput.classname = valuee;
    // this.creatInput.id = valuee;
    this.creatInput.type = "text";
    return this.creatInput;
  }

  get html() {
    return this._box;
  }
}
