class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :artist_name
      t.text :real_name
      t.date :dob
      t.text :nationality
      t.text :image
    end
  end
end
