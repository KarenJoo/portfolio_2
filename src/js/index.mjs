import { burgerMenu } from "./nav/navbar.mjs";


document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', burgerMenu);
});