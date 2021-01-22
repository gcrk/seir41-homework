class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.text :name
      t.integer :area
      t.date :founded
      t.integer :population
      t.text :map
      t.text :icons
      t.integer :country_id
    end
  end
end