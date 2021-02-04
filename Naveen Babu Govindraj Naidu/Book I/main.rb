require 'sinatra'
require 'sinatra/reloader'


get '/' do
  erb:home
end

get '/title' do

  @Book_search = params[:Book_search].upcase
end
