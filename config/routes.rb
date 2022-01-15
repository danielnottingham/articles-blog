Rails.application.routes.draw do
  resources :articles
  devise_for :users
  get 'contact', to: 'contact#index'
  get 'about', to: 'about#index'
  root to: 'articles#index'
end
