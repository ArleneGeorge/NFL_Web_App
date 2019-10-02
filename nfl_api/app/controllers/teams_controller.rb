class TeamsController < ApplicationController
    def index
        @teams = Team.all 
        render json: @teams, include: [:players, :budgets]
    end

    def show 
        @team = Team.find(params[:id])
        render json: @team, include: [:players, :budgets]
    end
end
