CREATE TABLE directors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  key char(12),
  UNIQUE (key)
);

CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  director_id INTEGER,
  name TEXT,
  image TEXT,
  year INTEGER,
  FOREIGN KEY (director_id) REFERENCES directors(id) ON DELETE CASCADE
);

INSERT INTO directors (id, name, key) VALUES
  (1, 'Stanley Kubric','981483029127'),
  (2, 'David Fincher', '857300923713'),
  (3, 'Tim Burton', '523120967812');


INSERT INTO movies (id, director_id, name, year) VALUES
  (1, 1, 'A Clockwork Orange', 1971),
  (2, 2, 'Fight Club', 1999),
  (3, 2, 'Gone Girl', 2014);
