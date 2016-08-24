Homy::Application.routes.draw do
  get "home/index"
  devise_for :users
  root to: "home#index"
  resources :conversations do
    resources :messages
  end

  resources :admissions do
    collection do
      get :tuyen_sinh
    end
  end
end
