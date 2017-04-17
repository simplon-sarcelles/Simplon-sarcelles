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
    $('.liens_images').eq(0).mouseenter(function(){
       $('.text').eq(0).addClass('text-avance');
    });
    $('.liens_images').eq(0).mouseleave(function(){
       $('.text').eq(0).removeClass('text-avance');
        
        
    });
    $('.liens_images').eq(1).mouseenter(function(){
       $('.text').eq(1).addClass('text-avance');
    });
    $('.liens_images').eq(1).mouseleave(function(){
       $('.text').eq(1).removeClass('text-avance');
    });
    
    $('.liens_images').eq(2).mouseenter(function(){
       $('.text').eq(2).addClass('text-avance');
    });
    $('.liens_images').eq(2).mouseleave(function(){
       $('.text').eq(2).removeClass('text-avance');
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
