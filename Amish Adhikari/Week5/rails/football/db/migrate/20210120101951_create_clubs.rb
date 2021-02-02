class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.text :title
      t.text :country
      t.text :city
      t.date :founded
      t.text :image
    end
  end
end
