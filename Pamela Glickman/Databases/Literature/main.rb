require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Sets up Active Record's connection to the database
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Sets up the Author and Book classes
class Author < ActiveRecord::Base
  has_many :books
end

class Book < ActiveRecord::Base
end

# Show all authors and their books
get '/' do
  @authors = Author.all
  @books = Book.all
  erb :home
end

# Add a new author
post '/add_author' do
  author = Author.new
  author.name = params[:name]
  author.birth_year = params[:birth_year]
  author.death_year = params[:death_year]
  author.image = params[:image]
  author.save
  redirect to("/")
end

# Show the form to edit a specific author
get '/edit_author/:author_id' do
  @author = Author.find params[:author_id]
  erb :edit_author
end

# Edit a specific author
post '/edit_author/:author_id' do
  author = Author.find params[:author_id]
  author.name = params[:name]
  author.birth_year = params[:birth_year]
  author.death_year = params[:death_year]
  author.image = params[:image]
  author.save
  redirect to("/")
end

# Delete an author
get '/delete_author/:author_id' do
  author = Author.find params[:author_id]
  author.destroy
  redirect to("/")
end

# Show the form to add a book for a specific author
get '/add_book/:author_id' do
  @author = Author.find params[:author_id]
  erb :add_book
end

# Add a book to a specific author
post '/add_book/:author_id' do
  author = Author.find params[:author_id]
  book = Book.new
  book.title = params[:title]
  book.publication_year = params[:publication_year]
  book.author_id = params[:author_id]
  book.save
  redirect to("/")
end

# Show the edit form for a specific book
get '/edit_book/:book_id' do
  @book = Book.find params[:book_id]
  erb :edit_book
end

# Edit a specific book
post '/edit_book/:book_id' do
  book = Book.find params[:book_id]
  book.title = params[:title]
  book.publication_year = params[:publication_year]
  # Note that the book's author id can't be edited, hence it isn't listed here
  book.save
  redirect to("/")
end

# Delete a specific book
get '/delete_book/:book_id' do
  book = Book.find params[:book_id]
  book.destroy
  redirect to("/")
end
