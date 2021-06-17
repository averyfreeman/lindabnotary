<?php
if ($_POST) {
    $to = '<averyfreeman@gmail.com>';
    $headers: 'From: <lindabsite@lindabnotary.com>';
    $data = json_decode(file_get_contents('php://input'), true);
    $subject = "QUOTE REQUEST from {$data['name']}";
    $message = 'Name: '.$data['name'].' Phone: '.$data['phone'];
    $success = mail($to,$headers,$subject,$message);
    if ($success) {
        echo "Success!";
    }
    else {
        echo "Fail";
    }
}
?>