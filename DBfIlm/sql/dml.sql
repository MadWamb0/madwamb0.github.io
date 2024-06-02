USE FILM;

-- Insert data into GENERE table
INSERT INTO GENERE (name) VALUES ('Action');
INSERT INTO GENERE (name) VALUES ('Comedy');
INSERT INTO GENERE (name) VALUES ('Drama');

-- Insert data into PERSONA table
INSERT INTO PERSONA (category, firstname, secondname, lastname, birth) VALUES ('Regista', 'John', 'M.', 'Doe', '1975-05-20');
INSERT INTO PERSONA (category, firstname, secondname, lastname, birth) VALUES ('Attore', 'Jane', 'A.', 'Smith', '1980-07-15');
INSERT INTO PERSONA (category, firstname, secondname, lastname, birth) VALUES ('Attore', 'Sam', 'B.', 'Brown', '1990-11-30');
INSERT INTO PERSONA (category, firstname, secondname, lastname, birth) VALUES ('Regista', 'Alice', 'C.', 'Johnson', '1965-02-10');

-- Verify data insertion
SELECT * FROM PERSONA;

-- Insert data into FILM table
INSERT INTO FILM (title, dayone, genres, interpreters, directors, synopsis) VALUES ('Action Movie', '2024-01-01', 'Action', 'Jane A. Smith, Sam B. Brown', 'John M. Doe', 'An action-packed adventure.');
INSERT INTO FILM (title, dayone, genres, interpreters, directors, synopsis) VALUES ('Comedy Movie', '2024-02-01', 'Comedy', 'Jane A. Smith', 'Alice C. Johnson', 'A hilarious comedy.');

-- Verify data insertion
SELECT * FROM FILM;

-- Insert data into INTERPRETA table
INSERT INTO INTERPRETA (attore, film) VALUES (
    (SELECT id FROM PERSONA WHERE firstname='Jane' AND lastname='Smith'),
    (SELECT id FROM FILM WHERE title='Action Movie')
);
INSERT INTO INTERPRETA (attore, film) VALUES (
    (SELECT id FROM PERSONA WHERE firstname='Sam' AND lastname='Brown'),
    (SELECT id FROM FILM WHERE title='Action Movie')
);
INSERT INTO INTERPRETA (attore, film) VALUES (
    (SELECT id FROM PERSONA WHERE firstname='Jane' AND lastname='Smith'),
    (SELECT id FROM FILM WHERE title='Comedy Movie')
);