$(document).ready(function () {
    $('.icons1').mouseover(function () {
        $('.infos1').stop().fadeIn('fade-infos');
        $('.icons1').mouseout(function () {
            $('.infos1').stop().fadeOut('fade-infos');
        });
    });

    $('.icons2').mouseover(function () {
        $('.infos2').stop().fadeIn('fade-infos');
        $('.icons2').mouseout(function () {
            $('.infos2').stop().fadeOut('fade-infos');
        });
    });
    $('.icons3').mouseover(function () {
        $('.infos3').stop().fadeIn('fade-infos');
        $('.icons3').mouseout(function () {
            $('.infos3').stop().fadeOut('fade-infos');
        });
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.navigation').addClass("fadeout");
        } 
        else {
            $('.navigation').removeClass("fadeout");
        }
    });
});

$(document).ready(function(){
  $('body').scrollspy({target: ".navigation"});   

  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
            });
    }  
  });
});
