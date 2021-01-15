require "sinatra"
require "sinatra/reloader"
require "sqlite3"

#index route
get "/" do
  @coffees = query_db("SELECT * FROM coffee")
  erb :home
end

#COFFEE SEARCH
get "/coffee/search" do 
  erb :coffee_search
end 

#DO THE SEARCH
get "/coffee/search/:query" do
  @match = query_db("SELECT * FROM coffee WHERE product_name='#{params[:query]}'")
  @match = @match.first
  redirect to('/coffee/search/results')
end

#COFFEE SEARCH RESULTS
get "/coffee/search/:query/results" do
  erb :coffee_results
end


#ALL COFFEES
get "/coffee" do
  @coffees = query_db("SELECT * FROM coffee")
  erb :coffee_index
end

#NEW COFFEE
get "/coffee/new" do
  erb :coffee_new
end


#CREATE A COFFEE
post "/coffee" do
  query_db("INSERT INTO coffee (product_name, product_image, purchase_link, roaster_name, roaster_location, price, origin, roast_profile, tasting_notes, brew_guide, aron_rating) VALUES ('#{params[:product_name]}','#{params[:product_image]}','#{params[:purchase_link]}','#{params[:roaster_name]}','#{params[:roaster_location]}','#{params[:price]}','#{params[:origin]}','#{params[:roast_profile]}','#{params[:tasting_notes]}','#{params[:brew_guide]}','#{params[:aron_rating]}')")

  redirect to("/coffee") 
end

#SHOW A COFFEE
get "/coffee/:id" do
  @coffee = query_db("SELECT * FROM coffee WHERE ID=#{params[:id]}")
  @coffee = @coffee.first
  erb :coffee_show
end


# EDIT A COFFEE
get "/coffee/:id/edit" do
  @coffee = query_db("SELECT * FROM coffee WHERE ID=#{params[:id]}")
  @coffee = @coffee.first
  erb :coffee_edit
end

# EDITED COFFEE
post "/coffee/:id" do
  query_db("UPDATE coffee SET product_name='#{params[:product_name]}', product_image='#{params[:product_image]}',purchase_link='#{params[:purchase_link]}', roaster_name='#{params[:roaster_name]}',roaster_location='#{params[:roaster_location]}', price='#{params[:price]}',origin='#{params[:origin]}', roast_profile='#{params[:roast_profile]}', tasting_notes='#{params[:tasting_notes]}', brew_guide='#{params[:brew_guide]}',aron_rating='#{params[:aron_rating]}' WHERE id=#{params[:id]}")

  # Go back to coffee
  redirect to("/coffee/#{params[:id]}")
end

# DESTROY
get "/coffee/:id/delete" do
  query_db("DELETE FROM coffee WHERE id=#{params[:id]}")
  redirect to("/coffee")
end

#QUERY DB
def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new "db.sqlite3"
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
