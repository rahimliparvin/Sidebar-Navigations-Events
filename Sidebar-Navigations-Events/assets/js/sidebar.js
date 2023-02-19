"use strict";

let open = document.querySelector("#sidebar .box .icons .open");
let close = document.querySelector("#sidebar .box .icons .close");
let box  = document.querySelector("#sidebar .box");

open.addEventListener("click",function(){
    this.classList.add("d-none");
    close.classList.remove("d-none");
    box.classList.remove("hide-sidebar");
});

close.addEventListener("click",function(){
    this.classList.add("d-none");
    open.classList.remove("d-none");
    box.classList.add("hide-sidebar");
});