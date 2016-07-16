Homy::Application.routes.draw do
  get "home/index"
  devise_for :users
  root to: "home#index"
  resources :conversations do
    resources :messages
  end
end
