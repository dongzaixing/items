<?php
header('content-type:text/html;charset=utf-8');
//echo phpinfo();
$username = $_POST['user'];

$users = array('邱明兵','张松莲','小白龙');

echo $username;

if( in_array( $username , $users ) ){
	
	echo '用户名已经被注册了！';

}else{

	echo '可以注qqq册';

}

?>