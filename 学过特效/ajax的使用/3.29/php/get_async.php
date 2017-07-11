<?php
header('content-type:text/html;charset=utf-8');
//echo phpinfo();
$username = $_GET['user'];

$users = array('邱明兵','张松莲','小白龙');

//echo $users[0];

//echo $username;

//sleep( 5 );

if( in_array( $username , $users ) ){
	
	echo '用户名已经被注册了！';

}else{

	echo '用户名可以注册';

}

?>