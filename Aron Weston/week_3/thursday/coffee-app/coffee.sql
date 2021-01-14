CREATE TABLE coffee
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT,
    roaster_name TEXT,
    roaster_link TEXT,
    roaster_location TEXT
    price INTEGER,
    origins TEXT,
    roast_profile TEXT,
    tasting_notes TEXT,
    brew_notes TEXT,
    aron_rating INTEGER
);

--seed data
INSERT INTO coffee (product_name, roaster_name) VALUES ("Gatomboya", "Mecca");
INSERT INTO coffee (product_name, roaster_name) VALUES ("Santa Isabel Espresso", "Market Lane");


