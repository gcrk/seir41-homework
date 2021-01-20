Ocean.destroy_all

Ocean.create :name => 'Arctic'
Ocean.create :name => 'Atlantic'
Ocean.create :name => 'Indian'
Ocean.create :name => 'Pacific'
Ocean.create :name => 'Southern'
Ocean.create :name => 'World'

puts "#{ Ocean.count } oceans available."
