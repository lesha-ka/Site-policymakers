export function getIndexSlider() {
    $('.index-slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dotsClass: 'index__dots',
        responsive: [
          {
            breakpoint: 1601,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      });
}