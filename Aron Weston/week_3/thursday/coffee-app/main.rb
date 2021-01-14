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

get "/coffee/new" do
  erb :coffee_new
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
