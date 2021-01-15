CREATE TABLE coffee
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT,
    product_image TEXT,
    purchase_link TEXT,
    roaster_name TEXT,
    roaster_location TEXT,
    price TEXT,
    origin TEXT,
    roast_profile TEXT,
    tasting_notes TEXT,
    brew_guide TEXT,
    aron_rating TEXT
);

INSERT INTO coffee
    (product_name, product_image, price)
VALUES
    ('Test Coffee Product Name', 'https://test.com', '10');

