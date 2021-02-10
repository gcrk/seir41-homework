require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Movie < ActiveRecord::Base
  has_many :reviews
end

class Review < ActiveRecord::Base
  belongs_to :movie
end

get '/' do
  @movies = Movie.all.order(:name)
  erb :home
end

post '/' do
  Movie.new do |m|
    m.name = params[:name]
    m.year = params[:year]
    m.genre = params[:genre]
    m.plot = params[:plot]
    m.image = params[:image]
    m.save
  end
  redirect to('/')
end

get '/new' do
  erb :movies_new
end

get '/:id' do
  @movie = Movie.find params[:id]
  @reviews = @movie.reviews
  erb :movies_show
end

get '/:id/destroy' do
  Movie.find(params[:id]).destroy
  redirect to('/')
end

post '/:id' do
  Review.new do |r|
    r.movie_id = params[:id]
    r.author = params[:author]
    r.review = params[:review]
    r.rating = params[:rating]
    r.save
  end
  redirect to("/#{params[:id]}")
end
