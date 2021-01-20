Rails.application.routes.draw do

  root :to => "cities#home"
  get '/index' => "cities#index"

  post '/create' => "cities#create"

  get '/edit/:id' => "cities#edit_form", :as => "edit_form"
  post '/edit/:id' => "cities#edit", :as => "edit"

  get '/delete/:id' => "cities#delete"
end
