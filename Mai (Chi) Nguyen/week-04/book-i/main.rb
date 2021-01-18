require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @name = params[:name]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @name }"
  @info = HTTParty.get url
  @cover = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  @author = @info['items'].first['volumeInfo']['authors'].join(', ')
  @title = @info['items'].first['volumeInfo']['title']
  @description = @info['items'].first['volumeInfo']['description']
  erb :result
end
