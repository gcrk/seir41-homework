class SecretController < ApplicationController

  def secret
    render :secret
  end

  def win_or_lose
    @secret_num = 1 + rand(10)
    @result = "No answer"
    if @secret_num == params[:number].to_f
      @result = "You win!"
    else
      @result = "You lose!"
    end
    render :win_or_lose
  end


end
