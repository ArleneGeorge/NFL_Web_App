class BudgetsController < ApplicationController

    def index
        @budgets = Budget.all 
        render json: @budgets, include: :team
    end

    def show 
        @budget = Budget.find(params[:id])
        render json: @budget, include: :team 
    end

end
