require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do #"root" fo homepage
 erb :home
end

get '/book_cover' do
 @book_title = params[:book_title]
 url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
 @info = HTTParty.get url;
 @book_cover = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

erb :book_cover
end


#convention over configuration
