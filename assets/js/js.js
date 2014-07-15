$(function(){

  /* 导航详细面板显示 ====*/
  $('.nav > li').hover(function() {
    $(this).next().addClass('activel');
    $(this).addClass('active').find('.nav-detail').show();
  }, function(){
    $(this).next().removeClass('activel');
    $(this).removeClass('active').find('.nav-detail').hide();
  });

  /* 产品幻灯 ====*/
  $('#show-panel').responsiveSlides({
    //maxwidth: 800,
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    namespace: 'product-show'
  });

  /* 热门产品滚动 ====*/
  //悬浮背景设置默认位置(fix ie 6 issue)
  $('.lava').css({
    left: $('span.item:first').position()['left']
  });

  $('.item').css({
    color: '#777'
  }).first().css({
    color: '#000'
  });
  $('span.item').mouseover(function() {
    $(this).css({
      color: '#000'
    }).siblings().css({
      color: '#777'
    });

    //悬浮背景移动
    $('.lava').stop().animate({
      left: $(this).position().left
    }, {
      duration: 800,
      easing: "easeOutExpo"
    });
    //面板移动
    
    $('.panel').stop().animate({
      left: ($('.panel ul').width() + 20) * ($(this).index() - 1) * (-1)
    }, {
      duration: 800,
      easing: "easeOutExpo"
    });
  });

  //修复响应布局导致面板内容错位的问题
  $('.panel ul').css({
    width: $('.product-content').width() - 20
  });
  $('.panel').css({
    width: ($('.panel').find('ul').width() + 20) * 5
  });

});