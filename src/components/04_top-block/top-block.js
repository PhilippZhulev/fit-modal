var scrl_el = $('.top-block__modal-view');

$(window).scroll(function(a) {
   if($(this)[0].scrollY > 0) {
       scrl_el.addClass('active');
   }else {
       scrl_el.removeClass('active');
   }
});