$(document).ready(function(){

/*MENU RESPONSIVO */
$('.mobile-nav-icon').click(function(){
  var nav = $('.menu');
  nav.slideToggle(200);
});
  
$('.features').waypoint(function(direction){
    /*Implementação*/
    /*direction indica a direção do scrolling: para cima, para baixo */
    /*Se estiver indo para baixao*/
    if(direction=="down"){
      /*adiciona a classe stick no elemento nav */
      $('nav').addClass('sticky');
    }else{
      $('nav').removeClass('sticky');
    }
  
  });
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});

