<?php

$c = true;
/*от кого письмо*/
$admin_email = 'repinlyoha@gmail.com';
$project_name = $data['orderType'];
/*кому письмо*/
$to = "repinlyoha@gmail.com" . ",";
$to .= "lyoharepin@gmail.com" . ",";
// $to .= "arkykk@gmail.com" . ",";
// $to .= "deccampsales@gmail.com" . ",";
// $to .= "sergey.sinichenko@dec.ua";

function adopt($text) {

	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

//формируем сообщение
foreach ($data as $key => $value) {
	if ($value != "") {
		$message .= "
				" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>";
	}
}
$message = "<table style='width: 100%;'>$message</table>";

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
// отправка
mail($to, adopt($project_name), $message, $headers );
