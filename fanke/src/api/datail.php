<?php
/**
 * @Author: Marte
 * @Date:   2018-11-29 17:56:44
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-29 18:01:15
 */
//连接数据库
    
include 'connect.php';
$id=isset($_GET['id']) ? $_GET['id'] : '';
//写查询语句
    $sql="select * from goodlist where id='$id'";
    //执行语句
    $res=$conn->query($sql);//结果集
    // 获取内容部分
    $con=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($con,JSON_UNESCAPED_UNICODE);

?>
