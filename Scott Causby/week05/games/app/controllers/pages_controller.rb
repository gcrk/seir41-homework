class PagesController < ApplicationController
    def home
        render :home
    end
    def magic
        render :magic
    end
    
    def secret
        render :secret
    end
    
    def rps
        render :rps
    end

    def result
        render :result
    end

end