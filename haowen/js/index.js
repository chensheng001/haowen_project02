$(function () {
  let winHeight,winScrollTop,currentScrollTop;
  winHeight=$(window).height();
  $(".content section").eq(0).addClass("animate");
  $(window).scroll(function(){
    winScrollTop=$(this).scrollTop();

    $(".content section").each(function(){
      currentScrollTop=$(this).offset().top;
      if(winHeight+winScrollTop >= currentScrollTop){
        $(this).addClass("animate");
      }
      else{
        $(this).removeClass("animate");
      }
    });
  });

  /*首页轮播*/
  let swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    speed: 1000,
    autoplay : {
      delay:3000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /*客户案例*/
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var swiper2 = new Swiper('.swiper-container-section2', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    var swiper2 = new Swiper('.swiper-container-section2', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }


  /*服务项目第一种效果*/
  $('.home .section1 .left ul li').hover(function () {
    const _index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.home .section1 .right .list .item').eq(_index).addClass('active').siblings().removeClass('active');
  })

  /*服务项目第二种效果*/
  /*$('.home .section1 .top ul li').hover(function () {
    const _index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.home .section1 .bottom ul li').eq(_index).addClass('active').siblings().removeClass('active');
  })*/
});