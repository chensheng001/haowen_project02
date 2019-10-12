$(function () {
  /*加载头部*/
  $("header").load('/haowen/pages/header.html','', ()=>{
    setActiveNav();
  });
  /*加载底部*/
  $("footer").load('/haowen/pages/footer.html');

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
      } else if (url.includes('cases')) {
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

});