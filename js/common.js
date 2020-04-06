
/*サイトバーのタグをマウスオーバーした時文字と背景色が入れ替わる */
$(function(){
    $('#tag li').hover(
        function(){
            $(this).css('color','#fff').css('background-color','#0d0015');
        },
        function(){
            $(this).css('color','#0d0015').css('background-color','#F1F1F1');
    });
});


 /*画面をスライドすると現れる追従ボタン */
jQuery(window).on("scroll", function() {
    if (100 < jQuery(this).scrollTop()) {
      jQuery(".floating").css({
        display: "block",
      });
    } else {
      jQuery(".floating").css({
        display: "none",
      });
    }
  });
