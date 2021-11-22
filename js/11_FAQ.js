// This is included inside 11_FAQ.html
var arrows = FAQ.querySelectorAll('.FAQ_arrow');
var i;

for (i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function() {
	  $(this.nextElementSibling).slideToggle("fast","linear");
	  if(this.style.transform=="rotate(-180deg)")  this.style.transform="rotate(0deg)";
	  else this.style.transform="rotate(-180deg)";
  });
}