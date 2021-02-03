class SecretNumberController < ApplicationController
  def form
    render :form
  end

  def result
    @your_number = params[:number]

    @secret_number = rand (5)
   render :result
  end
end
