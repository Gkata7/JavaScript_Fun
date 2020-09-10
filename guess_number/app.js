// Variables for all values
let min = 1,
    max = 15,
    correctNum = winningNumber(min,max),
    guessCounter = 3;
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessButton = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');
// Assign Min and Max
minNum.textContent = min;
maxNum.textContent = max;
// Play again listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// When user makes a guess
guessButton.addEventListener('click', function(){
  // Store a guess number for user
  let guess = parseInt(guessInput.value);
  // If number is not within range, send an alert
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // If number is correct, send an alert
  if(guess === correctNum){
    gameOver(true, `${correctNum} is correct!`);
  } else {
    // Give an alert after running out of guesses
    guessCounter -= 1;
    if(guessCounter === 0){
      gameOver(false, `Game over, you lost. The correct number was ${correctNum}`);
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct. ${guessCounter} guesses left.`, 'red');
    }
  }
});
// Game Over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
  guessButton.value = 'Play Again';
  guessButton.className += 'play-again'; 
}
// Winning Number
function winningNumber(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}
// Message Alert
function setMessage(msg, color){  
  message.style.color = color;
  message.textContent = msg;
}