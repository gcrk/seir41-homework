class PagesController < ApplicationController
  def magic8ball
    @possible_answers = ["It is certain", "It is decidedly so", "Without a doubt",
                    "Yes definitely", "You may rely on it", "As I see it, yes",
                    "Most likely", "Outlook good", "Yes", "Signs point to yes",
                    "Reply hazy try again", "Ask again later", "Better not tell you now",
                    "Cannot predict now", "Concentrate and ask again", "Don't count on it",
                    "My reply is no", "My sources say no", "Outlook not so good",
                    "Very doubtful"
                   ]
    @quetion = params[:quetion]
    if @quetion.nil?
       return
    else
    @answer = @possible_answers[rand(@possible_answers.length)]
    end
     render:magic8ball
     # raise "hell"
  end
  def secret_number
    render:secret_number
  end
  def stone_paper_scissor
    render:stone_paper_scissor
  end
end
