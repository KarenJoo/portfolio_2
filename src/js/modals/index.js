export function initModals() {
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
  
    viewMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          modals[index].style.display = 'flex';
          document.body.style.overflow = 'hidden'; 
        });
      });
    
      closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const modal = btn.closest('.modal');
          modal.style.display = 'none';
          document.body.style.overflow = ''; 
        });
      });
    
      window.addEventListener('click', (event) => {
        modals.forEach((modal) => {
          if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; 
          }
        });
      });
    }