//header menu
$(function(){
    $('.navproduct').on('mouseenter mouseleave',function(){
        $('.product-menu').toggleClass("menu-active");
        $('.navproduct h1').toggleClass("red-active");
    });
    $('.life').on('mouseenter mouseleave',function(){
        $('.life-menu').toggleClass("menu-active");
        $('.life h1').toggleClass("red-active");
    });
    $('.notice').on('mouseenter mouseleave',function(){
        $('.notice-menu').toggleClass("menu-active");
        $('.notice h1').toggleClass("red-active");
    });
})

//TOP
$(".menu-icon").on("click",function(){
    $('.icon-hide').toggle();
})


//main slide swiper
var swiper = new Swiper(".main-Swiper", {
    effect : 'fade',
    loop:true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    speed:800,
});

//main slider background setting
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});

//recommand slider
var swiperOptions = {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween:20,
    speed: 5000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints:{
        991:{
            slidesPerView: 3,
        },
        767:{
            slidesPerView: 2,
        }
    }
};
  
var AutoSwiper = new Swiper(".auto-Swiper", swiperOptions);

//hover change
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
);

//service tab
var Nav = (function() {
  
    var
        nav 		= $('.product'),
        section = $('.slidepage'),
        link		= nav.find('.product__link'),
        navH		= nav.innerHeight(),
        isOpen 	= true,
        hasT 		= false;
    
    var toggleNav = function() {
      nav.toggleClass('product--active');
      shiftPage();
    };
    
    var switchPage = function(e) {

        var self = $(this);
        var i = self.parents('.product__item').index();
        var s = section.eq(i);
        var a = $('.slidepage--active');
        var t = $(e.target);
        
        if (!hasT) {
            if (i == a.index()) {
            return false;
            }
            a
            .addClass('slidepage--hidden')
            .removeClass('slidepage--active');
    
            s.addClass('slidepage--active');
    
            hasT = true;
    
            a.on('transitionend webkitTransitionend', function() {
            $(this).removeClass('slidepage--hidden');
            hasT = false;
            a.off('transitionend webkitTransitionend');
            });
        }
        return false;
    };
    
    var keyNav = function(e) {
        var a = $('slidepage--active');
        var aNext = a.next();
        var aPrev = a.prev();
        var i = a.index();
        
        if (!hasT) {
            if (e.keyCode === 37) {
                if (aPrev.length === 0) {
                    aPrev = section.last();
                }
        
                hasT = true;
        
                aPrev.addClass('slidepage--active');
                a
                    .addClass('slidepage--hidden')
                    .removeClass('slidepage--active');
        
                a.on('transitionend webkitTransitionend', function() {
                    a.removeClass('slidepage--hidden');
                    hasT = false;
                    a.off('transitionend webkitTransitionend');
                });
            } else if (e.keyCode === 39) {
    
                if (aNext.length === 0) {
                    aNext = section.eq(0)
                }
        
                aNext.addClass('slidepage--active');
                a
                    .addClass('slidepage--hidden')
                    .removeClass('slidepage--active');
        
                hasT = true;
        
                aNext.on('transitionend webkitTransitionend', function() {
                    a.removeClass('slidepage--hidden');
                    hasT = false;
                    aNext.off('transitionend webkitTransitionend');
                });
            } else { return }
        }  
    };
      
    var bindActions = function() {
        link.on('click', switchPage);
        $(document).on('ready', function() {
            page.css({
            'transform': 'translateY(' + navH + 'px)',
            '-webkit-transform': 'translateY(' + navH + 'px)'
            });
        });
        $('body').on('keydown', keyNav);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
}());
  
Nav.init();

//share swiper
var swiper = new Swiper(".instaswiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + "</span>";
      },
    },
    breakpoints:{
        991:{
            slidesPerView: 4,
        },
        767:{
            slidesPerView: 3,
        },
        540:{
            slidesPerView: 2,
        }
    }
});
var swiper = new Swiper(".youtubeswiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + "</span>";
      },
    },
    breakpoints:{
        991:{
            slidesPerView: 3,
        },
        767:{
            slidesPerView: 2,
        },
    }
});


//aos
AOS.init();

//showroom
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement:'.banner'
})
.setClassToggle('.banner-pd','show').addTo(controller);

//Top
window.onscroll = function(){myFunction()};
// ????????? ?????? myFunction() ??????

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var Top = document.getElementsByClassName("gotoTop")

function myFunction() {
  if (window.pageYOffset > 500) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
  if(window.pageYOffset>500){
        $('.gotoTop').css("display","block")
  } else{
        $('.gotoTop').css("display","none")
  }
}

$(".gotoTop").on("click", function(){
    $(window).scrollTop(0);
})
