const settings = {
  service: {
    slidesPerView: 1.2,
    spaceBetween: 15,
    breakpoints: {
      520: {
        slidesPerView: 1.8,
        spaceBetween: 25,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 35,
      },
    },
  },
  testimonials: {
    slidesPerView: 1.2,
    spaceBetween: 15,
    breakpoints: {
      520: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 35,
      },
    },
  },
  projects: {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      940: {
        slidesPerView: "auto",
        spaceBetween: 45,
      },
    },
  },
  thumbs: {
    slidesPerView: 3.2,
    spaceBetween: 10,
    slideToClickedSlide: true,
    breakpoints: {
      460: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  },
  gallery: {
    slidesPerView: 1,
    spaceBetween: 20,
    slideToClickedSlide: true,
    effect: "fade",
  },
};

document.querySelectorAll(".swiper").forEach((swiperSlider) => {
  const settingsKey = swiperSlider.getAttribute("data-swiper");
  const thumbsSelector = swiperSlider.getAttribute("data-swiper-thumbs");
  const parentElement = swiperSlider.hasAttribute("data-swiper-parent")
    ? document.querySelector(swiperSlider.getAttribute("data-swiper-parent"))
    : swiperSlider.parentElement;
  const prev = parentElement.querySelector(".swiper-arrow-prev");
  const next = parentElement.querySelector(".swiper-arrow-next");
  const dots = parentElement.querySelector(".swiper-dots");
  const scroll = parentElement.querySelector(".swiper-scrollbar");
  const thumbs = thumbsSelector ? document.querySelector(thumbsSelector) : null;

  new Swiper(swiperSlider, {
    ...settings[settingsKey],
    // // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // // Navigation arrows
    navigation:
      next && prev
        ? {
            nextEl: next,
            prevEl: prev,
          }
        : {},
    scrollbar: scroll
      ? {
          el: scroll,
          hide: false,
          // draggable: true,
          enabled: true,
        }
      : {},
    pagination: dots
      ? {
          el: dots,
          clickable: true,
        }
      : {},
    thumbs: thumbs
      ? {
          swiper: thumbs,
        }
      : {},
  });
});
