require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/picture' do

  "Hello"
  @title = params[:book]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @info = HTTParty.get url;

  erb :picture
end
