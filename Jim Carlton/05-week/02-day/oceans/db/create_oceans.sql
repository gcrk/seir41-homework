CREATE TABLE oceans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  countries TEXT,
  area FLOAT,
  volume FLOAT,
  depth FLOAT,
  species TEXT
);

-- No seed data req as Rails provides this in the seeds.rb file
