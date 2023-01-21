'use strict';

const TheSecretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = TheSecretNumber;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  if (!guess) {
    console.log(document.querySelector('.message').textContent = '🙈 No Guess!');
  } else if (guess === TheSecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
  } else if (guess > TheSecretNumber ) {
    document.querySelector('.message').textContent = ' Your Guess is too High 📈';
  } else if (guess<TheSecretNumber) {
    document.querySelector('.message').textContent = ' Your Guess is too Low 📉';
  }
});