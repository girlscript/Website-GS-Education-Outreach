$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = $(this).data("include");
    $(this).load(file);
  });
});
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
span.onclick = function() {
  modal.style.display = "none";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("pop-up-img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2000); 
}

function modalClose(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}