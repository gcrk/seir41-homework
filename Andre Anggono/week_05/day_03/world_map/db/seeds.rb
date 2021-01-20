# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Country.destroy_all
Country.create(:name => 'Australia', :capital => 'Canberra', :area => 7692000, :population => 25360000, :life_expectancy => 82.75, :poi => 'Great Barrier Reef, Uluru, Great Ocean Road', :language => 'English', :currency => 'Australian Dollar (AUD)')
Country.create(:name => 'New Zealand', :capital => 'Wellington', :area => 268021, :population => 4917000, :life_expectancy => 81.86, :poi => 'Milford Sound, Piopiotahi Aoraki, Mount Cook,', :language => 'English', :currency => 'New Zealand Dollar (NZD)')
Country.create(:name => 'Sweden', :capital => 'Stockholm', :area => 450295, :population => 10380245, :life_expectancy => 82.56, :poi => 'Stockholm Old Town, Monteliusvagen, Strandvagen', :language => 'Swedish', :currency => 'Swedish Krona (SEK)')
Country.create(:name => 'Vietnam', :capital => 'Hanoi', :area => 331212, :population => 96460000, :life_expectancy => 75.32, :poi => 'Cu Chi Tunnel, Hoàn Kiếm Lake, Cát Bà Island', :language => 'Vietnamese', :currency => 'Dong (VND)')
Country.create(:name => 'England', :capital => 'London', :area => 130279, :population => 55980000, :life_expectancy => 81.40, :poi => 'Buckingham Palace, Warwick Castle, Tower of London', :language => 'English', :currency => 'Pound Sterling (GBP)')
puts "#{ Country.count } countries created."

City.destroy_all
City.create(:name => 'Sydney', :area => 12368, :founded => '1788-01-26', :population => 5230000, :country_id => 1)
City.create(:name => 'Canberra', :area => 814, :founded => '1913-03-12', :population => 395790, :country_id => 1)
City.create(:name => 'Auckland', :area => 1086, :founded => '1840-09-18', :population => 1657000, :country_id => 2)
City.create(:name => 'Wellington', :area => 119, :founded => '1870-01-01', :population => 212700, :country_id => 2)
puts "#{ City.count } cities created."