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


document.addEventListener("DOMContentLoaded", () => {
  const wishlistButtons = document.querySelectorAll(".add-to-wishlist");
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Add to Wishlist
  wishlistButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const productTitle = button.dataset.productTitle;

      if (!wishlist.some((item) => item.id === productId)) {
        wishlist.push({ id: productId, title: productTitle });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to wishlist!");
      } else {
        alert("Already in wishlist!");
      }
    });
  });

  // Populate Wishlist Page
 document.addEventListener("DOMContentLoaded", () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistContainer = document.getElementById("wishlist-items");

  // if (!wishlistContainer) return;

  if (wishlist.length === 0) {
    console.log('here')
    wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
  } else {
    wishlistContainer.innerHTML = wishlist
      .map(
        (item) => `
      <div class="wishlist-item">
        <p>${item.title}</p>
        <a href="/products/${item.id}" class="wishlist-link">View Product</a>
      </div>
    `
      )
      .join("");
  }
});

});
