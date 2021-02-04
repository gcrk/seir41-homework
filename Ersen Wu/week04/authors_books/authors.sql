CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  image TEXT
);

INSERT INTO authors (name, country) VALUES ('Henry Miller', 'America');
INSERT INTO authors (name, country) VALUES ('Alan Ginsberg', 'America');
