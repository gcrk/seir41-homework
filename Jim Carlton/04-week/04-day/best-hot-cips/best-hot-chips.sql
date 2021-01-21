CREATE TABLE besthotchips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  place TEXT,
  location TEXT,
  map TEXT,
  rating INTEGER,
  image TEXT
);

-- seed data
INSERT INTO besthotchips (place, location, rating) VALUES ("Clems", "Newtown", "9.8");
INSERT INTO besthotchips (place, location, rating) VALUES ("Frangos", "Petersham", "7");
INSERT INTO besthotchips (place, location, rating) VALUES ("Mandy's", "Woodford", "9.8");
