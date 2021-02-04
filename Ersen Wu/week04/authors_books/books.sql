CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  year TEXT,
  image TEXT,
  author_id INTEGER
);

INSERT INTO books (title, year, author_id) VALUES ('Tropics of Capricorn', '1990', 1);
INSERT INTO books (title, year, author_id) VALUES ('Howl', '1987', 2);
INSERT INTO books (title, year, author_id) VALUES ('The Essential Ginsberg', '1996', 2);
