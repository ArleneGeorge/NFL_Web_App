# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_30_220222) do

  create_table "budgets", force: :cascade do |t|
    t.float "number_of_players"
    t.float "quarterback"
    t.float "running_back"
    t.float "wide_reciever"
    t.float "tight_end"
    t.float "offensive_lineman"
    t.float "defensive_lineman"
    t.float "linebacker"
    t.float "defensive_back"
    t.float "kicker"
    t.float "total_budget_spent"
    t.integer "team_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_budgets_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "stadium_name"
    t.string "stadium_location"
    t.float "latitude"
    t.float "longitude"
    t.integer "capacity"
    t.string "conference"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "budgets", "teams"
end
