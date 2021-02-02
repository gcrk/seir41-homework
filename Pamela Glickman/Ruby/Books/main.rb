require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/display' do
  @title = params[:title].capitalize
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @info = HTTParty.get url

  @official_title = @info["items"].first["volumeInfo"]["title"]
  @authors = @info["items"].first["volumeInfo"]["authors"].join(", ")
  @description = @info["items"].first["volumeInfo"]["description"]
  @thumbnail = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :display
end
