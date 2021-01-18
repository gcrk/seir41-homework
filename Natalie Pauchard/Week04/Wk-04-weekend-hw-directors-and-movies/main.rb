require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Director < ActiveRecord::Base
  has_many :movies
end

class Movie < ActiveRecord::Base
  belongs_to :director
end

get '/' do
  erb :home
end

get '/directors' do
  @directors = Director.all
  erb :directors_index
end

get '/directors/new' do
  erb :directors_new
end

post '/directors' do
  director = Director.new
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to("/directors/#{ director.id}")
end

#SHOW directors # SHOW directors with movies
get '/directors/:id' do
  @director = Director.find params[:id]
  erb :directors_show
end

get '/directors/:id/edit' do
  @director = Director.find params[:id]
  erb :directors_edit
end

# Update - Edit
post '/directors/:id' do
  director = Director.find params[:id]
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to("/directors/#{ director.id}")
end

get '/directors/:id/delete' do
  director = Director.find params[:id]
  director.destroy
  redirect to("/directors")
end

get '/movies' do
  @movies = Movie.all
  erb :movies_index
end

get '/movies/new' do
  erb :movies_new
end

post '/movies' do
  movie = Movie.new
  # movie.director = params[:director_id]
  movie.name = params[:name]
  movie.year = params[:year]
  movie.image = params[:image]
  movie.director_id = params[:director_id]
  movie.save
  redirect to("/movies/#{ movie.id}")
end

# SHOW Movie #Show Movie with Directors
get '/movies/:id' do
  @movie = Movie.find params[:id]
  erb :movies_show
end

get '/movies/:id/edit' do
  @movie = Movie.find params[:id]
  erb :movies_edit
end

# Update - Edit
post '/movies/:id' do
  movie = Movie.find params[:id]
  movie.name = params[:name]
  movie.year = params[:year]
  movie.image = params[:image]
  movie.director_id = params[:director_id]
  movie.save
  redirect to("/movies/#{ movie.id}")
end

get '/movies/:id/delete' do
  movie = Movie.find params[:id]
  movie.destroy
  redirect to("/movies")
end
