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

    $(".js-menu").on('click', function(e){
        $(this).siblings('ul').slideToggle(300);
        $(this).toggleClass("active");
    });



    /*=================Plagins===============*/
    var sliderNav = $('.slider-nav-el');

    $('.slick-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        infinite: true,
        lazyLoad: true,
        draggable: false,
        easing: 'easeInOutBounce',
        dots: true,
        prevArrow: '<div class="nav-top"><span class="icon icon-nav-top"/></div>',
        nextArrow: '<div class="nav-bot"><span class="icon icon-nav-bottom"/></div>',
        appendArrows: sliderNav,
        appendDots: sliderNav,
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+'0'+(i+1)+'</a>';
        },
        responsive: [{

            breakpoint: 480,
            settings: {
                vertical: false,
                dots: false
            }

        }]
    });

    //custom function showing current slide
/*    var $status = $('.pagingInfo');
    var $slickElement = $('.slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });*/

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