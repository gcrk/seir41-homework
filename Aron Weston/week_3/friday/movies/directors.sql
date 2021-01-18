CREATE TABLE directors ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    image TEXT,
    country TEXT
);

INSERT INTO directors (name, country) VALUES ("Steven Spielberg", "USA");
INSERT INTO directors (name, country) VALUES ("Quentin Tarantino", "USA");