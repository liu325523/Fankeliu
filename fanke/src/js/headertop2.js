/* 
* @Author: Marte
* @Date:   2018-11-24 12:11:43
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-01 16:15:36
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

    // 接收cookie中内容
    // 判断cookie是否存在
    
    var username=Cookie.get('username');
  // var username=Cookie.get('username');
  console.log(username);
  
  if(username){
      $('.welcom').html(username);
      $('.login').html('退出登录');
      $('.login').css('color','red');
      $('.regist').html('更换用户');
      $('.regist').css('color','red');

      // 点击退出登录，显示原来样式
      $('.login').click(function(){
          $('.welcom').html('欢迎光临凡客诚品');
          $('.login').html('登录');
          $('.login').css('color',' #808080');
          $('.regist').html('注册');
          $('.regist').css('color',' #808080');
          // 清除cookie
          Cookie.remove('username','/fanke/src/');
          

      });
       $('.regist').click(function(){
        location.href='html/login.html';
       });
  }else{
     $('.login').click(function(){
        location.href='html/login.html';
     });
      $('.regist').click(function(){
        location.href='html/regist.html';
       });
  }



// 划过购物车图标显示购物车商品信息
// 截取图片地址长度
// console.log(arr[0].url.slice(3));
// 鼠标划过、和点击删除 封装渲染事件
// 在不同的页面点击购物车时，需注意渲染时图片路径的选择；主页和其他页面的路径都不一样
// 用一个类名，来区分是否在主页的状态
// 只有主页body存在ID
var Id=$('body').attr('data-id');
 if(Id){
      var url='api/showcar.php';
      var data='';
      ajax('GET',url,data,function(str){
        // console.log(str);
          var arr=$.parseJSON(str);
          create(arr);
          function create(arr){
                  var res=arr.map(function(item){
                  var html=`<li data-id='${item.id}';class='clearfix'>
                                                      
                                                      <img src='${item.url.slice(3)}' alt="" />
                                                      <div>
                                                          <p class='title' >${item.title}</p>
                                                          <p class='total' >
                                                              &yen;<a class='priceS' style='color:#a10000;'>${item.price}×</a><a class='numS' style='color:#a10000;'>${item.num}</a>
                                                          </p>
                                                      </div>
                                                      <span class='del'>删除</span>
                                                  </li>`;
                      return html;                                
                }).join('');
                $('.carnum').append(res);
          }     
          var sum=0;
          var paymonery=0;
          for(var i=0;i<arr.length;i++){
              sum+=1*(arr[i].num);
              paymonery+=(arr[i].num)*(arr[i].price);

          }
          $('#TOTAL_numa').html(sum);
          $('#TOTAL_num').html(sum+')');
          $('#TOTAL').html('&yen;'+paymonery);
      });

  }else{
          var url='../api/showcar.php';
          var data='';
          ajax('GET',url,data,function(str){
        // console.log(str);
              var arr=$.parseJSON(str);
              create(arr);
              function create(arr){
                var res=arr.map(function(item){
                    var html=`<li data-id='${item.id}';class='clearfix'>
                                                        
                                                        <img src='${item.url}' alt="" />
                                                        <div>
                                                            <p class='title' >${item.title}</p>
                                                            <p class='total' >
                                                                &yen;<a class='priceS' style='color:#a10000;'>${item.price}×</a><a class='numS' style='color:#a10000;'>${item.num}</a>
                                                            </p>
                                                        </div>
                                                        <span class='del'>删除</span>
                                                    </li>`;
                    return html;                                
                }).join('');
                $('.carnum').append(res);
              } 
               
              var sum=0;
              var paymonery=0;
              for(var i=0;i<arr.length;i++){
                  sum+=1*(arr[i].num);
                  paymonery+=(arr[i].num)*(arr[i].price);

              }
              $('#TOTAL_numa').html(sum);
              $('#TOTAL_num').html(sum+')');
              $('#TOTAL').html('&yen;'+paymonery);
        });  
  }
  
   






// 鼠标划过购物车，显示购物车详细信息
$('.shopcarSmall').mouseenter(function() {
  /* Act on the event */
      // 隐藏的购物车出现
      $('.carnumall').css('display','block');
      $('.SHOPCAR a').css('background','#fff');
      $('.SHOPCAR a').css('color','#c1383e');
      $('.SHOPCAR').css('border','1px solid #c1383e');
  

         
      // 点击删除，通过id连接数据库
       $('.carnum').delegate('.del', 'click', function() {
           var id=$(this).parent().attr('data-id');
           var url='api/deleteOrders.php';
           var data=`id=${id}&time=${new Date()}`;
           ajax('GET',url,data,function(str){
                  var arr=$.parseJSON(str);
                  
                  create(arr);
           });

       });
      // 点击查看购物车，跳转至购物车
      $('.carnumall').delegate('.bottom_r', 'click', function() {
        location.href='html/shopcar.html';
       });
});

// 鼠标离开购物车隐藏
$('.shopcarSmall').mouseleave(function() {
  // 鼠标离开购物车隐藏
    $('.carnumall').css('display','none');
    $('.SHOPCAR a').css('background','#c1383e');
    $('.SHOPCAR a').css('color','#fff');
});




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
    // var iw=$('#imglist li').eq(0).outerWidth();
    // $('#imglist li').css('left',iw);
    // $('#imglist li').eq(0).css('left',0);

    // 2、开始轮播，用定时器
    var timer=null;
    // 轮播之后关掉定时器
    clearInterval(timer);
   
    // 标记轮播图片的下标
    var now=0;
    var nowindex=2;//层级
    // 定时器开启，1秒切换一次
    timer=setInterval(next,2000);
    // 封装轮播函数
    function next(){
        now++;
        if(now>=$('#imglist li').size()){//临界值
          now=0; 

        }   
        // 当前层
          $('#imglist li').eq(now).css('z-index',2);
          $('#imglist li').eq(now).siblings().css('z-index',1);
        // 当前透明度变化
         $('#imglist li').eq(now).css('opacity',0);
         // 动画
          $('#imglist li').eq(now).animate({'opacity':1},2000);
        light();
        
         // $('#imglist li').eq(now++).css('z-index',nowindex);
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
         now=--now<0?$('#imglist li').size()-1:now;
        // 当前层递增
          $('#imglist li').eq(now).css('z-index',2);
           $('#imglist li').eq(now).siblings().css('z-index',1);
        // 当前透明度变化
         $('#imglist li').eq(now).css('opacity',0);
         // 动画
          $('#imglist li').animate({'opacity':1},2000);
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
            // 当前层递增
          $('#imglist li').eq(now).css('z-index',1);
          $('#imglist li').eq(index).css('z-index',2);
        // 当前透明度变化
         $('#imglist li').eq(index).css('opacity',0);
         // 动画
          $('#imglist li').eq(index).animate({'opacity':1},2000);
           now=index;        
        light();
       
    });

// 回到顶部
   $('.backtop').click(function(){
        window.scrollTo(0, 0);
   });
 // 点击图片跳转列表页
 $('.num1b').delegate('.shoess', 'click', function() {
   location.href='html/goodlist.html';
   consolg.log(2);
 });

});
