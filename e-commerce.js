// header part start
let openCart = document.querySelector(".openCart");
let exitCart = document.querySelector(".exitCart");
let cart = document.querySelector("header nav .cart");
openCart.onclick = () => {
  cart.classList.add("active");
};
exitCart.onclick = () => {
  cart.classList.remove("active");
};
// header part end

let backGround = document.querySelector("body");
let imgs = Array.from(document.querySelectorAll(".container .image img"));
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let currentSlide = 0;
let length = imgs.length;
let container = document.querySelector(".container");

// set the time out to pervent user from click prev or next buttons during animation
let timeRunning = 1500;
let timeOutCounter;
// create the pagination the same number as imgs slides
let pagination = document.querySelector(".pagination");
for (let i = 0; i < length; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-target", i);
  li.style.backgroundColor = `${imgs[i].dataset.color}`;
  pagination.appendChild(li);
}
// collect all bulits after inserting them inside the pagenation
let bulits = Array.from(
  document.querySelectorAll(".container .info .pagination li")
);
// next , prev buttons actions
next.addEventListener("click", () => {
  currentSlide++;
  theChecker();
  container.classList.add("disable");
  timeOutCounter = setTimeout(() => {
    container.classList.remove("disable");
  }, timeRunning);
});
prev.addEventListener("click", () => {
  currentSlide--;
  theChecker();
  container.classList.add("disable");
  timeOutCounter = setTimeout(() => {
    container.classList.remove("disable");
  }, timeRunning);
});

// the chicker function which represent the core function of the project

function theChecker() {
  // check the current slide validation
  checkCurrentSlide();
  //   set the active fot imgs and bulits
  SetActive();
  backGround.style.backgroundColor = `${imgs[currentSlide].dataset.color}`;
}
theChecker();

// add the bulits click event
bulits.forEach((bulit) => {
  bulit.addEventListener("click", function () {
    currentSlide = parseInt(bulit.getAttribute("data-target"));
    theChecker();
    container.classList.add("disable");
    timeOutCounter = setTimeout(() => {
      container.classList.remove("disable");
    }, timeRunning);
  });
});

// check current slide function
function checkCurrentSlide() {
  if (currentSlide >= length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = length - 1;
  }
}

// the set active function to set the active slide for the specific slide and bulit according to the current slide variable

function SetActive() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  bulits.forEach((bulit) => {
    bulit.classList.remove("active");
  });
  imgs[currentSlide].classList.add("active");
  bulits[currentSlide].classList.add("active");
}
