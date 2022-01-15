Rails.application.routes.draw do
  devise_for :users
  get 'contact', to: 'contact#index'
  get 'about', to: 'about#index'
  root to: 'about#index'
end
