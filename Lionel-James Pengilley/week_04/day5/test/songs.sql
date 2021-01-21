CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  artist TEXT,
  audio TEXT,
  FOREIGN KEY(id) REFERENCES musicians(id)
);

-- seed
INSERT INTO songs (name, artist) VALUES ('Fives', 'Guthrie Govan');
