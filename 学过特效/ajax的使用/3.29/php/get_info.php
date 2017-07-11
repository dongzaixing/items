<?php
header('content-type:text/html;charset=utf-8');
//echo phpinfo();
//$username = $_GET['user'];

$password = $_GET['pass'];


//$users = array('邱明兵','张松莲','小白龙');

$passes = array('1111','1111','1111');


if( in_array( $username , $users ) && in_array( $password , $passes )){
	echo '欢迎登陆';
}else{
	echo '密码错误！';
}


?>