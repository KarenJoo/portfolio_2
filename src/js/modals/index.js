export function initModals() {
    // Get all the view more buttons
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');
    // Get all the modals
    const modals = document.querySelectorAll('.modal');
    // Get all the close buttons
    const closeBtns = document.querySelectorAll('.close');
  
    viewMoreBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        modals[index].style.display = 'flex';
      });
    });
  
    closeBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        modals[index].style.display = 'none';
      });
    });
  
    window.addEventListener('click', (event) => {
      modals.forEach((modal) => {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      });
    });
  }
  