CREATE TABLE forum (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  comment TEXT,
  image TEXT
);

--seed

INSERT INTO forum (username, comment) VALUES ('xXdjentleman666Xx', 'NGD Mayonnes: Check out my sick new fiddle dudes!');
INSERT INTO forum (username, comment) VALUES ('shredder', 'Cool dude, but you forgot to include a picture.');
