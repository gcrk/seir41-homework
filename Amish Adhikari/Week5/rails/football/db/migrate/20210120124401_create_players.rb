class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.integer :height
      t.text :position
      t.text :image
      t.integer :club_id
    end
  end
end
