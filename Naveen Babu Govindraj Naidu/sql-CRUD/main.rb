# requires
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb:home
end

# INDEX
get '/cars' do
  @cars = query_db 'SELECT * FROM cars'
  erb:cars_index
end

# NEW
get '/cars/new' do
   erb:cars_new
end

# CREATE
post '/cars' do
  query_db  "INSERT INTO cars (brand,model,image) VALUES ('#{params[:brand]}',
  '#{params[:model]}','#{params[:image]}')"
  redirect to('/cars')#get
end

# SHOW
get '/cars/:id' do
  @car = query_db "SELECT * FROM cars WHERE id=#{params[:id]}"
  @car = @car.first
  erb:cars_show
end

# EDIT
get '/cars/:id/edit' do
  @car = query_db "SELECT * FROM cars WHERE id=#{params[:id]}"
  @car = @car.first
  erb:cars_edit
end

# UPDATE
post '/cars/:id' do
  query_db "UPDATE cars SET brand='#{params[:brand]}',model='#{params[:model]}',image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/cars/#{params[:id]}")
end

# DESTROY
get '/cars/:id/delete' do
  query_db "DELETE FROM cars WHERE id=#{params[:id]}"
  redirect to('/cars')
  erb:cars_delete
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
