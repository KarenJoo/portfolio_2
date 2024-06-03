export function initModals() {
  const viewMoreBtns = document.querySelectorAll('.view-more-btn');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close');
  const overlays = document.querySelectorAll('.overlay');

  viewMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].style.display = 'flex';
      overlays[index].style.display = 'block';
      document.body.classList.add('open');
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      const overlay = modal.previousElementSibling;
      modal.style.display = 'none';
      overlay.style.display = 'none';
      document.body.classList.remove('open');
    });
  });

  overlays.forEach((overlay, index) => {
    overlay.addEventListener('click', () => {
      modals[index].style.display = 'none';
      overlay.style.display = 'none';
      document.body.classList.remove('open');
    });
  });
}
