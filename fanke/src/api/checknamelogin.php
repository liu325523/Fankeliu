<?php
/**
 * @Author: Marte
 * @Date:   2018-11-13 22:45:21
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-26 22:14:33
 */
//连接数据库
    
    include 'connect.php';
    
    //接收参数
    $name=isset($_GET['name']) ? $_GET['name'] : 'false';
    // echo $name;
     $psw=isset($_GET['psw']) ? $_GET['psw'] : 'false';
    
    

//     //写查询语句
    $sql="select * from user where name='$name' and password='$psw'";
    
//     //执行语句
    $res=$conn->query($sql);//结果集
    $rows=$res->num_rows;
    
    // $data=$res->fetch_all(MYSQLI_ASSOC);
   
    
    if($rows>0){//num_rows存记录的条数，所有超过0就意味着存在
        //数据库存在该用户名
        echo 0;
    }else{
        echo 1;
    }
    
    //关闭结果集和数据库
    
    $res->close();
    $conn->close();
?>