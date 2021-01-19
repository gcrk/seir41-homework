#require all the gems we need
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


#Get requests to the root path.
get '/' do
  erb :home
end

#index
#GET requests to the /movies path - this will be the index of all the records in our 'movies' table
get '/movies' do
  @all_movies = query_db 'SELECT * FROM movies'
  erb :movies_index
end

#NEW
# GET requests to the /animals/new path. No connection to the database required here
get '/movies/new' do
  erb :movies_new
end

#CREATE
#POST
# POST requests to the /movies path - this will add a new record to the 'movies' table in the database, taking the data from the form in the moviess_new view
post '/movies' do
  query_db "INSERT INTO movies (name, release_year, small_plot, poster) VALUES ('#{ params[:name] }', '#{ params[:release_year] }', '#{ params[:small_plot] }', '#{ params[:poster] }')"
  redirect to ('/movies')
end

#SHOW
# GET requests to the path for an movies
get '/movies/:id' do
  @movie = query_db "SELECT * FROM movies WHERE id=#{ params[:id] }"
  @movie = @movie.first # Get the single movie out of the array.

  erb :movies_show
end


#EDIT
# GET requests to the /movies/:id/edit path - this will render the form to update the attributes of an existing record in the movies table. We _DO_ need a database connection here, since we want to retrieve the records attributes to display them in the form (so the user knows what they're editing)
get '/movies/:d/edit' do
  @movie = query_db "SELECT * FROM movies WHERE id=#{ params[:id] }"
  @movie = @movie.first # Get the single butterfly out of the array.

  erb :movies_edit
end

#Update
# POST requests to the /movies/:id path - this will take attributes from the edit form (which will be available in the params hash) and update the record with the id matching the :id key in the params hash
post '/movies/:id' do
  query_db "UPDATE movies SET name='#{ params[:name]}', release_year='#{ params[:release_year] }', small_plot='#{ params[:small_plot] }', cover='#{ params[:cover] }' WHERE id=#{ params[:id] }"
  redirect to("/movies/#{ params[:id] }")
end

#DESTORY
get '/movies/:id/delete' do
  query_db "DELETE FROM movies WHERE id=#{ params[:id] }"
  redirect to('/movies')
end

# a function/hash to reuse our code
def query_db(sql_statement)
  puts sql_statement
      # Create a new connection to the 'database.sqlite3' using SQLite3 as our database adaptor, and store this connection in a variable called 'db'
  db = SQLite3::Database.new 'database.sqlite3'
  # We want the results to be returned as hashes >>(the default) arrays.
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return you dont have to do it if
end
