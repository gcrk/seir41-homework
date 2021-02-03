require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#INDEX
get '/musicians' do
  @musicians = query_db 'SELECT * FROM musicians'

  erb :musicians_index
end

#NEW
get '/musicians/new' do
  erb :musicians_new
end

#CREATE
post '/musicians' do
  query_db "INSERT INTO musicians (name, genre, image) VALUES ('#{ params[:name]}', '#{ params[:genre]}', '#{ params[:image]}')"
  redirect to ('/musicians') #GET
end

#SHOW
get '/musicians/:id' do
  @musician = query_db "SELECT * FROM musicians WHERE id=#{ params[:id]}"

  @musician = @musician.first
  erb :musicians_show
end

#EDIT
get'/musicians/:id/edit' do
  @musician = query_db "SELECT * FROM musicians WHERE id=#{ params[:id]}"
  @musician = @musician.first
  erb :musician_edit
end


#UPDATE
post '/musicians/:id' do
  query_db "UPDATE musicians SET name='#{ params[:name]}', genre='#{ params[:genre]}', image='#{ params[:image]}' WHERE id=#{ params[:id]}"
  redirect to("/musicians/#{ params[:id]}") #GET request
end

#DESTROY
get '/musicians/:id/delete' do
  query_db "DELETE FROM musicians WHERE id=#{ params[:id]}"
  redirect to('/musicians')

end


def query_db (sql_statement)
  puts sql_statement #for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results
end
