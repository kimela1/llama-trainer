/* Reveal on scroll */
ScrollReveal({duration: 2000 })
ScrollReveal().reveal('.about-why', {
  reset: true,
  origin: screenLeft,
  distance : '100px',
  easing: 'ease-out'
});
ScrollReveal().reveal('.about-bts', {
  delay: 200,
  reset: true,
  distance : '100px',
  easing: 'ease-out'
});
ScrollReveal().reveal('.about-credits', {
  delay: 250,
  reset: true,
  origin: screenLeft,
  distance : '100px',
  easing: 'ease-out'
})

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
