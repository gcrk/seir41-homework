CREATE TABLE movies (
  movieID INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  genre TEXT,
  plot TEXT,
  image TEXT
);

CREATE TABLE reviews (
  reviewID INTEGER PRIMARY KEY AUTOINCREMENT,
  movieID INTEGER,
  author TEXT,
  review TEXT,
  rating INTEGER,
  FOREIGN KEY (movieID) REFERENCES movies (movieID)
);

INSERT INTO movies (movieID, name, year, genre, plot, image) VALUES (1, 'The Social Network', 2009, 'Biography', "Mark Zuckerberg creates a social networking site, Facebook, with his friend Eduardo's help. Though it turns out to be a successful venture, he severs ties with several people along the way.", 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTj268E01VcjLW3fNrO2z10WpXs7WMeciAB9wYSOA2DI-le_NQH');
INSERT INTO movies (movieID, name, year, genre, plot, image) VALUES (2, 'There Will Be Blood', 2007, 'Epic historical drama', "Daniel Plainview is a ruthless oil prospector who goes on a relentless pursuit to become the most powerful oil tycoon. For this, he even resorts to manipulating and using his adopted son.", 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROAcLOROSJ7xMTiXw5eyVDt_MFRzvCuLqwIC2SP1X4MNxfsMzC');
