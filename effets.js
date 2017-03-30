$( document ).ready(function() {
  $('.icons1').mouseover(function(){
    $('.infos1').stop().fadeIn('fade-infos');
    $('.icons1').mouseout(function(){
      $('.infos1').stop().fadeOut('fade-infos');
      $('body').load(function(){
        if ( $(this).height() > 500) {
          $(this).addClass('min-icons');
        }
      });
    });
  });

  $('.icons2').mouseover(function(){
    $('.infos2').stop().fadeIn('fade-infos');
    $('.icons2').mouseout(function(){
      $('.infos2').stop().fadeOut('fade-infos');
    });
  });
  $('.icons3').mouseover(function(){
    $('.infos3').stop().fadeIn('fade-infos');
    $('.icons3').mouseout(function(){
      $('.infos3').stop().fadeOut('fade-infos');
    });
  });
    $('.overlay').mouseover(function(){
        $('.images-hover').fadeIn();
    });
});
