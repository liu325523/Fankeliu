/* 
* @Author: Marte
* @Date:   2018-11-24 12:11:43
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-25 19:06:05
*/

$(document).ready(function(){
   // 划过微信图片二维码出现
    $('.weixin').hover(
              function () {
                $('.vweixinTip').show();
              },
              function () {
               $('.vweixinTip').hide();
              }
    );
  // 点击搜索框内容消失，且边框变蓝色
  $('#find .searchmes').click(function(){
        $(this).val('');
        $(this).css('border-color','skyblue');
  });

  $('.out>li>a').hover(function() {
      $(this).css('color','red');
  }, function() {
       $(this).css('color','#727171');
  });
  // 通过事件委托划过导航栏出现高度缓缓出现，离开高度缓缓变为0；
  $('.out').on('mouseover','li',function()
    {   
        // fadeIn()
         $(this).find('.hover').stop().slideDown(500);
                    
    }
  );

  $('.out').on('mouseout','li',function()
    {
        $(this).find('.hover').stop().slideUp(500);
    }
  );
  


// 轮播图--------
    // 所有图片放在右侧，第一张图片房在可视区
    // 获取图片宽度
    var iw=$('#imglist li').eq(0).outerWidth();
    $('#imglist li').css('left',iw);
    $('#imglist li').eq(0).css('left',0);

    // 2、开始轮播，用定时器
    var timer=null;
    // 轮播之后关掉定时器
    clearInterval(timer);
    // 标记轮播图片的下标
    var now=0;
    // 定时器开启，1秒切换一次
    timer=setInterval(next,2000);
    // 封装轮播函数
    function next(){
        // 轮播原理：1、旧图挪走，
        $('#imglist li').eq(now).animate({'left':-iw,'opacity':1},2000);
        // 判断是否轮播到最后一张，是的话再切换轮播第一张
        now=++now>=$('#imglist li').size()?0:now;
        // 新图快速放在右侧，再挪进可视区
        $('#imglist li').eq(now).css('left',iw);
        $('#imglist li').eq(now).animate({'left':0,'opacity':1},2000);
        light();
    }
    // 焦点跟随
    function light(){
        // 清除
        $('#light span').removeClass('active');
        $('#light span').eq(now).addClass('active');

    }
    // 点击上一张，下一张
    // 封装一个函数，点击下一张从左侧划入可视区
    function prev(){
        // 首先是旧的挪进右侧
         $('#imglist li').eq(now).animate({'left':iw},2000);
         // 新图
         now=--now<0?$('#imglist li').size()-1:now;
         // 新图挪进左侧
          $('#imglist li').eq(now).css('left',-iw);
        $('#imglist li').eq(now).animate({'left':0},2000);
        // 焦点跟随
        light();
    }
    // 点击上一张的、下一张前提是鼠标经过的时候定时器关闭轮播结束，由点击上一张下一两张来控制轮播
    $('#box').hover(function(){
         clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    })
    $('#prev').click(function(){
        prev();
    });
    $('#next').click(function(){
        next();
    });


    // 点击焦点，实现轮播,通过事件委托实现
    $('#light span').click(function(){
        // 先确定点击的焦点下标
        var index=$(this).index();
        // 下表确定之后在确定图片从哪个方向轮播
        if(index>now){
            // 从右边划入
            // 旧的挪到左边
           $('#imglist li').eq(now).animate({'left':-iw},1000);
            //新的
            $('#imglist li').eq(index).css('left',iw);
            $('#imglist li').eq(index).animate({'left':0},1000);
            // 新的变为index
            now=index;

        }
        if(index<now){
            // 从左边划入
            // 旧的挪到右边
           $('#imglist li').eq(now).animate({'left':iw},1000);
            //新的
            $('#imglist li').eq(index).css('left',-iw);
            $('#imglist li').eq(index).animate({'left':0},1000);
            // 新的变为index
            now=index;
            
        }
        light();
    });


});
