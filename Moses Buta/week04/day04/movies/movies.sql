CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  release_year INTEGER,
  small_plot TEXT,
  poster TEXT --URL for a photo of a butterfly
);

--seed data in to the table
INSERT INTO movies (name, release_year)  VALUES ('Black Panther', 2018);
INSERT INTO movies (name, release_year)  VALUES ('Avengers Endgame', 2019);
