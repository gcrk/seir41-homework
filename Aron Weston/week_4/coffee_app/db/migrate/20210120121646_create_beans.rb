class CreateBeans < ActiveRecord::Migration[5.2]
  def change
    create_table :beans do |t|
      t.text :name
      t.text :image
      t.text :purchase_link
      t.float :price
      t.text :origin
      t.text :tasting_notes
      t.text :brew_guide
      t.text :roast_profile
      t.integer :aron_rating
      t.integer :roaster_id
    end
  end
end
