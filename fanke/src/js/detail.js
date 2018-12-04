/* 
* @Author: Marte
* @Date:   2018-11-29 10:27:33
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-01 10:33:36
*/

$(document).ready(function(){


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
        location.href='login.html';
       });
  }else{
     $('.login').click(function(){
        location.href='login.html';
     });
      $('.regist').click(function(){
        location.href='regist.html';
       });
  }

    var str=window.location.search;
    // 获取传过来的id值
    var id=str.split('?')[1].split('=')[1];
    // console.log(arr);
    var data=`id=${id}&time=${new Date()}`;
    var url='../api/datail.php';
    ajax('GET',url,data,function(str){
        var arr=JSON.parse(str);
        console.log(arr);
        var res=arr.map(function(item){
           var  html=`<div id="breadNav" class="con">
            <span class="blank10"></span>
            <div class="breadNav_up">
                <a href="//www.vancl.com/" title="首页" name="nav">
                首页</a><span>&gt;</span>
                <a href="//s.vancl.com/27531.html" title="男装">
                男装</a><span>&gt;</span>
                <a href="//s.vancl.com/27558.html" title="休闲裤">
                休闲裤</a><span>&gt;</span>
                <a href="//s.vancl.com/27591.html" title="休闲长裤">
                休闲长裤</a><span>&gt;</span>
                <input id="mainCategories" type="hidden" value="27531,27558,27591">
                <span id="styleinfo" name="1069665">
                    ${item.title}</span>
            </div>
            
            <div class='breadNav_down'>

                <span class="styleinfo">${item.title}</span>
                <ul class='breadNav_down_r fr'>
                    <li><a href="#">产品描述</a>|</li>
                    <li><a href="#">提问</a>|</li>
                    <li><a href="#">评论</a></li>
                </ul> 
                
            </div>    
        </div>
        <span class='blank30'></span>
        <div class='main_contant con clearfix'>

         //    <div id="MagnifierWrap2">
         //      <div class="MagnifierMain">
         //        <img class="MagTargetImg" src="${item.url}" data-src="${item.url}">
         //      </div>
         //      <span class="spe_leftBtn">&lt;</span>
         //      <span class="spe_rightBtn">&gt;</span>
         //      <div class="spec-items">
         //          <ul> 
         //             <li class="on"><img src="${item.url}" data-lsrc="${item.url}" data-maxSrc="${item.url}"></li>
         //                <li><img src="${item.url}" data-lsrc="${item.url}" data-maxSrc="${item.url}">
         //                </li>
         //                <li ><img src="${item.url}" data-lsrc="${item.url}" data-maxSrc="${item.url}"></li>
                     
         //                <li><img src="${item.url}" data-lsrc="${item.url}" data-maxSrc="${item.url}"></li>
                      

         //          </ul>
         //      </div>
         // </div>  


            <div class='contain'>
                <div class='cuxiaoPrice '>
                    <span class="tehuiMoney" style="line-height: 26px;">
                    <span>售价：</span><span style="font-family: '微软雅黑'; ">￥<span class='monery'><strong>${item.price}</strong></span></span>
                    <a id="czwenan" href="" target="_blank" style="
                                    height: 26px; display: inline-block; margin-left: 20px; line-height: 26px; margin-top: 7px;
                                    color: #a10000;">充100返100，点击充值</a>                      
                </span>
                </div>
                <div class='colorselect'>
                    <span class='fl colorA'>颜色:</span>
                    <span class='colora' style='opacity:0.2;'><img src="${item.url}" alt="" /><span title='蓝色'></span></span>
                </div>

                <div class='size'>
                    <ul class='sizeall'>
                        <li class='sizeaa' style='border:none'>尺码：</li>
                        <li class='sizeaa'><a>S/30</a></li>
                        <li class='sizeaa'><a>M/31</a></li>
                        <li class='sizeaa'><a>L/32</a></li>
                        <li class='sizeaa'><a>XL/33</a></li>
                        <li class='sizeaa'><a>XXL/34</a></li>
                    </ul>
                </div>
                <div class='no'>请选择详细的商品信息</div>
                <div class="num">数量:
                    
                    <select class='selectnum'>
                      <option value ="1">1</option>
                      <option value ="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                </div>
                <div class='buy'>
                    <span class='now_buy'>立即购买</span>
                    <span class='add_car'>加入购物车</span>
                </div>
                <div class='youhui'>
                    <h2><span>优惠提醒</span></h2>
                    <p><span>免邮</span><span>购满100免运费</span></p>
                </div>
            </div>
        </div>`;
        return html;
        }).join('');
       $('#main_body').html(res);
//数组假数据，换成你们数据库查询的数据即可
      var arrSmall = [arr[0].url, arr[0].url, arr[0].url, arr[0].url];
      var arrBig = [arr[0].url, arr[0].url, arr[0].url, arr[0].url];
      
      //渲染数据  
      var html='';
      for(var i=0;i<arrSmall.length;i++){
        html+=`<li><img src="${arrSmall[i]}" data-lsrc="${arrSmall[i]}" data-maxSrc="${arrBig[i]}"></li>`;
      }
      console.log(html);
      $('#MagnifierWrap2 .spec-items ul').html(html);//生成节点
      $('#MagnifierWrap2 .spec-items ul li').eq(0).addClass('on');//第一个li样式为on
      
      //第一个大图的渲染
      var str=`<img class="MagTargetImg" src="${arrSmall[0]}" data-src="${arrBig[0]}">`;
      $('#MagnifierWrap2 .MagnifierMain').html(str);
      
      //调用放大镜插件：传最大盒子id即可
      MagnifierF("MagnifierWrap2");

    });

