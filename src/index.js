import  "./index.css";
import {defLookExample} from "./app";
defLookExample.defLook();
  defLookExample.createCloseIcon();
  defLookExample.createEditIcon();
  defLookExample.delFunc();
  defLookExample.editFunc();
  
  document
    .getElementById("addBtn")
    .addEventListener("click", defLookExample.addFunc);
  document
    .getElementById("addBtn")
    .addEventListener("click", defLookExample.createCloseIcon);
  document
    .getElementById("addBtn")
    .addEventListener("click", defLookExample.createEditIcon);
  document
    .getElementById("addBtn")
    .addEventListener("click", defLookExample.delFunc);
  
  /*   document
    .getElementById("addBtn2")
    .addEventListener("click", defLookExample.addFunc2); */
    document
    .getElementById("addBtn")
    .addEventListener("click", defLookExample.editFunc);
