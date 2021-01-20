class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :name
      t.text :album
      t.float :length
      t.text :genre
      t.text :video
      t.integer :artist_id  
    end
  end
end
