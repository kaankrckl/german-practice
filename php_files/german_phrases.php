<?php
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');  
    
require 'simple_html_dom.php';

$result = array();

for($i=0; $i<5;$i++){
	$html = file_get_html('http://www.smartphrase.com/cgi-bin/randomphrase.cgi?german&serious&normal');

	$sentence = $html->find("table td[align=center]")[1]->plaintext;
	$translation = $html->find("table td[align=center] p")[0]->plaintext;
	$result[$i] = [
		"sentence" => substr($sentence, 0, -strlen($translation)-3),
		"translation" => $translation
	];
	
}
echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>