Character.destroy_all

Character.create(:name => 'Son Goku', :race => 'Saiyan', :voice => 'Sean Schemmel', :imagesignaturemove => 'Kamehameha', :image => 'https://i.pinimg.com/originals/85/12/28/851228aaf5065d07afbbd4fd88abdd66.jpg')

puts "#{ Character.count } characters created."
