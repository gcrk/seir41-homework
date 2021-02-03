City.destroy_all

City.create :name => "Moscow", :population => "12506468", :image => "moscow.jpg"
City.create :name => "Kiev", :population => "2967360", :image => "kiev.jpg"
City.create :name => "Odessa", :population => "1017699", :image => "odessa.jpg"

puts "#{ City.count } cities available."
