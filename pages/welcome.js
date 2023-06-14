const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay:{
  delay: 3000,
  disableOnIteraction: false,
},
  loop: true,

  // Navigation arrows
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

  });
