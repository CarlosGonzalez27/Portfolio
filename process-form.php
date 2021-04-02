<?php // Pick up the form data and assign it to variables
$name = $_POST['name']; 
$email = $_POST['email'];
$topic = $_POST['topic'];
$comments = $_POST['comments'];
// Build the email (replace the address in the $to section with your own)
$to = 'carlos@thelifedev.com'; 
$subject = "LifeDev Message: $topic"; 
$message = "$name : $comments"; 
$headers = "From: $email";
// Send the mail using PHPs mail()
mail($to, $subject, $message, $headers);
// Redirect 
header("Location: success.html");
?>