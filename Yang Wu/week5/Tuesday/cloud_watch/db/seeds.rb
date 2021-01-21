# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cloud.destroy_all

Cloud.create :name => 'Altocumulus', :height => 'Mid', :color => 'White', :shape => 'Heap-like and often grouped together', :weather => 'Varies';
Cloud.create :name => 'Altostratus', :height => 'Mid', :color => 'White or light grey', :shape => 'Thick and flat', :weather => 'Warm weather approaching, and maybe light precipitation';
Cloud.create :name => 'Cirrocumulus', :height => 'High', :color => 'White or grey', :shape => 'Rows of small patchy clouds', :weather => 'Typically sunny and cold';

puts "#{Cloud.count} kinds of clouds are available."
