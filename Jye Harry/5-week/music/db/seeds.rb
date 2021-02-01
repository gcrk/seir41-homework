Artist.destroy_all

Artist.create(:name => 'Pink Floyd', :years_active => '1965–1995', :nationality => 'British', :records_sold => 250000000, :image => 'https://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg')
Artist.create(:name => 'Queen', :years_active => '1970–present', :nationality => 'British', :records_sold => 300000000, :image => 'https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982')

puts "#{ Artist.count } artists created."

Album.destroy_all

Album.create(:name => 'The Dark Side of the Moon', :release_date => '1973-03-01', :duration => '43:09', :copies_sold => 45000000, :image => 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png')
Album.create(:name => 'The Wall', :release_date => '1979-11-30', :duration => '81:08', :copies_sold => 30000000, :image => 'https://upload.wikimedia.org/wikipedia/en/1/13/PinkFloydWallCoverOriginalNoText.jpg')

Album.create(:name => 'A Night at the Opera', :release_date => '1975-11-21', :duration => '43:08', :copies_sold => 6000000, :image => 'https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png')
Album.create(:name => 'News of the World', :release_date => '1977-10-28', :duration => '39:10', :copies_sold => 10000000, :image => 'https://upload.wikimedia.org/wikipedia/en/e/ea/Queen_News_Of_The_World.png')

puts "#{ Album.count } albums created."
