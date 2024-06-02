<?php
  require './funzioni.php';

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_SERVER['PATH_INFO'] === '/film') {
      $movies = getFilm(isset($_GET['title']) ? $_GET['title'] : null);
      if ($movies === null) {
        http_response_code(500);
        header('Content-Type: application-json');
        echo json_encode([
          'status' => 500,
          'message' => 'Internal server error',
          'payload' => []
        ]);
        return;
      }
      http_response_code(200);
      header('Content-Type: application-json');
      echo json_encode([
        'status' => 200,
        'message' => 'OK',
        'payload' => $movies
      ]);
      return;
    }

    if ($_SERVER['PATH_INFO'] === '/attori') {
      $actors = getAttori(isset($_GET['name']) ? $_GET['name'] : null);
      if ($actors === null) {
        http_response_code(500);
        header('Content-Type: application-json');
        echo json_encode([
          'status' => 500,
          'message' => 'Internal server error',
          'payload' => []
        ]);
        return;
      }
      http_response_code(200);
      header('Content-Type: application-json');
      echo json_encode([
        'status' => 200,
        'message' => 'OK',
        'payload' => $actors
      ]);
      return;
    }
    if ($_SERVER['PATH_INFO'] === '/registi') {
      $directors = getRegisti(isset($_GET['name']) ? $_GET['name'] : null);
      if ($directors === null) {
        http_response_code(500);
        header('Content-Type: application-json');
        echo json_encode([
          'status' => 500,
          'message' => 'Internal server error',
          'payload' => []
        ]);
        return;
      }
      http_response_code(200);
      header('Content-Type: application-json');
      echo json_encode([
        'status' => 200,
        'message' => 'OK',
        'payload' => $directors
      ]);
      return;
    }
    if ($_SERVER['PATH_INFO'] === '/persone') {
      $people = getPersone(isset($_GET['name']) ? $_GET['name'] : null);
      if ($people === null) {
        http_response_code(500);
        header('Content-Type: application-json');
        echo json_encode([
          'status' => 500,
          'message' => 'Internal server error',
          'payload' => []
        ]);
        return;
      }
      http_response_code(200);
      header('Content-Type: application-json');
      echo json_encode([
        'status' => 200,
        'message' => 'OK',
        'payload' => $people
      ]);
      return;
    }
  } else {
    http_response_code(405);
    header('Content-Type: application-json');
    echo json_encode([
      'status' => 405,
      'message' => 'Method Not Allowed',
    ]);
  }
?>