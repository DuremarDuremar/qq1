let burger = document.querySelector(".header-burger");

burger.addEventListener("click", function (event) {
  event.preventDefault;
  burger.classList.toggle("_active-burger");
  document.querySelector(".nav-burger").classList.toggle("_active-burger");
  document.querySelector(".main-modal").classList.toggle("_active-burger");
});

window.onresize = function () {
  if (window.matchMedia("screen and (min-width:778px)").matches) {
    document.querySelector(".nav-burger").classList.remove("_active-burger");
    document.querySelector(".main-modal").classList.remove("_active-burger");
    burger.classList.remove("_active-burger");
  } else {
  }
};

///////////////////tabs/////////////////////////////////////////

let tab = document.querySelectorAll(".link");
let info = document.querySelector(".header-nav");
let tabContent = document.querySelectorAll(".content");

let tabadap = document.querySelectorAll(".linkadaptiv");
let infoadap = document.querySelector(".nav-burger");

function hideTabContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
  }
}
hideTabContent(1);

console.log(tab[1]);

function showTabContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}

info.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("link")) {
    for (let i = 0; i < tab.length; i++) {
      if (event.target == tab[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
});

infoadap.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("linkadaptiv")) {
    for (let i = 0; i < tabadap.length; i++) {
      if (event.target == tabadap[i]) {
        hideTabContent(0);
        showTabContent(i);
        document
          .querySelector(".nav-burger")
          .classList.remove("_active-burger");
        document
          .querySelector(".main-modal")
          .classList.remove("_active-burger");
        burger.classList.remove("_active-burger");
        break;
      }
    }
  }
});
