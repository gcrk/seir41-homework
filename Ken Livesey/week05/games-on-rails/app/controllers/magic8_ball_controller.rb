class Magic8BallController < ApplicationController
  def form
    def result
      @question = params[:question]
      answers = ["That is not looking good at this stage", "Just do it"]
      @random_answer = answers[rand(2)]
      render :result
    end
  end
end
