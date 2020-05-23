Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :show]
    resources :videos do 
      resources :comments, only: [:index]
    end
    resources :likes, only: [:index, :create, :destroy]
    resources :comments, only: [:create, :update, :destroy]

  end
  
  root to: "root#root"
end

