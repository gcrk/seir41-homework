Rails.application.routes.draw do
  root :to => 'dinos#index'
  get '/dinos' => 'dinos#index'
  get '/dinos/new' => 'dinos#new', :as => 'new_dino'
  get '/dinos/:id' => 'dinos#show', :as => 'dino'
  post '/dinos' => 'dinos#create'
  get '/dinos/:id/edit' => 'dinos#edit', :as => 'edit_dino'
  post '/dinos/:id' => 'dinos#update'
  delete '/dinos/:id' => 'dinos#destroy'
end
