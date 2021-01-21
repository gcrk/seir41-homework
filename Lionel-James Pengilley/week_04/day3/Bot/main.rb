require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/page_one' do
  erb :page_one
end

get '/page_tryagain' do
  erb :page_tryagain
end

get '/page_refactor' do
  erb :page_refactor
end

get '/end_refactor' do
  erb :end_refactor
end

get '/end_new_feature' do
  erb :end_new_feature
end
