Mountain.destroy_all

Mountain.create :name =>'Everest', :country => 'China and Nepal', :elevation => 8848
Mountain.create :name =>'Kilimanjaro', :country => 'Tanzania', :elevation => 3726
Mountain.create :name =>'Aconcagua', :country => 'Argentina', :elevation => 3562

puts "#{Moutain.count} mountains available "
