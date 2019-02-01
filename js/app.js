let splash = () => {
	setTimeout(function () {
		document.getElementById('splash-screen').style.display = 'none'
	}, 2000);
}

document.getElementById('btn1').addEventListener('click', () => {
	const userName = document.getElementById('name').value;
	sessionStorage.setItem('name', userName);
	window.location.href = './views/themes.html';
});

splash();
