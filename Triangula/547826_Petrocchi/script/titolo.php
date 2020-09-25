<?php //seleziona il titolo appropriato per la classifica
	$livello = 0;
	if (!empty($_GET["livello"])) {
		$livello = $_GET["livello"];
	}
	if($livello){
		echo "Classifica livello: $livello";
	}else{
		echo "Classifica generale";
	}
	/*Made by: Stefano Petrocchi*/
?>