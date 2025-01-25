document.addEventListener("DOMContentLoaded", () => {
	fetch('main-header.html')
	.then(response => response.text())
	.then(data => document.getElementById('header').innerHTML = data);

	fetch('main-footer.html')
	.then(response => response.text())
	.then(data => document.getElementById('footer').innerHTML = data);
});