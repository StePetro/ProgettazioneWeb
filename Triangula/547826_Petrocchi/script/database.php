<!--Gestisce l'inserimento delle statistiche delle partite nel database-->
<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "progetto_triangolo";

						// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

						// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
?>


<?php //Se correti inserisce i parametri nel database, la pagina non viene mai caricata, gli echo servono per debug
	$vittoria = $livello = $punteggio = $tempo = $idUtente="";
	$errore=0;


	$vittoria = strtolower(test_input($_GET["vittoria"]));

	if (!empty($_GET["livello"])) {
		$livello = strtolower(test_input($_GET["livello"]));
	}else{
		$errore = "livello errore";
	}
	if (!empty($_GET["punteggio"])) {
		$punteggio = strtolower(test_input($_GET["punteggio"]));
	}else{
		$errore = "punteggio errore";
	}
	if (!empty($_GET["tempo"])) {
		$tempo = strtolower(test_input($_GET["tempo"]));
	}else{
		$errore = "tempo errore";
	}
	if(isset($_COOKIE["idUtente"])) {
		$idUtente = $_COOKIE["idUtente"];
	}else{
		$errore = "idUtente errore";
	}

	if(!$errore){
		echo("Parametri:" .  $vittoria . "," . $livello . "," . $punteggio . "," . $tempo . "," . $idUtente. ".");
		$stmt = $conn->prepare("INSERT INTO partite (vittoria, livello, punteggio, tempo, idUtente) VALUES (?, ?, ?, ?,?)");
		$stmt->bind_param("iiiii", $vittoria, $livello, $punteggio, $tempo, $idUtente);
		$stmt->execute();
		$stmt->close();
	}else{
		echo($errore);
	}

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
?> 

<!--Made by: Stefano Petrocchi-->