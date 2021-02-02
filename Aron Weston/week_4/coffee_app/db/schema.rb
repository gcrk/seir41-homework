# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_20_121702) do

  create_table "beans", force: :cascade do |t|
    t.text "name"
    t.text "image"
    t.text "purchase_link"
    t.float "price"
    t.text "origin"
    t.text "tasting_notes"
    t.text "brew_guide"
    t.text "roast_profile"
    t.integer "aron_rating"
    t.integer "roaster_id"
  end

  create_table "roasters", force: :cascade do |t|
    t.text "name"
    t.text "location"
    t.text "website"
    t.text "instagram"
    t.text "facebook"
  end

end
