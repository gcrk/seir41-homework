# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Author.destroy_all

Author.create(:name => 'William Gibson', :nationality => 'Canadian', :dob => '1948-03-17', :age => 72, :genre => 'Science Fiction', :image => 'https://upload.wikimedia.org/wikipedia/commons/a/a4/William_Gibson_60th_birthday_portrait.jpg')
Author.create(:name => 'Joe Haldeman', :nationality => 'American', :dob => '1943-06-09', :age => 77, :genre => 'Science Fiction', :image => 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Joe_Haldeman_Finncon2007_%28cropped%29.jpg')

puts "#{ Author.count } authors created."

Book.destroy_all

Book.create(:title => 'Neuromancer', :year => '1984', :kind => 'Novel', :series => 'Sprawl Trilogy', :image => 'https://upload.wikimedia.org/wikipedia/en/c/c3/Neuromancer_Brazilian_cover.jpg')
Book.create(:title => 'Count Zero', :year => '1986', :kind => 'Novel', :series => 'Sprawl Trilogy', :image => 'https://images-na.ssl-images-amazon.com/images/I/91nhk-aO7lL.jpg')
Book.create(:title => 'Burning Chrome', :year => '1986', :kind => 'Short stories', :series => '', :image => '')
Book.create(:title => 'Mona Lisa Overdrive', :year => '1988', :kind => 'Novel', :series => 'Sprawl Trilogy', :image => '')
Book.create(:title => 'The Difference Engine', :year => '1990', :kind => 'Novel', :series => '', :image => 'https://1.bp.blogspot.com/-LuTrrhlc8Bs/X2TGtGBcHDI/AAAAAAAAIZE/Q4pFtCSWfe0qwkgGtybJfUEo1Z3DZU-4QCLcBGAsYHQ/s810/burning_chrome_by_william_gibson.jpg')
Book.create(:title => 'Virtual Light', :year => '1993', :kind => 'Novel', :series => 'Bridge Trilogy', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Virtual_light_uk_cover.jpg/220px-Virtual_light_uk_cover.jpg')
Book.create(:title => 'Idoru', :year => '1996', :kind => 'Novel', :series => 'Bridge Trilogy', :image => '')
Book.create(:title => "All Tommorrow's Parties", :year => '1999', :kind => 'Novel', :series => 'Bridge Trilogy', :image => '')
Book.create(:title => 'Pattern Recognition', :year => '2003', :kind => 'Novel', :series => 'Blue Ant Trilogy', :image => '')
Book.create(:title => 'Spook County', :year => '2007', :kind => 'Novel', :series => 'Blue Ant Trilogy', :image => '')
Book.create(:title => 'Zero History', :year => '2010', :kind => 'Novel', :series => 'Blue Ant Trilogy', :image => '')
Book.create(:title => 'Distrust That Particular Flavor', :year => '2012', :kind => 'Non-fiction', :series => '', :image => '')
Book.create(:title => 'The Peripheral', :year => '2014', :kind => 'Novel', :series => 'Jackpot Trilogy', :image => '')
Book.create(:title => 'Archangel', :year => '2017', :kind => 'Graphic Novel', :series => '', :image => '')
Book.create(:title => 'Agency', :year => '2020', :kind => 'Novel', :series => 'Jackpot Trilogy', :image => '')
Book.create(:title => 'Jackpot', :year => 'TBC', :kind => 'Novel', :series => 'Jackpot Trilogy', :image => '')
Book.create(:title => 'The Forever War', :year => '1974', :kind => 'Novel', :series => 'Forever War', :image => 'https://ktsbookshelf.files.wordpress.com/2016/10/609522.jpg?w=306')
Book.create(:title => 'A Seperate War', :year => '1999', :kind => 'Novel', :series => 'Forever War', :image => '')
Book.create(:title => 'Forever Free', :year => '1999', :kind => 'Novel', :series => 'Forever War', :image => '')

puts "#{ Book.count } books created."

book = Book.first
author = Author.first

author.books << book
