/* 
* @Author: Marte
* @Date:   2018-11-29 09:42:14
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-01 17:03:12
*/

$(document).ready(function(){
 // 结算定位
    $(window).scroll(function(){
        // var scrollTop=-351.2;
        // 计算出吸底盒子上面元素的高度
        var h1=$('table').outerHeight();
        var scrollTop=h1;
        var scrollY=$(window).scrollTop();
        console.log(scrollTop);
        if(scrollY<scrollTop){
            $(".carmain_bottom").addClass('fix');
             // $('.carmain_bottom').css('top','-280px');
        }else{
            $(".carmain_bottom").removeClass('fix');
        }
             
    });

    // 事件委托


// 封装函数来渲染页面
    function creat(arr){
        var res=arr.map(function(item){

            return html=`<tr class="selected" data-id=${item.id}>
                            <td class="white bd-left">
                                &nbsp;
                            </td>
                            <td class="bar" rowspan="1">
                                <input type="checkbox"  id='selector'class="track ckb SELECT" name="p-item" data-del-tip="" value="" issupplier="False" shopid="10258" selectedclothescode="15798553" >
                            </td>
                            <td class="image" rowspan="1">
                                <a target="_blank" href="http://item.vancl.com/6383118.html?ref=hp-hp-YSVT-1_2-v:n">
                                    <img alt="卫衣 复合双层绒 连帽 男款 深花灰/黑色" src="${item.url}"></a>
                            </td>
                            <td class="name">
                                
                                    ${item.title}
                                     
                                
                            </td>
                            <td class="size">
                                
                                    M
                                
                            </td>
                            <td class="presentpoints" style="display: none">
                                3,980分
                            </td>
                            <td class="price">
                                ￥${item.price}.00
                            </td>
                            <td class="qty">
                                <input type="button"  class='sub' value='—'/><input type="text" class='num'/ value='${item.num}'><input type="button" class='add' value="+" />
                                
                                
                            </td>
                            <td>
                                    -
                            </td>
                            <td class="SUBtotal">
                               &yen;${item.price*item.num}.00
                            </td>
                            <td class="operate">
                                <a class="del track"  >
                                                     删除</a>
                            </td>
                            <td class="white bd-right">
                                &nbsp;
                            </td>
                        </tr>`;
        }).join('');
    
         $('tbody').html(res)
    }

    // 连接后台渲染
    var date='';
    var url='../api/selectOrders.php';
    ajax('GET',url,date,function(str){
        var arr=$.parseJSON(str);
        // console.log(arr);
        creat(arr);
    });


   



    // 单个点击删除来删除，事件委托
    $('tbody').delegate('.del', 'click', function() {
        var id=$(this).parent().parent().attr('data-id');
        console.log(id);
        var url='../api/deleteOrders.php';
        var data=`id=${id}&time=${new Date()}`;
        ajax('GET',url,data,function(str){
            // 删除前端数据
            var arr=$.parseJSON(str);
            creat(arr);
            
        });
    });



// 封装更新数据库数量变化
    function updateSQLNum(thisNode,val){
        var url='../api/updataOrders.php';
        // 获取id
        var gid=thisNode.parent().parent().attr('data-id');
        var data='id='+gid+'&num='+val;
        ajax('GET',url,data,function(str){
            
        });
    }

 // 手动输入商品数量
    $('tbody').delegate('.num', 'keyup', function() {
        var num=$(this).val();
        var _this=$(this);
        updateSQLNum(_this,num);
        $(this).val(num);
        updataNUm();


    });

    // 点击减数量变化
    
    $('tbody').delegate('.sub', 'click', function() {
        // var id=$(this).parent().parent().attr('data-id');
       
        var num=$(this).next().val();
        num--;
        if(num<=1){
            num=1;
        } 
        var _this=$(this); 
        updateSQLNum(_this,num);
        $(this).next().val(num);
        total(_this);
        updataNUm();
      
    });


    
    // 点击加数量变化
    $('tbody').delegate('.add', 'click', function() {
        var id=$(this).parent().parent().attr('data-id');
       
        var num=$(this).prev().val();
        num++;
         
        var _this=$(this); 
        updateSQLNum(_this,num);
        $(this).prev().val(num);
        total(_this);
        updataNUm();
        // console.log()
    });

    // 小计
    function total(Noder){
        var price=$.trim(Noder.parent().prev().text()).substring(1);
        // price=price.substring(1);
        var num=Noder.parent().children().eq(1).val();
        var sum=(price*num).toFixed(2);
        console.log(num,price,sum);
        Noder.parent().next().next().text('￥'+sum);
        // console.log(Noder.parent().parent().eq(7).html('￥&nbsp;'+sum));     
    }
    
    // 商品列选中时，背景色显示，不选中时消失
    $('tbody').delegate('.SELECT', 'click', function(){
        if($(this).is(':checked')){
            // $("input[type='checkbox']").is(':checked')
            $(this).parent().parent().css('background-color','pink');
        }else{
             $(this).parent().parent().css('background-color','');
        }    
       
    });
      

    // 复选框是否全不选玩
    var isok=true;
    $('tbody').delegate('#selector', 'click', function(){
         
        updataNUm();
        // 判断是否全部选择
        if(arr.length == $('.SUBtotal').size()){
            $('.carmain_bottom_up input').prop('checked','checked');   
            isok = false;
        }else{
            $('.carmain_bottom_up input').removeAttr('checked'); 

            isok = true;
        }
    });
    
    //全选设置
    
    
        $('.carmain_bottom_up input').on('click',function(){
            if(isok){

                $(this).prop('checked','checked');
                $('.bar input').prop('checked','checked');
                $('.bar').parent().css('background-color','pink');

            }else{
                $(this).removeAttr('checked');
                $('.bar input').removeAttr('checked');
                $('.bar').parent().css('background-color','');
            }
            isok=!isok;
        updataNUm();
    });
  
    
    // 设置一个数组，存被选中的复选框的id
    var arr=[];
    function updataNUm(){
        arr.length=0;
        var le=$('.bar input').size();//复选框的总个数
        for(var i=0;i<le;i++){
            if($('.bar input').eq(i).prop('checked')){
                // 说明这一行已经被勾选
                arr.push(i);//
            }
        }
        // 统计被勾选的行对应的数量，累加到底部对应位置
        var num=0;
        var totalprice=0;
        for(var i=0;i<arr.length;i++){
            num+=$('.qty .num').eq(arr[i]).val()*1;
            var price=$('.SUBtotal').eq(arr[i]).text();//拿到￥ 199.98
            // console.log(price);
            price=$.trim(price);//去掉空格
            // console.log(price);
            price=price.substring(1)*1;//去掉￥，拿到199.98
            // console.log(price);
            totalprice+=price;
        }
            $('#allnum').html('已选'+num+' 件商品');
            $('#totalprice').html(totalprice.toFixed(2));
    }

   // 整体删除
   $('.delall').click(function() {
      
        var mes=confirm('确定要全部删除吗？');
        if(mes){
            updataNUm();
            var idArr=[];
            // 目的是将id存入到一个数组中
            for(var i=0;i<arr.length;i++){
                var gid=$('.SELECT').eq(arr[i]).parent().parent().attr('data-id');
                idArr.push(gid);
            }
            // 将获取的id转换成字符串
            var arrStr=idArr.join();
            // console.log(idArr);
            // console.log(idArr instanceof Array)
            for(var i=arr.length-1;i>=0;i--){
                $('.SELECT').eq(arr[i]).parent().parent().remove();
            }
            // 数据库变化
            // 删除后数据库变化
                var url='../api/delmore.php';
                var data='id='+arrStr;
                ajax('GET',url,data,function(str){if(str=='yes'){
                            console.log('删除成功');
                        }
                });     

        }
   });

    // 若复选框全部选则，则全选矿会被选中
    
    


        
});