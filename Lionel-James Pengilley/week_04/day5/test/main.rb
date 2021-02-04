require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Musician < ActiveRecord::Base
  has_many :songs
end

class Song < ActiveRecord::Base
  belongs_to :musician
end

get '/' do
  erb :home
end

#INDEX
get '/musicians' do
  @musicians = Musician.all
  erb :musicians_index
end


#SHOW
get '/musicians/:id' do
  @musician = Musician.find params[:id]
  erb :musicians_show
end

#Index
get '/songs' do
  @song = Song.find params[:id]
  erb :songs_index
end
