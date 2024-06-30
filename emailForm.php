<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Set the recipient email address
    $to = "chasenoursig@gmail.com"; 

    // Set the email subject
    $subject = "Contact from " + $name;

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you! I look forward to talking to you!";
    } else {
        echo "Oops! Something went wrong, I didn't get that. Please try again soon.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
?>
