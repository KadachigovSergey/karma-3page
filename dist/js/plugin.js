/**
 * Created by MrKadachigov on 29.11.2016.
 */
//PLUGIN FOR SLIDER (SLICK)
(function ($) {
    $(function () {
        $('.slider').slick({
            // autoplay: true,
            // autoplaySpeed: 3000,
            // speed: 1000,
            dots: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            infinite: false,
            fade: true
        });
    });
})(jQuery);


(function ($) {
    $(function () {
        var prefArrow = $('.pref-arrow')
            , nextArrow = $('.next-arrow')
            , pref = $('.slick-prev')
            , next = $('.slick-next')
            , quantitySlide = $('.quantity')
            , numberUp = $('.number-up')
            , slide = $('.slide').length
            , openMenu = $('[data-nav-menu]');

        openMenu.on('click', function () {
           $('header').toggleClass('open')

        });


        if(slide < 9){
            quantitySlide.text('/0'+slide)
        } else {
            quantitySlide.text('/'+slide)
        }

        if(slide<=1){
            $('.number-page').css("display", "none");
            $('.arrow').css("display", "none");
            $('.nav-mobile-footer').css("display", "none")
        }


        nextArrow.on('click', function () {
            next.click();
            var check = $('div.slick-active').attr('data-slick-index');
            var x = check*1+1;
            if(x <= slide && x < 10){
                numberUp.text('0'+ x)
            } else if(x <= slide){
                numberUp.text(x)
            }


        });
        prefArrow.on('click', function () {
            pref.click();
            var check = $('div.slick-active').attr('data-slick-index');
            var x = check*1+1;
            if(x < slide && x < 10){
                numberUp.text('0'+x);
            } else if(x < slide){
                numberUp.text(x);
            }
        });
    });
})(jQuery);