<?php
function db() {
  $host = '127.0.0.1';  
  $conn = mysqli_connect($host, 'root', '', 'FILM');

  if ($conn->connect_error) {
    return die('F');
  }

  return $conn;
}

