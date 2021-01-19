require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/book' do
@book_title = params[:book_title]
@book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
 @info = HTTParty.get @book_url
@image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :book
end
