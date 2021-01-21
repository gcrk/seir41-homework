class CreateLandmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :landmarks do |t|
      t.text "name"
      t.text "image"
      t.integer "country_id"
    end
  end
end
