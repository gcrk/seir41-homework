Mountain.destroy_all

Mountain.create :name => 'Mt Kosciusko', :height => 2228
Mountain.create :name => 'Mt Kilimanjaro', :height => 5895

puts "#{ Mountain.count } mountains available."
