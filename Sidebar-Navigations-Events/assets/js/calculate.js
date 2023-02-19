"use strict";


let input1 = document.querySelector(".calculate .number1");
let input2 = document.querySelector(".calculate .number2");
let sum = document.querySelector(".calculate .sum");
let cixma = document.querySelector(".calculate .cixma");
let vurma = document.querySelector(".calculate .vurma");
let bolme = document.querySelector(".calculate .bolme")
let header = document.querySelector(".calculate h1");
let showres = document.querySelector(".calculate .showres");
let clear = document.querySelector(".calculate .clear");

let result;

sum.addEventListener("click", function () {

    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    result = num1 + num2;
    console.log(result);
    showres.value = result;;

});


cixma.addEventListener("click", function () {

    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    result = num1 - num2;
    console.log(result);
    showres.value = result;
});

vurma.addEventListener("click", function () {

    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    result = num1 * num2;
    console.log(result);
    showres.value = result;
});

bolme.addEventListener("click", function () {

    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    result = num1 / num2;
    console.log(result);
    showres.value = result;
});

clear.addEventListener("click", function () {
    input1.value = "";
    input2.value = "";
    showres.value = "";
});
