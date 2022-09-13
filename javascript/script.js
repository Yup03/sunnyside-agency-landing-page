//IMPLEMENTING SMOOTH SCROLLING

const navEl = document.querySelectorAll(".nav");

navEl.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    const clicked = e.target;
    const href = clicked.getAttribute("href");

    if (href === "#" || !href) return;

    e.preventDefault();
    const sectionEl = document.querySelector(href);

    sectionEl.scrollIntoView({ behavior: "smooth" });
  });
});

