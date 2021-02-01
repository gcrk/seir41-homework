Mountain.destroy_all

Mountain.create :name => 'Everest', :location => 'Nepal, China', :height => 8849
Mountain.create :name => 'K2', :location => 'Pakistan, China', :height => 8611
Mountain.create :name => 'Kangchenjunga', :location => 'Nepal, India', :height => 8586

puts "#{Mountain.count} planets available."
