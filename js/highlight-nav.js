const sections = document.querySelectorAll(".anchor[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset; // Get current scroll position

  sections.forEach((current) => {
    const section = current.nextElementSibling;
    const sectionHeight = section.offsetHeight;
    const sectionTop = current.offsetTop - 250;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      let nav = document.querySelector(".nav a[href*=" + sectionId + "]");
      if (nav) {
        nav.classList.remove("active");
      }
    }
  });
}
