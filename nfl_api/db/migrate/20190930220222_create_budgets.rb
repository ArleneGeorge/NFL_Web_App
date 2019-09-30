class CreateBudgets < ActiveRecord::Migration[6.0]
  def change
    create_table :budgets do |t|
      t.float :number_of_players
      t.float :quarterback
      t.float :running_back
      t.float :wide_reciever
      t.float :tight_end
      t.float :offensive_lineman
      t.float :defensive_lineman
      t.float :linebacker
      t.float :defensive_back
      t.float :kicker
      t.float :total_budget_spent
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
