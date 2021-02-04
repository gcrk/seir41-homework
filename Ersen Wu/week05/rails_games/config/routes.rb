Rails.application.routes.draw do
  root :to => 'games#main'
  get '/secret_number' => 'secret_number#form'
  get '/secret_number/result' => 'secret_number#result'
  get '/magic_8_ball' => 'magic#form'

end
