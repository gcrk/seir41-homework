Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/clouds' => 'clouds#index'
  post '/clouds' => 'clouds#create'
  get '/clouds/new' => 'clouds#new', :as => 'new_cloud'
  get '/clouds/:id' => 'clouds#show', :as => 'cloud'
  post '/clouds/:id' => 'clouds#update'
  get '/clouds/:id/edit' => 'clouds#edit', :as => 'edit_cloud'
  delete '/clouds/:id' => 'clouds#destroy'
end
