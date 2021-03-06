class PlayersController < ApplicationController

    def index
        @players = Player.all 
        render json: @players 
    end

    def show 
        @player = Player.find(params[:id])
        render json: @player, include: :team 
    end
end
