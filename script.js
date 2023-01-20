'use strict';
//
//
// console.log(document.querySelector('.number').textContent = '15');
//
// console.log(document.querySelector('.score').textContent = '17');
//
// console.log(document.querySelector('.guess').value = 13);
//
// console.log(document.querySelector('.highScore').textContent = '23');

const number = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = number;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  if (!guess) {
    console.log(document.querySelector('.message').textContent = '🙈 No Guess!');
  }
});