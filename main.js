let Scorehome = document.querySelector('.Scorehome')
let Scoreguest = document.querySelector('.Scoreguest')
// console.log(Scoreguest,Scorehome);
let btn1 = document.querySelector('.btn1')
// console.log(btn1);
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
// console.log(btn1,btn2);
let gustbtn1 = document.querySelector('.gustbtn1')
let gustbtn2 = document.querySelector('.gustbtn2')
let gustbtn3 = document.querySelector('.gustbtn3')
// console.log(gustbtn1,gustbtn2,gustbtn3);
let lastbtn = document.querySelector('.lastbtn')

let number = 0
function HomePnt() {
    number =  number +1
    Scorehome.innerText = number
}
btn1.addEventListener('click',HomePnt)

function HomePntSec() {
    number =  number +2
    Scorehome.innerText = number
}
btn2.addEventListener('click',HomePntSec)

function HomePntthrd() {
    number =  number +3
    Scorehome.innerText = number
}
btn3.addEventListener('click',HomePntthrd)

//Guest
let number2 = 0
function GuestPnt() {
    number2 =  number2 +1
    Scoreguest.innerText = number2
}
gustbtn1.addEventListener('click',GuestPnt)

function GuestPntSec() {
    number2 =  number2 +2
    Scoreguest.innerText = number2
}
gustbtn2.addEventListener('click',GuestPntSec)

function GuestPntthrd() {
    number2 =  number2 +3
    Scoreguest.innerText = number2
}
gustbtn3.addEventListener('click',GuestPntthrd)

function reset(){
     number = 0;
     number2 = 0;
    Scoreguest.innerText = number
    Scorehome.innerText = number2

}
lastbtn.addEventListener('click',reset)