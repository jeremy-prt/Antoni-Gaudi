//Ajout de la class "scroll" sur onglet lors du scroll + changement de couleur
const onglet = document.querySelector(".onglet");
window.addEventListener("scroll", () => {
  if (window.scrollY > 590) {
    onglet.classList.add("scroll");
  } else {
    onglet.classList.remove("scroll");
  }
  if (window.scrollY > 1500) {
    $(".onglet a").css("border", "solid 2px var(--PrimaryBlue)");
  } else {
    $(".onglet a").css("border", "solid 2px white");
  }

  if (window.scrollY > 2500) {
    $(".onglet a").css("border", "solid 2px white");
  }
  if (window.scrollY > 4500) {
    $(".onglet a").css("border", "solid 2px var(--PrimaryBlue)");
  }
  if (window.scrollY > 5767) {
    $(".onglet a").css("border", "solid 2px white");
  }
});

//Ajout de la class "scroll" sur scroll_to_top(mobile) lors du scroll
const scroll_to_top = document.querySelector("#scroll_to_top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 590) {
    scroll_to_top.classList.add("scroll");
  } else {
    scroll_to_top.classList.remove("scroll");
  }
});

//Menu hamburger clique
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

//Activation de la classe active sur la navbar avec le scroll et le clique
const li = document.querySelectorAll(".navbar .nav-links ul li");
const sec = document.querySelectorAll("section");
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

//Activation de la classe active sur les onglets avec le scroll et le clique
const onglet5 = document.querySelectorAll(".onglet a");
const sec2 = document.querySelectorAll("section");
function activeMenu3() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  onglet5.forEach((ltx) => ltx.classList.remove("activeScroll"));
  onglet5[len].classList.add("activeScroll");
}
activeMenu3();
window.addEventListener("scroll", activeMenu3);

//Image Aléatoire au load de la page
const images = [
  "url(./images/1.jpg)",
  "url(./images/2.jpg)",
  "url(./images/3.jpg)",
  "url(./images/4.jpg)",
  "url(./images/5.jpg)",
  "url(./images/6.jpg)",
  "url(./images/7.jpg)",
  "url(./images/8.jpg)",
  "url(./images/9.jpg)",
  "url(./images/10.jpg)",
  "url(./images/11.jpg)",
  "url(./images/12.jpg)",
  "url(./images/13.jpg)",
  "url(./images/14.jpg)",
  "url(./images/15.jpg)",
  "url(./images/16.jpg)",
  "url(./images/17.jpg)",
  "url(./images/18.jpg)",
];
const shuffledImages = images.sort((a, b) => 0.5 - Math.random());

document.querySelectorAll(".photo").forEach((photo, i) => {
  if (shuffledImages[i]) {
    photo.style.backgroundImage = shuffledImages[i];
  } else {
    console.log("plus d'image à définir");
  }
});

//Ajoute de la classe Reveal au scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = -150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe Reveal2 au scroll
window.addEventListener("scroll", reveal2);

function reveal2() {
  var reveals2 = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals2.length; i++) {
    var windowheight2 = window.innerHeight;
    var revealtop2 = reveals2[i].getBoundingClientRect().top;
    var revealpoint2 = 150;

    if (revealtop2 < windowheight2 - revealpoint2) {
      reveals2[i].classList.add("active");
    } else {
      reveals2[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe Reveal3 au scroll
window.addEventListener("scroll", reveal3);

function reveal3() {
  var reveals3 = document.querySelectorAll(".reveal3");

  for (var i = 0; i < reveals3.length; i++) {
    var windowheight3 = window.innerHeight;
    var revealtop3 = reveals3[i].getBoundingClientRect().top;
    var revealpoint3 = 150;

    if (revealtop3 < windowheight3 - revealpoint3) {
      reveals3[i].classList.add("active");
    } else {
      reveals3[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe Reveal4 au scroll
window.addEventListener("scroll", reveal4);

function reveal4() {
  var reveals4 = document.querySelectorAll(".reveal4");

  for (var i = 0; i < reveals4.length; i++) {
    var windowheight4 = window.innerHeight;
    var revealtop4 = reveals4[i].getBoundingClientRect().top;
    var revealpoint4 = 150;

    if (revealtop4 < windowheight4 - revealpoint4) {
      reveals4[i].classList.add("active");
    } else {
      reveals4[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe reveal5 au scroll
window.addEventListener("load", reveal5);

function reveal5() {
  var reveals5 = document.querySelectorAll(".reveal5");

  for (var i = 0; i < reveals5.length; i++) {
    var windowheight5 = window.innerHeight;
    var revealtop5 = reveals5[i].getBoundingClientRect().top;
    var revealpoint5 = 0;

    if (revealtop5 < windowheight5 - revealpoint5) {
      reveals5[i].classList.add("active");
    } else {
      reveals5[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe reveal6 au scroll
window.addEventListener("load", reveal6);

function reveal6() {
  var reveals6 = document.querySelectorAll(".reveal6");

  for (var i = 0; i < reveals6.length; i++) {
    var windowheight6 = window.innerHeight;
    var revealtop6 = reveals6[i].getBoundingClientRect().top;
    var revealpoint6 = 150;

    if (revealtop6 < windowheight6 - revealpoint6) {
      reveals6[i].classList.add("active");
    }
  }
}

//Cookies
const cookieBox = document.querySelector("#cookie");
const acceptBTN = document.querySelector("#cookie .content2 button.accept_btn");
const NoAcceptBTN = document.querySelector(
  "#cookie .content2 button.no_accept_btn"
);

acceptBTN.onclick = () => {
  console.log("Boutton accepter cliqué");
  cookieBox.classList.add("hide");
  document.cookie = "CookieDeJérémy; time=" + 60 * 60 * 24 * 30;
};

NoAcceptBTN.onclick = () => {
  console.log("Boutton refuser cliqué");
  cookieBox.classList.add("hide");
  document.cookie = "No; time=" + 60 * 60 * 24 * 30;
};

let checkCookie = document.cookie.indexOf("CookieDeJérémy");
checkCookie != -1
  ? cookieBox.classList.add("hideF")
  : cookieBox.classList.remove("hideF");

//Image Aléatoire avec le boutton "Générer"
if ((document.cookie.indexOf("CookieDeJérémy"), checkCookie != -1)) {
  function testi() {
    const images = [
      "url(./images/1.jpg)",
      "url(./images/2.jpg)",
      "url(./images/3.jpg)",
      "url(./images/4.jpg)",
      "url(./images/5.jpg)",
      "url(./images/6.jpg)",
      "url(./images/7.jpg)",
      "url(./images/8.jpg)",
      "url(./images/9.jpg)",
      "url(./images/10.jpg)",
      "url(./images/11.jpg)",
      "url(./images/12.jpg)",
      "url(./images/13.jpg)",
      "url(./images/14.jpg)",
      "url(./images/15.jpg)",
      "url(./images/16.jpg)",
      "url(./images/17.jpg)",
      "url(./images/18.jpg)",
    ];
    const shuffledImages = images.sort((a, b) => 0.5 - Math.random());

    document.querySelectorAll(".photo").forEach((photo, i) => {
      if (shuffledImages[i]) {
        photo.style.backgroundImage = shuffledImages[i];
      } else {
        console.log("plus d'image à définir");
      }
    });
  }
}
