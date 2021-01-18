CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT
);

--seed
INSERT INTO musicians (name) VALUES ('Guthrie Govan');




--Should the foreign key be the songs artist and the musicians name?
--How will I show that the two are associated? A simple string saying, "The musician "x" has these "songs"".
