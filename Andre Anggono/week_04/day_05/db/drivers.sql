CREATE TABLE drivers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  drivers_number INTEGER,
  team INTEGER,
  country TEXT,
  podiums INTEGER,
  points INTEGER,
  gp_entries INTEGER,
  world_championships INTEGER,
  highest_grid_position INTEGER,
  dob DATE,
  pob TEXT,  
  FOREIGN KEY(team) REFERENCES teams(id)
);

INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Lewis', 'Hamilton', 44, 1);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Valtteri', 'Bottas', 77, 1);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Max', 'Verstappen', 33, 2);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Alexander', 'Albon', 23, 2);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Sergio', 'Perez', 11, 4);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Lance', 'Stroll', 18, 4);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Daniel', 'Ricciardo', 3, 5);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Esteban', 'Ocon', 31, 5);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Carlos', 'Sainz', 55, 3);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Lando', 'Norris', 4, 3);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Charles', 'Leclerc', 16, 6);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Sebastian', 'Vettel', 5, 6);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Pierre', 'Gasly', 10, 7);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Daniil', 'Kvyat', 26, 7);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Kimi', 'Raikkonen', 7, 8);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Antonio', 'Giovinazzi', 99, 8);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('George', 'Russell', 63, 10);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Nicholas', 'Latifi', 6, 10);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Romain', 'Grosjean', 8, 9);
INSERT INTO drivers (first_name, last_name, drivers_number, team) VALUES ('Kevin', 'Magnussen', 20, 9);
