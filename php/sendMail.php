<?php
$to = "budaj.v.e@yandex.ru";
$subject = "Сообщение с сайта";
$message = "Имя: " . $_POST["name"] . "\nТелефон: " . $_POST["subject"]
    . "\nСообщение: " . $_POST["message"];
$_POST["username"];
if (!empty($_POST["email"]))
    $from = $_POST["email"];
else
    $from = "dealerstat@yandex.by";
$headers = "From: IP <" . $from . ">";
mail($to, $subject, $message, $headers);
require "../contact.html";