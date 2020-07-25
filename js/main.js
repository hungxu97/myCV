$('.contact a').on('click', (e) => e.preventDefault())

AOS.init({
  once: true,
  duration: 2000,
})

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      // - 70 is the offset/top margin
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
          if (history.pushState) {
            history.pushState(null, null, hash)
          } else {
            window.location.hash = hash
          }
        }
      )
      return false
    } // End if
  })

$('.show-nav-btn').on('click', function () {
  $('.myNav').toggleClass('open')
})