require "sinatra"
require "sinatra/reloader"
require "pry"
require 'httparty'

get '/' do # root or 'homepage'
  erb :home
end

get '/result' do
  @info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book]}")
  @img = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title = @info["items"][0]["volumeInfo"]["title"]
  @author = @info["items"][0]["volumeInfo"]["authors"].join(', ')
  @publisher = @info["items"][0]["volumeInfo"]["publisher"]
  @descr = @info["items"][0]["volumeInfo"]["description"]


  erb :result
end
