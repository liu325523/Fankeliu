<?php

include 'connect.php';//相当于复制connect.

//先判断购物车是否已经存在该商品存在的话就让数量加1
// 查询数据库是否存在id
$sql="select * from shopcar";
// 执行语句，获得结果集
$res=$conn->query($sql);
//获取内容部分
$data=$res->fetch_all(MYSQLI_ASSOC);
echo json_encode($data,JSON_UNESCAPED_UNICODE);
    

// 
//关闭数据库
    $res->close();
  
    $conn->close();

?>