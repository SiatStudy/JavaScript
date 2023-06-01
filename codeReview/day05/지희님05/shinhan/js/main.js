/** swiper initialization */
$(document).ready(() => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    // Navigation arrows

    cssMode: true,
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 1024px
      1025: {
        slidesPerView: 4, //슬라이더에서 한 번에 보여주는 개수
        spaceBetween: 14, //슬라이더 간 떨어진 간격, 단위 : px
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }, // 양 측 화살표
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 14,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      },
    },
  });
});

/** jquery start */
$(
  /** star toggle  */
  $(".favme").on("click", (e) => {
    const target = $(e.target);
    console.log("click");
    if (target.attr("class") === "xi-star-o") {
      target.removeClass("xi-star-o");
      target.addClass("xi-star");
    } else {
      target.removeClass("xi-star");
      target.addClass("xi-star-o");
    }
  })
);
