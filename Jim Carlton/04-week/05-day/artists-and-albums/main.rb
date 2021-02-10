require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Establish database connection via Active Record
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional inclusion (find out what this does exactly)
ActiveRecord::Base.logger = Logger.new(STDERR)

class Artist < ActiveRecord::Base
  has_many :albums
end

class Album < ActiveRecord::Base
  belongs_to :artist, :optional => true
end

# Root
get '/' do
  erb :home
end

################################################################################
# ARTISTS ######################################################################
################################################################################

# Artists - INDEX
get '/artists' do
  @artists = Artist.all
  erb :artists
end

# Artists - NEW
get '/artists/create' do
  erb :artists_new
end

# Artists - CREATE
post '/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.bio = params[:bio]
  artist.genres = params[:genres]
  artist.quote = params[:quote]
  artist.website = params[:website]
  artist.photos = params[:photos]
  artist.save
  redirect to("/artists/#{ artist.id }") #redirect back to artist page created
end

# Artists - SHOW/DETAIL
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_detail
end

# Artists - EDIT
get '/artists/:id/edit' do
  @artist = Artist.find params[:id]
  erb :artists_edit
end

# Artists - UPDATE
post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.bio = params[:bio]
  artist.genres = params[:genres]
  artist.quote = params[:quote]
  artist.website = params[:website]
  artist.photos = params[:photos]
  artist.save
  redirect to("/artists/#{ artist.id }") #redirect back to artist page created
end

# DESTROY
get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to("/artists")
end

################################################################################
# ALBUMS #######################################################################
################################################################################

# Albums - INDEX
get '/albums' do
  @albums = Album.all
  erb :albums
end

# Albums - NEW
get '/albums/create' do
  @artists = Artist.all
  erb :albums_new
end

# Albums - CREATE
post '/albums' do
  album = Album.new
  album.album_id = params[:album_id]
  album.artist_id = params[:artist_id]
  album.artist_other = params[:artist_other]
  album.album_name = params[:album_name]
  album.description = params[:description]
  album.tracks = params[:tracks]
  album.released = params[:released]
  album.label = params[:label]
  album.rating = params[:rating]
  album.link = params[:link]
  album.artwork = params[:artwork]
  album.save
  redirect to("/albums/#{ album.id }") # redirect to album page
end

# Albums - SHOW/DETAIL
get '/albums/:id' do
  @album = Album.find params[:id]
  erb :albums_detail
end

# Albums - EDIT
get '/albums/:id/edit' do
  @artists = Artist.all
  @album = Album.find params[:id]
  erb :albums_edit
end

# Albums - UPDATE
post '/albums/:id' do
  album = Album.find params[:id]
  album.artist_id = params[:artist_id]
  album.artist_other = params[:artist_other]
  album.album_name = params[:album_name]
  album.description = params[:description]
  album.tracks = params[:tracks]
  album.released = params[:released]
  album.label = params[:label]
  album.rating = params[:rating]
  album.link = params[:link]
  album.artwork = params[:artwork]
  album.save
  redirect to("/albums/#{ album.id }") # redirect to album page
end

# DESTROY
get '/albums/:id/delete' do
  album = Album.find params[:id]
  album.destroy
  redirect to("/albums")
end
