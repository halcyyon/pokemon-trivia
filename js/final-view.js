const score = parseInt(sessionStorage.getItem('counter'));
const scoreBox = document.getElementById('score');
const scorePhrase = document.getElementById('score-phrase');
let phrase;

switch (score) {
  case 0:
    phrase = "Don't play again our trivia, please";
    break;
  case 1:
    phrase = "1 HIT, at least, you tried it";
    break;
  case 2:
    phrase = "2 HIT, you can be better";
    break;
  case 3:
    phrase = "Congratulations! You're a master of Pokémon";
    break;
}


scorePhrase.innerHTML = phrase
if (score > 0) {
  for (let i = 0; i < score; i++) {
    scoreBox.insertAdjacentHTML('afterbegin', `<img id="score" class="score-img" src="../assets/scr-img.png" alt="">`)
  }
}