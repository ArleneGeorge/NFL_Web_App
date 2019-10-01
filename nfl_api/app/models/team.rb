class Team < ApplicationRecord
  has_many :budgets
  has_many :players
     
end
