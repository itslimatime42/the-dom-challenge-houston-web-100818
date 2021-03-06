const incrementCounter = function() {
  function increment(plusOrMinusOne) {
    counter += plusOrMinusOne
    currentCount.innerText = counter
  }
  event && event.srcElement === buttons['minus'] ? increment(-1) : increment(1)
}

const addLike = function() {
  function addListItem(num, count) {
    likeList.innerHTML += `<li id=${num} data-count=${count} >${num} has been liked ${count} times</li>`
  }

  const listNum = document.getElementById(`${counter}`)
  let count = 0

  if (listNum) {
    count = parseInt(listNum.dataset.count)
    listNum.remove()
  }

  count++
  addListItem(counter, count)
}

const pause = function() {
  function buttonToggle(boolean, pauseOrResume) {
    for (button in buttons) {
      if (button === 'pause') { buttons[button].innerText = pauseOrResume }
      else { buttons[button].disabled = boolean }
    }
  }

  if (buttons['pause'].innerText === 'pause') {
    clearInterval(timer)
    buttonToggle(true, 'resume')
  } else {
    timer = setInterval(incrementCounter, 1000)
    buttonToggle(false, 'pause')
  }
}

const addComment = function() {
  let comment = commentForm.children[0].value
  commentList.innerHTML += `<li>${comment}</li>`
  event.preventDefault()
}

let counter = 0
let timer = setInterval(incrementCounter, 1000)
let currentCount = document.getElementById('counter')
let likeList = document.querySelector('.likes')
let commentList = document.getElementById('list').appendChild(document.createElement('ul'))
let commentForm = document.getElementById('comment-form')
let buttons = {
  minus: document.getElementById('-'),
  plus: document.getElementById('+'),
  like: document.getElementById('<3'),
  pause: document.getElementById('pause'),
  submit: document.getElementById('submit')
}

buttons['minus'].addEventListener('click', incrementCounter)
buttons['plus'].addEventListener('click', incrementCounter)
buttons['like'].addEventListener('click', addLike)
buttons['pause'].addEventListener('click', pause)
buttons['submit'].addEventListener('click', addComment)
