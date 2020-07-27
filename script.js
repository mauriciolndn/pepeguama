"use strict";
/*-------------- IMPORT STATEMENTS ----------*/
/* import { languages } from "./modules/lang.js"; */

window.addEventListener("DOMContentLoaded", init);

/*------- INITIALIZATION ------*/
function init() {
  const urlParams = new URLSearchParams(window.location.search);

  //wood gallery
  if (window.location.href.includes("wood")) {
    fetchJson();
  }
  //glass gallery
  if (window.location.href.includes("glass")) {
    fetchJson2();
  }
}

/*--------- WOOD GALLERY --------*/
function fetchJson() {
  fetch("products.json")
    .then((res) => res.json())
    .then(getWoodGallery);
}
function getWoodGallery(product) {
  product.forEach(showWoodGallery);
}
/*--- display wood products ---*/
function showWoodGallery(product) {
  const woodTemplate = document.querySelector("#woodGalleryTemplate").content;
  const woodTemplateCopy = woodTemplate.cloneNode(true);
  const woodList = document.querySelector("#woodList");

  woodTemplateCopy.querySelector(".img").src = `imgs/${product.image}`;
  woodTemplateCopy.querySelector("h2.name").textContent = product.name;
  woodTemplateCopy.querySelector("p.dimensions").textContent =
    product.dimensions;
  woodTemplateCopy.querySelector("h3.price").textContent = `${product.price}€`;
  woodTemplateCopy.querySelector(".btn").textContent = `Buy Now`;

  woodList.appendChild(woodTemplateCopy);
}

/*--------- GLASS GALLERY --------*/
function fetchJson2() {
  fetch("productsGlass.json")
    .then((res) => res.json())
    .then(getGlassGallery);
}
function getGlassGallery(product2) {
  product2.forEach(showGlassGallery);
}
/*--- display glass products ---*/
function showGlassGallery(product2) {
  const glassTemplate = document.querySelector("#glassGalleryTemplate").content;
  const glassTemplateCopy = glassTemplate.cloneNode(true);
  const glassList = document.querySelector("#glassList");

  glassTemplateCopy.querySelector(".img").src = `imgs/${product2.image}`;
  glassTemplateCopy.querySelector("h2.name").textContent = product2.name;
  glassTemplateCopy.querySelector("p.dimensions").textContent =
    product2.dimensions;
  glassTemplateCopy.querySelector(
    "h3.price"
  ).textContent = `${product2.price}€`;
  glassTemplateCopy.querySelector(".btn").textContent = `Buy Now`;

  glassList.appendChild(glassTemplateCopy);
}

/*------------ LANGUAGE SWITCHER ----------*/
const langEl = document.querySelector(".langWrap");
const langLink = document.querySelectorAll("a");
//nav links
const homeLink = document.querySelector("#nav a");
const woodLink = document.querySelector("#nav .woodLink");
const glassLink = document.querySelector("#nav .glassLink");
//profile section
const profileTitle = document.querySelector("#profile .profileTitle");
const profileDesc = document.querySelector("#profile .description");
//wood
const woodSub = document.querySelector("#wood .woodSub");
const woodDesc = document.querySelector("#wood .woodDesc");
const woodBtn = document.querySelector("#wood #woodBtn");
//glass
const glassSub = document.querySelector("#glass .glassSub");
const glassDesc = document.querySelector("#glass .glassDesc");
const glassBtn = document.querySelector("#glass #glassBtn");
//button
const buyBtn = document.querySelector("#woodProduct .btn");
//footer
const copyright = document.querySelector(".copyright");
const email = document.querySelector(".email");

//loop through each language & set translation
langLink.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    const attr = el.getAttribute("language");

    //nav links
    homeLink.textContent = languages[attr].homeLink;
    woodLink.textContent = languages[attr].woodLink;
    glassLink.textContent = languages[attr].glassLink;

    if (window.location.href.includes("index")) {
      //nav links
      homeLink.textContent = languages[attr].homeLink;
      woodLink.textContent = languages[attr].woodLink;
      glassLink.textContent = languages[attr].glassLink;
      //profile section
      profileTitle.textContent = languages[attr].profileTitle;
      profileDesc.textContent = languages[attr].profileDesc;
      //wood
      woodSub.textContent = languages[attr].woodSub;
      woodDesc.textContent = languages[attr].woodDesc;
      woodBtn.textContent = languages[attr].woodBtn;
      //glass
      glassSub.textContent = languages[attr].glassSub;
      glassDesc.textContent = languages[attr].glassDesc;
      glassBtn.textContent = languages[attr].glassBtn;
    } else if (window.location.href.includes("wood")) {
      //buy btn
      buyBtn.textContent = languages[attr].buyBtn;
    } else if (window.location.href.includes("glass")) {
      //buy btn
      btn.textContent = languages[attr].btn;
    }

    //footer
    copyright.textContent = languages[attr].copyright;
    email.textContent = languages[attr].email;
  });
});
//store language translations
let languages = {
  english: {
    profileTitle: "The person behind the art",
    profileDesc:
      "Hi, my name is Mauricio Londoño and I am an independent artist who focuses mainly on working with wood, as well as glass. Throughout the years I have been developing works of my own and would now like to share these pieces with you.",
    homeLink: "Home",
    woodLink: "Wood",
    glassLink: "Glass",
    woodSub: "Wood sculptures",
    woodDesc: "Description about wood work etc.",
    woodBtn: "Read More",
    glassSub: "Glass sculptures",
    glassDesc: "Description about glass work etc.",
    glassBtn: "Read More",
    buyBtn: "Buy Now",
    copyright: "All rights reserved to Mauricio Londoño © 2020",
    email: "Email Me!",
  },
  español: {
    profileTitle: "La cara detrás del arte",
    profileDesc:
      "Hola, mi nombre es Mauricio Londoño y soy un artista independiente que se especialisa en arte en madera y en vidrio. A lo largo de los años, he ido desarrollado piezas individuales que me gustaría compartir con ustedes.",
    homeLink: "Home",
    woodLink: "Madera",
    glassLink: "Vidrio",
    woodSub: "Esculturas en madera",
    woodDesc: "Descripción sobre arte en madera etc.",
    woodBtn: "Leer Más",
    glassSub: "Esculturas en vidrio",
    glassDesc: "Descripción sobre arte en vidrio etc.",
    glassBtn: "Leer Más",
    buyBtn: "Comprar",
    copyright: "Todos los derechos reservados a Mauricio Londoño © 2020",
    email: "Cóntactame!",
  },
  français: {
    profileTitle: "Le visage derrière de l'art",
    profileDesc:
      "Bonjour, je m'appelle Mauricio Londoño et je suis un artiste indépendant qui se spécialise sur tout sûr l'art en bois, ainsi que le verre. Au cours des années, j’ai construit pas mal de pièces personnelles que je voudrais mettre en vente pour les partager avec vous.",
    homeLink: "Acceuil",
    woodLink: "Bois",
    glassLink: "Verre",
    woodSub: "Sculptures en bois",
    woodDesc: "Description sur le travail en bois etc.",
    woodBtn: "Lire plus",
    glassSub: "Sculptures en verre",
    glassDesc: "Description sur le travail en verre etc.",
    glassBtn: "Lire plus",
    buyBtn: "Acheter",
    copyright: "Tous droits réservés à Mauricio Londoño © 2020",
    email: "Contactez-moi!",
  },
};
