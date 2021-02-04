<?php
echo "welcome";
$servername = "172.17.0.2";
$username = "root";
$password = "password";

$conn = mysqli_connect($servername,$username,$password,"mysql");
if(!$conn)  echo "sorry failed". mysqli_connect_error();
else    echo "connection successful";
?>