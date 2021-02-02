class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :name
      t.date :release_date
      t.text :duration
      t.integer :copies_sold
      t.text :image
    end
  end
end
