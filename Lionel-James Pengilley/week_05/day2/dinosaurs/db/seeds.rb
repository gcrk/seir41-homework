Dino.destroy_all

Dino.create :name => 'T. rex', :scientific_name => 'Tyrannosaurus Rex', :location => 'Land', :diet => 'Carnivore', :date_time => 68000000, :size => 12, :weight => 11000

puts "#{ Dino.count } dinosaurs available."
