/* 
* @Author: Marte
* @Date:   2018-11-26 13:12:46
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-02 00:24:51
*/

$(document).ready(function(){
   // 验证用户名是否正确
   var isok1=false;
   $('#username').blur(function(){
       var valname= $.trim($('#username').val());
       var str1=checkReg.trim(valname);
       var valpas= $.trim($('#username').val());
       var str2=checkReg.psweasy(valpas);
       if(str1 && checkReg.name(str1)){
          $('#usninf').html('用户名符合原则'); 
          var url='../api/regist.php'
          var data=`name=${valname}&time=${new Date()}&paw=${valpas}`;
          ajax('GET',url,data,function(str){

                if(str=='no'){
                    $('#usninf').html('该用户已经存在，请换一个啦'); 
                    isok1=false;
                }if(str=='yes'){
                    $('#usninf').html('该用户不存在，可以用'); 
                    $('#usninf').css('color','green');
                    isok1=true; 
                }
          });
       }else{
            $('#usninf').html('用户名不符合原则'); 
            $('#usninf').css('color','red');
             isok1=false; 
       }
   });

   // 验证密码
   var isok2=false;
   $('#password').blur(function(){
       
       var valpas= $.trim($('#password').val());
       var str2=checkReg.trim(valpas);
       if(str2 && checkReg.psweasy(str2)){
          $('#pswinf').html('密码符合原则'); 
                    $
                    $('#pswinf').css('color','green');
                    isok2=true; 
   
       }else{
            $('#pswinf').html('密码不符合原则'); 
            $('#pswinf').css('color','red');
            isok2=false;
       }
   });
  // 输入验证码
  // 分析思路： 1、点击验证码时，随机生成验证码（封装一个函数vert
        //           2、验证码背景生产随机颜色(封装color函数)
        //           3、将输入验证码和生成的验证码比对（
    
     

      // 封装一个4位数的验证码
      //1、4位数含有数字和字母的验证码
        function num(){
            var str1='0123456789zxcvbnmasdfghjklqwertyuioZXCVBNMASDFGHJKLQWERTYUIOP';
            var num1='';
            for(var i=0;i<4;i++){
              num1+=str1.charAt(parseInt(Math.random()*str1.length));
                    }
                     return num1;
        }
        
        // / 2、验证码生产
       // 验证码btn,点击生产验证码
       update();
        function update(){
            var Color=color();
            $('#btn').css('background','#'+Color);
            var Num=num();
            $('#btn').html(Num);           
        }
        // 生成的验证码背景色
        function color(){
            var str2='0123456789ABCDEF';
            var num2='';
            for(var i=0;i<6;i++){
               num2+=str2.charAt(parseInt(Math.random()*str2.length));
                
            }
            return num2;
        }
         $('#btn').click(function(){
              update();
         });
         var isok3=false;
         // 验证码判断
        //3输入的内容与验证码对比
        $('#yanzhengma').blur(function(){
            if($.trim($('#yanzhengma').val())){
                if($('#yanzhengma').val()==$('#btn').html()){
                     $('#defineinf').html('输入的内容和验证码一致');
                      $('#defineinf').css('color','green');
                       isok3=true;
               }else{
                    $('#defineinf').html('输入的内容和验证码不一致');
                    $('#defineinf').css('color','red');
                 }
                 isok3=true;
            }else{
               $('#defineinf').html('内容不能为空');
                  $('#defineinf').css('color','red');
                   isok3=false;
            }
            
                 
        });


              // 三个条件满足才可以跳转到登录页面
                    
         $('#Btn').click(function(){
            if(isok3&&isok2&&isok1){
              location.href='login.html';
            }else{
              alert('注册不成功');
            }
         });




        //  $('#Btn').click(function(){
        //     if($('#yanzhengma').val()){
        //          if($('#yanzhengma').val()==$('#btn').val()){
        //            $('#defineinf').val('输入的内容和验证码一致');
        //             $('#defineinf').css('color','green');
        //             isok3=true;
        //          }
        //          else{
        //             $('#defineinf').val('输入的内容和验证码不一致');
        //             $('#defineinf').css('color','red');
        //          }
        //     }else{
        //         $('#defineinf').val('验证码不能为空');
        //     }
        //     if(isok3&&isok2&&isok1){
        //         location.href='login.html';
        //     }else{
        //         alert('注册不成功');
        //     }
        // });



});