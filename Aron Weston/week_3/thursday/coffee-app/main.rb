require "sinatra"
require "sinatra/reloader"
require "sqlite3"

#index route
get "/" do
  @coffees = query_db("SELECT * FROM coffee")
  erb :home
end

#index route
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
  query_db("INSERT INTO butterflies (product_name, roaster_name) VALUES ('#{params[:b_name]}','#{params[:family]}','#{params[:b_image]}')")
  redirect to("/butterflies") #get request, fetch the butterfly
end

#SHOW A COFFEE
get "/coffee/:id" do
  @coffee = query_db("SELECT * FROM coffee WHERE ID=#{params[:id]}")
  @coffee = @coffee.first #get the butterfly out of the array
  erb :coffee_show
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
