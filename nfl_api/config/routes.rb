Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :teams, only: [:index, :show]
resources :players, only: [:index, :show]
resources :budgets, only: [:index, :show]
end
