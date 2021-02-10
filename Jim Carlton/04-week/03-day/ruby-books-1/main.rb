
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do

  erb :home

end

get '/result' do

  $book_name = params[:book_name]

  $result = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{$book_name}")

  $thumb = $result["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  $book_author = $result["items"].first["volumeInfo"]["authors"].first

  $book_publisher = $result["items"].first["volumeInfo"]["publisher"]

  $book_description = $result["items"].first["volumeInfo"]["description"]

  erb :result

end
