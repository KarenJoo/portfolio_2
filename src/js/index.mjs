import { burgerMenu } from "./nav/navbar.mjs";
import { initModals } from './modals/index.js';


document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', burgerMenu);
  initModals();
});