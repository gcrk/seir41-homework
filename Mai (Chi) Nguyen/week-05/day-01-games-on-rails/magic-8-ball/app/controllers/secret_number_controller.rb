class SecretNumberController < ApplicationController
  def form
    render :form
  end

  def generate
    render :generate
  end

  def result
    @secret_number = rand(11)
    @number_input = params[:number_input].to_f
    @message

    if @number_input != @secret_number
      @message = "Not the number. Try again!"
    else
      @message = "Yay!! You guessed it right!"
    end
  end
end
