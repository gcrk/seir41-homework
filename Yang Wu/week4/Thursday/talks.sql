CREATE TABLE talks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  people TEXT,
  video TEXT
);

INSERT INTO talks (title, people) VALUES ('Photography Makes History', 'Ishiuchi Miyako');
INSERT INTO talks (title, people) VALUES ('Screenwriting Questions', 'Aaron Sorkin');
