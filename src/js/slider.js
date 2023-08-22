import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.hits__slider', {
    spaceBetween: 20,
    slidersPerView: 4,

    navigation: {
      nextEl: '.hits__next',
      prevEl: '.hits__prew',
    },

  });


export default swiper