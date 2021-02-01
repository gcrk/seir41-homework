class Song < ActiveRecord::Base
  belongs_to :artist, :optional => true
  belongs_to :genre, :optional => true
end
