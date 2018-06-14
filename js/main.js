var burgerMenu = document.querySelector('#burgerMenu');
var maiNavList = document.querySelector('#mainav ul');
var backtotop = document.querySelector('#backtotop');

burgerMenu.addEventListener('click', function() {
	if (maiNavList.style.display === "none") {
		maiNavList.style.display = "block";
	} else {
		maiNavList.style.display = "none";
	}
});

backtotop.addEventListener('click', function() {
	window.scroll({
	  top: 0,
	  behavior: 'smooth'
	});
});