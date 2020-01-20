/* Reveal on scroll */
ScrollReveal({ duration: 1400 })
ScrollReveal().reveal('.about-why', {reset: true, easing: 'ease-in'});
ScrollReveal().reveal('.about-bts', {delay: 100, reset: true, easing: 'ease-in'});
ScrollReveal().reveal('.about-credits', {delay: 150, reset: true, easing: 'ease-in'})

/* Animate the scroll to top */
$('.back-to-top').on('click', function(event) {
  event.preventDefault();
  
  $('html, body').animate({
      scrollTop: 0,
  }, 1000);
});


/* Slideshow */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
