<?php
    /*
        根据订单表id查询相关商品数据
            
     */
    //连接数据库
    include 'connect.php';

    //查询订单表所有数据
    $sql = "SELECT * FROM shopcar";

    //执行查询语句
    $res = $conn->query($sql);

    //获取内容
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);

    //输出内容
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    // $res->close();
    $conn->close();
    
?>