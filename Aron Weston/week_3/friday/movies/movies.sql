CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    image TEXT,
    starring TEXT,
    year TEXT,
    running_time, TEXT,
    box_office TEXT
);

INSERT INTO movies (title, starring) VALUES ("Jurassic Park", "Sam Niel, Jeff Goldblum, Laura Dern");