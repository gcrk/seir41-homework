class EightballController < ApplicationController

    def index
        render :index
    end

    def predict
        responses = ["The world seems so.", "What does your heart tell you?", "It is certain.", "As I see it, yes.", "Ask again later.", "Concentrate and ask again.", "Outlook good.", "Signs point to yes."]
        random = rand(0...responses.length)
        @result = responses[random]
    
        render :predict
    end

end