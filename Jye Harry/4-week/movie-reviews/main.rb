require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  @movies = query_db 'SELECT * FROM movies ORDER BY name'
  erb :home
end

get '/:id' do
  @movie = query_db "SELECT * FROM movies WHERE movieID=#{params[:id]}"
  @movie = @movie.first
  @reviews = query_db "SELECT * FROM reviews WHERE movieID=#{params[:id]}"
  erb :movies_show
end

post '/:id' do
  query_db "INSERT INTO reviews (movieID, author, review, rating) VALUES ('#{params[:id]}', '#{params[:author]}', '#{params[:review]}', '#{params[:rating]}')"
  redirect to("/:id")
end

def query_db(sql_statement)
  # connect to the db
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  # fetch from the db
  results = db.execute sql_statement
  db.close
  results
end
