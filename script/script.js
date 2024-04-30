jQuery(document).ready(function(){

    //menu
    $('.nav > li').mouseover(function(){
        $('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $('.submenu').stop().slideUp(500);
    });

    //slide
    setInterval(function(){
        $('.slide-wrap').animate({'margin-top': '-300px'},function(){
            $('.slider').first().appendTo('.slide-wrap')
            $('.slide-wrap').css('margin-top', '0px')
        })
    },3000);

    //tab
    $('.tab > ul > li').on('click', function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.boder-content div').eq($(this).index()).show().siblings().hide();
    });

    //popUp
    $('.notice li:first').click(()=> {
        $('#modal').addClass('active');
      });
      $('.btn').click(()=> {
        $('#modal').removeClass('active')
    });
      
});

