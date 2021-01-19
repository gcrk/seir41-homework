CREATE TABLE teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  full_name TEXT,
  base TEXT,
  team_chief TEXT,
  technical_chief TEXT,
  chassis TEXT,
  power_unit TEXT,
  first_team_entry YEAR,
  world_championships INTEGER,
  pole_positions INTEGER,
  fastest_laps INTEGER,
  points INTEGER,
  colour TEXT,
  logo TEXT,
  livery TEXT
);

INSERT INTO teams (name, full_name, base) VALUES ('Mercedes', 'Mercedes-AMG Petronas F1 Team', 'Brackley, United Kingdom');
INSERT INTO teams (name, full_name, base) VALUES ('Red Bull', 'Aston Martin Red Bull Racing', 'Milton Keynes, United Kingdom');
INSERT INTO teams (name, full_name, base) VALUES ('McLaren', 'McLaren F1 Team', 'Woking, United Kingdom');
INSERT INTO teams (name, full_name, base) VALUES ('Racing Point', 'BWT Racing Point F1 Team', 'Silverstone, United Kingdom');
INSERT INTO teams (name, full_name, base) VALUES ('Renault', 'Renault DP World F1 Team', 'Enstone, United Kingdom');
INSERT INTO teams (name, full_name, base) VALUES ('Ferrari', 'Scuderia Ferrari Mission Winnow', 'Maranello, Italy');
INSERT INTO teams (name, full_name, base) VALUES ('AlphaTauri', 'Scuderia AlphaTauri Honda', 'Faenza, Italy');
INSERT INTO teams (name, full_name, base) VALUES ('Alfa Romeo Racing', 'Alfa Romeo Racing ORLEN', 'Hinwil, Switzerland');
INSERT INTO teams (name, full_name, base) VALUES ('Haas', 'Haas F1 Team', 'Kannapolis, United States');
INSERT INTO teams (name, full_name, base) VALUES ('Williams', 'Williams Racing', 'Grove, United Kingdom');