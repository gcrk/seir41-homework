Rails.application.routes.draw do
  # Magic Eightball
  get '/eightball' => 'eightball#index'
  get '/eightball/predict' => 'eightball#predict'

  #Secret Number
  get '/guess' => 'guess#index'
  get '/guess/result' => 'guess#result'

  #SPR
  get "/spr" => 'spr#index'
  get "/spr/:throw" => 'spr#throw'

end
