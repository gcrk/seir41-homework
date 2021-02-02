Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic-8-ball' => 'm8b#home'
  get '/magic-8-ball/result' => 'm8b#result'

  get '/secret-number' => 'secret_number#home'
  get '/secret-number/result' => 'secret_number#result'

  get '/rock-paper-scissors' => 'rps#home'
  get '/rock-paper-scissors/result' => 'rps#result'
end
