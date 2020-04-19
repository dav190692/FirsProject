class Row {
    defLook() {
      let myPageDiv = document.createElement("div");
      myPageDiv.id = "myDIV";
      myPageDiv.className = "header";
      document.body.append(myPageDiv);
      let myPageTitle = document.createElement("h1");
      myPageTitle.innerHTML = "MY TO DO LIST";
      myPageDiv.append(myPageTitle);
      let myPageInput = document.createElement("input");
      myPageInput.id = "myInput";
      myPageInput.type = "text";
      myPageInput.placeholder = "Write text please";
      myPageDiv.append(myPageInput);
      let myPageSpan = document.createElement("span");
      myPageSpan.id = "addBtn";
      myPageSpan.className = "addBtn";
      myPageSpan.innerHTML = "ADD";
      myPageDiv.append(myPageSpan);
      let myPageUl = document.createElement("ul");
      myPageUl.id = "myUL";
      document.body.append(myPageUl);
      console.log(myPageUl);
      for (let i = 1; i < 6; i++) {
        let inerText = "Task";
        let myPageLi = document.createElement("li");
        myPageLi.innerHTML = `${inerText} ${i}`;
        myPageUl.append(myPageLi);
      }
    }
  
    createCloseIcon() {
      let myLiNodeList = document.getElementsByTagName("li");
  
      for (let i = 0; i < myLiNodeList.length; i++) {
        if (!myLiNodeList[i].firstElementChild) {
          let closeSpan = document.createElement("span");
          let closeSpantxt = document.createTextNode("\u00D7");
          closeSpan.className = "close";
          closeSpan.append(closeSpantxt);
          myLiNodeList[i].append(closeSpan);
        }
      }
    }
  
    createEditIcon() {
      let myLiNodeList = document.getElementsByTagName("li");
      for (let i = 0; i < myLiNodeList.length; i++) {
        if (!myLiNodeList[i].firstElementChild.nextElementSibling) {
          let editSpan = document.createElement("span");
          let editSpantxt = document.createTextNode("\u270E");
          editSpan.className = "edit";
          editSpan.append(editSpantxt);
          myLiNodeList[i].append(editSpan);
        }
      }
    }
  
    delFunc() {
      let del = document.getElementsByClassName("close");
      for (let j = 0; j < del.length; j++) {
        del[j].onclick = function () {
          this.parentElement.remove();
        };
      }
    }
    editFunc() {
      let editLi = document.getElementsByClassName("edit");
      for (let j = 0; j < editLi.length; j++) {
        editLi[j].onclick = function () {
          let liValue = this.parentElement.innerText;
          console.dir(liValue);
          this.parentElement.style.display = "none";
          document.getElementById("myInput").value = liValue;
          /*  let editLiInput = document.createElement("input");
          editLiInput.type = "text";
          editLiInput.id = "editLiInputId"
          editLiInput.value = liValue;
          this.parentElement.after(editLiInput);
          let myEditSpan = document.createElement("span");
          myEditSpan.id = "addBtn2";
          myEditSpan.className = "addBtn2";
          myEditSpan.innerHTML = "ADD";
          editLiInput.after(myEditSpan); */
        };
      }
    }
  
    addFunc() {
      let addLi = document.createElement("li");
      let myPageInputValue = document.getElementById("myInput").value;
      let txt = document.createTextNode(myPageInputValue);
      addLi.append(txt);
      if (!myPageInputValue) {
        alert("please write text");
      } else {
        document.getElementById("myUL").append(addLi);
      }
      document.getElementById("myInput").value = "";
    }
  
    /*  addFunc2() {
      let addLi = document.createElement("li");
      let myPageInputValue = document.getElementById("editLiInputId").value;
      let txt = document.createTextNode(myPageInputValue);
      addLi.append(txt);
      if (!myPageInputValue) {
        alert("please write text");
      } else {
        document.getElementById("editLiInputId").after(addLi);
      }
  
      document.getElementById("editLiInputId").remove();
      // document.getElementById("addBtn2").remove();
  
    } */
  }
  
 export let defLookExample = new Row();
  