"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".main-nav__mobile");
  const mainNav = document.querySelector(".main-nav");
  const mainNavListLinks = document.querySelectorAll(".main-nav__list-link");
  const mainEl = document.querySelector("main");
  const footerEl = document.querySelector(".footer");
  const footerDate = document.querySelector(".footer__date");
  const modal = document.querySelector(".modal");
  const modalOpen = document.querySelector(".modal__open");
  const modalClose = document.querySelector(".modal__close");
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const modalAlreadyOpen = modal.classList.contains(
    "modal--active",
    "modal--overlay"
  );
  const navAlreadyOpen = modal.classList.contains("main-nav--active");

  function toggleMenu() {
    mainNav.classList.toggle("main-nav--active");
  }
  function showModal() {
    modal.classList.add("modal--active", "modal--overlay");
  }
  function closeModal() {
    modal.classList.remove("modal--active", "modal--overlay");
  }

  // Set mobile nav slide in
  btn.addEventListener("click", toggleMenu);

  // Close mobile nav on "esc" key
  window.addEventListener("keydown", (e) => {
    if (!navAlreadyOpen && e.key === "Escape") toggleMenu();
  });

  // Close mobile nav on click outside
  mainEl.addEventListener("click", () => {
    if (mainNav.classList.contains("main-nav--active")) toggleMenu();
  });
  footerEl.addEventListener("click", () => {
    if (mainNav.classList.contains("main-nav--active")) toggleMenu();
  });

  // Close mobile nav on click a link
  mainNavListLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!navAlreadyOpen) toggleMenu();
    });
  });

  // On small screen add tabindex-1 to nav
  if (mediaQuery.matches) {
    mainNavListLinks.forEach((link) => {
      link.setAttribute("tabindex", -1);
    });
  }

  // On scroll, change background-color of navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      mainNav.classList.add("main-nav--scroll");
    } else {
      mainNav.classList.remove("main-nav--scroll");
    }
  });

  // Make modal work
  modalOpen.addEventListener("click", showModal);

  modalClose.addEventListener("click", () => {
    if (!modalAlreadyOpen) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!modalAlreadyOpen && e.key === "Escape") closeModal();
  });

  document.addEventListener("click", (c) => {
    if (!modalAlreadyOpen && c.target === modal) closeModal();
  });

  // Set dynamic date
  footerDate.textContent = new Date().getFullYear();
});
