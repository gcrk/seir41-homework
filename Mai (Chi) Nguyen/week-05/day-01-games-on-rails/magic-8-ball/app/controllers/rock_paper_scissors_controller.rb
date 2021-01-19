class RockPaperScissorsController < ApplicationController
  def form
    render :form
  end

  def result
    @user_choice = params[:user_choice]
    choices = ['rock', 'paper', 'scissors']
    @comp_index = rand(3)
    @user_index = choices.index("#{@user_choice}")
    @choice = choices[@comp_index]
    @message

    if @user_index == @comp_index
      @message = "It's a tie!"
    elsif @user_index < @comp_index || @user_index == 2 && @comp_index == 0
      @message = "You lost!"
    else
      @message = "You won!"
    end
  end
end
