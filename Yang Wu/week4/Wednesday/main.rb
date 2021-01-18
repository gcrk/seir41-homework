require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @title = params[:title]
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @info = HTTParty.get @url
  @pic_link = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  @title = @info["items"].first["volumeInfo"]['title']
  @authors = @info["items"].first["volumeInfo"]['authors'].join(', ')
  @publishedDate = @info["items"].first["volumeInfo"]['publishedDate']
  erb :result
end
