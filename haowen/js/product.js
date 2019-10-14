$(function () {

  //默认执行
  showAll();

  /*点击分类*/
  $('.product .top_nav li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.product .detail li').removeClass('current').addClass('display_hide');
    let index = $(this).index();
    if (index === 0) {
      showAll();
    }else {
      $('.product .detail').find('.item'+index).addClass('current');
      makePager();
      showElement(0);
    }
  });

  //滑线
  $('.product .top_nav li').mouseenter(function () {
    let left = $(this).index() * 146.25;
    let slideLine = $('.product .top_nav span');
    slideLine.css('left',left +'px');
  }).mouseleave(function () {
    let curLeft = $('.product .top_nav .active').index() * 146.25;
    let slideLine = $('.product .top_nav span');
    slideLine.css('left',curLeft +'px');
  });

  /*筛选item*/
  function showElement(page) {
    var seleHtml = $('.product .detail li.current');
    seleHtml.addClass('display_hide');
    let start = page ? page * 8 : 0;
    let end = page ? start+8 : 8;
    for(let i= start; i < end;i++){
      seleHtml.eq(i).removeClass('display_hide');
    }
  }

  function showAll() {
    $('.product .detail li').addClass('current');
    makePager();
    showElement(0);
  }


  /*分页*/
  function makePager(){
    let count = $('.product .detail li.current').length;
    let pageNumber = Math.ceil(count / 8);
    var html = '';
    for(let i=1; i<=pageNumber; i++){
      if(i===1){
        html += "<li class='active'>"+ i +"</li>"
      }else {
        html += "<li>"+ i +"</li>";
      }

    }

    $('.product .pagination .page').html(html);
  }

  /*点击页码*/
  $('.product .pagination .page').on('click','li',function () {
    $("html,body").animate({scrollTop:500}, 200);
    $(this).addClass('active').siblings('li').removeClass('active');
    showElement( $(this).index() );
  });

  //上一页、下一页
  $('.product .pagination button').click(function () {
    $("html,body").animate({scrollTop:500}, 200);
    let currentIndex = $('.product .pagination .page li.active').index();
    let pageNumber = $('.product .pagination .page li').length;

    if ($(this).hasClass('prev-page')) {
      if(currentIndex === 0){
        return false
      }
      $('.product .pagination .page li').eq(currentIndex).removeClass('active').prev('li').addClass('active');
      showElement(currentIndex - 1)
    }else if ($(this).hasClass('next-page')) {
      if(currentIndex === pageNumber -1){
        return false
      }
      $('.product .pagination .page li').eq(currentIndex).removeClass('active').next('li').addClass('active');
      showElement(currentIndex + 1)
    }
  });

});