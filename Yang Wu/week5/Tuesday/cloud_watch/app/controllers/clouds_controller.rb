class CloudsController < ApplicationController

  def index
    @clouds = Cloud.all
  end

  def show
    @cloud = Cloud.find params[:id]
  end

  def create
    Cloud.create :name => params[:name], :height => params[:height], :color => params[:color], :shape => params[:shape], :weather => params[:weather]
    redirect_to clouds_path
  end

  def edit
    @cloud = Cloud.find params[:id]
  end

  def update
    cloud = Cloud.find params[:id]
    cloud.name = params[:name]
    cloud.height = params[:height]
    cloud.color = params[:color]
    cloud.shape = params[:shape]
    cloud.weather = params[:weather]
    cloud.save
    redirect_to cloud_path(cloud.id)
  end

  def destroy
    cloud = Cloud.find params[:id]
    cloud.destroy
    redirect_to clouds_path
  end
end
