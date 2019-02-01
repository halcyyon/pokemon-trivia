
document.getElementById('name').innerText = 'Lets start ' + sessionStorage.getItem('name') + '!';

let selectOp = () => {
	const choose = event.target.id;
	console.log(choose);
	sessionStorage.setItem('theme', choose);
	window.location.href = '../views/questions.html';
};

