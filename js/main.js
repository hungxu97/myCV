// b4 tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// wow scroll
wow = new WOW({
  mobile: false,
})
wow.init()
$('.wow').attr('data-wow-duration', '2.5s')

// b4 smooth scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', function (event) {
    if (this.hash !== '') {
      var hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          if (history.pushState) {
            history.pushState(null, null, hash)
          } else {
            window.location.hash = hash
          }
        }
      )
      return false
    }
  })

$('.show-nav-btn').on('click', function () {
  $('.myNav').toggleClass('open')
})
