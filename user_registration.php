<?php

include 'DbConfig.php';

$conn = mysqli_connect($HostName,$Husername,$Hpassword,$DatabaseName);

$received_data = json_decode(file_get_contents("php://input"));

$name = $received_data['name'];
$email = $received_data['email'];
$password = $received_data['password'];

$checkSQL = "SELECT * FROM UserRegistrationTable WHERE email='$email'";

$check = mysqli_fetch_array(mysqli_query($con,$checkSQL));


if(isset($check)){
 
    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
    
    // Converting the message into JSON format.
   $EmailExistJson = json_encode($EmailExistMSG);
    
   // Echo the message.
    echo $EmailExistJson ; 
    
    }
    else{
    
    // Creating SQL query and insert the record into MySQL database table.
   $Sql_Query = "insert into UserRegistrationTable (name,email,password) values ('$name','$email','$password')";
    
    
    if(mysqli_query($con,$Sql_Query)){
    
    // If the record inserted successfully then show the message.
   $MSG = 'User Registered Successfully' ;
    
   // Converting the message into JSON format.
   $json = json_encode($MSG);
    
   // Echo the message.
    echo $json ;
    
    }
    else{
    
    echo 'Try Again';
    
    }
    }
    mysqli_close($con);
   ?>