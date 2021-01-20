Ocean.destroy_all 

Ocean.create :name => "Pacific", :depth => 10911, :surface_area => 165250000
Ocean.create :name => "Atlantic", :depth => 8376, :surface_area => 106460000
Ocean.create :name => "Arctic", :depth => 5550, :surface_area => 14060000

puts "#{Ocean.count} oceans available."