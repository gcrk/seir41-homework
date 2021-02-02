class RockController < ApplicationController

  def rock_paper_scissors
    render :rock_paper_scissors
  end

  def rock_paper_scissors_play
    @comp = ["rock", "paper", "scissors"]
    @rand_number = 0 + rand(3)
    @comp_choice = @comp[@rand_number]
    @rock_result = "No decision"
    if params[:throw] == @comp_choice
      @rock_result = "You win"
    else
      @rock_result = "You lose"
    end
    render :throw
  end

end
