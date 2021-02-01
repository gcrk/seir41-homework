Coffee.destroy_all
Coffee.create(:name => 'Orthodox - House Espresso Blend', :image => 'https://cdn.shopify.com/s/files/1/2350/4463/products/ORTHODOX_1000x_1bcd5e18-b640-4ca3-a2a8-cb7cf80b2e6a_1000x.png?v=1594085558', :purchase_link => 'https://stali.com.au/collections/coffee/products/st-ali-orthodox', :price => 19.00, :origin => 'Blend: Columbia & Brazil', :tasting_notes => 'Apple Jam | Fudge | Chocolate.', :brew_guide =>'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', :roast_profile => 'Medium Roast', :roaster_id => 1, :aron_rating => 9)

Coffee.create(:name => 'Santa Isabel Espresso', :image => 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/s/a/santa_isabel_espresso_bag_image@2x.jpg', :purchase_link => 'https://marketlane.com.au/coffee-beans/espresso-coffee/santa-isabel-espresso', :price => 22.00, :origin => 'Single Origin: Guatemala', :tasting_notes => 'Toffee sweetness with notes of plum and orange.', :brew_guide =>'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', :roast_profile => 'Medium Roast', :roaster_id => 2, :aron_rating => 9)

Coffee.create(:name => 'Honduras | Otoniel Sagastume, Region Santa Barbara', :image => 'https://cdn.shopify.com/s/files/1/0499/3151/8107/products/honduras_1317x1317.png?v=1610599551', :purchase_link => 'https://thelittlemarionette.com/products/honduras-otoniel-sagastume-region-santa-barbara?variant=37664152191131', :price => 18.00, :origin => 'Single Origin: Honduras', :tasting_notes => 'Nectarine, Guava, Black Tea', :brew_guide => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', :roast_profile => 'Medium Roast', :roaster_id => 3, :aron_rating => 9)

puts "#{Coffee.count} coffees created."

# Roaster.destroy_all

# Roaster.create(:name => 'Market Lane', :location => 'Melbourne, Victoria', :website => 'https://marketlane.com.au/', :instagram => 'https://www.instagram.com/marketlane/?hl=en', :facebook => 'https://www.facebook.com/marketlanecoffee/')
# Roaster.create(:name => 'St. Ali Roasters', :location => 'Melbourne, Victoria', :website => 'https://stali.com.au/', :instagram => 'https://www.instagram.com/st_ali/', :facebook => 'https://www.facebook.com/stali')
# Roaster.create(:name => 'The Little Marionette', :location => 'Sydney, NSW', :website => 'https://thelittlemarionette.com/', :instagram => 'https://www.instagram.com/thelittlemarionette/', :facebook => 'https://www.facebook.com/thelittlemarionette/')


# puts "#{ Roaster.count } roasters created."