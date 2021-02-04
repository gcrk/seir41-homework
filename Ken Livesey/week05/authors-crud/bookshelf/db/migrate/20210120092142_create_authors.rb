class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.integer :age
      t.text :genre
      t.text :image      
    end
  end
end
