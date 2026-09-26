const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  const setOpen = (open) => {
    nav.setAttribute("data-open", String(open));
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    setOpen(nav.getAttribute("data-open") !== "true");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

const orderFab = document.querySelector(".order-fab");
const heroLike = document.querySelector(".hero, .menu-intro");

if (orderFab && heroLike) {
  const revealFab = () => {
    const pastHero = heroLike.getBoundingClientRect().bottom <= 80;
    orderFab.classList.toggle("is-visible", pastHero);
  };
  revealFab();
  window.addEventListener("scroll", revealFab, { passive: true });
  window.addEventListener("resize", revealFab);
}
