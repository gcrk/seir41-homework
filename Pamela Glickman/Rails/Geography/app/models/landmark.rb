class Landmark < ActiveRecord::Base
 belongs_to :country, :optional => true
end
