Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/dishes' => 'pages#index'
  get '/dish/new' => 'pages#new', :as => 'new_dish'
  get '/dish/:id' => 'pages#show', :as => 'dish'
  get '/dish/:id/edit' => 'pages#edit', :as => 'edit_dish'
  post '/dishes' => 'pages#create'
  post '/dish/:id' => 'pages#update'
  delete 'dish/:id' => 'pages#destroy'
end
