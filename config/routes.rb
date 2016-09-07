Homy::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  get "home/index"
  devise_for :users
  root to: "home#index"
  resources :conversations do
    resources :messages
  end

  resources :abouts do
    collection do
      get :tuyen_sinh
    end
  end
  resources :news

  # admin
  namespace :admin do
    resources :homes, only: [:index]
    resources :news
  end
end
