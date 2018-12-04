<?php
/**
 * @Author: Marte
 * @Date:   2018-11-13 21:26:58
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-26 19:22:55
 */
include 'connect.php';
$name=isset($_GET['name'])?$_GET['name']:'';

$psw=isset($_GET['psw'])?$_GET['psw']:'';
// xie写sql数据

$sql="select * from user where name='$name'";
// 执行语句，获得结果集
$res=$conn->query($sql);
// 能否获取列数
$row=$res->num_rows;
 
// 获取内容部分
$data=$res->fetch_all(MYSQLI_ASSOC);
 // $oldnum = $data[1];
if($row==0){
    $sql2="INSERT INTO user(name,password) values('$name','$psw')";
      $res2=$conn->query($sql2);
      // 用户名不存在
        echo "yes";
}else{
    // 用户名存在
    echo "no";
 }
$conn->close();
?>