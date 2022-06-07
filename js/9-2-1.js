  $(function(){
    // Q&A アコーディオン
    $('.sec16_question').on('click',function(){
      $(this).next().slideToggle();
      $(this).toggleClass('active');
    });

    // TOPにもどるボタン
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
      } else {
            pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
