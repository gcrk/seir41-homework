class RpsController < ApplicationController
  def home
    @move_options = %w[Rock Paper Scissors]
    render :home
  end

  def result
    @move_options = %w[Rock Paper Scissors]
    @user_move = params[:move]
    @computer_move = @move_options[rand(3)]
    message = {
      :win => "Congratulations! You've won!",
      :lose => "Bad Luck! You've lost!",
      :draw => "It's a Draw!"
    }

    case @computer_move
    when "Rock"
      if @user_move == "Paper"
        @result = message[:win]
      elsif @user_move == "Scissors"
        @result = message[:lose]
      else
        @result = message[:draw]
      end
    when "Paper"
      if @user_move == "Scissors"
        @result = message[:win]
      elsif @user_move == "Rock"
        @result = message[:lose]
      else
        @result = message[:draw]
      end
    when "Scissors"
      if @user_move == "Rock"
        @result = message[:win]
      elsif @user_move == "Paper"
        @result = message[:lose]
      else
        @result = message[:draw]
      end
    end
    
    render :result
  end

end