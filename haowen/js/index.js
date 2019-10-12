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
});