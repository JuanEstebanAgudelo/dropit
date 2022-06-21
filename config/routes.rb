Rails.application.routes.draw do

  devise_for :users, :controllers => {:omniauth_callbacks => "user/omniauth_callbacks"}
  root to: "dashboard#index"
end
