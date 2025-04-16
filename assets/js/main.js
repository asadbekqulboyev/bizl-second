$(document).ready(function () {
   
    $('.action_img').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {
                        var match = url.match(/[\\?\\&]v=([^\\?\\&]+)/); // Oddiy YouTube videolar
                        if (match && match[1]) return match[1];
    
                        var shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/); // Shorts videolar
                        return shortsMatch ? shortsMatch[1] : null;
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1&mute=1&playsinline=1'
                }
            }
        }
    });

    
    if(innerWidth<768){
        $('.hero_phone_left').css({top:'0px'})
        $('.hero_phone_right').css({top:'-24px',})
        $('.hero_content h1').css({fontWeight:'bold'})
        $('.rellax_price').removeClass('parallax right')
        $('.action_info ').removeClass('parallax right')
        $('.action_img  ').removeClass('parallax right')
       
    }else{  
        $('.hero_phone_left').css({top:'150px'})
        $('.hero_phone_right').css({top:'150px'})
        $('.hero_content h1').css({fontWeight:'bold'})
        $('.child_menu').click(function(e){
            e.stopPropagation()
            $(this).toggleClass('active')
        })
        $(".parallax.left").each(function () {
            new simpleParallax(this, {
                orientation: "left", // O‘nga harakat
                scale: 1.2,
                delay: 0.4,
                overflow: true
            });
        });
        $(".parallax.right").each(function () {
            new simpleParallax(this, {
                orientation: "right", // O‘nga harakat
                scale: 1.2,
                delay: 0.4,
                overflow: true
            });
        });
    }
    // rellax
    $('.hamburger').click(function(){
        $(this).toggleClass('active')   
        $('.header_right').toggleClass('active')
    })

    // users section
    var swiper = new Swiper('.testimonial_slider', {
        loop: false,
        autoHeight: true,
    });
    $('.avatar').click(function() {
        var index = $(this).data('index');
        swiper.slideTo(index);
        $('.avatar').removeClass('active');
        $(this).addClass('active');
    });
    swiper.on('slideChange', function () {
        var activeIndex = swiper.activeIndex;
        $('.avatar').removeClass('active');
        $('.avatar[data-index="' + activeIndex + '"]').addClass('active');
    });
    // parallax
   
})