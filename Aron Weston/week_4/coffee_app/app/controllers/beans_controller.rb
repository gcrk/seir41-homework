class BeansController < ApplicationController
  def index
    @beans = Bean.all
  end

  def create
    bean = Bean.create bean_params
    redirect_to bean
  end

  def new
    @bean = Bean.new 
  end

  def edit
    @bean = Bean.find params[:id]
  end

  def show
    @bean = Bean.find params[:id]
  end

  def update
    bean = Bean.find params[:id]
    bean.update bean_params
    redirect_to bean
  end

  def destroy
    bean = Bean.find params[:id]
    bean.destroy
    redirect_to bean
  end

  private 
  def bean_params
    params.require(:bean).permit(:name, :image, :purchase_link, :price, :origin, :tasting_notes, :brew_guide, :roast_profile, :aron_rating, :roaster_id)
  end
end
