$(window).ready(function () {

    var nav_el = $('.header__nav-bar > ul > li');

     nav_el.find('a').click( function(){
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_elem).offset().top - 70}, 300);
        }
        return false;
     });

    function scroll_spy(id, index) {
        $(id).waypoint(function(direction) {
            if (direction === 'down') {
                nav_el.removeClass('active');
                nav_el.eq(index).addClass('active');
            }
        }, {
            offset: 70
        });
        $(id).waypoint(function(direction) {
            if (direction === 'up') {
                nav_el.removeClass('active');
                nav_el.eq(index).addClass('active');
            }
        }, {
            offset: 0
        });
    }
    scroll_spy('#description', 0);
    scroll_spy('#getStarted', 1);
    scroll_spy('#api', 2);
});
