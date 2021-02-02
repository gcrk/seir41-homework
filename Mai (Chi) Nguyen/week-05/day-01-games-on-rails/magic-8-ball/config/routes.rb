Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/result' => 'magic#result'

  get '/secret_number' => 'secret_number#form'
  get '/secret_number/generate' => 'secret_number#generate'
  get '/secret_number/result' => 'secret_number#result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#form'
  get '/rock_paper_scissors/result' => 'rock_paper_scissors#result'
end
