$(function () {
  /*加载头部*/
  $("header").load('/haowen/pages/header.html','', ()=>{
    setActiveNav();
  });
  /*加载底部*/
  $("footer").load('/haowen/pages/footer.html', () =>{
    $('.fix-btn .gotop-btn').click(function () {
      $('html,body').animate({'scrollTop': '0px'}, 500);
    });
  });

  function setActiveNav() {
    /*添加菜单active*/
    const url = window.location.pathname;
    setTimeout(function () {
      if (url === '/') {
        $('.navbar-nav li').eq(0).addClass('active');
        $('.nav-pc .menu ul li').eq(0).addClass('active');
      } else if (url.includes('product')) {
        $('.navbar-nav li').eq(1).addClass('active');
        $('.nav-pc .menu ul li').eq(1).addClass('active');
      } else if (url.includes('case')) {
        $('.navbar-nav li').eq(2).addClass('active');
        $('.nav-pc .menu ul li').eq(2).addClass('active');
      } else if (url.includes('news')) {
        $('.navbar-nav li').eq(3).addClass('active');
        $('.nav-pc .menu ul li').eq(3).addClass('active');
      } else if (url.includes('about')) {
        $('.navbar-nav li').eq(4).addClass('active');
        $('.nav-pc .menu ul li').eq(4).addClass('active');
      } else if (url.includes('contact')) {
        $('.navbar-nav li').eq(5).addClass('active');
        $('.nav-pc .menu ul li').eq(5).addClass('active');
      }
    }, 100);
  }

  $(window).scroll(showTop);
  showTop();

  function showTop() {
    var top = $(window).scrollTop();
    if (top > 300) {
      $('.fix-btn .parent-box').eq(3).show();
    } else {
      $('.fix-btn .parent-box').eq(3).hide();
    }
  }


  /*通用动画*/
  let winHeight,winScrollTop,currentScrollTop;
  winHeight=$(window).height();
  $(".commonListStyle ul li").eq(0).addClass("animate");
  $(window).scroll(function(){
    winScrollTop=$(this).scrollTop();
    if (winScrollTop >= 100) {
      $('.nav-pc .menu').addClass('fixed');
    }else{
      $('.nav-pc .menu').removeClass('fixed');
    }
    $(".commonListStyle ul li").each(function(){
      currentScrollTop=$(this).offset().top;
      if(winHeight+winScrollTop >= currentScrollTop){
        $(this).addClass("animate");
      }
      else{
        $(this).removeClass("animate");
      }
    });
    /*产品展示动画*/
    /*$(".product ul.detail li").each(function(){
      currentScrollTop=$(this).offset().top;
      if(winHeight+winScrollTop >= currentScrollTop){
        $(this).addClass("animate");
      }
      else{
        $(this).removeClass("animate");
      }
    });*/

    /*首页新闻块动画*/
    $(".home .section5 .content ul li").each(function(){
      currentScrollTop=$(this).offset().top;
      if(winHeight+winScrollTop >= currentScrollTop){
        $(this).addClass("animate");
      }
      else{
        $(this).removeClass("animate");
      }
    });
  });
});
