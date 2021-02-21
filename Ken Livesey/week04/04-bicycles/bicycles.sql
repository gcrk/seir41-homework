CREATE TABLE bicycles(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  model TEXT,
  manufacturer TEXT,
  description TEXT,
  price INTEGER,
  image TEXT
);

INSERT INTO bicycles (model, manufacturer, description, price, image) VALUES ('Bullitt', 'Larry vs Harry', 'The fastest cargo bike on earth', 7500, 'https://assets-global.website-files.com/5ff44488a84bfdf464f0eea5/5ff44488a84bfd048af0f14c_ZOOMED_eBullitt-RACE_2020_0057.jpg');
INSERT INTO bicycles (model, manufacturer, description, price, image) VALUES ('Viks GT Raw', 'Velonia', 'Moving art', 1000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthearsenale.com%2Fproducts%2Fviks-gt-raw&psig=AOvVaw0QwRI8Er2Qe76rMmsZwZFY&ust=1613884977164000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCS26Dc9-4CFQAAAAAdAAAAABAD');
INSERT INTO bicycles (model, manufacturer, description, price, image) VALUES ('Overzealous XC', 'Trisled', 'A need for Human-powered speed', 16500, 'https://trisled.com.au/wp-content/uploads/2015/10/bdm-20120911-0404-human-power-bicycle-speed-challenge-575x400.jpg');
INSERT INTO bicycles (model, manufacturer, description, price, image) VALUES ('Neutrino', 'Velo Orange', 'For when space is a premium', 1200, 'https://bikepacking.com/wp-content/uploads/2019/05/Velo-Orange-Neutrino_1.jpg');
INSERT INTO bicycles (model, manufacturer, description, price, image) VALUES ('Wolverine', 'Soma', 'For when you are not sure what your bike is for', 3500, 'https://i.redd.it/4ycp21uihu041.jpg');
INSERT INTO bicycles (model, manufacturer, description, price, image) VALUES ('Ice Cream Truck', 'Surly', 'Fat bike fun', 400, 'https://surlybikes.com/uploads/blog/ICT_PHOTO_1.jpg');
