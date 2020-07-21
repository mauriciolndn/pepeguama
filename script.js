"use strict";
window.addEventListener("DOMContentLoaded", init);

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const category = urlParams.get("category");

  if (category) {
    getCategoryGallery(category);
  } else if (id) {
    makeModalWithImage();
  }

  //show about only when on index.html
  if (window.location.href.includes("index")) {
    getAbout();
  }
  //show gallery only when on wood.html
  else if (window.location.href.includes("wood")) {
    getGallery();
  }

  /* getContact();
  getCategories(); */
}

/*--------- ABOUT PAGE --------*/
function getAbout() {
  /* fetch("https://mauriciolondono.be/wp/about-page/the-person-behind-the-art/")
    .then((res) => res.json())
    .then(showAbout); */

  let response = fetch(
    "https://mauriciolondono.be/wp/wp-json/wp/v2/types/page?_embed",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: showAbout(),
    }
  );
}

function showAbout(about) {
  //clone template
  /* const templateA = document.querySelector(".aboutTemplate").content; */
}

/*--------- CONTACT PAGE --------*/

/*------------ GALLERY ----------*/
function getGallery() {
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
}

function manageModal(clickedLink) {
  //find the current target
  let anchor = clickedLink.currentTarget;
  //get the id of the child of the clicked element (the image id = the post id)
  let imageId = anchor.firstElementChild.getAttribute("id");
  //confirm: we are getting each post type image ID when clicking a single image
  console.log(imageId);
  makeModalWithImage(imageId);
}
