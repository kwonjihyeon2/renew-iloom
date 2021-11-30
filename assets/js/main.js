//header menu
$(function(){
    $('.product').on('mouseenter mouseleave',function(){
        $('.product-menu').toggleClass("menu-active");
        $('.product h1').toggleClass("red-active");
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

//main slide swiper
var swiper = new Swiper(".mySwiper", {
    // autoplay 나중에 넣기
});

//main slider background setting
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});


//recommand swiper
var onSwiper = new Swiper(".product-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   lickable: true,
    // },c
});