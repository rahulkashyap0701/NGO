$(document).ready(function() {

  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");

    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');

    }
      
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window), wrapper);
  });
  
});


   $(window).scroll(function() {
    if($(window).scrollTop() > 185) {
      //$('.an').addClass('animated fadeInUp tt');
      //$('.ann').addClass('animated fadeInUp tt');
      //$('.navbar').addClass('animated fadeInDown minh');
      //$('.nav').addClass('animated fadeInDown mtul');
   
    } else {
         // $('.an').removeClass('animated fadeInUp delay-3s');
          //$('.ann').removeClass('animated fadeInUp delay-3s');
           // $('.navbar').removeClass('animated fadeInDown  minh');
     // $('.nav').removeClass('animated fadeInDown  mtul');
  
    }
});



