class SecretNumberController < ApplicationController
  def form
    render :form
  end

  def generate
    render :generate
  end

  def result
    @secret_number = rand(11)

    @player_guess = params[:player_guess].to_f

    @message

    if @player_guess != @secret_number
      @message = 'Thats not it. Please guess again.'
    else
      @message = 'That is correct'
    end
  end
end
