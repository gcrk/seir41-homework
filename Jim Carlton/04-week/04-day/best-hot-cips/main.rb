require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


# INDEX - root / index directory
get '/' do

  @chipperies = query_db 'SELECT * FROM besthotchips'
  erb :home

end


# NEW PAGE - create new hot chip entry
get '/new' do

  erb :new

end


# CREATE FUNCTION

post '/' do

  query_db "INSERT INTO besthotchips (place, location, map, rating, image) VALUES (
  '#{ params[:place] }', '#{ params[:location] }', '#{ params[:map] }', '#{ params[:rating] }', '#{ params[:image] }')"
  redirect to('/')

end


# SHOW / DETAIL - show / detail page
get '/:id' do

  @chippery = query_db "SELECT * FROM besthotchips WHERE id=#{ params[:id] }"
  @chippery = @chippery.first # gets individual chippery out of array
  erb :detail

end


# EDIT - edit page
get '/:id/edit' do

  @chippery = query_db "SELECT * FROM besthotchips WHERE id=#{ params[:id] }"
  @chippery = @chippery.first # gets individual chippery out of array
  erb :edit

end


# UPDATE function
post '/:id' do

  query_db "UPDATE besthotchips SET place=\"#{ params[:place] }\", location='#{ params[:location] }', map='#{ params[:map] }', rating='#{ params[:rating] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/#{ params[:id] }")

end


# DESTROY

get '/:id/remove' do
  # delete the chippery
  query_db "DELETE FROM besthotchips WHERE id=#{ params[:id] }"
  redirect to('/')

end


# database retrievable function
def query_db(sql_statement)

  db = SQLite3::Database.new 'besthotchips.sqlite3' # getting it "text" do
  db.results_as_hash = true # convert it to hash so it's accessible easier in Ruby
  results = db.execute sql_statement # set up variable to update database and update it
  db.close # disconnect database - don't keep it running as this is taxing for server
  results #implicit 'return'

end

@index = query_db 'SELECT COUNT(*) FROM besthotchips'
