Rails.application.routes.draw do
  resources :breweries # must be plural
  resources :beers # must be plural
end
