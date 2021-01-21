class CreateRoasters < ActiveRecord::Migration[5.2]
  def change
    create_table :roasters do |t|
      t.text :name
      t.text :location
      t.text :website
      t.text :instagram
      t.text :facebook
    end
  end
end
