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


/* Animate the scroll to top */
$('.back-to-top').on('click', function(event) {
  event.preventDefault();
  
  $('html, body').animate({
      scrollTop: 0,
  }, 1000);
});


/* Reveal on scroll */
ScrollReveal({
  duration: 1000
})
ScrollReveal().reveal('.about-why', {
  reset: true,
  origin: screenLeft,
  distance : '10px',
  easing: 'ease-in-out'
});
ScrollReveal().reveal('.about-bts', {
  delay: 200,
  reset: true,
  distance : '10px',
  easing: 'ease-in-out'
});
ScrollReveal().reveal('.about-credits', {
  delay: 250,
  reset: true,
  origin: screenLeft,
  distance : '10px',
  easing: 'ease-in-out'
})
ScrollReveal().reveal('.sub-title', {
  delay: 50,
  distance : '10px',
  easing: 'ease-in-out'
})
ScrollReveal().reveal('.title', {
  delay: 100,
  distance : '15px',
  easing: 'ease-in-out'
})
ScrollReveal().reveal('.header-paragraph', {
  delay: 150,
  distance : '20px',
  easing: 'ease-in-out'
})