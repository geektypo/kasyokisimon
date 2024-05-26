const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

let width = carousel.offsetWidth;

const updateDimensions = () => {
  width = carousel.offsetWidth;

  const items = document.querySelectorAll(".item");
  let itemWidth;
  if (window.innerWidth >= 1024) {
    itemWidth = (carousel.clientWidth - gap * 3) / 4; // 4 items with gaps
  } else if (window.innerWidth >= 768) {
    itemWidth = (carousel.clientWidth - gap) / 2; // 2 items with gaps
  } else {
    itemWidth = carousel.clientWidth; // 1 item
  }

  items.forEach(item => {
    item.style.width = `${itemWidth}px`;
  });
};

const handleScroll = (direction) => {
  const items = document.querySelectorAll(".item");
  const itemWidth = items[0].offsetWidth;
  carousel.scrollBy(direction * (itemWidth + gap), 0);

  setTimeout(() => {
    if (carousel.scrollLeft <= 4) {
      prev.style.display = "none";
    } else {
      prev.style.display = "flex";
    }

    if (carousel.scrollLeft + carousel.clientWidth >= content.scrollWidth) {
      next.style.display = "none";
    } else {
      next.style.display = "flex";
    }
  }, 300); // Delay to allow for scroll animation
};

next.addEventListener("click", () => handleScroll(1));
prev.addEventListener("click", () => handleScroll(-1));

window.addEventListener("resize", updateDimensions);
window.addEventListener("load", updateDimensions);





    

