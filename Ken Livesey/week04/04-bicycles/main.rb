require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#Index
get '/bicycles' do
  db = SQLite3::Database.new("bicycles.sqlite3")
  db.results_as_hash = true
  @bicycles = db.execute "SELECT * FROM bicycles;"
  erb :bicycles
end

#new
get '/bicycle/new' do
  erb :bicycle_new
end

#CREATE
post '/bicycles' do
  db = SQLite3::Database.new("bicycles.sqlite3")
  db.results_as_hash = true
  sql = "INSERT INTO bicycles (model, manufacturer, description, price, image) VALUES ('#{params[:model]}', '#{params[:manufacturer]}', '#{params[:description]}', '#{params[:price]}', '#{params[:image]}')"
  db.execute(sql)
  db.close
  redirect to('/bicycles')
end

#EDIT
get '/bicycles/:id/edit' do
  db = SQLite3::Database.new("bicycles.sqlite3")
  db.results_as_hash = true
  @bicycle = ( "SELECT * FROM bicycles WHERE id == #{params[:id]};" ).first
  erb :bicycle_edit
end

#UPDATE
post '/bicycles/:id' do
  db = SQLite3::Database.new("bicycles.sqlite3")
  db.results_as_hash = true
  sql = "UPDATE bicycles SET model = '#{params[:model]}', manufacturer = '#{params[:manufacturer]}', description = '#{params[:description]}', image = '#{params[:image]}',  WHERE id == #{params[:id]};"
  db.execute(sql)
  db.close
  redirect to("/bicycles/#{ params[:id] }")
end

#DESTROY
get '/bicycles/:id/delete' do
  db = SQLite3::Database.new("bicycles.sqlite3")
  db.results_as_hash = true
  db.execute("DELETE FROM bicycles WHERE id == #{params[:id]};")
  db.close
  redirect to('/bicycles')
end

get '/bicycles/:id' do
    db = SQLite3::Database.new("bicycles.sqlite3")
    db.results_as_hash = true
    @bicycle = db.execute( "SELECT * FROM bicycles WHERE id == #{params[:id]};" ).first
    db.close
    erb :bicycles_show
end
