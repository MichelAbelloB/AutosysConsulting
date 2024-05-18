<?php
// Conexión a la base de datos (ajusta los valores según tu configuración)
$server = "localhost";
$username = "root";
$password = "";
$database = "base_autosys";

try {
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
  } catch (PDOException $e) {
    die('Connection Failed: ' . $e->getMessage());
  }

  if (!empty($_POST['Name']) && !empty($_POST['Email']) && !empty($_POST['Phone_Number']) && !empty($_POST['Message'])) {
    $sql = "INSERT INTO client (Name, Email, Phone_Number, Message) VALUES (:name, :email, :phone_Number, :message)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':name', $_POST['Name']);
    $stmt->bindParam(':email', $_POST['Email']);
    $stmt->bindParam(':phone_Number', $_POST['Phone_Number']);
    $stmt->bindParam(':message', $_POST['Message']);
  }
 
  if ($stmt->execute()) {
    $message = 'Successfully created new user';
  } else {
    $message = 'Sorry there must have been an issue creating your account';
  }

  // Guardar el mensaje en una sesión para mostrarlo en index.html
  session_start();
  $_SESSION['message'] = $message;

  // Redirigir a ../index.html
  header('Location: ../index.html');
  exit();

  echo "<script>;
  document.getElementById('message-box').innerText = '$message';
  </script>;"

?>

