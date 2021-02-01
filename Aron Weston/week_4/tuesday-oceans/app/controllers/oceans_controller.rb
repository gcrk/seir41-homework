class OceansController < ApplicationController

    def index
        @oceans = Ocean.all
    end
    
    def search
        # Set the params to lowercase for search results, then @results in searching for all entries in the ocean table
        #1st argument, the column name set to lowercase, then the LIKE 
        #2 arg: we've given SQL and command, now we need to tell it what to look for, so find everything that is like the parameters :search, then define the parameters search as whatever the user entered. 

        @parameter = params[:search].downcase
        @results = Ocean.all.where("lower(name) LIKE :search", search: @parameter)

        #SQL equiv
        # SELECT * FROM oceans WHERE lower(name) LIKE “SEARCH”
    end

    def show 
        @ocean = Ocean.find params[:id]
    end

    def new
    end

    def create 
        ocean = Ocean.create(:name => params[:name], :image => params[:image], :depth => params[:depth], :settlements => params[:settlements], :surface_area => params[:surface_area], :water_volume => params[:water_volume], :largest_seas => params[:largest_seas])
        redirect_to ocean_path(ocean.id)
    end

    def edit
        @ocean = Ocean.find params[:id]
    end

    def update 
        ocean = Ocean.find params[:id]
        ocean.update(:name => params[:name], :image => params[:image], :depth => params[:depth], :settlements => params[:settlements], :surface_area => params[:surface_area], :water_volume => params[:water_volume], :largest_seas => params[:largest_seas])
        redirect_to ocean_path(ocean)
    end

    def destroy 
        ocean = Ocean.find params[:id]
        ocean.destroy
        redirect_to oceans_path
    end

   

   

end 