let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {

      burger.classList.remove('burger--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    })
})



let search = document.querySelector('.btn-search');
let searchForm = document.querySelector('.search-form');
let closeBtn = document.querySelector('.search-form__close');

search.addEventListener('click',
  function () {
    searchForm.classList.toggle('search-form-show');
  })

closeBtn.addEventListener('click',
  function () {
    searchForm.classList.remove('search-form-show');
  })


searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
})


let swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});



let tabsBtn = document.querySelectorAll('.how__btn');
let tabsItem = document.querySelectorAll('.how__card');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__btn--active') });
    e.currentTarget.classList.add('how__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('how__card--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__card--active');
  });
});



new Accordion('.accordion-container');



gsap.from(".hero__title", { y: 15, duration: 0.5, delay: 0.5, opacity: 0 });
gsap.from(".hero__descr", { y: 15, duration: 0.5, delay: 0.6, opacity: 0 });
gsap.from(".hero__btn", { y: 15, duration: 0.5, delay: 0.7, opacity: 0 });

const at = gsap.timeline({ paused: true });
at.from(".about__title", { x: -25, duration: 0.8, delay: 0.3, opacity: 0 });
const ad = gsap.timeline({ paused: true });
ad.from(".about__descr", { x: 25, duration: 0.8, delay: 0.3, opacity: 0 });

const ac1 = gsap.timeline({ paused: true });
ac1.from(".about__left-card", { x: -25, duration: 0.8, delay: 0.3, opacity: 0 });
const ac2 = gsap.timeline({ paused: true });
ac2.from(".about__right-card1", { y: -25, duration: 0.8, delay: 0.5, opacity: 0 });
const ac3 = gsap.timeline({ paused: true });
ac3.from(".about__right-card2", { y: 25, duration: 0.8, delay: 0.7, opacity: 0 });

const hd = gsap.timeline({ paused: true });
hd.from(".how__left-block", { x: -25, duration: 0.8, delay: 0.3, opacity: 0 });
const hr = gsap.timeline({ paused: true });
hr.from(".how__right-block", { x: 25, duration: 0.8, delay: 0.3, opacity: 0 });

function onEntryAt(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      at.play();
      ad.play();
    }
  });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntryAt, options);
let elements = document.querySelector(".about__container");
observer.observe(elements);

function onEntryAboutCards(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      ac1.play();
      ac2.play();
      ac3.play();
    }
  });
}
let optionsAboutCards = { threshold: [0.1] };
let observerAboutCards = new IntersectionObserver(onEntryAboutCards, optionsAboutCards);
let elementsAboutCards = document.querySelector(".about__cards-wrap");
observerAboutCards.observe(elementsAboutCards);

function onEntryHowCard(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      hd.play();
      hr.play();
    }
  });
}
let optionsHowCard = { threshold: [0.1] };
let observerHowCard = new IntersectionObserver(onEntryHowCard, optionsHowCard);
let elementsHowCard = document.querySelector(".how__card");
observerHowCard.observe(elementsHowCard);

