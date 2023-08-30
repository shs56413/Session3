const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')
const counters = document.querySelectorAll('.counter')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open')
})

counters.forEach((counter) => {
  counter.innerText = 0
  let count = 0
  function updateCount() {
    const target = parseInt(counter.dataset.count)
    if (count < target) {
      count += 10
      counter.innerText = count + '+'
      setTimeout(updateCount, 10)
    } else {
      counter.innerText = target + '+'
    }
  }
  updateCount()
})

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const container = document.querySelector('.slides')

const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let current = 0
let startX = 0
let endX = 0

let autoSlide = setInterval(slideFoward, 3000)
let position = 0

function slideWidth() {
  let totalWidth = 0

  slides.forEach((slide) => {
    slide.style.width = slider.offsetWidth + 'px'
    totalWidth = totalWidth + slider.offsetWidth
  })

  container.style.width = totalWidth + 'px'
}

function animate() {
  container.style.transform = `translateX(-${slider.offsetWidth * current}px)`
  position = slider.offsetWidth * current
  requestAnimationFrame(animate)
}

function slideFoward() {
  if (current < slides.length - 1) {
    current++
    requestAnimationFrame(animate)
  }
}

function slideBack() {
  if (current > 0) {
    current = current - 1
    requestAnimationFrame(animate)
  }
}

// LOAD EVENT
window.addEventListener('load', slideWidth)

// RESIZE EVENT
window.addEventListener('resize', slideWidth)

// BUTTON EVENTS
nextButton.addEventListener('click', (event) => {
  clearInterval(autoSlide)
  slideFoward()
})

prevButton.addEventListener('click', (event) => {
  clearInterval(autoSlide)
  slideBack()
})

$(function () {
  $('.circle-graph').easyPieChart({
    scaleColor: false,
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#a378aa',
    trackColor: '#e7b8ef',
    size: 150,
    animate: 800
  })
})
