let navimg = document.querySelector(".logo");
let nav = document.querySelector(".nav");
let navUl = document.querySelector(".navUl");

window.addEventListener("scroll",()=> {
    if(window.scrollY >= 50 ){
        nav.style.backgroundColor="white";
        navimg.style.filter="invert(0%)"
        navUl.style.color="black";
    }
    else{
        nav.style.backgroundColor="transparent";
        navimg.style.filter="invert(100%)"
        navUl.style.color="white";
    }
})

let cont1leftbtn = document.querySelector(".cont1leftbtn");
let cont1rightbtn = document.querySelector(".cont1rightbtn");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");

