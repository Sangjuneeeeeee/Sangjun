$(function () {
  const tooltips = ['Home', 'Skills', 'Projects', 'End'];
  $('#sangjun').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    navigation: true,
    navigationTooltips: tooltips,
    showActiveTooltip: false,
    navigationPosition: 'left',
    responsiveWidth: 1800,
    afterLoad(_, index) {
      if (index === 2) $('.img2-2').addClass('on');
    },
  });

  $('#fp-nav ul li a').each((i, el) => {
    $(el).attr('aria-label', tooltips[i]);
  });

  $('.img2-2').on('mouseenter', () => {
    $('.logo').addClass('on');
  });

  $(document).on('mousemove', (e) => {
    $('#fp-nav').toggleClass('hover', e.clientX < 150);
  });



  $('#profileBtn').on('click', function (e) {
      $('.profile-modal').fadeIn()
  });
  $('.close-btn').click(function(){
    $('.profile-modal').fadeOut()
  })

});