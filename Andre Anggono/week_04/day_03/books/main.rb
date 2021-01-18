require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @title = params['title']
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @info = HTTParty.get url
  erb :result
end
