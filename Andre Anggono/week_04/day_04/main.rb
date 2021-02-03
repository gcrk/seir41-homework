require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  @inventories = query_db("SELECT * FROM inventories")
  erb :home
end

get '/inventory' do
  @inventories = query_db("SELECT * FROM inventories")
  erb :inventory
end

post '/inventory' do
  params[:image] = "https://via.placeholder.com/300" if params[:image].empty?
  query_db("INSERT INTO inventories (name, description, manufacturer, qty, price, stocked_year, image) VALUES ('#{params[:name]}', '#{params[:description]}', '#{params[:manufacturer]}', '#{params[:qty]}', '#{params[:price]}', '#{params[:stocked_year]}', '#{params[:image]}')")
  redirect to('/inventory')
end

get '/inventory/new' do
  erb :inventory_new
end

get '/inventory/:id' do
  @inventory = query_db("SELECT * FROM inventories WHERE id='#{params[:id]}'")
  @inventory = @inventory.first
  erb :inventory_show
end

get '/inventory/:id/edit' do
  @inventory = query_db("SELECT * FROM inventories WHERE id='#{params[:id]}'")
  @inventory = @inventory.first
  erb :inventory_edit
end

post '/inventory/:id' do
  query_db("UPDATE inventories SET name='#{params[:name]}', description='#{params[:description]}', manufacturer='#{params[:manufacturer]}', qty='#{params[:qty]}', price='#{params[:price]}', stocked_year='#{params[:stocked_year]}', image='#{params[:image]}' WHERE id='#{params[:id]}'")
  redirect to("/inventory/#{params[:id]}")
end

get '/inventory/:id/delete' do
  query_db("DELETE FROM inventories WHERE id=#{params[:id]}")
  redirect to('/inventory')
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end

def total(db_col)
  sum = 0
    @inventories.each { |inventory|
      sum += inventory[db_col]
    }
    sum
end
