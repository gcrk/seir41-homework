class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.text :name
      t.text :race
      t.text :voice
      t.text :signaturemove
      t.text :image
    end
  end
end
