<?php
/**
 * @Author: Marte
 * @Date:   2018-11-17 14:07:31
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-01 15:17:19
 */
$id=isset($_GET['id'])?$_GET['id']:'';
// echo $id;
$num=isset($_GET['num'])?$_GET['num']:'';
$title=isset($_GET['title'])?$_GET['title']:'无商品';
$price=isset($_GET['price'])?$_GET['price']:'无商品';
$url=isset($_GET['url'])?$_GET['url']:'无商品';

// echo $url;
include 'connect.php';//相当于复制connect.

//先判断购物车是否已经存在该商品存在的话就让数量加1
// 查询数据库是否存在id
$sql="select * from shopcar where id='$id'";
// 执行语句，获得结果集
$res=$conn->query($sql);
// 能否获取列数
$row=$res->num_rows;
//获取内容部分
$data=$res->fetch_all(MYSQLI_ASSOC);
// var_dump($data);
$oldnum = $data[0]['num'];
    if($row==0){
    // 写插入语句
        $sql2="insert into shopcar values('$id','$title','$price','$num','$url')";
// 执行语句
        $res2=$conn->query($sql2);
        // echo res2;

// 返回布尔值，插入成功返回true，否则返回false
        // if($res2){
        // //注册成功返回yes否则返回no
        //     echo 'yes';
        // }else{
        //     echo 'no';
        // }
    }else{
    // 写插入语句 UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
        
        $newnum=(int)$oldnum+(int)$num;

        // echo $newnum;
        $sql3="update  shopcar SET num= '$newnum' where id='$id'";
    // 执行语句
        $res3=$conn->query($sql3);
    }

    $sql4='select * from shopcar';
    $res4=$conn->query($sql4);
    // 返回内容
    $con=$res4->fetch_all(MYSQLI_ASSOC);

    echo json_encode($con,JSON_UNESCAPED_UNICODE);

// 
//关闭数据库
    $res->close();
    $res4->close();
    // $res2->close();
    // $res3->close();
    $conn->close();

?>