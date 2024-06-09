
export function initModals() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
      });
    });
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  
    function openModal(modal) {
      if (modal == null) return;
      modal.style.display = 'block';
    }
  
    function closeModal(modal) {
      if (modal == null) return;
      modal.style.display = 'none';
    }
  
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
        closeModal(event.target);
      }
    });
  }