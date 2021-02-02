class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :period
      t.text :image
    end
  end
end
