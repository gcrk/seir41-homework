=begin
# Books I

## Specification

Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.

## Sample URL

https://www.googleapis.com/books/v1/volumes?q=title:Ulysses

### Additional Resources

- [Sinatra](http://sinatrarb.com)
- [Google Books Search API](https://developers.google.com/books/docs/v1/reference/volumes/list)
- [HTTParty Tutorial](http://blog.teamtreehouse.com/its-time-to-httparty)
=end


require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @title = params[:book]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @info = HTTParty.get url;
  @image = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  @book_title = @info["items"].first["volumeInfo"]["title"]
  @author = @info["items"].first["volumeInfo"]["author"]
  @description = @info["items"].first["volumeInfo"]["description"]
  @pages = @info["items"].first["volumeInfo"]["pageCount"]
  @average_rating = @info["items"].first["volumeInfo"]["averageRating"]
  @number_of_ratings = @info["items"].first["volumeInfo"]["ratingsCount"]

  erb :result
end
