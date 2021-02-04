
# Calculator:
def show_menu
  str = "Calculator"
  puts str.center(600)
  puts "-=" *100
  puts "[a] -addition"
  puts "[s] -subtraction"
  puts "[m] -multiplication"
  puts "[d] -division"
  puts "[sqrt] -square root"
  puts "[e^n] -exponent"
  puts "[q] -quit"
  print "Enter your choice:"
end
show_menu()
menu_choice = gets.chomp.downcase
until menu_choice =='q'
  case menu_choice
  when 'a'
    puts "You chosen Addition"
    puts "enter a number:"
    num1 = gets
    puts "enter another number:"
    num2 = gets
    puts (num1.to_f + num2.to_f)
  when 's'
    puts "you have chosen subtration"
    puts "enter a number:"
    num1 = gets
    puts "Enter another number"
    num2 = gets
    puts (num1.to_f - num2.to_f)
  when 'm'
    puts "you have chosen multiplication"
    puts "enter a number:"
    num1 = gets
    puts "Enter another number"
    num2 = gets
    puts (num1.to_f * num2.to_f)
  when 'd'
    puts "you have chosen division"
    puts "enter a number:"
    num1 = gets
    puts "Enter another number"
    num2 = gets
    puts (num1.to_f / num2.to_f)
  when 'e^n'
    puts "you have chosen exponention"
    puts "enter a number:"
    num1 = gets
    puts "Enter exponent number"
    num2 = gets
    puts (num1.to_f ** num2.to_f)
  when 'sqrt'
    puts "you have chosen square root"
    puts "enter a number:"
    num1 = gets.to_
    puts Math.sqrt(num1)
  else
    puts "Invalid Entry"
    end

    show_menu()
    menu_choice = gets.chomp.downcase
    end

  puts "Thanks for using the calculator"

# Mortgage Calculator:

print "enter loan amount: "
loan = gets.chomp.to_f
print "Enter length of time in months: "
time = gets.chomp.to_f
print "Enter interest rate: "
rate = gets.chomp.to_f/100

i = (1+rate/12)**(12/12)-1
annuity = (1-(1/(1+i))**time)/i

payment = loan/annuity

puts "\n$%.2f per month" % [payment]

# BMI Calculator;

print "Enter your body weight in kgs:"
mass = gets.chomp.to_f
print "Enter your height in meters:"
height = gets.chomp.to_f
bmi =  (mass/height**2)*100r
puts [bmi]
