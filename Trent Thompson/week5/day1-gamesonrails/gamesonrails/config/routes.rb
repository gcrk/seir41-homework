Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic' => 'pages#magic'
  get '/secret' => 'pages#secret'
  get '/rps' => 'pages#rps'
  get '/magic/results' => 'pages#results'
end
