Rails.application.routes.draw do
  get 'contact', to: 'contact#index'
  get 'about', to: 'about#index'
  root to: 'about#index'
end
