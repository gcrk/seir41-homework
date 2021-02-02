# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Country.destroy_all
# Country.create(:name => 'Russia', :population => 14681000, :area => 17098246)
# Country.create(:name => 'Moldova', :population => 2640438, :area => 33843)
# Country.create(:name => 'Belarus', :population => 10151806, :area => 207600)
#
# puts "#{ Country.count } countries created."

Landmark.destroy_all
Landmark.create(:name => 'Red Square', :image => 'red_square.jpg', :country_id => 4)
Landmark.create(:name => 'Chegem Waterfalls', :image => 'waterfalls.jpeg', :country_id => 4)
Landmark.create(:name => 'Victory Memorial and Eternal Flame', :image => 'memorial.jpeg', :country_id => 5)
Landmark.create(:name => 'Butesti Ravine', :image => 'ravine.jpeg', :country_id => 5)
Landmark.create(:name => 'Victory Square', :image => 'victory_square.jpeg', :country_id => 6)
Landmark.create(:name => 'Prilepsky Reserve', :image => 'reserve.jpeg', :country_id => 6)


puts "#{ Landmark.count } landmarks created."
