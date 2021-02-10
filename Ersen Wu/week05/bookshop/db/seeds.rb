Author.destroy_all
Author.create(:name => 'Alan Ginsberg', :nationality => 'American', :genre => 'Novels')
Author.create(:name => 'Henry Miller', :nationality => 'American', :genre => 'Novels')
Author.create(:name => 'Ernerst Hemingway', :nationality => 'American', :genre => 'Short Stories')

puts "#{Author.count} authors created"

Book.destroy_all
Book.create(:title => 'HOWL', :year => '1956')
Book.create(:title => 'Kaddish', :year => '1656')
Book.create(:title => 'Tropic of Capricorn', :year => '1958')
Book.create(:title => 'Black Spring', :year => '1956')
Book.create(:title => 'The Old Man and The Sea', :year => '1986')
Book.create(:title => 'A Farewell to Arms', :year => '1900')

puts "#{Book.count} bookds created"
