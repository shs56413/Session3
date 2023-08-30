const inputTask = document.querySelector('#inputtask')
const form = document.querySelector('.form')
const addButton = document.querySelector('#addbutton')
const toDoList = document.querySelector('.todolist')
const clear = document.querySelector('.clear')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  if (inputTask.value == '') {
    alert('please add Some Text')
  } else {
    const newTask = createNewItem(inputTask.value)
    toDoList.appendChild(newTask)
    inputTask.value = ''
    inputTask.focus()
    clear.classList.remove('d-none')
  }

  clear.addEventListener('click', function () {
    toDoList.innerHTML = ''
  })
})

function createNewItem(inputValue) {
  const task = document.createElement('li')
  const span = document.createElement('span')
  const delBtn = document.createElement('button')
  const editBtn = document.createElement('button')
  span.textContent = inputValue
  delBtn.textContent = 'Delete'
  editBtn.textContent = 'Edit'
  task.appendChild(span)
  task.appendChild(delBtn)
  task.appendChild(editBtn)

  delBtn.addEventListener('click', function () {
    task.parentNode.removeChild(task)
  })
  editBtn.addEventListener('click', function () {
    span.contentEditable = true
    span.focus()
  })

  return task
}

const wr = document.querySelector('.word-rotate')

const words = wr.children

let x = 0
rotate(x)

setInterval(() => {
  x = ++x % words.length
  rotate(x)
}, 1000)

function rotate(start) {
  for (let i = 0; i < words.length; ++i) {
    const j = (start + i) % words.length
    let percent = j / words.length
    let rad = percent * 2 * Math.PI
    let ty = Math.sin(rad) * 200
    let tz = 40 * Math.cos(rad) - 40
    let op = (Math.cos(rad) + 1) / 2
    words[
      i
    ].style.transform = `perspective(100px) translateZ(${tz}px) translateY(${ty}%)`
    words[i].style.opacity = `${op}`
  }
}

$('.quotes').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true
})

$(document).ready(function () {
  $('.no-fouc').removeClass('no-fouc')
})
