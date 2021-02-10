CREATE TABLE planes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  role TEXT,
  max_speed INTEGER,
  image TEXT
);

-- Sorry for all the hotlinking ---
INSERT INTO planes (name, role, max_speed, image) VALUES ("Yakovlev Yak 3", "Fighter", 354, "images/yak3.jpg");
INSERT INTO planes (name, role, max_speed, image) VALUES ("Yermolayev Yer-2", "Ground Attack", 227, "images/yer2.jpg");
INSERT INTO planes (name, role, max_speed, image) VALUES ("Ilyushin IL-4", "Ground Attack", 221, "images/il4.jpg");
INSERT INTO planes (name, role, max_speed, image) VALUES ("Petlyakov Pe-3", "Fighter", 286, "images/pe3.jpg");
INSERT INTO planes (name, role, max_speed, image) VALUES ("Polikarpov I-16", "Fighter", 265, "images/i16.jpg");
