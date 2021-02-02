
Mountain.create :name => 'Mount Everest', :countries => 'Nepal, China', :elevation => 8849, :prominence => 8848, :range => 'Himalayas, Mahalangur Himal', :first_ascent => '1953-05-29', :first_ascenders => 'Edmund Hillary, Tenzing Norgay'
Mountain.create :name => 'Mount Kilimanjaro', :countries => 'Tanzania', :elevation => 5895, :prominence => 5885, :range => 'Eastern Rift mountains', :first_ascent => '1889-10-06', :first_ascenders => 'Ludwig Purtscheller, Hans Meyer'
Mountain.create :name => 'Denali', :countries => 'America', :elevation => 6190, :prominence => 6144, :range => 'American Cordillera, Alaska Range, North American Cordillera', :first_ascent => '1913-06-07', :first_ascenders => 'Robert Tatum, Harry Karstens, Walter Harper, Hudson Stuck'
Mountain.create :name => 'Matterhorn', :countries => 'Italy, Switzerland', :elevation => 4478, :prominence => 1042, :range => 'Alps, Pennine Alps', :first_ascent => '1865-07-14', :first_ascenders => ' Edward Whymper, Lord Francis Douglas, Charles Hudson, Douglas Hadow, Michel Croz'
Mountain.create :name => 'K2', :countries => 'China, Pakistan', :elevation => 8611, :prominence => 4020, :range => 'Himalayas, Karakoram', :first_ascent => '1954-07-31', :first_ascenders => 'Achille Compagnoni, Lino Lacedelli'

puts "#{ Mountain.count } mountains available."