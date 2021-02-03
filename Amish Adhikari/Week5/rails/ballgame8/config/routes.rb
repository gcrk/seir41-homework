Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/balls' => 'balls#game1'
  get '/balls/answer' => 'balls#answer'
end
