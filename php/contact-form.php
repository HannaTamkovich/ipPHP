<?php
echo "php work";
if (!empty($_POST["send"])) {
    $name = $_POST["name"];
    $email = "dealerstat@yandex.by";
    $content = "Имя: " . $name . "\nТелефон: " . $_POST["subject"]
        . "\nПочта: " . $_POST["email"] . "\nТекст сообщения: " . $_POST["message"];

    $toEmail = "admin@phppot_samples.com";
    $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
    if (mail($toEmail, "Письмо с сайта", $content, $mailHeaders)) {
        $message = "Your contact information is received successfully.";
        $type = "success";
    }
}
require_once "contact.html";
?>