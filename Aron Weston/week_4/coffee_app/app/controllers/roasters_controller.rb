class RoastersController < ApplicationController
 def index
    @roasters = Roaster.all
  end

  def create
    roaster = Roaster.create roaster_params
    redirect_to roaster
  end

  def new
    @roaster = Roaster.new 
  end

  def edit
    @roaster = Roaster.find params[:id]
  end

  def show
    @roaster = Roaster.find params[:id]
  end

  private 
  def roaster_params
    params.require(:roaster).permit(:name, :location, :website, :instagram, :facebook)
  end
end
