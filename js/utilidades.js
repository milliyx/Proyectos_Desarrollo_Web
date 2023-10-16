window.addEventListener('scroll', function() {
  var imageHeight = document.querySelector('.full-screen-image-wrapper').offsetHeight;
  var scrollPosition = window.scrollY;

  if (scrollPosition > imageHeight) {
    document.querySelector('.black-overlay').style.display = 'block';
  } else {
    document.querySelector('.black-overlay').style.display = 'none';
  }
});
