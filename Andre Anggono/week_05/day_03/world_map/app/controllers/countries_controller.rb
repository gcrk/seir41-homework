class CountriesController < ApplicationController
  def index
    @countries = Country.all
  end

  def new
    @country = Country.new
  end

  def create
    country = Country.create country_params
    redirect_to country
  end

  def update
    country = Country.find(params[:id])
    country.update country_params
    redirect_to country
  end

  def edit
    @country = Country.find params[:id]
  end

  def show
    @country = Country.find(params[:id])
    @capital = @country.cities.where(name: @country.capital)
  end

  def destroy
    country = Country.find(params[:id])
    country.destroy
    redirect_to countries_path
  end

  private
  def country_params
    # Strong parameters: white list of sanitised input
    params.require(:country).permit(:name, :capital, :area, :population, :life_expectancy, :poi, :language, :currency, :flag, :map)
  end
end
