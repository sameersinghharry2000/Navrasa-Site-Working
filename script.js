let navimg = document.querySelector(".logo");
let nav = document.querySelector(".nav");
// let navUl = document.querySelectorAll(".navUl");


window.addEventListener("scroll",()=> {
    if(window.scrollY >= 50 ){
        nav.style.backgroundColor="white";
        navimg.style.filter="invert(0%)"
        // navUl.style.color="black";
        menubtn.style.filter="invert(0)"
    }
    else{
        nav.style.backgroundColor="transparent";
        navimg.style.filter="invert(100%)"
        // navUl.style.color="white";
        menubtn.style.filter="invert(200%)"
    }
})

let menubtn = document.getElementById("menubtn");
let slidebar = document.querySelector(".slidebar");

    menubtn.addEventListener("click",()=>{
        slidebar.style.right="0%";
    })
    slidebar.addEventListener("click",()=>{
        slidebar.style.right="-100%"
    })







let cont1leftbtn = document.querySelector(".cont1leftbtn");
let cont1rightbtn = document.querySelector(".cont1rightbtn");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");

    let slider = new Array[".slide1",".slide2","slide3","slide4"];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
   
    


// cont1leftbtn.addEventListener("click" , () => {

// })