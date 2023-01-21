'use strict';

const TheSecretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';

let score = 20;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  if (!guess) {
    console.log(document.querySelector('.message').textContent = '🙈 No Guess!');
  } else if (guess === TheSecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
  } else if (guess > TheSecretNumber ) {
    if (score>1) {
      document.querySelector('.message').textContent = ' Your Guess Is Too High 📈';
      score=score-1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💥You Lost The Game';
      document.querySelector('.score').textContent = '0';
    }
    document.querySelector('.score').textContent = score;
  } else if (guess<TheSecretNumber) {
    if (score>1) {
      document.querySelector('.message').textContent = ' Your Guess Is Too Low 📉';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost The Game';
      document.querySelector('.score').textContent = '0';
    }
  }
});