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
  @authors = Author.all
  erb :home
end

get '/books' do
  @books = Book.all
  erb :all_books_index
end

get '/:id' do
  @author = Author.find params[:id]
  @books =@author.books
  erb :books_index
end



#NEW
get '/:id/books/new' do

  erb :books_new
end

#ADD books

post '/:id/books' do

  book = Book.new
  book.title = params[:name]
  book.year = params[:year]
  book.author_id = params[:author_id]
  book.image = params[:Image]
  book.save
  redirect to ("/books")

end

#SHOW
get '/:id/books/:book_id' do
  @author = Author.find params[:id]
  @books = @author.books
  @book = @books.find params[:book_id]
  erb :book_show
end
