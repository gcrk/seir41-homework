class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def new
    @song = Song.new
  end

  def create
    song = Song.create song_params
    redirect_to song
  end

  def edit
    @song = Song.find params[:id]
  end

  def update
    song = Song.find params[:id]
    song.update work_params
    redirect_to song
  end

  def show
    @song = Song.find params[:id]
  end

  def destroy
    song = Song.find params[:id]
    song.destroy
    redirect_to songs_path
  end

  private
  def song_params
    params.require(:song).permit(:name, :album, :length, :genre, :video, :artist_id)
  end
end
