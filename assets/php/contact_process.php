<?php

$url= "https://api.apispreadsheets.com/data/21085/";
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$postJSON = json_encode(["data"=> ["Timestamp"=>"","name"=>"","subject"=>"","number"=>"","email"=>"","message"=>""]]);
curl_setopt($curl,CURLOPT_URL, $url);
curl_setopt($curl,CURLOPT_POST, true);
curl_setopt($curl,CURLOPT_POSTFIELDS, $postJSON);

curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-type: application/json"));

$result = curl_exec($curl);

$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($http_code == 201){
	// SUCCESS
}
else{
	// ERROR CODE
}
curl_close($curl)
?>