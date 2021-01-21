# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and
def waiting
  puts "-  -  -  -  -  -  -  -  " * 5

end

puts "Welcome to Body Mass Index Calculator"
print "What gender are you plz? : "
gender = gets.chomp.downcase
puts gender
print "How tall are you? : "
height = gets.to_i
print "what's your weight? : "
weight = gets.to_i
puts "Calculating"
puts waiting
  case gender
  when 'm'
    bmi = weight / (height ** 2)
    puts bmi
  end
