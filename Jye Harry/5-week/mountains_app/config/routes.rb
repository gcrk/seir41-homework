Rails.application.routes.draw do
  get '/mountains' => 'mountains#index'
  post '/mountains' => 'mountains#create'
  get '/mountains/new' => 'mountains#new', :as => 'new_mountain'
  get '/mountain/:id' => 'mountains#show', :as => 'mountain'
  post '/mountain/:id' => 'mountains#update'
  get '/mountain/:id/edit' => 'mountains#edit', :as => 'edit_mountain'
  delete '/mountain/:id' => 'mountains#destroy'
end
