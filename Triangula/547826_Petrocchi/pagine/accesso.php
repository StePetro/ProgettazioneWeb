<!doctype html>
<html lang="it-IT">
<head> 
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Triangolo</title>
	<meta name="author" content="Stefano Petrocchi">
	<meta name="description" content="Gioco online in stile brick breaker con una tematica basata sui triangoli.">
	<link rel="shortcut icon" href="favicon.ico"/>
	<link rel="icon" href="../favicon.ico"/> 
	<meta name="keywords" content="triangolo,triangoli,gioco,online,brick,breaker,paddle,the,game,palle,palla,pillole,pillola,monete,meneta,divertente,classifica">
	<link href="../css/generale.css" rel="stylesheet" type="text/css">
	<link href="../css/form.css" rel="stylesheet" type="text/css">
</head>

<body>

	<?php $pagina = "accesso" ?> <!--identifica la pagina-->

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

	<?php //gestione del form
		$userNameErr = $emailErr = $passwordErr = $password2Err = ""; 
		$userName = $email = $password = $password2= "";
		$errore = 0;
		$sesso = "NULL";

		if ($_SERVER["REQUEST_METHOD"] == "POST") {

			if (empty($_POST["userName"])) {
				$userNameErr = "<br>*Username richiesto";
				$errore=1;
			} else {
				$userName = strtolower(test_input($_POST["userName"]));
									    // controlla che contenga solo lettere e/o numeri ed abbia una lunghezza minima di 6 e massima di 12 caratteri
				if (!preg_match("/^[a-z0-9_-]{6,18}$/",$userName)) {
					$userNameErr = "<br>*Username errato";
					$errore=1; 
				}
			}

			if (empty($_POST["password"])) {
				$passwordErr = "<br>*Password richiesta";
				$errore=1;
			} else {
				$password = test_input($_POST["password"]);
									    // controllo che la password abbia tra 8 e 16 caratteri, una minuscola, una maiuscola e un numero
				if (!preg_match("/^(?=.*\d.*\d)(?=.*[A-Z])(?=.*[a-z])[0-9A-Za-z]{8,16}$/",$password)) {
					$passwordErr = "<br>*Password errata"; 
					$errore=1;
				}
			}

			if(!$errore ){
				$hash = md5($password); // hash per la password
				$sql = "SELECT idUtente FROM utenti WHERE username = '$userName'AND password = '$hash'";
				$result = $conn->query($sql);

				if ($result->num_rows == 1) { //se ritorna una riga allora l'utente è presente e eseguo l'accesso
				session_start();
				$row = $result->fetch_assoc();
					setcookie('idUtente', $row['idUtente'], time() + (86400 * 1), "/"); //mi serve per la memorizzazione dei dati per le partite
					$_SESSION["utente"] = $userName; //l'utente rimane salvato per la sessione attuale
					$conn->close();
					header("location: menu.php"); //reindirizzo al menù di gioco
				} else {
					$passwordErr = "<br>*Username o password errati";
				}
			} 
		}

		function test_input($data) { //controlla la validità degli input
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
	?>

	<?php include 'navbar.php' ?> <!--aggiunge la navbar comune alle pagine-->

	<div class="contenuto"> <!--Sezione centrale-->
		<div class="push2"></div> <!--fa stare la sezione centrale sotto alla navbar-->
		<section class="centrale">
			
				<h2> 
					<?php 
					if(isset($_SESSION["utente"])) //a seconda che l'accesso sia stato effettuato o meno
					echo "Cambia Utente"; 
					else 
						echo "Accedi";
					?>
				</h2>
				
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> <!--mando i dati alla pagina stessa evitando le html injection-->
					Username:<br>
					<input type="text" name="userName" placeholder="Inserire Username" value="<?php echo $userName;?>"> <!--uso come valore quello appena immesso per non farlo riscrivere-->
					<span class="error"><?php echo $userNameErr;?></span>  <!--mostro l'errore se viene commesso-->
					<br><br>
					Password: <br> <input type="password" placeholder="Inserire Password" name="password" value="<?php echo $password;?>">
					<span class="error"><?php echo $passwordErr;?></span>
					<br>
					<input type="submit" name="submit" value="Conferma" class="button">
					<br><br>
					<a class="registrati" href="registrazione.php"><?php 
					if(isset($_SESSION["utente"]))  //a seconda che l'accesso sia stato effettuato o meno
					echo "Nuovo profilo";
					else 
						echo "Altrimenti registrati!"; 
					?><a>
				</form>

		</section>
		<div class="push"></div> <!--tiene la sezione centrale sopra le montagne-->
	</div>
	
	<?php include 'footer.php' ?> <!--aggiunge il footer comune-->
</body>
</html>

<!--Made by: Stefano Petrocchi-->

