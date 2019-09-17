
/* -------------- Show more -------------- */

$(document).ready(function(){
  $("#demo").on("hide.bs.collapse", function(){
    $(".show-more-button").html('Show more<img class="pijltje-beneden" src="links/pijltje-beneden.png">');
  });
  $("#demo").on("show.bs.collapse", function(){
    $(".show-more-button").html('Show less<img class="pijltje-boven" src="links/pijltje-beneden.png">');
  });
});

/* -------------- Navbar change background when scroll -------------- */

window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('navigation-bar-id');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                nav.classList.add('nav-colored');
                nav.classList.remove('nav-transparent');
            } else {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
            }
    });

/* This code didn't work in Firefox 
var myNav = document.getElementById('navigation-bar-id');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 350 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
/*

/* -------------- Scroll to top botton -------------- */

jQuery(document).ready(function($){
    var offset = 10;
    var speed = 700;
    var duration = 400;
     $(window).scroll(function(){
            if ($(this).scrollTop() < offset) {
           $('.topbutton') .fadeOut(duration);
            } else {
           $('.topbutton') .fadeIn(duration);
            }
        });
  $('.topbutton').on('click', function(){
    $('html, body').animate({scrollTop:0}, speed);
    return false;
    });
});

/* -------------- Nav opens -------------- */
function openNav() {

	document.getElementById("mySidenav").style.transform = "translateX(0%)";	

	/* Background opacity when sidenav opens 
	document.getElementById("home").style.filter = "brightness(20%)";
	document.getElementsByClassName("blauwepagina").style.filter = "brightness(20%)";
	*/
}

/* -------------- Nav closes -------------- */
function closeNav() {

	document.getElementById("mySidenav").style.transform = "translateX(100%)";	
	/* Background opacity when sidenav closes 
	document.getElementById("home").style.filter = "brightness(100%)";
	document.getElementsByClassName("blauwepagina").style.filter = "brightness(20%)";
	*/
}




