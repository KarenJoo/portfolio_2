export function initModals() {
  const viewMoreBtns = document.querySelectorAll('.view-more-btn')
  const modals = document.querySelectorAll('.modal')
  const closeBtns = document.querySelectorAll('.close')
  const overlay = document.querySelector('.overlay')

  viewMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].style.display = 'flex'
      overlay.style.display = 'block'
      document.body.classList.add('open')
    })
  })

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal')
      modal.style.display = 'none'
      overlay.style.display = 'none'
      document.body.classList.remove('open')
    })
  })

  window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
      if (event.target === modal || event.target === overlay) {
        modal.style.display = 'none'
        overlay.style.display = 'none'
        document.body.classList.remove('open')
      }
    })
  })
}
