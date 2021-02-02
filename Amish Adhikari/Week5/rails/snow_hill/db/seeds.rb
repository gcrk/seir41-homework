Mountain.destroy_all #Galactus


Mountain.create :name => 'Mt Everest', :country => 'Nepal', :height =>8884
Mountain.create :name => 'Kant', :country => 'Switzerland', :height => 6020
Mountain.create :name => 'Bigone', :country => 'Mongolia', :height => 7580


puts "#{ Mountain.count } mountains available."
