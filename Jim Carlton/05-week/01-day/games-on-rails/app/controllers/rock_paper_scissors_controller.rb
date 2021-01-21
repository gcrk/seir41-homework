class RockPaperScissorsController < ApplicationController

def game

  @answer = params[:throw]

  render :game

end

def result

  @answer = params[:throw]

  @choices = ["Rock", "Paper", "Scissors"]

  @comp_choice = @choices[rand * @choices.size]

  render :result

end

end
