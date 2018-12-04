<?php
    /*
        删除选中的行
            get:
                id:[num1[,num2,num3,...]]
            返回：
                {
                    id:[num1[,num2,num3,...]]删除行的id,
                    datalist:剩下产品的信息
                }
                
     */
    //连接数据库
    include 'connect.php';
    //获取id
    $id= isset($_GET['id']) ? $_GET['id'] : "[1,2]";
    // echo $id;
    // 返回的是id是字符串，用where in 语句删除
    $sql = "DELETE FROM shopcar WHERE id in ($id)";
    $res = $conn->query($sql);
    //查询剩下产品的信息
     $sql2 = "SELECT * FROM shopcar";
    $res2 = $conn->query($sql2);
    $data = $res2->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    //关闭结果集
    // $res->close();
    $res2->close();
    $conn->close();
?>