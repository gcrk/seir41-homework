class CountriesController < ApplicationController

  def index
    @countries = Country.all
    @landmarks = Landmark.all
    @country = Country.new
  end

  def create
    country = Country.create country_params
    redirect_to countries_path
  end

  def edit
    @countries = Country.all
    @landmarks = Landmark.all
    @country = Country.find params[:id]
  end

  def update
    country = Country.find params[:id]
    country.update country_params
    redirect_to countries_path
  end

  def destroy
    country = Country.find params[:id]
    country.destroy
    redirect_to countries_path
  end

  private
  def country_params
    params.require(:country).permit(:name, :population, :area)
  end

end
