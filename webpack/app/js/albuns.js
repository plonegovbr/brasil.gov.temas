export default class GaleriaDeFotos {
  constructor() {
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
      },
    });
  }
}
