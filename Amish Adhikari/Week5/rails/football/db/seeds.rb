# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Club.destroy_all

Club.create(:title => 'Manchester United', :country => 'England', :city => 'Manchester', :founded => '1878-02-22', :image => 'https://www.1000goals.com/wallpapers3/manchester-united-wallpapers-MUFC-1.jpg')


puts "#{ Club.count } clubs created."


Player.destroy_all

Player.create(:name => 'Wayne Roneey', :height => '1.76', :position => 'Forward', :image => 'https://commons.wikimedia.org/wiki/File:Wayne_Rooney_144855.jpg')


puts "#{ Player.count } players created."


player = Player.first
club = Club.first

club.players << player
