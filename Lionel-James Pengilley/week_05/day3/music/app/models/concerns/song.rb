class Song < ActiveRecord::Base
  belongs_to :artist, :optional => true
end
