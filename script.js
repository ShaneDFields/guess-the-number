'use strict';

// random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// amount of guesses starting with
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//testing purposes to see the secret number
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //No input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    //Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!!!';
    displayMessage('You Win!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Wrong answer
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Game Over';
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

// Reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
