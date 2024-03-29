window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add("nav--open");
  });

document.querySelector(".nav__overlay").addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  header.classList.toggle('nav', window.scrollY > 0)
})

AOS.init();
