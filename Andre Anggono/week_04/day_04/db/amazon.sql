CREATE TABLE inventories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  manufacturer TEXT,
  qty INTEGER,
  price INTEGER,
  image TEXT,
  stocked_year INTEGER
);

INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year) VALUES ('Apple Iphone 12 Pro', 'Latest Iphone from Apple Inc', 'Apple Inc.', 50, 2000, 2020);
INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year) VALUES ('Samsung Note 20 Ultra', 'Latest Phablet from Samsung Group', 'Samsung Group', 100, 1200, 2020);
INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year) VALUES ('Apple Macbook Pro M1', 'Latest Macbook from Apple Inc with M1 chip', 'Apple Inc.', 75, 2000, 2020);
INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year) VALUES ('Apple Mac Pro', 'Latest Mac from Apple Inc', 'Apple Inc.', 20, 10000, 2020);
INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year) VALUES ('Apple Mac Pro Wheels Kit', 'Wheel kit for Apple Mac Pro', 'Apple Inc.', 200, 1000, 2020);
INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year) VALUES ('Pro Display XDR', 'Amazing Display from Apple', 'Apple Inc.', 80, 8500, 2020);
INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year) VALUES ('Pro Stand', 'Monitor Stand for Apple Pro Display XDR', 'Apple Inc.', 80, 1700, 2020);