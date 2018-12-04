

<?php
    
    //接收前端传过来的用户名，验证数据库是否存在该用户名，返回相关信息给前端
    
    //连接数据库
    
    include 'connect.php';
    //接收参数
    $page=isset($_GET['page']) ? $_GET['page'] : '';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '';
    // echo $name;//一定要做检测才往下面做
    $index=($page-1)*$qty;
    //写查询语句
    $sql1="select * from goodlist order by price asc limit $index,$qty;"; 
    $res=$conn->query($sql1);//结果集
    $con=$res->fetch_all(MYSQLI_ASSOC);
    // 写一个查询语句，获取记录条数
    $sql3='select * from goodlist';
    $res3=$conn->query($sql2);
    $row=$res3->num_rows;
    $goodlist=array(
        'datalist'=>$con,
        'total'=>$row,
        'page'=>$page,//第几页
        'qty'=>$qty//每页显示多少条
        );
         
    // 转成字符串
     echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);
    //关闭结果集和数据库
    $res->close();
    $res2->close();
    $conn->close();
    
    
?>


?>