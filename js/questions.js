const options = {
	'firstOp' : [['../assets/imgpkm-1.png', 'Ekans', 'Pikachu', 'Vaporeon', 2],
	['../assets/imgpkm-2.png', 'Moltres', 'Lugia', 'Flareon', 1],
	['../assets/imgpkm-3.png', 'Tailow', 'Gardevoir', 'Jigglypuff', 2]
],
	'secondOp' : [['../assets/silhouette-1.jpg', 'Charmander', 'Vaporeon', 'Raichu', 3],
	['../assets/silhouette-2.jpg', 'Parras', 'Meowth', 'Vulpix', 2],
	['../assets/silhouette-3.jpg', 'Dragonite', 'Butterfree', 'Pikachu', 1]
]};

let counter = 0;

let selectOp = options[sessionStorage.getItem('theme')];

let started = (num) => {
  const area = document.getElementById('questions');
  // for (let i = 0; i < selectOp.length; i++){
    area.innerHTML = `<div class="img-box">
  <img src=${selectOp[num][0]}>
</div>
<div class="option-box">
  <p><input onchange="answerChecked(this)" type="radio" value=${num} name= 1>${selectOp[num][1]}</p>
  <p><input onchange="answerChecked(this)" type="radio" value=${num} name= 2>${selectOp[num][2]}</p>
  <p><input onchange="answerChecked(this)" type="radio" value=${num} name= 3>${selectOp[num][3]}</p>
</div>`
  // }
}

let answerChecked = (e) => {
  // debugger
  let questionNum = parseInt(e.value) + 1;
  
  if(e.name == selectOp[e.value][4]){
    counter++;
  }

  if(questionNum < selectOp.length){
    started(questionNum)
  } else {
    window.location.href = '../views/final-view.html';
    sessionStorage.setItem('counter', counter);
  }
}

started(0);
