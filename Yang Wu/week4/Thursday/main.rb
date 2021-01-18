require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

def query_db sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end

#index
get '/talks' do
  @talks = query_db 'SELECT * FROM talks'
  erb :talks_index
end

post '/talks' do
  query_db "INSERT INTO talks (title, people, video) VALUES ('#{params[:title]}', '#{params[:people]}', '#{params[:video]}')"
  redirect to('/talks')
end

get '/talks/new' do
  erb :talks_new
end

get '/talks/:id' do
  @talk = query_db "SELECT * FROM talks WHERE id = #{params[:id]}"
  @talk = @talk.first #easily forget!
  erb :talks_page
end

post '/talks/:id' do
  query_db "UPDATE talks SET title = '#{params[:title]}', people = '#{params[:people]}', video = '#{params[:video]}' WHERE id = #{params[:id]}"
  redirect to("/talks/#{params[:id]}")
end

get '/talks/:id/delete' do
  query_db "DELETE FROM talks WHERE id = #{params[:id]}"
  redirect to('/talks')
end

get '/talks/:id/update' do
  @talk = query_db "SELECT * FROM talks WHERE id = #{params[:id]}"
  @talk = @talk.first
  erb :talks_update
end
