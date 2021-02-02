def show_menu
  puts "Calculator".center(120)# TODO: You can use .center to make it look nice.
  puts "-=" * 60 # El cheapo horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Substraction"
  puts "[m] - Multiply"
  puts "[d] - Division"
  puts "[q] - Quit"
  puts "[e] - Exponent"
  puts "[sqrt] - Squareroot"
  print "Enter your choice: "
end

def Addition(a,b)
  return a += b
end
def Substraction(a,b)
  return a -= b
end
def Multiply(a,b)
  return a *= b
end
def Division(a,b)
  return a /= b
end
def Exponent(a,b)
  return a**= b
end
def Squareroot(a)
  return Integer.sqrt(a)
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts 'Addition it is!'    # TODO: Actually do the addition

    print "Please enter your 1st number: "
    number1 = gets.to_i

    print "Please enter your 2nd number: "
    number2 = gets.to_i

    puts "The  number is: #{Addition(number1, number2)}"

  when 's'
    puts 'Substraction it is!'    # TODO: Actually do the addition

    print "Please enter your 1st number: "
    number1 = gets.to_i

    print "Please enter your 2nd number: "
    number2 = gets.to_i

    puts "The  number is: #{Substraction(number1, number2)}"

  when 'm'
    puts ' Multiplication it is!'    # TODO: Actually do the addition

    print "Please enter your 1st number: "
    number1 = gets.to_i

    print "Please enter your 2nd number: "
    number2 = gets.to_i

    puts "The  number is: #{Multiply(number1, number2)}"

  when 'd'
    puts 'Division it is!'    # TODO: Actually do the addition

    print "Please enter your 1st number: "
    number1 = gets.to_i

    print "Please enter your 2nd number: "
    number2 = gets.to_i

    puts "The  number is: #{Division(number1, number2)}"

  when 'e'
    puts 'Exponent it is!'    # TODO: Actually do the addition

    print "Please enter your number: "
    number1 = gets.to_i

    print "Please enter exponent of a number: "
    number2 = gets.to_i

    puts "The  number is: #{Exponent(number1, number2)}"

  when 'sqrt'
    puts 'Squareroot it is!'    # TODO: Actually do the addition

    print "Please enter your number: "
    number1 = gets.to_i

    puts "The  number is: #{Squareroot(number1)}"

  else
    puts 'Invalid selection. Please choose the correct option.'
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using my first calculator!"
