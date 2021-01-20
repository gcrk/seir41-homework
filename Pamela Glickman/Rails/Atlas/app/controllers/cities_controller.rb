class CitiesController < ApplicationController

  def home
    redirect_to "/index"
  end

  def index
    @cities = City.all
  end

  def create
    city = City.new
    city.name = params[:name]
    city.population = params[:population]
    city.image = params[:image]
    city.save
    redirect_to "/index"
  end

  def edit_form
    @cities = City.all
    @city = City.find params[:id]
  end

  def edit
    @city = City.find params[:id]
    @city.name = params[:name]
    @city.population = params[:population]
    @city.image = params[:image]
    @city.save
    redirect_to "/index"
  end

  def delete
    city = City.find params[:id]
    city.destroy
    redirect_to '/index'
  end
end
