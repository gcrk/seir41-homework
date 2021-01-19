Rails.application.routes.draw do

  root :to => 'pages#welcome'

  get '/8-ball' => 'ball#game'
  get '/8-ball/result' => 'ball#result'

  get '/secret-number' => 'secret_number#game'
  get '/secret-number/result' => 'secret_number#result'

  get '/rock-paper-scissors' => 'rock_paper_scissors#game'
  get '/rock-paper-scissors/result' => 'rock_paper_scissors#result'

end
