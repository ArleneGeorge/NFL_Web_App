class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :stadium_name
      t.string :stadium_location
      t.float :latitude
      t.float :longitude
      t.integer :capacity
      t.string :conference

      t.timestamps
    end
  end
end
