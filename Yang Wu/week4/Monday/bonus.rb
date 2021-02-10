# # Bonus

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
puts 'BMI Calculator'
print 'Height (in kg):'
height = gets.chomp.to_f
print 'Weight (in m):'
weight = gets.chomp.to_f

bmi = weight / (height * height)
puts "Your BMI is #{bmi}."
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour
puts 'Trip Calculator: Calculate Trip Time and Cost'
puts 'How long is the distance of this trip?'
distance = gets.chomp.to_f
puts 'What is the speed (in miles per hour)?'
speed = gets.chomp.to_f
puts 'How many miles can the car go with one gallon?'
mpg = gets.chomp.to_f
puts 'How much does a gallon cost?'
price = gets.chomp.to_f

time = distance / speed
cost = distance / mpg *price

puts "This trip would take #{time} hours and would cost #{cost} dollars."
