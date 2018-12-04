/* 
* @Author: Marte
* @Date:   2018-11-26 21:02:15
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-02 00:43:45
*/

$(document).ready(function(){

    $('#Btn').click(function(){
        console.log(2);
        var name=$.trim($('#username').val());
        var psw=$.trim($('#password').val());
        console.log(name);
        if(name&&psw){
            var url='../api/checknamelogin.php';
            var data=`name=${name}&psw=${psw}&time={new Date()}`;
            ajax('GET',url,data,function(str){
                if(str==0){
                    // 存用户名至cookie
                    Cookie.set('username',name,{
                        'path':'/fanke/src/'

                    });
                    location.href='../main2.html';
                }else{
                    $('#pswinf').html('填写信息不正确');
                    $('#pswinf').css('color','red');
                    // alert('填写信息不正确');
                }
            });
        }else{
             $('#pswinf').html('请填写完整用户信息！！！');

             $('#pswinf').css('color','red');
             $('#pswinf').css('font-weight','bold');
             $('#pswinf').css('font-size','20px');
             $('#pswinf').css('text-align','right');
        }
    });
});