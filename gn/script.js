// generate random number +
// initialize high score and total score +
// function for message (displayMessage) +
// addEventLister and game login on .check btn and get input value +
// game logic by comparing given number with the random one +
// reset the game by reseting all the values on the addEventListener on .again
// buttons
let againBtn = document.querySelector('.again')
let checkBtn = document.querySelector('.check')
// other elementsa
let randomEl = document.querySelector('.number').textContent='?'
let userInputEl = document.querySelector('.guess')
let msgEl = document.querySelector('.message')
let scoreEl = document.querySelector('.score')
let highScoreEl = document.querySelector('.highscore')
// initialize variables
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
randomEl.textContent = secretNumber
scoreEl.textContent = score
highScoreEl.textContent = highscore
let setMessage = function (message) {
  msgEl.textContent = message
}
msgEl.textContent = 'Start guessing...'
let checkWinner = function () {
  let guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    setMessage('No number!')
  } else if (guess === secretNumber) {
    setMessage('Correct Number!')
    document.querySelector('body').style.backgroundColor = 'green'
    // randomEl.textContent = secretNumber
     document.querySelector('.number').textContent=secretNumber
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? setMessage('Too high!')
        : setMessage('Too low!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.backgroundColor = 'tomato'
      setMessage(' You lost the game!')
    }
  }
}
let resetGame = function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  setMessage('Start guessing...')
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
}
checkBtn.addEventListener('click', checkWinner)
againBtn.addEventListener('click', resetGame)