# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dish.destroy_all

Dish.create :name => 'Pho', :country => 'Vietnam', :rating => '8'
Dish.create :name => 'Sushi', :country => 'Japan', :rating => '8.5'
Dish.create :name => 'Papaya salad', :country => 'Thailand', :rating => '8.5'

puts "#{ Dish.count } dishes available."
