Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :elevation => 8848.99, :location => 'Nepal and China, Asia'
Mountain.create :name => 'Aconcagua', :elevation => 6962.5, :location => 'Argentina, Sth America'
Mountain.create :name => 'Mount Kilimanjaro', :elevation => 5895.0, :location => 'Tanzania, Africa'

puts "#{ Mountain.count} mountains available"
