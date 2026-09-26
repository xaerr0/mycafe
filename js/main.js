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
  let lastScrollY = window.scrollY;

  const revealFab = () => {
    const pastHero = heroLike.getBoundingClientRect().bottom <= 80;
    const y = window.scrollY;
    const delta = y - lastScrollY;
    lastScrollY = y;

    if (!pastHero) {
      orderFab.classList.remove("is-visible");
      return;
    }
    // Hide while actively scrolling down, so the fixed button doesn't sweep
    // over headings and item text; show once the visitor pauses or scrolls
    // back up to read something.
    if (delta > 4) {
      orderFab.classList.remove("is-visible");
    } else if (delta < -4 || delta === 0) {
      orderFab.classList.add("is-visible");
    }
  };
  revealFab();
  window.addEventListener("scroll", revealFab, { passive: true });
  window.addEventListener("resize", revealFab);
}
