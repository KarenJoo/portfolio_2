import { initModals } from './modals/index.js'
import { burgerMenu } from './nav/navbar.mjs'

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon')
  menuIcon.addEventListener('click', burgerMenu)
  initModals()

  const video = document.getElementById('mediaVideo')
  const placeholder = document.getElementById('video-placeholder')

  if (video && placeholder) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.playbackRate = 0.5
            video.style.display = 'block' // Show video
            placeholder.style.display = 'none' // Hide placeholder
            video.play()
            observer.unobserve(video)
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    observer.observe(video)
  }
})
