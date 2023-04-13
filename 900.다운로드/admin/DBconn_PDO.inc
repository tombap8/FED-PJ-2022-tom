<?php
$conn;
try {
	$conn = new PDO('mysql:host=localhost;charset=utf8;dbname=mydb', 'root', '');
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
}
catch (PDOException $e) {
 	echo '<h3>Could not connect to database. Did you delete the `homestead` user or change it\'s password?</h3>';
 	echo '<p>' . $e . '</p>';
 	die;
}






?>