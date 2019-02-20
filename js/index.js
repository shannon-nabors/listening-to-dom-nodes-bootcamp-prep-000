// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main')

main.addEventListener('click', function(event) {
  alert('I was clicked!')
})


const input = document.querySelector('input')

// input.addEventListener('keydown', function(event) {
//   console.log(event.key)
// })

input.addEventListener('keydown', function(event) {
  if (event.key === "g") {
    return event.preventDefault()
  } else {
    console.log(event.key)
  }
})

let divs = document.querySelectorAll('div')

// function bubble(event) {
//   console.log(this.firstChild.nodeValue.trim() + ' bubbled')
// }

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}

// function capture(event) {
//   console.log(this.firstChild.nodeValue.trim() + ' captured')
// }
//
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', capture, true)
// }

function bubble(event) {
  event.stopPropagation()
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
