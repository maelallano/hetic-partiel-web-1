var burgerMenu = document.querySelector('#burgerMenu');
var maiNavLiscrollTop = document.querySelector('#mainav ul');
var backtotop = document.querySelector('#backtotop');

//Burger Menu
burgerMenu.addEventListener('click', function() {
	if (maiNavList.style.display === "none") {
		maiNavList.style.display = "block";
	} else {
		maiNavList.style.display = "none";
	}
});

//Back to top arrow
backtotop.addEventListener('click', function() {
	window.scroll({
	  top: 0,
	  behavior: 'smooth'
	});
});


var headerMenu = document.querySelector('.row1');
var lastScrollTop = 0;

//Header Menu displayed when scrolling up
window.addEventListener("scroll", function(){
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

   if (scrollTop > lastScrollTop){
      headerMenu.style.position = "";
      headerMenu.style.top = "";
   } else {
     headerMenu.style.position = "fixed";
     headerMenu.style.top = "0";
   }

   if (scrollTop <= 0) {
   	lastScrollTop = 0;
   } else {
   	lastScrollTop = scrollTop;
   }
});







