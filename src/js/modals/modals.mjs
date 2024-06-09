export function initModals() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.dataset.modalTarget;
        const modal = document.querySelector(modalId);
        const cardContainerId = button.dataset.cardContainerId; 
        const cardContainer = document.getElementById(cardContainerId);
        openModal(modal, cardContainer);
      });
    });
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  
    function openModal(modal, cardContainer) {
        if (modal == null || cardContainer == null) return;
        modal.style.display = 'block';
        modal.style.position = 'fixed';
        modal.style.left = '50%';
        modal.style.top = '50%';
        modal.style.marginTop = '20px';
        modal.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(modal);
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
  