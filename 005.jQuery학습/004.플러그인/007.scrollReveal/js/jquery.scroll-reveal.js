(function( $ ) {

    $.fn.scrollReveal = function() {

        //get viewport size
        var windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            initialScroll = $(window).scrollTop(),
            items = $('.js-reveal'),
            scroll;

        //hide anything not in the viewport
        items.each(function(){
            if($(this).offset().top >= windowHeight){
                $(this).addClass('js-reveal--hidden');
            }
        });

        //on scroll
        $(window).scroll(function (event) {
            //get the current scroll position
            scroll = $(window).scrollTop();
            //show anything that is now in view (scroll + windowHeight)
            items.each( function(){
                if($(this).offset().top <= (scroll + windowHeight)){
                    $(this).removeClass('js-reveal--hidden');
                }
            });
        });

        return this;
    };
}( jQuery ));

