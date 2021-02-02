Artist.destroy_all

Artist.create(:artist_name => 'Den Vau', :real_name => 'Nguyen Duc Cuong', :dob => '1989-05-13', :nationality => 'Vietnamese', :image => 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/1/20/779705/Den-Vau-La-Ai-Tieu-S.jpg?w=720&crop=auto&scale=both')

Artist.create(:artist_name => 'Da Lab', :dob => '2007', :nationality => 'Vietnamese', :image => 'https://kenh14cdn.com/thumb_w/660/2020/10/7/photo2020-04-0616-24-46-16020442995731888085230.jpg')

Artist.create(:artist_name => 'Ha Anh Tuan', :real_name => 'Ha Anh Tuan', :dob => '1984-12-17', :nationality => 'Vietnamese', :image => 'https://songvahuong.com/wp-content/uploads/2020/11/ha-anh-tuan.png')

puts "#{Artist.count} artists created."

Song.destroy_all

Song.create(:title => 'Mo', :year => '2016', :song_url => 'https://www.youtube.com/watch?v=0nn_fOjcYM0')

Song.create(:title => 'Thanh Xuan', :year => '2018', :song_url => 'https://www.youtube.com/watch?v=GgQFO8dL5XQ&list=PLimAd5xvmWce9MAZaMSgTqSQhRUCBr-DX&index=292')

Song.create(:title => 'Thang tu la loi noi doi cua em', :year => '2017', :song_url => 'https://www.youtube.com/watch?v=UCXao7aTDQM')

puts "#{Song.count} songs created."

Genre.destroy_all

Genre.create(:genre_name => 'Rap')
Genre.create(:genre_name => 'R&B')
Genre.create(:genre_name => 'Pop')

puts "#{Genre.count} genres created."

artist = Artist.first
song = Song.first
genre = Genre.first

artist.songs << song
genre.songs << song
