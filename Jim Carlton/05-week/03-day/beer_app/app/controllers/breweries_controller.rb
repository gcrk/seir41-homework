class BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all
  end

  def new
    @brewery = Brewery.new #this creates the new template of what we're about to define for the new brewery record
  end

  def create
    brewery = Brewery.create brewery_params
    redirect_to brewery
  end

  def edit
    @brewery = Brewery.find params[:id]
  end

  def update
    brewery = Brewery.find params[:id] # find the brewery
    brewery.update brewery_params # update the brewery params
    redirect_to brewery # redirect back to that brewery
  end

  def show
    @brewery = Brewery.find params[:id]
  end

  def destroy
    brewery = Brewery.find params[:id] # find the brewery
    brewery.destroy # destroy the brewery
    redirect_to breweries_path # redirect to the breweries list
  end

  private
  def brewery_params # strong parameters - white list of sanitised input for security reasons
    params.require(:brewery).permit(:name, :location, :description, :map, :image, :specialty)
  end
end
