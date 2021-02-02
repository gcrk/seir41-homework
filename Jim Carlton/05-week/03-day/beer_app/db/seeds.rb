# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brewery.destroy_all

Brewery.create(:name => 'Grifter Brewery')
Brewery.create(:name => 'Young Henry')

puts "#{ Brewery.count } breweries created."

Beer.destroy_all

Beer.create(:name => 'Serpents Kiss', :brewery_id => 1)
Beer.create(:name => 'Newtowner', :brewery_id => 2)

puts "#{ Beer.count } beers created."

# Associations #########################

beer = Beer.first
brewery = Brewery.first

brewery.beers << beer
