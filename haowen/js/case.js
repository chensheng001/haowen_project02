$(function () {

  const pageSize = 4;
  //默认执行
  showAll();

  /*筛选item*/
  function showElement(page) {
    var seleHtml = $('.case .list li.current');
    seleHtml.addClass('display_hide');
    let start = page ? page * pageSize : 0;
    let end = page ? start+pageSize : pageSize;
    for(let i= start; i < end;i++){
      seleHtml.eq(i).removeClass('display_hide');
    }
  }

  function showAll() {
    $('.case .list li').addClass('current');
    makePager();
    showElement(0);
  }


  /*分页*/
  function makePager(){
    let count = $('.case .list li.current').length;
    let pageNumber = Math.ceil(count / pageSize);
    var html = '';
    for(let i=1; i<=pageNumber; i++){
      if(i===1){
        html += "<li class='active'>"+ i +"</li>"
      }else {
        html += "<li>"+ i +"</li>";
      }

    }

    $('.case .pagination .page').html(html);
  }

  /*点击页码*/
  $('.case .pagination .page').on('click','li',function () {
    $("html,body").animate({scrollTop:500}, 200);
    $(this).addClass('active').siblings('li').removeClass('active');
    showElement( $(this).index() );
  });

  //上一页、下一页
  $('.case .pagination button').click(function () {
    $("html,body").animate({scrollTop:500}, 200);
    let currentIndex = $('.case .pagination .page li.active').index();
    let pageNumber = $('.case .pagination .page li').length;

    if ($(this).hasClass('prev-page')) {
      if(currentIndex === 0){
        return false
      }
      $('.case .pagination .page li').eq(currentIndex).removeClass('active').prev('li').addClass('active');
      showElement(currentIndex - 1)
    }else if ($(this).hasClass('next-page')) {
      if(currentIndex === pageNumber -1){
        return false
      }
      $('.case .pagination .page li').eq(currentIndex).removeClass('active').next('li').addClass('active');
      showElement(currentIndex + 1)
    }
  });
});
