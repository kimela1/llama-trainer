// Animate the scroll to top
$('.back-to-top').on('click', function(event) {
  event.preventDefault();
  
  $('html, body').animate({
      scrollTop: 0,
  }, 100);
});