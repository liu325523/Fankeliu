'use strict';

/* 
* @Author: Marte
* @Date:   2018-11-29 10:27:33
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-01 10:33:36
*/

$(document).ready(function () {

    // 接收cookie中内容
    // 判断cookie是否存在

    var username = Cookie.get('username');
    // var username=Cookie.get('username');
    console.log(username);

    if (username) {
        $('.welcom').html(username);
        $('.login').html('退出登录');
        $('.login').css('color', 'red');
        $('.regist').html('更换用户');
        $('.regist').css('color', 'red');

        // 点击退出登录，显示原来样式
        $('.login').click(function () {
            $('.welcom').html('欢迎光临凡客诚品');
            $('.login').html('登录');
            $('.login').css('color', ' #808080');
            $('.regist').html('注册');
            $('.regist').css('color', ' #808080');
            // 清除cookie
            Cookie.remove('username', '/fanke/src/');
        });
        $('.regist').click(function () {
            location.href = 'login.html';
        });
    } else {
        $('.login').click(function () {
            location.href = 'login.html';
        });
        $('.regist').click(function () {
            location.href = 'regist.html';
        });
    }

    var str = window.location.search;
    // 获取传过来的id值
    var id = str.split('?')[1].split('=')[1];
    // console.log(arr);
    var data = 'id=' + id + '&time=' + new Date();
    var url = '../api/datail.php';
    ajax('GET', url, data, function (str) {
        var arr = JSON.parse(str);
        console.log(arr);
        var res = arr.map(function (item) {
            var html = '<div id="breadNav" class="con">\n            <span class="blank10"></span>\n            <div class="breadNav_up">\n                <a href="//www.vancl.com/" title="\u9996\u9875" name="nav">\n                \u9996\u9875</a><span>&gt;</span>\n                <a href="//s.vancl.com/27531.html" title="\u7537\u88C5">\n                \u7537\u88C5</a><span>&gt;</span>\n                <a href="//s.vancl.com/27558.html" title="\u4F11\u95F2\u88E4">\n                \u4F11\u95F2\u88E4</a><span>&gt;</span>\n                <a href="//s.vancl.com/27591.html" title="\u4F11\u95F2\u957F\u88E4">\n                \u4F11\u95F2\u957F\u88E4</a><span>&gt;</span>\n                <input id="mainCategories" type="hidden" value="27531,27558,27591">\n                <span id="styleinfo" name="1069665">\n                    ' + item.title + '</span>\n            </div>\n            \n            <div class=\'breadNav_down\'>\n\n                <span class="styleinfo">' + item.title + '</span>\n                <ul class=\'breadNav_down_r fr\'>\n                    <li><a href="#">\u4EA7\u54C1\u63CF\u8FF0</a>|</li>\n                    <li><a href="#">\u63D0\u95EE</a>|</li>\n                    <li><a href="#">\u8BC4\u8BBA</a></li>\n                </ul> \n                \n            </div>    \n        </div>\n        <span class=\'blank30\'></span>\n        <div class=\'main_contant con clearfix\'>\n\n         //    <div id="MagnifierWrap2">\n         //      <div class="MagnifierMain">\n         //        <img class="MagTargetImg" src="' + item.url + '" data-src="' + item.url + '">\n         //      </div>\n         //      <span class="spe_leftBtn">&lt;</span>\n         //      <span class="spe_rightBtn">&gt;</span>\n         //      <div class="spec-items">\n         //          <ul> \n         //             <li class="on"><img src="' + item.url + '" data-lsrc="' + item.url + '" data-maxSrc="' + item.url + '"></li>\n         //                <li><img src="' + item.url + '" data-lsrc="' + item.url + '" data-maxSrc="' + item.url + '">\n         //                </li>\n         //                <li ><img src="' + item.url + '" data-lsrc="' + item.url + '" data-maxSrc="' + item.url + '"></li>\n                     \n         //                <li><img src="' + item.url + '" data-lsrc="' + item.url + '" data-maxSrc="' + item.url + '"></li>\n                      \n\n         //          </ul>\n         //      </div>\n         // </div>  \n\n\n            <div class=\'contain\'>\n                <div class=\'cuxiaoPrice \'>\n                    <span class="tehuiMoney" style="line-height: 26px;">\n                    <span>\u552E\u4EF7\uFF1A</span><span style="font-family: \'\u5FAE\u8F6F\u96C5\u9ED1\'; ">\uFFE5<span class=\'monery\'><strong>' + item.price + '</strong></span></span>\n                    <a id="czwenan" href="" target="_blank" style="\n                                    height: 26px; display: inline-block; margin-left: 20px; line-height: 26px; margin-top: 7px;\n                                    color: #a10000;">\u5145100\u8FD4100\uFF0C\u70B9\u51FB\u5145\u503C</a>                      \n                </span>\n                </div>\n                <div class=\'colorselect\'>\n                    <span class=\'fl colorA\'>\u989C\u8272:</span>\n                    <span class=\'colora\' style=\'opacity:0.2;\'><img src="' + item.url + '" alt="" /><span title=\'\u84DD\u8272\'></span></span>\n                </div>\n\n                <div class=\'size\'>\n                    <ul class=\'sizeall\'>\n                        <li class=\'sizeaa\' style=\'border:none\'>\u5C3A\u7801\uFF1A</li>\n                        <li class=\'sizeaa\'><a>S/30</a></li>\n                        <li class=\'sizeaa\'><a>M/31</a></li>\n                        <li class=\'sizeaa\'><a>L/32</a></li>\n                        <li class=\'sizeaa\'><a>XL/33</a></li>\n                        <li class=\'sizeaa\'><a>XXL/34</a></li>\n                    </ul>\n                </div>\n                <div class=\'no\'>\u8BF7\u9009\u62E9\u8BE6\u7EC6\u7684\u5546\u54C1\u4FE1\u606F</div>\n                <div class="num">\u6570\u91CF:\n                    \n                    <select class=\'selectnum\'>\n                      <option value ="1">1</option>\n                      <option value ="2">2</option>\n                      <option value="3">3</option>\n                      <option value="4">4</option>\n                    </select>\n                </div>\n                <div class=\'buy\'>\n                    <span class=\'now_buy\'>\u7ACB\u5373\u8D2D\u4E70</span>\n                    <span class=\'add_car\'>\u52A0\u5165\u8D2D\u7269\u8F66</span>\n                </div>\n                <div class=\'youhui\'>\n                    <h2><span>\u4F18\u60E0\u63D0\u9192</span></h2>\n                    <p><span>\u514D\u90AE</span><span>\u8D2D\u6EE1100\u514D\u8FD0\u8D39</span></p>\n                </div>\n            </div>\n        </div>';
            return html;
        }).join('');
        $('#main_body').html(res);
        //数组假数据，换成你们数据库查询的数据即可
        var arrSmall = [arr[0].url, arr[0].url, arr[0].url, arr[0].url];
        var arrBig = [arr[0].url, arr[0].url, arr[0].url, arr[0].url];

        //渲染数据  
        var html = '';
        for (var i = 0; i < arrSmall.length; i++) {
            html += '<li><img src="' + arrSmall[i] + '" data-lsrc="' + arrSmall[i] + '" data-maxSrc="' + arrBig[i] + '"></li>';
        }
        console.log(html);
        $('#MagnifierWrap2 .spec-items ul').html(html); //生成节点
        $('#MagnifierWrap2 .spec-items ul li').eq(0).addClass('on'); //第一个li样式为on

        //第一个大图的渲染
        var str = '<img class="MagTargetImg" src="' + arrSmall[0] + '" data-src="' + arrBig[0] + '">';
        $('#MagnifierWrap2 .MagnifierMain').html(str);

        //调用放大镜插件：传最大盒子id即可
        MagnifierF("MagnifierWrap2");
    });

    // 隐形购物车
    // 点击加入购物车，显示
    // 放大镜


    // 只有选择了商品才可以点击购物车才会出现，否则会出现提醒
    var isok1 = false;
    $('#main_body').delegate('.sizeaa', 'click', function () {
        $(this).css('background', 'pink');
        $(this).siblings().css('background', '');
        isok1 = true;
        $('.no').css('display', 'none');
    });

    var isok2 = false;
    $('#main_body').delegate('.colora', 'click', function () {
        $(this).css('opacity', '1');
        $(this).css('border', '1px solid #a10000');
        // $(this).siblings().css('background','');
        isok2 = true;
        $('.no').css('display', 'none');
    });

    // 加入购物车
    $('#main_body').delegate('.add_car', 'click', function () {
        if (isok1 && isok2) {
            $('.shopcar').css('display', 'block');
            $('.no').css('display', 'none');
            // 此时会将商品加入购物车
            // 获取当前的id，连接数据库，使商品总数量增加
            // 获取当前的商品编号、商品名称、商品价钱、商品数量
            // 商品名称
            var title = $.trim($('#styleinfo').html());
            // console.log(title);
            // 商品价钱
            var price = $('.monery strong').html();
            // var num=$(" option:selected").text();
            var num = $(".selectnum ").find("option:selected").val();
            var url = $('.MagTargetImg').attr('src');
            console.log(url);
            // console.log(num);
            // console.log(num);
            var data = 'id=' + id + '&title=' + title + '&price=' + price + '&num=' + num + '&url=' + url + '&time=' + new Date();
            console.log(data);
            var url = '../api/tocar.php';
            ajax('GET', url, data, function (str) {
                // console.log
                // console.log(str);
                var arr = JSON.parse(str);
                console.log(arr[0].url);
                var sum = 0;
                var paymonery = 0;
                for (var i = 0; i < arr.length; i++) {
                    sum += 1 * arr[i].num;
                    paymonery += arr[i].num * arr[i].price;
                }
                // console.log(sum);
                $('#shopcarcount').html(sum);
                $('#shopcarprice').html('&yen;' + paymonery);

                // 点击关闭，购物车隐藏
                $('.close').click(function () {
                    $('.shopcar').css('display', 'none');
                });
                // 点击继续购物，购物车隐藏
                $('#continueshop').click(function () {

                    $('.shopcar').css('display', 'none');
                });
                // 点击去购物车
                // 
                $('.CarBox_goCar').click(function () {
                    location.href = 'shopcar.html';
                });
                // 点击关闭，购物车隐藏
                $('.close').click(function () {
                    $('.shopcar').css('display', 'none');
                });
            });
        } else {
            $('.no').css('display', 'block');
        }
    });
});
