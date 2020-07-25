"use strict";

/*-------------- IMPORT STATEMENTS ----------*/
/* import { languages } from "./modules/lang.js"; */

window.addEventListener("DOMContentLoaded", init);

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const category = urlParams.get("category");

  //show gallery only when on wood.html
  /* if (window.location.href.includes("wood")) {
    getGallery();
  } */

  getCategories();
  /* if (category) {
    getCategoryGallery(category);
  } */
}

/*--------- CATEGORIES --------*/
function getCategories() {
  fetch("https://mauriciolondono.be/wp/wp-json/wp/v2/categories")
    .then((response) => response.json())
    .then(showCategories);
}
function showCategories(categories) {
  console.log(categories);
}

// /*--------- ABOUT PAGE --------*/
// function getAbout() {
//   /* fetch("https://mauriciolondono.be/wp/about-page/the-person-behind-the-art/")
//     .then((res) => res.json())
//     .then(showAbout); */

//   let response = fetch(
//     "https://mauriciolondono.be/wp/wp-json/wp/v2/types/page?_embed",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: showAbout(),
//     }
//   );
// }

// function showAbout(about) {
//   //clone template
//   /* const templateA = document.querySelector(".aboutTemplate").content; */
// }

/*--------- CONTACT PAGE --------*/

/*------------ GALLERY ----------*/
/* function getGallery() {
  let response2 = fetch(
    "https://mauriciolondono.be/wp/wp-json/wp/v2/categories?_embed",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: showGallery(),
    }
  );
}

function showGallery(jsonObj) {
  //store destination of template copies
  const dest = document.getElementById("galleryPage");
  //create a loop through each json object from the link
  jsonObj.forEach((e) => {
    //store img info in variable
    const imgPath = e._embedded;
    ["wp:featuredmedia"][0].media_details.sizes.medium.source.url;
    //store template in variable
    const galleryTemplate = document.querySelector("#galleryTemplate")
      .textContent;
    //clone template
    const galleryCopy = galleryTemplate.cloneNode(true);
    //store anchor object/a-tag around the img
    const anchor = galleryCopy.querySelector(a);
    //store img
    const imgGallery = galleryCopy.querySelector("a .img_Gallery");
    //set the src-attribute
    imgGallery.setAttribute("src", imgPath);
    //set the id-attribute
    imgGallery.setAttribute("id", e.id);
    //append everything to chosen destination
    dest.appendChild(galleryCopy);
    //create a click event attached to the anchor tag around the image tag
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      manageModal(e);
    });
  });
} */

/*------------ LANGUAGE SWITCHER ----------*/
// const langEl = document.querySelector(".langWrap");
// const langLink = document.querySelectorAll("a");
// //nav links
// /* const homeLink = document.querySelector("#nav a");
// const woodLink = document.querySelector("#nav .woodLink");
// const glassLink = document.querySelector("#nav .glassLink"); */
// //profile section
// const profileTitle = document.querySelector("#profile .profileTitle");
// const profileDesc = document.querySelector("#profile .description");
// //wood
// const woodSub = document.querySelector("#wood .woodSub");
// const woodDesc = document.querySelector("#wood .woodDesc");
// const woodBtn = document.querySelector("#wood #woodBtn");
// //glass
// const glassSub = document.querySelector("#glass .glassSub");
// const glassDesc = document.querySelector("#glass .glassDesc");
// const glassBtn = document.querySelector("#glass #glassBtn");
// //btns
// const woodBuyBtn = document.querySelector("#woodGallery .buyBtn");
// const glassBuyBtn = document.querySelector("#glassGallery .buyBtn");

// //loop through each language & set translation
// langLink.forEach((el) => {
//   el.addEventListener("click", () => {
//     langEl.querySelector(".active").classList.remove("active");
//     el.classList.add("active");
//     const attr = el.getAttribute("language");
//     //nav links
//     /* homeLink.textContent = languages[attr].homeLink;
//     woodLink.textContent = languages[attr].woodLink;
//     glassLink.textContent = languages[attr].glassLink; */
//     //profile section
//     profileTitle.textContent = languages[attr].profileTitle;
//     profileDesc.textContent = languages[attr].profileDesc;
//     //wood
//     woodSub.textContent = languages[attr].woodSub;
//     woodDesc.textContent = languages[attr].woodDesc;
//     woodBtn.textContent = languages[attr].woodBtn;
//     //glass
//     glassSub.textContent = languages[attr].glassSub;
//     glassDesc.textContent = languages[attr].glassDesc;
//     glassBtn.textContent = languages[attr].glassBtn;

//     if (window.location.href.includes("wood")) {
//       woodBuyBtn.textContent = languages[attr].woodBuyBtn;
//     } else if (window.location.href.includes("glass")) {
//       glassBuyBtn.textContent = languages[attr].glassBuyBtn;
//     }
//   });
// });
// //store language translations
// let languages = {
//   english: {
//     profileTitle: "The person behind the art",
//     profileDesc:
//       "Hi, my name is Mauricio Londoño and I am an independent artist who focuses mainly on working with wood, as well as glass. Throughout the years I have been developing works of my own and would now like to share these pieces with you.",
//     homeLink: "Home",
//     woodLink: "Wood",
//     glassLink: "Glass",
//     woodSub: "Wood sculptures",
//     woodDesc: "Description about wood work etc.",
//     woodBtn: "Read More",
//     glassSub: "Glass sculptures",
//     glassDesc: "Description about glass work etc.",
//     glassBtn: "Read More",
//     woodBuyBtn: "Buy Now",
//     glassBuyBtn: "Buy Now",
//   },
//   español: {
//     profileTitle: "La cara detrás del arte",
//     profileDesc:
//       "Hola, mi nombre es Mauricio Londoño y soy un artista independiente que se especialisa en arte en madera y en vidrio. A lo largo de los años, he ido desarrollado piezas individuales que me gustaría compartir con ustedes.",
//     homeLink: "Home",
//     woodLink: "Madera",
//     glassLink: "Vidrio",
//     woodSub: "Esculturas en madera",
//     woodDesc: "Descripción sobre arte en madera etc.",
//     woodBtn: "Leer Más",
//     glassSub: "Esculturas en vidrio",
//     glassDesc: "Descripción sobre arte en vidrio etc.",
//     glassBtn: "Leer Más",
//     woodBuyBtn: "Comprar",
//     glassBuyBtn: "Comprar",
//   },
//   français: {
//     profileTitle: "Le visage derrière de l'art",
//     profileDesc:
//       "Bonjour, je m'appelle Mauricio Londoño et je suis un artiste indépendant qui se spécialise sur tout sûr l'art en bois, ainsi que le verre. Au cours des années, j’ai construit pas mal de pièces personnelles que je voudrais mettre en vente pour les partager avec vous.",
//     homeLink: "Acceuil",
//     woodLink: "Bois",
//     glassLink: "Verre",
//     woodSub: "Sculptures en bois",
//     woodDesc: "Description sur le travail en bois etc.",
//     woodBtn: "Lire plus",
//     glassSub: "Sculptures en verre",
//     glassDesc: "Description sur le travail en verre etc.",
//     glassBtn: "Lire plus",
//     woodBuyBtn: "Acheter",
//     glassBuyBtn: "Acheter",
//   },
// };
