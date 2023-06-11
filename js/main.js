var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

const closeMenu = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    closeMenu();
  }
};

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

///
///
/// slick slider

///
///
/// tabEvents
const toggleBody = (isClosed) => {
  if (isClosed) {
    document.body.classList.add("active");
    if (menu) closeMenu();
  } else {
    document.body.classList.remove("active");
  }
};
const toggleModal = (eventBtn, modal, callbackFunc = null) => {
  const closeButton = modal.querySelector(".modal-close");

  eventBtn.onclick = (e) => {
    e.preventDefault();
    modal.classList.add("active");
    body.classList.add("active");
    if (callbackFunc) callbackFunc();
  };

  if (closeButton)
    closeButton.onclick = (e) => {
      modal.classList.remove("active");
      body.classList.remove("active");
    };
  modal.onclick = (e) => {
    if (e.target === e.currentTarget) {
      modal.classList.remove("active");
      body.classList.remove("active");
    }
  };
};

document.querySelectorAll('[data-event="preview"]').forEach((previewItem) => {
  const modal = document.querySelector("#imagePopup");
  const imgLink = previewItem.querySelector("img").src;
  if (modal && imgLink) {
    console.log("set onclick");
    toggleModal(previewItem, modal, () => {
      console.log("imgLink", imgLink);
      modal.querySelector("img").src = imgLink;
    });
  }
});

///
///
///
///WOW JS
// new WOW().init({
//   boxClass: "wow",
// });
