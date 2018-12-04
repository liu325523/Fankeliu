'use strict';

/* 
* @Author: Marte
* @Date:   2018-11-26 23:57:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-03 00:32:54
*/

$(document).ready(function () {
    // 头部


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
            location.href = '../html/login.html';
        });
    } else {
        $('.login').click(function () {
            location.href = '../html/login.html';
        });
        $('.regist').click(function () {
            location.href = '../html/regist.html';
        });
    }

    // 隐性购物车会显示购物车信息


    // 划过所有粉类变色
    $('.allkind').hover(function () {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', '#333');
    });

    // 划过所有分类变色
    $('.manclose').hover(function () {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', '#333');
    });

    /*吸顶菜单*/
    $(window).scroll(function () {

        var scrollTop = $(".BOx").offset().top;
        var scrollY = $(window).scrollTop();
        // console.log('距离顶部的距离：'+scrollTop)
        // console.log('滚动的距离：'+scrollY)
        if (90 < scrollY) {
            $(".BOx").addClass('fix');
            $('.header_bottom').css('paddingTop', '84px');
        } else {
            $(".BOx").removeClass('fix');
            $('.header_bottom').css('paddingTop', '0');
        }
    });

    var goodlist = getid('goodlist');
    var page = 1;
    var pages = 0;
    // 渲染数据商品
    // 
    var open = false;

    var data = 'page=' + page + '&qty=10&time=' + new Date() + '&open=' + open;
    // console.log(data);
    var method = "GET";
    var url = '../api/ordergoodlist.php';
    function creat() {
        ajax(method, url, data, function (str) {
            var arr = JSON.parse(str);
            var res = arr.datalist.map(function (item) {
                return '<li data-id=' + item.id + '>\n                        <div   class=\'box\'>\n                            <div class=\'pic\'>\n                                <img src="' + item.url + '" class=\'blockimg\' />\n                                 <div class=\'none\' style=\'display:none;\'>\n                                        \n                                        <img src="' + item.url + '" alt="" />\n                                       \n                                        <p class=\'goodname\'>' + item.title + '</p>\n                                        <p class=\'id\'>\u4EA7\u54C1\u7F16\u53F7\u662F:' + item.id + '</p>\n                                        <div class="price">' + item.price + '</div>\n                            </div>\n                            <p class=\'goodname\'>' + item.title + '</p>\n                            <div class="price">' + item.price + '</div>\n                            \n                        </div>\n                        <div class=\'GOOD_add\'>\u52A0\u5165\u8D2D\u7269\u8F66</div>\n                    \n                </li>';
            }).join('');
            goodlist.innerHTML = res;
        });
    }
    creat();

    // 点击价格排序箭头，给其设置一个开关
    $('.priceorder').click(function () {
        /* Act on the event */
        open = !open;
        var data = 'page=' + page + '&qty=10&time=' + new Date() + '&open=' + open;
        console.log(data);
        var method = "GET";
        var url = '../api/ordergoodlist.php';
        ajax(method, url, data, function (str) {
            var arr = JSON.parse(str);
            var res = arr.datalist.map(function (item) {
                return '<li data-id=' + item.id + '>\n                        <div   class=\'box\'>\n                            <div class=\'pic\'>\n                                <img src="' + item.url + '" class=\'blockimg\' />\n                                 <div class=\'none\' style=\'display:none;\'>\n                                        \n                                        <img src="' + item.url + '" alt="" />\n                                       \n                                        <p class=\'goodname\'>' + item.title + '</p>\n                                        <p class=\'id\'>\u4EA7\u54C1\u7F16\u53F7\u662F:' + item.id + '</p>\n                                        <div class="price">' + item.price + '</div>\n                            </div>\n                            <p class=\'goodname\'>' + item.title + '</p>\n                            <div class="price">' + item.price + '</div>\n                            <div class=\'GOOD_add\'>\u52A0\u5165\u8D2D\u7269\u8F66</div>\n                        </div>\n                    \n                </li>';
            }).join('');
            goodlist.innerHTML = res;
        });
    });

    // 显示页码    
    var url = '../api/ordergoodlist.php';
    var date = 'page=' + page + '&qty=10&time=' + new Date() + '&open=' + open;
    ajax('GET', url, date, function (str) {
        var arr = JSON.parse(str);
        total = arr.total;
        // console.log(total);
        // 得出共有多少页
        pages = Math.ceil(arr.total / 10);
        // 渲染出页码数

        $('.nowpage').html(page);
        $('.totalpage').html(pages);
        $('.page_bottom').html(pages);
        // console.log($('#bottom_page').children(".page1"))
        for (var i = 0; i < pages; i++) {
            $('#bottom_page').children(".page1").append('<span>' + (i + 1) + '</span>');
        }

        // 第一页默认显示高亮
        $('.page1').children().eq(page - 1).siblings().removeClass('active');
        $('.page1').children().eq(0).addClass('active');
    });

    var qty = 10;
    // 点击上一页，下一页,可以实现调整
    $('.prev').click(function () {
        page--;
        console.log(page);
        var data = 'page=' + page + '&qty=10&time=' + new Date() + '&open=' + open;
        var method = "GET";
        var url = '../api/ordergoodlist.php';
        ajax(method, url, data, function (str) {
            var arr = JSON.parse(str);
            if (page > 0) {
                var res = arr.datalist.map(function (item) {
                    return '<li data-id=' + item.id + '>\n                        <div   class=\'box\'>\n                            <div class=\'pic\'>\n                                <img src="' + item.url + '" class=\'blockimg\' />\n                                 <div class=\'none\' style=\'display:none;\'>\n                                        \n                                        <img src="' + item.url + '" alt="" />\n                                       \n                                        <p class=\'goodname\'>' + item.title + '</p>\n                                        <p class=\'id\'>\u4EA7\u54C1\u7F16\u53F7\u662F:' + item.id + '</p>\n                                        <div class="price">' + item.price + '</div>\n                            </div>\n                            <p class=\'goodname\'>' + item.title + '</p>\n                            <div class="price">' + item.price + '</div>\n                            <div class=\'GOOD_add\'>\u52A0\u5165\u8D2D\u7269\u8F66</div>\n                        </div>\n                    \n                </li>';
                }).join('');

                goodlist.innerHTML = res;
            } else {
                alert('此页是第一页');
            }

            // 显示高亮
            $('.page1').children().eq(page - 1).siblings().removeClass('active');
            $('.page1').children().eq(page - 1).addClass('active');
            var n = $('.page1').children().eq(page - 1).html();
            $('.nowpage').html(n);
        });
    });

    $('.next').on('click', function () {
        page++;
        console.log(page);
        var data = 'page=' + page + '&qty=10&time=' + new Date() + '&open=' + open;
        var method = "GET";
        var url = '../api/ordergoodlist.php';
        ajax(method, url, data, function (str) {
            var arr = JSON.parse(str);
            if (page < Math.ceil(arr.total / qty) + 1) {
                var res = arr.datalist.map(function (item) {
                    return '<li data-id=' + item.id + '>\n                        <div   class=\'box\'>\n                            <div class=\'pic\'>\n                                <img src="' + item.url + '" class=\'blockimg\' />\n                                 <div class=\'none\' style=\'display:none;\'>\n                                        \n                                        <img src="' + item.url + '" alt="" />\n                                       \n                                        <p class=\'goodname\'>' + item.title + '</p>\n                                        <p class=\'id\'>\u4EA7\u54C1\u7F16\u53F7\u662F:' + item.id + '</p>\n                                        <div class="price">' + item.price + '</div>\n                                  </div>\n                            </div>    \n                            <p class=\'goodname\'>' + item.title + '</p>\n                            <div class="price">' + item.price + '</div>\n                            <div class=\'GOOD_add\'>\u52A0\u5165\u8D2D\u7269\u8F66</div>\n                        </div>\n                    \n                </li>';
                }).join('');
                goodlist.innerHTML = res;
            } else {
                alert('已到达最后一页');
            }
            // 显示高亮
            $('.page1').children().eq(page - 1).siblings().removeClass('active');
            $('.page1').children().eq(page - 1).addClass('active');
            var n = $('.page1').children().eq(page - 1).html();
            $('.nowpage').html(n);
        });
    });

    // 点击哪页显示哪页
    $('.page1').on('click', 'span', function () {
        page = $(this).html();
        var data = 'page=' + page + '&qty=10&time=' + new Date() + '&open=' + open;
        var method = "GET";
        var url = '../api/ordergoodlist.php';
        ajax(method, url, data, function (str) {
            var arr = JSON.parse(str);
            var res = arr.datalist.map(function (item) {
                return '<li data-id=' + item.id + '>\n                        <div   class=\'box\'>\n                            <div class=\'pic\'>\n                                <img src="' + item.url + '" class=\'blockimg\' />\n                                 <div class=\'none\' style=\'display:none;\'>\n                                        \n                                        <img src="' + item.url + '" alt="" />\n                                       \n                                        <p class=\'goodname\'>' + item.title + '</p>\n                                        <p class=\'id\'>\u4EA7\u54C1\u7F16\u53F7\u662F:' + item.id + '</p>\n                                        <div class="price">' + item.price + '</div>\n                                  </div>  \n                            </div>\n                            <p class=\'goodname\'>' + item.title + '</p>\n                            <div class="price">' + item.price + '</div>\n                            <div class=\'GOOD_add\'>\u52A0\u5165\u8D2D\u7269\u8F66</div>\n                        </div>\n                    \n                </li>';
            }).join('');
            goodlist.innerHTML = res;
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        console.log(page);
        var n = $(this).html();
        $('.nowpage').html(n);
    });

    // 头部页码显示


    // 图片放大显示------------------------------

    // 事件委托来写
    $('#goodlist').delegate('.blockimg', 'mouseenter', function () {
        // console.log(5);
        // 显示盒子到屏幕左侧距离distancer
        var distancer = $(document.body).width() - $(this).offset().left - 182;
        // console.log('a:'+distancer)
        // 隐形盒子的宽度liwidth
        // var liwidth=$(this).next().width();
        var liwidth = 340;

        // console.log('盒子宽度：'+liwidth);
        // 判断隐形盒子的宽度和显示盒子到屏幕右侧距离的比较
        // 如果distancer>liwidth,则定位显示在右侧，否则定位在左侧显示

        if (distancer > liwidth) {
            $(this).next().addClass('showright');
            $(this).next().css('display', 'block');
            $(this).next().animate({ 'top': -20 }, 'linear');
        } else {
            $(this).next().addClass('showleft');
            $(this).next().css('display', 'block');
            $(this).next().animate({ 'top': -20 }, 'linear');
        }
    });

    $('#goodlist').delegate('.blockimg', 'mouseout', function () {
        $(this).next().css('display', 'none');
    });

    // 手写第几页就会跳转到第几页
    $('.sure').click(function () {
        var page = $('.writepage').val();
        var data = 'page=' + page + '&qty=10&time=' + new Date() + 'open=' + open;
        var method = "GET";
        var url = '../api/ordergoodlist.php';
        ajax(method, url, data, function (str) {
            var arr = JSON.parse(str);
            if (page > 0 && page < 6) {
                var res = arr.datalist.map(function (item) {
                    return '<li data-id=' + item.id + '>\n                        <div   class=\'box\'>\n                            <div class=\'pic\' style=\'position:relative;\'>\n                                <img src="' + item.url + '" class=\'blockimg\' />\n                                 <div class=\'none\' style=\'display:none;\'>\n                                        \n                                        <img src="' + item.url + '" alt="" />\n                                       \n                                        <p class=\'goodname\'>' + item.title + '</p>\n                                        <p class=\'id\'>\u4EA7\u54C1\u7F16\u53F7\u662F:' + item.id + '</p>\n                                        <div class="price">' + item.price + '</div>\n                                        </div>  \n                               </div>\n                            <p class=\'goodname\'>' + item.title + '</p>\n                            <div class="price">' + item.price + '</div>\n                            <div class=\'GOOD_add\'>\u52A0\u5165\u8D2D\u7269\u8F66</div>\n                        </div>\n                    \n                </li>';
                }).join('');

                goodlist.innerHTML = res;
            } else {
                alert('输入的页码不存在');
            }

            // 显示高亮
            $('.page1').children().eq(page - 1).siblings().removeClass('active');
            $('.page1').children().eq(page - 1).addClass('active');
            var n = $('.page1').children().eq(page - 1).html();
            $('.nowpage').html(n);
        });
    });

    // 用事件委托点击图片传到详情页
    $('#goodlist').delegate('.blockimg', 'click', function () {
        // 获取当前的id
        var id = $(this).parent().parent().parent().attr('data-id');
        console.log(id);
        location.href = 'detail.html?id=' + id;
    });

    // 飞入购物车区域事件委托
    // $('#goodlist').delegate('.GOOD_add', 'click', function() {
    //      // 先获取改行的图片元素，变小
    //      // 获取图片路径
    //     var url=$(this).parent().children('.pic').children('img').attr('src');
    //        console.log(url);
    //      $(this).parent().append(`<img class='flyimg' src=${url} style="width:20px;height:20px;border-radius:20px;position:absolute;left:122px;bottom:18px;">`);
    //        // 生成图片后开始运动
    //        console.log($(".flyimg").offset().left);
    //        var disW=$(".TO_SHOPcar").offset().left-$(".flyimg").offset().left;
    //        var disH=$(".TO_SHOPcar").offset().top-$(".flyimg").offset().top;
    //        console.log(disW,disH);


    //    });

    $('#goodlist').delegate('.GOOD_add', 'click', function () {
        var _this = $(this).parent().children('.pic').children('img');
        MoveBox(_this);
    });
    var num = 0;
    function MoveBox(dom) {
        var goodsIteam = $(dom).closest('.blockimg');
        console.log(goodsIteam);
        var flyElm = goodsIteam.clone();
        flyElm.css({
            'z-index': 200,
            'display': 'block',
            'position': 'absolute',
            'top': goodsIteam.offset().top + 'px',
            'left': goodsIteam.offset().left + 'px',
            'width': goodsIteam.width() + 'px',
            'height': goodsIteam.height() + 'px'
        });
        // var divTop = $(obj).offset().top;
        // var divLeft = $(obj).offset().left; 
        // var next=$(obj).parent().append($(obj).clone());

        // $(next).css({ "position": "absolute", "z-index": "500", "left": divLeft + "px", "top": divTop + "px" });
        // var TOP= $(".TO_SHOPcar").offset().top- $(next).offset().top;
        // var WIDTH=$(".TO_SHOPcar").offset().left - $(".TO_SHOPcar").width()-$(next).offset().left-$("next").width();
        // if(TOP>0){
        //        $(next).animate({ "left": WIDTH + "px", "top": TOP + "px", "width": "100px", "height": "70px" }, 1000, function () {

        //     // $(next).animate({ "left": $(".TO_SHOPcar", parent.document).offset().left + "px", "top": $(".TO_SHOPcar", parent.document).offset().top + "px" }, 1000);
        //             num++;
        //             $(".TO_SHOPcar p", parent.document).text(num).animate({ 'opacity': 1, 'marginTop': '0' }, 500, function () {
        //                 // setTimeout(function () { $(next).hide() }, 8000);
        //             });
        //       });
        // }

    }
});
