class M8bController < ApplicationController
  def home
    render :home
  end

  def result
    @question = params[:question]
    @answer = answer
    
    render :result
  end

  private
  def answer
    affirmative_answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes – definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.']
    non_committal_answers = ['Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.']
    negative_answers = ["Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']

    case rand(1..3)
    when 1 then answer = affirmative_answers[rand(0...affirmative_answers.count)]
    when 2 then answer = non_committal_answers[rand(0...non_committal_answers.count)]
    when 3 then answer = negative_answers[rand(0...negative_answers.count)]
    end

    answer
  end
end