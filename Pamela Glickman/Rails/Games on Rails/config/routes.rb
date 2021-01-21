Rails.application.routes.draw do

  root :to => "games#home"

  get "/games/magic_8_ball" => "games#magic_8_ball"

  get "/games/secret_num_game" => "games#secret_num_game"
  get "/games/secret_num_game/retry" => "games#secret_num_game_retry"

  get "/games/rock_paper_scissors" => "games#rock_paper_scissors"

end