// 隐形购物车
// 点击加入购物车，显示
    // 放大镜
    



// 只有选择了商品才可以点击购物车才会出现，否则会出现提醒
var isok1=false;
$('#main_body').delegate('.sizeaa','click',function(){
    $(this).css('background','pink');
    $(this).siblings().css('background','');
    isok1=true;
    $('.no').css('display','none');

});

var isok2=false;
$('#main_body').delegate('.colora','click',function(){
    $(this).css('opacity','1');
    $(this).css('border','1px solid #a10000');
    // $(this).siblings().css('background','');
    isok2=true;
    $('.no').css('display','none');

});

// 加入购物车
$('#main_body').delegate('.add_car','click',function(){
    if(isok1&&isok2){
         $('.shopcar').css('display','block');
         $('.no').css('display','none');
         // 此时会将商品加入购物车
         // 获取当前的id，连接数据库，使商品总数量增加
         // 获取当前的商品编号、商品名称、商品价钱、商品数量
         // 商品名称
         var title=$.trim($('#styleinfo').html());
          // console.log(title);
         // 商品价钱
         var price=$('.monery strong').html();
         // var num=$(" option:selected").text();
         var num=$(".selectnum ").find("option:selected").val();
         var url=$('.MagTargetImg').attr('src');
         console.log(url);
         // console.log(num);
         // console.log(num);
         var data=`id=${id}&title=${title}&price=${price}&num=${num}&url=${url}&time=${new Date()}`;
         console.log(data);
         var url='../api/tocar.php';
         ajax('GET',url,data,function(str){
            // console.log
            // console.log(str);
            var arr=JSON.parse(str);
            console.log(arr[0].url);
            var sum=0;
            var paymonery=0;
            for(var i=0;i<arr.length;i++){
                sum+=1*(arr[i].num);
                paymonery+=(arr[i].num)*(arr[i].price);

            }
            // console.log(sum);
            $('#shopcarcount').html(sum);
            $('#shopcarprice').html('&yen;'+paymonery);

             // 点击关闭，购物车隐藏
            $('.close').click(function(){
                 $('.shopcar').css('display','none');
            });
            // 点击继续购物，购物车隐藏
            $('#continueshop').click(function(){

                 $('.shopcar').css('display','none');
            });
            // 点击去购物车
            // 
            $('.CarBox_goCar').click(function(){
                 location.href='shopcar.html';
            });
            // 点击关闭，购物车隐藏
            $('.close').click(function(){
                  $('.shopcar').css('display','none');
            });


         });
    }else{
        $('.no').css('display','block');
    }
    
   
 });



});