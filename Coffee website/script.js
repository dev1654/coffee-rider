let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

const buyNowButton = document.getElementById("buyNowBtn");


var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    pagination:{
        el : ".swiper-pagination",
        clickable: true,
    },

    loop:true,
    grabCursor:true,
    autoplay: {
        display:7500,
        disableOnInteraction:false,
    },

    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView:2
        }
    },
});