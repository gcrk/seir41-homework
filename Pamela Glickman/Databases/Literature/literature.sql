-- Turns on foreign keys --
PRAGMA foreign_keys = ON;

-- Creates the authors table --
CREATE TABLE authors (
  author_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  birth_year INTEGER,
  death_year INTEGER,
  image TEXT
);

-- Inserts authors into the authors table --
INSERT INTO authors (name, birth_year, death_year, image) VALUES ("Fyodor Dostoyevsky", 1821, 1881, "/images/fyodor.jpg");
INSERT INTO authors (name, birth_year, death_year, image) VALUES ("Leo Tolstoy", 1828, 1910, "/images/leo.jpg");
INSERT INTO authors (name, birth_year, death_year, image) VALUES ("Irina Tokmakova", 1929, 2018, "/images/irina.jpg");
INSERT INTO authors (name, birth_year, death_year, image) VALUES ("Nikolay Nosov", 1908, 1976, "/images/nikolay.jpg");

-- Creates the books table and links it to the authors tables using a foreign key --
CREATE TABLE books (
  book_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  publication_year INTEGER,
  author_id INTEGER,
  CONSTRAINT fk_authors
    FOREIGN KEY (author_id)
    REFERENCES authors (author_id)
);

-- Inserts books into the books table
INSERT INTO books (title, publication_year, author_id) VALUES ("Poor Folk", 1846, 1);
INSERT INTO books (title, publication_year, author_id) VALUES ("Crime and Punishment", 1866, 1);
INSERT INTO books (title, publication_year, author_id) VALUES ("War and Peace", 1869, 2);
INSERT INTO books (title, publication_year, author_id) VALUES ("Anna Karenina", 1878, 2);
INSERT INTO books (title, publication_year, author_id) VALUES ("Winnie-the-Pooh (Russian translation)", 1976, 3);
INSERT INTO books (title, publication_year, author_id) VALUES ("Alice in Wonderland (Russian translation)", 1979, 3);
INSERT INTO books (title, publication_year, author_id) VALUES ("Dunno in Sun City", 1958, 4);
INSERT INTO books (title, publication_year, author_id) VALUES ("Dunno on the Moon", 1966, 4);
