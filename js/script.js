$(function(){
    // #で始まるリンクをクリックした場合
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      let speed = 1000;
      // スクロールタイプ
      let type = 'linear';
      // href属性の取得
      let href= $(this).attr("href");
      // 移動先の取得（hrefが#indexならトップ$(html)に、）
      let target = $(href == "#index" ? 'html' : href);
      // 移動先のポジション取得
      let position = target.offset().top;
      // animateでスムーススクロール
      $('body,html').animate({scrollTop:position}, speed, type);
      return false;
    });

    $('.hamburger-btn').click(function(){
      if($(this).hasClass('open')){
        $('.menu-list').removeClass('open');
        $('.hamburger-btn').removeClass('open');
      }else{
        $('.menu-list').addClass('open');
        $('.hamburger-btn').addClass('open');
      }
    });
  });