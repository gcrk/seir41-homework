class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
      t.text :year
      t.text :kind
      t.text :series
      t.text :image
    end
  end
end
