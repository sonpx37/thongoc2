Homy::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  root "home#index"

  resources :home, path:"trang-chu"

  resources :conversations do
    resources :messages
  end

  resources :abouts, path:"thong-tin" do
    collection do
      get :tuyen_sinh
      get :gioi_thieu
    end
  end
  resources :news, path:"bai-viet" do
    collection do
      get :phu_huynh
      get :hoc_sinh
      get :tin_tuc
    end
  end

  # admin
  namespace :admin do
    resources :homes, only: [:index]
    resources :news
  end
end
