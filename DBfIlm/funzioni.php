<?php
  require __DIR__ . '/db.php';

  global $conn;

  function getFilm($title) {
    $conn = db();
    $sql = "SELECT * FROM film";

    if (isset($title) || $title !== null) {
      $sql .= " WHERE title LIKE '%$title%'";
    }

    $result = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
    return $result;
  }

  function getAttori($name) {
    $conn = db();
    $sql = "SELECT * FROM persona WHERE category = 'Attore'";

    if (isset($name) || $name !== null) {
      $sql .= " AND firstname LIKE '%$name%'";
    }

    $result = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
    return $result;
  }

  function getRegisti($name) {
    $conn = db();
    $sql = "SELECT * FROM persona WHERE category = 'Regista'";

    if (isset($name) || $name !== null) {
      $sql .= " AND firstname LIKE '%$name%'";
    }

    $result = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
    return $result;
  }

  function getPersone($name) {
    $conn = db();
    $sql = "SELECT * FROM persona";

    if (isset($name) || $name !== null) {
      $sql .= " WHERE firstname LIKE '%$name%'";
    }

    $result = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
    return $result;
  }
?>