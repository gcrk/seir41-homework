class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :years_active
      t.text :nationality
      t.integer :records_sold
      t.text :image
    end
  end
end
