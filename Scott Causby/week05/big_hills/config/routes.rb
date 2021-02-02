Rails.application.routes.draw do
  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new', :as => 'new_mountain'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'

end
