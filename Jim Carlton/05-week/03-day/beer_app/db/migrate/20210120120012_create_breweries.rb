class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.text :name
      t.text :location
      t.text :description
      t.text :map
      t.text :image
      t.text :specialty
    end
  end
end
