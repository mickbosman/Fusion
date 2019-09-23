<?php 
header("Location: confirmed.html");
    
    $name = $_GET['firstname'];
    $visitor_email = $_GET['email'];
    $message = $_GET['subject'];
    
    $email_from = "No reply Fusion";
    $to = "Fusions.ca@hotmail.com";
    $subject = "New form submission";
    $txt = "User name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $headers = "From: $email_from" . "\r\n";

    mail($to,$subject,$txt,$headers);
    

?>