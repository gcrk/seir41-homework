Artist.destroy_all

Artist.create(:name => 'Guthrie Govan', :genre => 'Prog Rock', :guitar =>'https://wildwestguitars.com/images/1g/1532/charvel-guthrie-govan-signature-natural-flame-gg1400322-7-(12)_30ed93ae20f3__wwg_large.jpg', :image => 'https://guitar.com/wp-content/uploads/2015/08/guthrie.jpg')

puts "#{Artist.count} artists created."



Song.destroy_all

Song.create(:name => 'Terrible Lizard', :album => 'You Know What...?', :length => 6.5, :genre => 'Prog Rock', :video => 'https://www.youtube.com/embed/R2llLs4D5PA', :artist_id => 2)

puts "#{Song.count} songs created."

#associations

song = Song.first
artist = Artist.first

artist.songs << song
