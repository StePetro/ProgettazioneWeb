<!--Gestisce la creazione delle tabelle della classifica-->
	<?php //connessione al database
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "progetto_triangolo";

		$conn = new mysqli($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
	?>

<?php //avvia la sessione e controlla se è stato effettuato l'accesso
	session_start();
	function accesso(){
	if(isset($_SESSION["utente"])){ 
		return $_SESSION["utente"];
	} 
	return 0;
	}
?>

<?php //accesso al database e riempimento tabella
	$livello =0;
	if (!empty($_GET["livello"])) {
		$livello = $_GET["livello"];
	}

	if($livello){
		echo "<tr>
		<th>Posizione</th>
		<th>Username</th>
		<th>Punteggio</th>
		<th>Tempo</th>
		</tr>";
		$sql = "SELECT username,punteggio,tempo FROM partite NATURAL JOIN utenti WHERE livello = $livello ORDER BY punteggio DESC, tempo ASC";
		$result = $conn->query($sql);
		$i=1;
		while($i!=11) {
			echo "<tr>";
			if($row = $result->fetch_assoc()){
				if(isset($_SESSION["utente"]) && $row['username']==$_SESSION["utente"]){
					echo '<td class="evidenziato">'. $i .'</td><td class="evidenziato">'. $row['username'].'</td><td class="evidenziato">'. $row['punteggio'].'</td><td class="evidenziato">'. $row['tempo'].'</td>'; 
				}else{
					echo '<td>'. $i .'</td><td>'. $row['username'].'</td><td>'. $row['punteggio'].'</td><td>'. $row['tempo'].'</td>'; 
				}
			}else{
				echo '<td>'. $i .'</td><td>'. "".'</td><td>'. "".'</td><td>'. " " .'</td>'; 
			}
			echo "</tr>";
			$i++;
		}
		$conn->close();
	}else{
		echo "<tr>
		<th>Posizione</th>
		<th>Username</th>
		<th>Livello</th>
		<th>Punteggio</th>
		<th>Tempo</th>
		</tr>";
		$sql = "SELECT username,punteggio,tempo,livello FROM partite NATURAL JOIN utenti ORDER BY punteggio DESC, tempo ASC";
		$result = $conn->query($sql);
		$i=1;
		while($i!=11) {
			echo "<tr>";
			if($row = $result->fetch_assoc()){
				if(isset($_SESSION["utente"]) && $row['username']==$_SESSION["utente"]){
					echo '<td class="evidenziato">'. $i .'</td><td class="evidenziato">'. $row['username'].'</td><td class="evidenziato">'. $row['livello'].'</td><td class="evidenziato">'. $row['punteggio'].'</td><td class="evidenziato">'. $row['tempo'].'</td>'; 
				}else{
					echo '<td>'. $i .'</td><td>'. $row['username'].'</td><td>' . $row['livello'].'</td><td>'.$row['punteggio'].'</td><td>'. $row['tempo'].'</td>'; 
				}
			}else{
				echo '<td>'. $i .'</td><td>'. "".'</td><td>'. "".'</td><td>'. "".'</td><td>'. " " .'</td>'; 
			}
			echo "</tr>";
			$i++;
		}
		$conn->close();
	}

?>

<!--Made by: Stefano Petrocchi-->