Ocean.destroy_all


Ocean.create :name => 'Atlantic', :length => 365.25,:islands => 50
Ocean.create :name => 'Pacific', :length => 265.25,:islands => 10
Ocean.create :name => 'Indian', :length => 165.25,:islands => 40

puts "#{Ocean.count} oceans available."
