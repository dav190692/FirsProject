
function addForm(){
    let form = document.createElement('form');
    form.id = "formID";
    document.body.append(form);
    let addLabel = document.createElement('label');
    addLabel.setAttribute("for", "addText");
    addLabel.innerHTML = "Write Text";
    form.append(addLabel);
    let addInput = document.createElement('input');
    addInput.type = "text";
    addInput.id = "addText";
    form.append(addInput);
    let addClick = document.createElement('input');
    addClick.type = "button";
    addClick.id = "addButton";
    addClick.value = "ADD";
    form.append(addClick);

}

// addForm();



function add() {
    let i = 0;
    let div = document.createElement('div');
    if (addText.value) {
        i++
        div.innerHTML = addText.value;
        div.className = `valueDiv-${i}`;
        div.id = `valueDiv-${i}`;
        let del = document.createElement('input');
        del.setAttribute('type', 'button');
        del.className = `Delete-${i}`;
        del.value = "Delete";
        // console.log(form);
        document.body.append(div);
        // form.after(div);
        div.append(del);
        // del.onclick = del1();
        del.addEventListener("click", del1);
        // div.append(del);
        // form.after(div);
        
    }
    
}
   
function del1(){ 
console.log(this.className);
const index = this.className.split("-")[1];
console.log(index);
document.getElementById("valueDiv-" + index).remove();
}






// addButton.addEventListener("click", add);

export{addForm, add, del1};