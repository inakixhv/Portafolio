// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let mySwiper = new Swiper('.container',{
    effect: 'coverFlow',
    // grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    slidePerView: 'auto',
    coverflowEffect:{
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier:7
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});


