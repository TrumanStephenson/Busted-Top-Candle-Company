<?php

$name = $_POST['scent'];
$quantity = $_POST['quantity'];
$price = $_POST['price'];
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$address2 = $_POST['address2'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$payment = $_POST['payment'];

$to = "trumanstephenson3@gmail.com";
$subject = $_POST['New Order Received'];
$message = "
Order Details:

Scent: $scent
Quantity: $quantity

Name: $name
Customer Email: $email

Address: $address
Address 2: $address2
City: $city
State: $state
Zip: $zip

Preferred Payment: $payment
Total: $price"
";

mail($to, $subject, $message)

echo "Order sent successfully!";
?>