CREATE DATABASE FILM;
USE FILM;

CREATE TABLE GENERE(
    name VARCHAR(25),
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE PERSONA(
    category ENUM('Regista','Attore'),
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(25),
    secondname VARCHAR(25),
    lastname VARCHAR(25),
    birth date
);

CREATE TABLE FILM(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(25),
    dayone VARCHAR(25),
    genres VARCHAR(25),
    interpreters VARCHAR(25),
    directors VARCHAR(25),
    synopsis VARCHAR(25)
);

CREATE TABLE INTERPRETA(
    attore INT,
    film INT,
    PRIMARY KEY (attore,film),
    FOREIGN KEY (attore) REFERENCES PERSONA(id),
    FOREIGN KEY (film) REFERENCES FILM(id)
);

CREATE TABLE DIRIGE(
    directors INT,
    film INT,
    PRIMARY KEY (directors,film),
    FOREIGN KEY (directors) REFERENCES PERSONA(id),
    FOREIGN KEY (film) REFERENCES FILM(id)
);