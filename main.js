// GO!


// Task #1
var navMenu = document.querySelector('.nav-menu'),
    clickButton = document.querySelector('button')
    
clickButton.innerHTML = "Hide Menu"

var navState = {
	showing: true
}


clickButton.addEventListener('click', function() {
    if (navState.showing) {
      navMenu.style.opacity = '0'
      navState.showing = false
      clickButton.innerHTML = "Show Menu"
    }
    else { // if she is hiding, show her
      navMenu.style.opacity = '1'
      navState.showing = true
      clickButton.innerHTML = "Hide Menu"
    }
   
  })


//TASK #2
var inputBoxNode = document.querySelector('input[type="text"]'),
	ulNode = document.querySelector('.guest-list')

inputBoxNode.addEventListener('keydown', function(event){
  if (event.keyCode === 13) {
    var liNode = document.createElement('li')
    liNode.className = "guest"
    liNode.innerHTML += event.target.value
    ulNode.appendChild(liNode)
    event.target.value = ''
  }
})


//TASK #3
var inputBoxNode2 = document.querySelector('.new-input'),
	ulNode2 = document.querySelector('.new-guest')


inputBoxNode2.addEventListener('keydown', function(event){
  if (event.keyCode === 13) {
    var liNode2 = document.createElement('li')
    liNode2.className = "guest"
    var removeButton = document.createElement('button')
    removeButton.innerHTML = 'X'
    liNode2.innerHTML += event.target.value
    ulNode2.appendChild(liNode2)
    liNode2.appendChild(removeButton)
    event.target.value = ''
    
    removeButton.addEventListener('click', function(event) {
    ulNode2.removeChild(liNode2)
    })
  }
})