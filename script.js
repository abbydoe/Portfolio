const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,
  spaceBetween: 30,
  speed: 1000,

  // Pagination Bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  on: {
    slideChange: function () {
      const pagination = document.querySelector(".swiper-pagination");
      if (this.activeIndex === 0) {
        pagination.style.display = "none"; // Hide on first slide
      } else {
        pagination.style.display = "block"; // Show on other slides
      }
    },
  },

  mousewheel: true,
  keyboard: true,
});

// Optional: Initially hide pagination if starting on first slide
if (swiper.activeIndex === 0) {
  document.querySelector(".swiper-pagination").style.display = "none";
}
function scrollToSection() {
  swiper.slideTo(1);
}
