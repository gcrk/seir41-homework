Director.destroy_all
Director.create(:name => 'Steven Spielberg', :nationality => 'American', :dob => '1946-12-18', :period => '20th century', :image => 'https://i2.wp.com/auralcrave.com/wp-content/uploads/2018/04/Steven-Spielberg-Featured.jpeg?fit=915%2C515&ssl=1')
Director.create(:name => 'Martin Charles Scorsese', :nationality => 'American', :dob => '1942-11-17', :period => '20th century', :image => 'https://www.indiewire.com/wp-content/uploads/2013/10/martin-scorsese.jpg')
Director.create(:name => 'David Fincher', :nationality => 'American', :dob => '1962-08-28', :period => '20th century', :image => 'https://miro.medium.com/max/2560/1*OAqFizV_7ZHKKII1FOQnag.jpeg')
Director.create(:name => 'Wesley Wales Anderson', :nationality => 'American', :dob => '1969-05-1', :period => '20th century', :image => 'https://cdn5.iguzzini.com/getmedia/1a041dd3-dfac-4a01-b8f5-e5611bca06b2/copertina_articolo_lighthinking')
Director.create(:name => 'Quentin Tarantino', :nationality => 'American', :dob => '1963-03-27', :period => '20th century', :image => 'https://s.studiobinder.com/wp-content/uploads/2019/09/Quentin-Tarantinos-Star-Trek-Featured-StudioBinder.jpg')
Director.create(:name => 'Christopher Nolan', :nationality => 'British-American', :dob => '1970-07-30', :period => '20th century', :image => 'https://variety.com/wp-content/uploads/2017/11/christopher-nolan-variety-feature-story-2.jpg?w=681&h=383&crop=1')
Director.create(:name => 'Stanley Kubrick', :nationality => 'American', :dob => '1928-07-28', :period => '20th century', :image => 'https://www.sensesofcinema.com/wp-content/uploads/2002/05/Stanley-Kubrick.png')
puts "#{ Director.count } artists created."
