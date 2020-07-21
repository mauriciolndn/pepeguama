"use strict";
window.addEventListener("DOMContentLoaded", init);

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const category = urlParams.get("category");

  /* if (category) {
    getCategoryGallery(category);
  } else if (id) {
    makeModalWithImage();
  }
  //If on the wood.html page, run the getGallery page-all results
  console.log("am i on wood.html?", window.location.href.includes("wood"));

  if (window.location.href.includes("wood")) {
    getGallery();
  } */

  getAbout();
  /* getContact();
  getCategories(); */
}

function getAbout() {
  fetch("https://mauriciolondono.be/wp/about-page/the-person-behind-the-art/")
    .then((res) => res.json())
    .then(showAbout);
}
