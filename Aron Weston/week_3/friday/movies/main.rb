require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "db.sqlite3",
)

# Define Classes
class Movie < ActiveRecord::Base
end

class Director < ActiveRecord::Base
end


# Init
get "/" do
  @movies = Movie.all
  erb :home
end

#Movie index
get "/movies" do
  @movies = Movie.all
  erb :movies_index
end

#create movie
get "/movies/new" do
  new_movie = Movie.new
  new_movie.title = params[:title]
  new_movie.save
  erb :movies_new
end

#create movie
get "/director/new" do
  new_director = Director.new
  new_director.name = params[:name]
  new_director.save
  erb :movies_new
end

# CREATE TABLE movies (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     title TEXT,
#     image TEXT,
#     starring TEXT,
#     year TEXT,
#     running_time, TEXT,
#     box_office TEXT
# );

#### DIRECTORS

#Directors Index
get "/directors" do
  @directors = Director.all
  erb :directors_index
end
