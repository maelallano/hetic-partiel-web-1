var burgerMenu = document.querySelector('#burgerMenu');
var maiNavList = document.querySelector('#mainav ul');

burgerMenu.addEventListener('click', function() {
	if (maiNavList.style.display === "none") {
		maiNavList.style.display = "block";
	} else {
		maiNavList.style.display = "none";
	}
});