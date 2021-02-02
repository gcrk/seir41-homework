class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.text :name
      t.text :capital
      t.integer :area
      t.integer :population
      t.float :life_expectancy
      t.text :poi
      t.text :language
      t.text :currency
      t.text :flag
      t.text :map
    end
  end
end