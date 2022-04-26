$(function () {
  $('main').on('scroll', function (e) {
    const scroll = $('main').scrollTop();

    if (scroll >= 165) {
      $('.navbar').addClass('bg-primary text-white');
      $('.nav-link').addClass('text-white');
      $('.navbar').removeClass('container');
    } else {
      $('.navbar').removeClass('bg-primary text-white');
      $('.nav-link').removeClass('text-white');
    }
  });
});
