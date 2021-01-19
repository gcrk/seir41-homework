class SecretnumberController < ApplicationController
  def form
    render :form
  end

  def result
  @number = params[:number]
  @secret_number = rand(11)
  end
end
