class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.text :name
      t.text :variety
      t.text :description
      t.text :image
      t.text :alcohol_content
      t.integer :brewery_id
    end
  end
end
