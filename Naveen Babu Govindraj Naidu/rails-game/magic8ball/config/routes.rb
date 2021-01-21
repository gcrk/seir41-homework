Rails.application.routes.draw do
  root :to =>'pages#magic8ball'
  get '/secret_number' => 'pages#secret_number'
  get '/magic8ball' => 'pages#magic8ball'
  get '/stone_paper_scissor' => 'pages#stone_paper_scissor'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
