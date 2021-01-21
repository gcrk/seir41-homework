class MagicController < ApplicationController
  def form
    def result
      @question = params[:question]
      answers = ["Well, I don't think so", "Absolutely"]
      @random_answer = answers[rand(2)]
      render :result
    end
  end
end
