$(document).ready(function () {
  $('.menu').on('click', function () {
    $('.menu').removeClass('activeMenu');
    $(this).addClass('activeMenu');
  });

  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $('.portfolio').on('mouseenter', function () {
    $(this).find('.overlay').removeClass('hidden');
    $(this)
      .find('.overlay')
      .addClass('flex flex-col items-center justify-center');
  });

  $('.portfolio').on('mouseleave', function () {
    $(this)
      .find('.overlay')
      .removeClass('flex flex-col items-center justify-center');
    $(this).find('.overlay').addClass('hidden');
  });

  if ($(window).width() <= 768) {
    $('.portfolio').on('click', function () {
      $(this)
        .find('.overlay')
        .css('background-color', 'rgba(250, 204, 21, 0.78)');
    });
  }
});
