let header=document.querySelector("header");
let menu=document.querySelector("#menu-icon");
let navber=document.querySelector(".navbar");
let up=document.querySelector(".up");

window.addEventListener("scroll" ,()=>{
    if(scrollY >580){
        up.style.display="block";
    } 
    else{
        up.style.display="none";
    }
})
up.addEventListener("click",()=>window.scroll(0,0))




window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow", window.scrollY>0);
})

menu.onclick=()=>{
    menu.classList.toggle('fa-xmark');
    navber.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-xmark');
    navber.classList.remove('active');
}
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper=new Swiper(".coming-container",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:55000,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView:2,
        },
        568:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:4,
        },
        968:{
            slidesPerView:5,
        },
    },
});