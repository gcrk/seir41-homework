require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

## INDEX
get '/food' do
  @food = query_db "SELECT * FROM food"
  erb :food_index
end

## NEW PAGE
get '/food/new' do
  erb :food_new
end

## CREAT
post '/food' do
  query_db "INSERT INTO food (name, country, image) VALUES ('#{params[:name]}', '#{params[:country]}', '#{params[:image]}')"
  redirect to('/food')
end


## SHOW THE DISH
get '/food/:id' do
  @dish = query_db "SELECT * FROM food WHERE id=#{params[:id]}"
  @dish = @dish.first
  erb :food_show
end

## EDIT
get '/food/:id/edit' do
  @dish = query_db "SELECT * FROM food WHERE id=#{params[:id]}"
  @dish = @dish.first
  erb :food_edit
end

## UPDATE
post '/food/:id' do
  query_db "UPDATE food SET name='#{params[:name]}', country='#{params[:country]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/food/#{params[:id]}")
end

## DELETE
get '/food/:id/delete' do
  query_db "DELETE FROM food WHERE id=#{params[:id]}"
  redirect to('/food')
end

def query_db sql_statement
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
