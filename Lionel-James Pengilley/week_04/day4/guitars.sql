CREATE TABLE guitars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  finish TEXT,
  image TEXT
);


--seed data
INSERT INTO guitars (brand, model, finish) VALUES ('Suhr', 'Modern', 'Natural Quilt');
INSERT INTO guitars (brand, model, finish) VALUES ('Suhr', 'Modern', 'Spalted Maple');
