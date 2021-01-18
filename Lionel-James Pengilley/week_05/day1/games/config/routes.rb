Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic' => 'magic#magic'
  get '/magic/answer' => 'magic#answer'

  get '/secret' => 'secret#secret'
  get '/secret/win_or_lose' => 'secret#win_or_lose'

  get '/rock_paper_scissors' => 'rock#rock_paper_scissors'
  get '/rock_paper_scissors/:throw' => 'rock#rock_paper_scissors_play'

end
