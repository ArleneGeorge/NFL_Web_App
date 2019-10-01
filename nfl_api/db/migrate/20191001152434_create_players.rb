class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :number
      t.integer :age
      t.text :birth_place
      t.text :high_school
      t.text :college
      t.string :position
      t.float :height
      t.float :weight
      t.string :experience
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
