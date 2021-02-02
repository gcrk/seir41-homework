CREATE TABLE artists (
  artist_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  bio TEXT,
  genres TEXT,
  quote TEXT,
  website TEXT,
  photos TEXT
);

CREATE TABLE albums (
  album_id INTEGER PRIMARY KEY AUTOINCREMENT,
  artist_id INTEGER,
  artist_other TEXT,
  album_name TEXT,
  description TEXT,
  tracks TEXT,
  released TEXT,
  label TEXT,
  rating TEXT,
  link TEXT,
  artwork TEXT,
  FOREIGN KEY (artist_id) REFERENCES artists (artist_id)
);


-- Seed Data

INSERT INTO artists (name) VALUES ('Aphex Twin');
INSERT INTO albums (albumName) VALUES ('Windowlicker');
