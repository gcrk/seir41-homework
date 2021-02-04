require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter =>'sqlite3',
  :database =>'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Author < ActiveRecord::Base
      has_many :books, dependent: :destroy
end

class Book < ActiveRecord::Base
      belongs_to :author
end



get '/' do
  erb :home
end

#Index

get '/authors' do
  @authors = Author.all

  erb :authors_index
end

#NEW  #NEW has to be before #SHOW because othewise brower address authors/new can not be find as there is no used who's ":id" is new
get '/authors/new' do

  erb :authors_new
end
#ADD with params in the form
post '/authors' do
  author=Author.new
  author.name = params[:name]
  author.country = params[:country]
  author.image = params[:image]
  author.save
  redirect to ("/authors/#{ author.id}")
end


#SHOW
get '/authors/:id' do
  @author = Author.find params[:id]
  @books = @author.books  ##################Accessing all books of a particular author by using association
  erb :authors_show
end





#Show author's books
get '/authors/:id/:book_id' do
  @book = Book.find params[:book_id]
  @author = @book.author ##########################Accessing the author of this book using association

erb :books_show
end

#EDIT
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

#UPDATE
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.country = params[:country]
  author.image = params[:image]
  author.save
  redirect to ("/authors/#{author[:id]}")
end

#DESTROY
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to ('/authors')
end

#BOOKS=======================================================================================

#index
get '/books' do
  @books = Book.all
  erb :books_index
end

#NEW
get '/books/new' do
  erb :books_new
end

#ADD BOOK
post '/books' do
  book = Book.new
  book.title = params[:title]
  book.year = params[:year]
  book.author_id = params[:author_id]
  book.image = params[:image]
  book.save
  redirect to ("/books/#{book.id}")
end

#SHOW
get '/books/:id' do
  @book = Book.find params[:id]
  @author = @book.author
  erb :books_show
end

#EDIT
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

post '/books/:id' do
  book = Book.find params[:id]
  book.title = params[:title]
  book.year = params[:year]
  book.image = params[:image]
  book.save
  redirect to ("/books/#{book[:id]}")
end
