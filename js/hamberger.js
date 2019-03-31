$(window).load(function(){
  $('.header__upper__bar_hamberger_btn').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.nav-wrap').addClass('close').removeClass('open');
    }else {
      $(this).addClass('active');
      $('.nav-wrap').addClass('open').removeClass('close'); 
    }
  });
});