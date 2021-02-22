class RockPaperScissorsController < ApplicationController
  def form
    render :form
  end

  def result
    @player_choice = params[:player_choice]
    choices = ['rock', 'paper', 'scissors']
    @comp_index = rand(3)
    @player_index = choices.index("#{@player_choice}")
    @choice = choices[@comp_index]
    @message = ''

    if @player_index == @comp_index
      @message = 'Its a tie, lets play again.'
    elsif @player_index < @comp_index || @player_index == 2 && @comp_index == 0
      @message = 'You lost, want to play again?'
    else
      @message = 'Well done, you win!'
    end
  end
end
