class PagesController < ApplicationController
  def home
  end

  def index
    @dishes = Dish.all
  end

  def new
  end

  def create
    @dish = Dish.create :name => params[:name], :image => params[:image], :country => params[:country], :sauce => params[:sauce], :rating => params[:rating], :calories => params[:calories]
    redirect_to dish_path(@dish.id)
  end

  def show
    @dish = Dish.find params[:id]
  end

  def edit
    @dish = Dish.find params[:id]
  end

  def update
    @dish = Dish.find params[:id]
    @dish.name = params[:name]
    @dish.image = params[:image]
    @dish.country = params[:country]
    @dish.sauce = params[:sauce]
    @dish.rating = params[:rating]
    @dish.calories = params[:calories]
    @dish.save
    redirect_to dish_path(@dish.id)
  end

  def destroy
    dish = Dish.find params[:id]
    dish.destroy
    redirect_to dishes_path
  end
end
