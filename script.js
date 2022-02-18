'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const body = document.querySelector('body').style;
let numberElement = document.querySelector('.number');

function settingMessageText(message) {
  document.querySelector('.message').textContent = message;
}

const settingScoreText = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    settingMessageText('⛔ no number!!');
  } else if (guess === secretNumber) {
    settingMessageText('🎉 correct Number!!');
    numberElement.textContent = secretNumber;
    body.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      settingMessageText(
        guess > secretNumber ? '📈 Too High!!' : '📉 Too Low !!'
      );
      score--;
      settingScoreText(score);
    } else {
      settingMessageText('you lost the game');
      settingScoreText(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  settingMessageText('Start guessing...');
  numberElement.textContent = '?';
  settingScoreText(score);
  document.querySelector('.guess').value = '';

  body.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
