document.addEventListener("DOMContentLoaded", function () {
  const multipleItemCarousel = document.querySelector("#testimonialExampleControls");

  if (window.matchMedia("(min-width:576px)").matches) {
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
      interval: false,
    });

    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselWidth = carouselInner.scrollWidth;
    const cardWidth = carouselItems[0].offsetWidth;

    let scrollPosition = 0;

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    });

    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    });
  } else {
    multipleItemCarousel.classList.add("slide");
  }
});
