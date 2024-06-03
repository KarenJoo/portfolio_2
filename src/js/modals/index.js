export function initModals() {
  const viewMoreBtns = document.querySelectorAll('.view-more-btn')

  viewMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(`modal-${index + 1}`)
      const overlay = document.getElementById(`overlay-${index + 1}`)

      modal.style.display = 'flex'
      overlay.style.display = 'block'
      document.body.classList.add('open')
    })
  })

  const closeBtns = document.querySelectorAll('.close')
  const overlays = document.querySelectorAll('.overlay')

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal')
      const overlay = modal.previousElementSibling

      modal.style.display = 'none'
      overlay.style.display = 'none'
      document.body.classList.remove('open')
    })
  })

  overlays.forEach((overlay, index) => {
    overlay.addEventListener('click', () => {
      const modal = document.getElementById(`modal-${index + 1}`)

      modal.style.display = 'none'
      overlay.style.display = 'none'
      document.body.classList.remove('open')
    })
  })
}
