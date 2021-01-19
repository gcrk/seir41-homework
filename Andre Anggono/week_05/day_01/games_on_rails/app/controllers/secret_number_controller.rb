class SecretNumberController < ApplicationController
  def home
    render :home
  end

  def result
    @random_num = rand(1..10)
    @guess = params[:guess].to_i

    if @guess == @random_num
      @result = "Congratulations! You've guessed correctly!"
    else
      @result = "Sorry! You've guessed incorrectly!"
    end

    render :result
  end
end