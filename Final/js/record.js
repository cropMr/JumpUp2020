var slideIndex3 = 0;
showSlides3();
var slideIndex7 = 0;
showSlides7();
var slideIndex14 = 0;
showSlides14();
var slideIndex52 = 0;
showSlides52();

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}
  slides[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
  
}
function showSlides7() {
    var i;
    var slides = document.getElementsByClassName("mySlides7");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex7++;
    if (slideIndex7 > slides.length) {slideIndex7 = 1}
    slides[slideIndex7-1].style.display = "block";
    setTimeout(showSlides7, 2000); // Change image every 2 seconds
  }

function showSlides14() {
    var i;
    var slides = document.getElementsByClassName("mySlides14");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex14++;
    if (slideIndex14 > slides.length) {slideIndex14 = 1}
    slides[slideIndex14-1].style.display = "block";
    setTimeout(showSlides14, 2000); // Change image every 2 seconds
  }

  function showSlides52() {
    var i;
    var slides = document.getElementsByClassName("mySlides52");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex52++;
    if (slideIndex52 > slides.length) {slideIndex52 = 1}
    slides[slideIndex52-1].style.display = "block";
    setTimeout(showSlides52, 2000); // Change image every 2 seconds
  }