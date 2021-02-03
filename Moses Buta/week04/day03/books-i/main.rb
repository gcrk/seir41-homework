require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :home
end

get '/solution' do
 "solution coming soon"
 # @book_title = params[:book_title].upcase
 @book_title = params[:book_title]
 @title = 'Ulysses'
 url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
 @info = HTTParty.get url;
 @link  = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :solution
end

get '/image' do
  "solution coming"

  erb :image
end
