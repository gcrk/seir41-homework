CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  movie_id INTEGER,
  author TEXT,
  review TEXT,
  rating INTEGER,
  FOREIGN KEY (movie_id) REFERENCES movies (id)
);
