$(function () {
    var ScreenWidth = $(window).width(),
        ScreenHeight = $(window).height();

    //обработка тачей
    if (isTouch()) {
        $('html').addClass('touch');
    }
    else{
        $('html').addClass('no-touch');
    }
    function isTouch(){
        try {
            document.createEvent("TouchEvent");
            return true;
        }
        catch (e){
            return false;
        }
    }



    /*=================Plagins===============*/

    $('.owl-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
    });

/*    $('.owl-carousel').owlCarousel({
        items:1,
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 300,
        dotsSpeed: 300,
        navSpeed: 300,
        dots: false,
        nav: true,
        navText: ['<span class="icon icon-nav-top"/>','<span class="icon icon-nav-bottom"/>'],
        URLhashListener:true,
        startPosition: 'slide1',
        onTranslated: function (e){
            var hashEl = $('.slider-hash-item');
            var item = e.item.index - 1;
            console.log(item);
            hashEl.each(function(index){
                if(index + 1 === item){
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                }
                else if(item === 0){
                    hashEl.last().addClass('active');
                    hashEl.last().siblings().removeClass('active');
                }
                else{
                    hashEl.eq(0).addClass('active');
                    hashEl.eq(0).siblings().removeClass('active');
                }
            });
        }
    });*/



    /*=================Plagins===============*/



    /*=================Validation===============*/



    /*=================Validation===============*/




    if(ScreenWidth > 1680){

    }
    if(ScreenWidth < 1680){

    }
    if(ScreenWidth < 992){

    }
    if(ScreenWidth > 768){

    }
    if(ScreenWidth > 768){

    }
    if(ScreenWidth < 580){

    }
    if(ScreenWidth < 480){

    }

    $(window).resize(function(){
        ScreenWidth = $(window).width();
        ScreenHeight = $(window).height();


    });

});