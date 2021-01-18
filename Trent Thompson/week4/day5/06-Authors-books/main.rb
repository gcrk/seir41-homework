require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Authors < ActiveRecord::Base #this writes the sql for us --classs authors is inheriting active record
end

class Books < ActiveRecord::Base
end

get '/' do
  erb :home
end

#INDEX
get '/authors' do
  @authors = Authors.all
  erb :authors_index
end

#new
get '/authors_new' do
  erb :authors_new
end

#create

post '/authors' do #post request sent from the authors_new page above
  author = Authors.new #this author doesnt yet have a name so we create one below using the params
  author.name = params[:name] #this is the active_record way of writing things
  author.save #as soon as this saves to DB it gets an id which we can use on the next line of code
  redirect to "/authors/#{author.id}" #GET request to the show page
end

#show

get '/authors/:id' do
  @authors = Authors.find params[:id] #create another variable to store some active record stuff in
  erb :authors_show
end

#Edit

get '/authors/:id/edit' do
  @authors = Authors.find params[:id] #create another variable to store some active record stuff in
  erb :authors_edit
end

#Update

post '/authors/:id' do
  author = Authors.find params[:id] #params is what get submitted in for
  author.name = params[:name] #params is what gets submitted in forms
  author.save
  redirect to "/authors/#{author.id}" #get request
end

#Delete

get '/authors/:id/delete' do
  author = Authors.find params[:id]
  author.destroy
  redirect to '/authors'
end

################BOOKS############################
# index
get '/books' do
  @books = Books.all
  erb :books_index
end

#new
get '/books/new' do
  erb :books_new
end

#create
post '/books' do
  books = Books.new
  books.book = params[:book]
  books.genre = params[:genre]
  books.save #as soon as your save in active recors you now know whst the plant id is!!!!!!!!! hence the next line of code!
  redirect to "/books/#{books.id}"
end

#show

get '/books/:id' do
  @books = Books.find params[:id]
  erb :books_show
end

#Delete

get '/books/:id/delete' do
  books = Books.find params[:id]
  books.destroy
  redirect to '/books'
end

#Edit
get '/books/:id/edit' do
  @books = Books.find params[:id]
  erb :books_edit
end

#UPDATE
post '/books/:id' do
  books = Books.find params[:id]
  books.book = params[:book]
  books.genre = params[:genre]
  books.save
  redirect to "/books/#{books.id}"
end
